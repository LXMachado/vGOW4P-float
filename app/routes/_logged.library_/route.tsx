import {
  Typography,
  Input,
  Select,
  Card,
  Row,
  Col,
  Space,
  Button,
  Slider,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
const { Search } = Input
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LibraryPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [durationRange, setDurationRange] = useState<[number, number]>([0, 60])
  const [offlineOnly, setOfflineOnly] = useState(false)

  // Fetch categories and tracks with their categories included
  const { data: categories } = Api.category.findMany.useQuery({})
  const { data: tracks } = Api.track.findMany.useQuery({
    include: {
      category: true,
    },
  })

  // Filter tracks based on user selections
  const filteredTracks = tracks?.filter(track => {
    const matchesSearch = track.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    const matchesCategory =
      !selectedCategory || track.categoryId === selectedCategory
    const matchesDuration =
      track.duration >= durationRange[0] && track.duration <= durationRange[1]
    const matchesOffline = !offlineOnly || track.offlineEnabled

    return matchesSearch && matchesCategory && matchesDuration && matchesOffline
  })

  const handleTrackClick = (trackId: string) => {
    navigate(`/tracks/${trackId}`)
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>Meditation Library</Title>
        <Text>Browse and discover meditation tracks that suit your needs</Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: '24px' }}
        >
          {/* Search and Filters */}
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Search
              placeholder="Search meditation tracks..."
              onChange={e => setSearchQuery(e.target.value)}
              style={{ maxWidth: 400 }}
            />

            <Space wrap>
              <Select
                style={{ width: 200 }}
                placeholder="Select Category"
                allowClear
                onChange={setSelectedCategory}
              >
                {categories?.map(category => (
                  <Select.Option key={category.id} value={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
              </Select>

              <div style={{ width: 300 }}>
                <Text>Duration (minutes)</Text>
                <Slider
                  range
                  min={0}
                  max={60}
                  defaultValue={[0, 60]}
                  onChange={(value: [number, number]) =>
                    setDurationRange(value)
                  }
                />
              </div>

              <Button
                type={offlineOnly ? 'primary' : 'default'}
                onClick={() => setOfflineOnly(!offlineOnly)}
                icon={<i className="las la-download" />}
              >
                Offline Available
              </Button>
            </Space>
          </Space>

          {/* Tracks Grid */}
          <Row gutter={[16, 16]}>
            {filteredTracks?.map(track => (
              <Col xs={24} sm={12} md={8} lg={6} key={track.id}>
                <Card
                  hoverable
                  onClick={() => handleTrackClick(track.id)}
                  cover={
                    <div
                      style={{
                        height: 140,
                        background: '#f0f2f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <i
                        className="las la-play-circle"
                        style={{ fontSize: '48px' }}
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={track.title}
                    description={
                      <Space direction="vertical" size="small">
                        <Text type="secondary">
                          <i className="las la-clock" />{' '}
                          {track.duration.toString()} min
                        </Text>
                        {track.category && (
                          <Text type="secondary">
                            <i className="las la-tag" /> {track.category.name}
                          </Text>
                        )}
                        {track.offlineEnabled && (
                          <Text type="secondary">
                            <i className="las la-download" /> Available offline
                          </Text>
                        )}
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Space>
      </div>
    </PageLayout>
  )
}
