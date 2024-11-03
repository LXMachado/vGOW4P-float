import {
  Typography,
  Form,
  TimePicker,
  Switch,
  Input,
  Button,
  Card,
  Row,
  Col,
  Select,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SettingsPage() {
  const { user } = useUserContext()
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  // Fetch user reminders
  const { data: reminders, refetch: refetchReminders } =
    Api.reminder.findMany.useQuery({
      where: { userId: user?.id },
    })

  // Fetch user's tracks with offline enabled
  const { data: offlineTracks } = Api.track.findMany.useQuery({
    where: { offlineEnabled: true },
  })

  // Mutations
  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const { mutateAsync: createReminder } = Api.reminder.create.useMutation()
  const { mutateAsync: updateReminder } = Api.reminder.update.useMutation()
  const { mutateAsync: updateTrack } = Api.track.update.useMutation()

  const handleSettingsSubmit = async (values: any) => {
    try {
      setLoading(true)
      await updateUser({
        where: { id: user?.id },
        data: {
          name: values.name,
          email: values.email,
        },
      })
      message.success('Settings updated successfully')
    } catch (error) {
      message.error('Failed to update settings')
    } finally {
      setLoading(false)
    }
  }

  const handleReminderToggle = async (reminderId: string, enabled: boolean) => {
    try {
      await updateReminder({
        where: { id: reminderId },
        data: { isEnabled: enabled },
      })
      refetchReminders()
      message.success('Reminder updated successfully')
    } catch (error) {
      message.error('Failed to update reminder')
    }
  }

  const handleOfflineToggle = async (trackId: string, enabled: boolean) => {
    try {
      await updateTrack({
        where: { id: trackId },
        data: { offlineEnabled: enabled },
      })
      message.success('Offline settings updated')
    } catch (error) {
      message.error('Failed to update offline settings')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-cog"></i> Settings
        </Title>
        <Text>
          Customize your meditation experience and manage your account settings
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-user"></i> Account Settings
                </>
              }
            >
              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  name: user?.name,
                  email: user?.email,
                }}
                onFinish={handleSettingsSubmit}
              >
                <Form.Item label="Name" name="name">
                  <Input placeholder="Your name" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input placeholder="Your email" />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Save Changes
                </Button>
              </Form>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-bell"></i> Mindfulness Reminders
                </>
              }
            >
              {reminders?.map(reminder => (
                <div key={reminder.id} style={{ marginBottom: '16px' }}>
                  <Row align="middle" justify="space-between">
                    <Col>
                      <Text>{dayjs(reminder.time).format('HH:mm')}</Text>
                      <Text type="secondary"> - {reminder.frequency}</Text>
                    </Col>
                    <Col>
                      <Switch
                        checked={reminder.isEnabled}
                        onChange={checked =>
                          handleReminderToggle(reminder.id, checked)
                        }
                      />
                    </Col>
                  </Row>
                </div>
              ))}
            </Card>
          </Col>

          <Col xs={24}>
            <Card
              title={
                <>
                  <i className="las la-download"></i> Offline Content
                </>
              }
            >
              {offlineTracks?.map(track => (
                <div key={track.id} style={{ marginBottom: '16px' }}>
                  <Row align="middle" justify="space-between">
                    <Col>
                      <Text>{track.title}</Text>
                      <Text type="secondary">
                        {' '}
                        ({track.duration.toString()} min)
                      </Text>
                    </Col>
                    <Col>
                      <Switch
                        checked={track.offlineEnabled}
                        onChange={checked =>
                          handleOfflineToggle(track.id, checked)
                        }
                      />
                    </Col>
                  </Row>
                </div>
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
