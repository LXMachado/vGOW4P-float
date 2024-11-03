import { Typography, Card, Slider, Button, message } from 'antd'
import { useEffect, useRef, useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PlayerPage() {
  const { trackId } = useParams()
  const { user } = useUserContext()
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(50)
  const [loop, setLoop] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  // Fetch track data
  const { data: track } = Api.track.findUnique.useQuery({
    where: { id: trackId },
    include: { category: true },
  })

  // Fetch favorite status
  const { data: favorites, refetch: refetchFavorites } =
    Api.favorite.findMany.useQuery({
      where: { userId: user?.id, trackId },
    })

  const isFavorite = favorites && favorites.length > 0

  // Mutations
  const { mutateAsync: addFavorite } = Api.favorite.create.useMutation()
  const { mutateAsync: removeFavorite } = Api.favorite.deleteMany.useMutation()

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      audioRef.current.loop = loop
    }
  }, [volume, loop])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value
      setCurrentTime(value)
    }
  }

  const handleFavoriteToggle = async () => {
    if (!user?.id || !trackId) {
      message.error('Unable to update favorites')
      return
    }

    try {
      if (isFavorite) {
        await removeFavorite({ where: { userId: user.id, trackId } })
        message.success('Removed from favorites')
      } else {
        await addFavorite({ data: { userId: user.id, trackId } })
        message.success('Added to favorites')
      }
      refetchFavorites()
    } catch (error) {
      message.error('Failed to update favorites')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Meditation Player</Title>
      <Text>Enjoy your meditation session with customizable controls</Text>

      <Card style={{ marginTop: 24 }}>
        {track && (
          <>
            <audio
              ref={audioRef}
              src={track.audioUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
            />

            <Title level={3}>{track.title}</Title>
            <Text type="secondary">
              By {track.creatorName || 'Unknown Creator'}
            </Text>

            <div style={{ marginTop: 16 }}>
              <Text>Category: {track.category?.name}</Text>
              <Paragraph>{track.description}</Paragraph>
            </div>

            <div style={{ marginTop: 24 }}>
              <Slider
                value={currentTime}
                max={track.duration}
                onChange={handleSliderChange}
                tooltip={{ formatter: value => `${Math.floor(value!)}s` }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 16,
                }}
              >
                <div>
                  <Button onClick={handlePlayPause} style={{ marginRight: 8 }}>
                    <i
                      className={`las ${isPlaying ? 'la-pause' : 'la-play'}`}
                    />
                  </Button>
                  <Button
                    onClick={() => setLoop(!loop)}
                    type={loop ? 'primary' : 'default'}
                  >
                    <i className="las la-redo-alt" />
                  </Button>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '200px',
                  }}
                >
                  <i
                    className="las la-volume-down"
                    style={{ marginRight: 8 }}
                  />
                  <Slider
                    value={volume}
                    onChange={setVolume}
                    tooltip={{ formatter: value => `${value}%` }}
                  />
                </div>

                <Button
                  onClick={handleFavoriteToggle}
                  type={isFavorite ? 'primary' : 'default'}
                >
                  <i
                    className={`las ${isFavorite ? 'la-heart' : 'la-heart-o'}`}
                  />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </PageLayout>
  )
}
