import { Utility } from '@/core/helpers/utility'
import { Api } from '@/core/trpc'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { User } from '@prisma/client'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Button, Flex, Form, Input, Typography } from 'antd'
const { Title, Text, Paragraph } = Typography
import { useEffect, useState } from 'react'

export default function RegisterPage() {
  const router = useNavigate()
  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()

  const [isLoading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>()

  const { mutateAsync: register } = Api.authentication.register.useMutation()

  const { mutateAsync: login } = Api.authentication.login.useMutation({
    onSuccess: data => {
      if (data.redirect) {
        window.location.href = data.redirect
      }
    },
  })

  useEffect(() => {
    const email = searchParams.get('email')?.trim()

    if (Utility.isDefined(email)) {
      form.setFieldsValue({ email })
    }
  }, [searchParams])

  const handleSubmit = async (values: Partial<User>) => {
    setLoading(true)

    try {
      const tokenInvitation = searchParams.get('tokenInvitation') ?? undefined

      await register({ 
        email: values.email,
        name: values.name,
        password: values.password,
        tokenInvitation 
      })

      await login({ 
        email: values.email, 
        password: values.password 
      })
    } catch (error) {
      console.error('Registration error:', error)
      setErrorMessage(error?.message || 'Registration failed. Please try again.')
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

        <Title level={2} className="text-center mb-6">Create Your Account</Title>
        <Paragraph className="text-center mb-8">
          Join thousands of users discovering inner peace with Float
        </Paragraph>

        {errorMessage && (
          <Text type="danger">{errorMessage}</Text>
        )}

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          autoComplete="off"
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
            name="name"
            rules={[{ required: true, message: 'Name is required' }]}
            label="Name"
          >
            <Input placeholder="Your name" />
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
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={isLoading} 
              block
              size="large"
              className="min-w-[200px]"
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <Flex gap="small" justify="center">
          <Text type="secondary">Have an account?</Text>
          <Button 
            type="link" 
            onClick={() => router('/login')}
            className="p-0"
          >
            Sign in
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}
