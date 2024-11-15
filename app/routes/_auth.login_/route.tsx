import { Api } from '@/core/trpc'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Button, Flex, Form, Input, Typography } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useEffect, useState } from 'react'
import { AuthenticationClient } from '~/core/authentication/client'

export default function LoginPage() {
  const router = useNavigate()
  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()
  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  const { mutateAsync: login } = Api.authentication.login.useMutation({
    onSuccess: data => {
      if (data.redirect) {
        window.location.href = data.redirect
      }
    },
  })

  const errorKey = searchParams.get('error')

  const errorMessages = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  }[errorKey ?? 'default']

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      form.setFieldValue('email', 'test@test.com')
      form.setFieldValue('password', 'password')
    }
  }, [])

  const handleSubmit = async (values: any) => {
    setLoading(true)

    try {
      await login({ email: values.email, password: values.password })
    } catch (error) {
      console.error(`Could not login: ${error.message}`, { variant: 'error' })
      setErrorMessage(error.message)
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
        <AppHeader description="Welcome back!" />
        
        <Title level={2} className="text-center mb-6">Sign in to your account</Title>
        
        {errorKey && <Text type="danger">{errorMessages[errorKey ?? 'default']}</Text>}
        {errorMessage && <Text type="danger">{errorMessage}</Text>}

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
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              loading={isLoading}
              size="large"
              className="mt-4"
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>

        <AuthenticationClient.SocialButtons />

        <Flex justify="center" gap="small">
          <Text type="secondary">No account?</Text>
          <Button 
            type="link" 
            onClick={() => router('/register')}
            className="p-0"
          >
            Sign up
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
