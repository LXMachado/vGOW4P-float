import { Button, Flex, Typography } from 'antd'
import { useNavigate } from '@remix-run/react'
import { PageLayout } from '@/designSystem'

const { Title, Text, Paragraph } = Typography

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <PageLayout>
      {/* Hero Section */}
      <Flex vertical align="center" className="py-20 px-4 text-center">
        <Title level={1} className="text-5xl mb-6">
          Find Peace in Your Daily Practice
        </Title>
        <Paragraph className="text-xl mb-8 max-w-2xl">
          Transform your life with guided meditations, mindfulness exercises, and peaceful soundscapes designed to help you reduce stress and find inner calm.
        </Paragraph>
        <img
          src="/app-screenshot.png"
          alt="Float App Screenshot"
          className="mb-8 max-w-2xl w-full rounded-lg shadow-xl"
        />
        <Button type="primary" size="large" onClick={() => navigate('/register')}>
          Start Your Journey
        </Button>
      </Flex>

      {/* Features Section */}
      <Flex className="py-16 px-4 bg-gray-50" vertical align="center">
        <Title level={2} className="text-center mb-12">
          Why Choose Float
        </Title>
        <Flex className="max-w-6xl w-full justify-around flex-wrap gap-8">
          {[
            {
              icon: '🎯',
              title: 'Personalized Practice',
              description: 'Tailored meditation sessions that adapt to your needs and schedule',
            },
            {
              icon: '📊',
              title: 'Track Progress',
              description: 'Monitor your mindfulness journey with detailed insights and statistics',
            },
            {
              icon: '🌟',
              title: 'Expert Guidance',
              description: 'Learn from experienced meditation teachers and mental health professionals',
            },
          ].map((feature) => (
            <Flex
              key={feature.title}
              vertical
              align="center"
              className="text-center p-6 bg-white rounded-lg shadow-md max-w-sm"
            >
              <Text className="text-4xl mb-4">{feature.icon}</Text>
              <Title level={3} className="mb-4">
                {feature.title}
              </Title>
              <Text className="text-gray-600">{feature.description}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Testimonials Section */}
      <Flex className="py-16 px-4" vertical align="center">
        <Title level={2} className="text-center mb-12">
          What Our Users Say
        </Title>
        <Flex className="max-w-6xl w-full justify-around flex-wrap gap-8">
          {[
            {
              quote: "Float has completely transformed my daily routine. I'm more focused and relaxed than ever.",
              author: "Sarah J.",
              role: "Marketing Director",
            },
            {
              quote: "The guided meditations are perfect for beginners like me. I've seen real improvements in my stress levels.",
              author: "Michael R.",
              role: "Software Engineer",
            },
            {
              quote: "As a busy professional, Float helps me stay grounded. The short sessions fit perfectly into my schedule.",
              author: "Emma L.",
              role: "Healthcare Provider",
            },
          ].map((testimonial) => (
            <Flex
              key={testimonial.author}
              vertical
              className="p-6 bg-gray-50 rounded-lg max-w-sm"
            >
              <Text className="text-lg italic mb-4">"{testimonial.quote}"</Text>
              <Title level={4} className="mb-1">
                {testimonial.author}
              </Title>
              <Text type="secondary">{testimonial.role}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Final CTA Section */}
      <Flex vertical align="center" className="py-20 px-4 bg-gray-900 text-white">
        <Title level={2} className="text-white text-center mb-6">
          Start Your Meditation Journey Today
        </Title>
        <Paragraph className="text-gray-300 text-center mb-8 max-w-2xl">
          Join thousands of users who have discovered the power of mindfulness with Float. Your path to inner peace begins here.
        </Paragraph>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate('/register')}
          className="min-w-[200px]"
        >
          Get Started Now
        </Button>
      </Flex>
    </PageLayout>
  )
}
