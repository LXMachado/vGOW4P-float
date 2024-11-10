import { Api } from '@/core/trpc'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Alert, Button, Flex, Form, Input, Typography, App as AntdApp } from 'antd'
import { useEffect, useState } from 'react'
import { AuthenticationClient } from '~/core/authentication/client'
import { Configuration } from '@/core/configuration'

export default function LoginPage() {
  return (
    <AntdApp>
      <LoginPageContent />
    </AntdApp>
  )
}

function LoginPageContent() {
  const router = useNavigate()
  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()
  const [isLoading, setLoading] = useState(false)

  const { mutateAsync: login } = Api.authentication.login.useMutation({
    onSuccess: data => {
      if (data.redirect) {
        window.location.href = data.redirect
      }
    },
  })

  const [errorMessage, setErrorMessage] = useState<string>()

  useEffect(() => {
    if (Configuration.isDevelopment()) {
      form.setFieldsValue({
        email: 'test@test.com',
        password: 'password123'
      })
    }
  }, [form])


  const handleSubmit = async (values: any) => {
    setLoading(true)
    
    // Mask email for logging
    const maskedEmail = values.email.replace(/(?<=.{3}).(?=.*@)/g, '*')
    console.log(`Login attempt for email: ${maskedEmail}`)

    try {
      const response = await login({ email: values.email, password: values.password })
    } catch (error) {
      console.error('Login error:', {
        status: error.status,
        type: error.name,
        message: error.message,
        response: error.response?.data
      });
      
      if (Configuration.isDevelopment()) {
        setErrorMessage(`Error: ${error.message}\n\nStack: ${error.stack}`);
      } else {
        if (error.status === 404) {
          setErrorMessage('Account not found. Please check your email or register.');
        } else if (error.status === 500) {
          setErrorMessage('Server error. Please try again later.');
        } else if (error.message.includes('credentials')) {
          setErrorMessage('Invalid credentials. Please check your email and password.');
        } else if (error.message.includes('network') || error.message.includes('connection')) {
          setErrorMessage('Network error. Please check your internet connection.');
        } else {
          setErrorMessage('An unexpected error occurred. Please try again.');
        }
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Flex align="center" justify="center" vertical flex={1}>
      <Flex
        vertical
        style={{
          width: '340px',
          paddingBottom: '100px',
          paddingTop: '100px',
        }}
        gap="middle"
      >
        <AppHeader description="Welcome!" />

        {Configuration.isDevelopment() && (
          <Alert
            message="Development Mode"
            description={
              <div>
                Test credentials:<br/>
                Email: test@test.com<br/>
                Password: password123
              </div>
            }
            type="warning"
            showIcon
          />
        )}

        {errorMessage && (
          <Typography.Text type="danger" style={{whiteSpace: 'pre-line'}}>{errorMessage}</Typography.Text>
        )}
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email is required' }]}
          >
            <Input type="email" placeholder="Your email" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
          >
            <Input.Password
              type="password"
              placeholder="Your password"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Flex justify="end">
              <Button
                type="link"
                onClick={() => router('/reset-password')}
                style={{ padding: 0, margin: 0 }}
              >
                Forgot password?
              </Button>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <AuthenticationClient.SocialButtons />

        <Button
          ghost
          style={{ border: 'none' }}
          onClick={() => router('/register')}
        >
          <Flex gap={'small'} justify="center">
            <Typography.Text type="secondary">No account?</Typography.Text>{' '}
            <Typography.Text>Sign up</Typography.Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}
