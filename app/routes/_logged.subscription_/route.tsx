import { Typography, Card, Button, Table, Tag, Modal, message } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SubscriptionPage() {
  const { user } = useUserContext()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string>('')

  // Fetch current subscription
  const { data: subscription, refetch } = Api.subscription.findFirst.useQuery({
    where: { userId: user?.id },
    orderBy: { createdAt: 'desc' },
  })

  // Mutation for creating/updating subscription
  const { mutateAsync: updateSubscription } =
    Api.subscription.create.useMutation()

  // Subscription plans
  const plans = [
    {
      type: 'BASIC',
      price: '$9.99/month',
      features: [
        'Access to basic meditation tracks',
        'Daily reminders',
        'Progress tracking',
      ],
      icon: 'las la-leaf',
    },
    {
      type: 'PREMIUM',
      price: '$19.99/month',
      features: [
        'All basic features',
        'Offline access',
        'Exclusive content',
        'Priority support',
      ],
      icon: 'las la-crown',
    },
    {
      type: 'LIFETIME',
      price: '$199.99',
      features: [
        'Lifetime access',
        'All premium features',
        'Early access to new content',
      ],
      icon: 'las la-infinity',
    },
  ]

  const handleSubscribe = async (planType: string) => {
    try {
      // In a real implementation, this would integrate with Stripe
      await updateSubscription({
        data: {
          planType,
          status: 'ACTIVE',
          startDate: new Date().toISOString(),
          userId: user?.id || '',
          stripeCustomerId: 'mock_stripe_id',
        },
      })
      await refetch()
      message.success('Subscription updated successfully!')
      setIsModalVisible(false)
    } catch (error) {
      message.error('Failed to update subscription')
    }
  }

  const columns = [
    {
      title: 'Plan Type',
      dataIndex: 'planType',
      key: 'planType',
      render: (text: string) => (
        <Tag color="blue">
          <i className="las la-tag" style={{ marginRight: 8 }} />
          {text}
        </Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => (
        <Tag color={text === 'ACTIVE' ? 'green' : 'red'}>
          <i
            className={`las ${text === 'ACTIVE' ? 'la-check' : 'la-times'}`}
            style={{ marginRight: 8 }}
          />
          {text}
        </Tag>
      ),
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
      render: (text: string) => dayjs(text).format('MMMM D, YYYY'),
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
      render: (text: string) =>
        text ? dayjs(text).format('MMMM D, YYYY') : 'Active',
    },
  ]

  return (
    <PageLayout layout="narrow">
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Title level={2}>
          <i className="las la-gem" style={{ marginRight: 8 }} />
          Subscription Plans
        </Title>
        <Text type="secondary">
          Choose the perfect plan for your meditation journey
        </Text>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
          marginBottom: 32,
        }}
      >
        {plans.map(plan => (
          <Card key={plan.type} style={{ textAlign: 'center' }}>
            <i
              className={plan.icon}
              style={{ fontSize: 32, color: '#1890ff', marginBottom: 16 }}
            />
            <Title level={3}>{plan.type}</Title>
            <Title level={4} style={{ color: '#1890ff' }}>
              {plan.price}
            </Title>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {plan.features.map((feature, index) => (
                <li key={index} style={{ margin: '8px 0' }}>
                  <i
                    className="las la-check"
                    style={{ color: '#52c41a', marginRight: 8 }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              type="primary"
              onClick={() => {
                setSelectedPlan(plan.type)
                setIsModalVisible(true)
              }}
            >
              Subscribe Now
            </Button>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: 32 }}>
        <Title level={3}>
          <i className="las la-history" style={{ marginRight: 8 }} />
          Subscription History
        </Title>
        <Table
          dataSource={subscription ? [subscription] : []}
          columns={columns}
          pagination={false}
        />
      </div>

      <Modal
        title="Confirm Subscription"
        open={isModalVisible}
        onOk={() => handleSubscribe(selectedPlan)}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Are you sure you want to subscribe to the {selectedPlan} plan?</p>
      </Modal>
    </PageLayout>
  )
}
