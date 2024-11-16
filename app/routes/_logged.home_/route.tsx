import {
  Typography,
  Card,
  Row,
  Col,
  Rate,
  Progress,
  Button,
  List,
  Switch,
  TimePicker,
} from 'antd'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  // Fetch featured tracks
  const { data: featuredTracks } = Api.track.findMany.useQuery({
    take: 4,
    include: { category: true, duration: true },
  })

  // Fetch user's meditation sessions
  const { data: recentSessions } = Api.meditationSession.findMany.useQuery({
    where: { userId: user?.id ?? '' },
    include: { track: true, createdAt: true, rating: true },
    orderBy: { createdAt: 'desc' },
    take: 5,
  })

  // Fetch user's reminders
  const { data: reminders } = Api.reminder.findMany.useQuery({
    where: { userId: user?.id },
    include: { time: true, frequency: true },
  })

  // Fetch user's favorites
  const { data: favorites } = Api.favorite.findMany.useQuery({
    where: { userId: user?.id },
    include: { track: true },
  })

  // Toggle reminder mutation
  const { mutateAsync: updateReminder } = Api.reminder.update.useMutation()

  const handleReminderToggle = async (
    reminderId: string,
    isEnabled: boolean,
  ) => {
    await updateReminder({
      where: { id: reminderId },
      data: { isEnabled },
    })
  }

  // Calculate meditation streak
  const streakDays =
    recentSessions?.filter(session =>
      dayjs(session.createdAt).isAfter(dayjs().subtract(7, 'day')),
    ).length || 0

  return (
    <PageLayout layout="narrow">
      <Title level={1}>Welcome to Your Meditation Space</Title>
      <Paragraph>Find peace and mindfulness in your daily practice</Paragraph>

      <Row gutter={[16, 16]}>
        {/* Meditation Stats */}
        <Col xs={24} md={8}>
          <Card>
            <Title level={4}>
              <i className="las la-chart-line"></i> Your Progress
            </Title>
            <Progress
              type="circle"
              percent={(streakDays / 7) * 100}
              format={() => `${streakDays}/7`}
            />
            <Text>Current Streak</Text>
          </Card>
        </Col>

        {/* Featured Tracks */}
        <Col xs={24} md={16}>
          <Card>
            <Title level={4}>
              <i className="las la-headphones"></i> Featured Meditations
            </Title>
            <Row gutter={[16, 16]}>
              {featuredTracks?.map(track => (
                <Col xs={24} sm={12} key={track.id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`/tracks/${track.id}`)}
                  >
                    <Title level={5}>{track.title}</Title>
                    <Text>{track.duration} minutes</Text>
                    <Text type="secondary">{track.category?.name}</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>

        {/* Recent Sessions */}
        <Col xs={24} md={12}>
          <Card>
            <Title level={4}>
              <i className="las la-history"></i> Recent Sessions
            </Title>
            <List
              dataSource={recentSessions}
              renderItem={session => (
                <List.Item>
                  <List.Item.Meta
                    title={session.track?.title}
                    description={`${session.duration} mins - ${dayjs(
                      session.createdAt,
                    ).format('MMM D, YYYY')}`}
                  />
                  <Rate disabled value={session.rating || 0} />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Mindfulness Reminders */}
        <Col xs={24} md={12}>
          <Card>
            <Title level={4}>
              <i className="las la-bell"></i> Daily Reminders
            </Title>
            <List
              dataSource={reminders}
              renderItem={reminder => (
                <List.Item>
                  <List.Item.Meta
                    title={`Reminder at ${reminder.time}`}
                    description={`Frequency: ${reminder.frequency}`}
                  />
                  <Switch
                    defaultChecked={reminder.isEnabled}
                    onChange={checked =>
                      handleReminderToggle(reminder.id, checked)
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Favorite Tracks */}
        <Col xs={24}>
          <Card>
            <Title level={4}>
              <i className="las la-heart"></i> Your Favorites
            </Title>
            <Row gutter={[16, 16]}>
              {favorites?.map(favorite => (
                <Col xs={24} sm={12} md={8} key={favorite.id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`/tracks/${favorite.track?.id}`)}
                  >
                    <Title level={5}>{favorite.track?.title}</Title>
                    <Text>{favorite.track?.duration} minutes</Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
