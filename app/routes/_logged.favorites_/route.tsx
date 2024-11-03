import { Typography, Card, Row, Col, Button, Modal, Input, message } from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function FavoritesPage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState('')
  const [newPlaylistDescription, setNewPlaylistDescription] = useState('')
  const [selectedTracks, setSelectedTracks] = useState<string[]>([])

  // Fetch favorites with included track data
  const { data: favorites, refetch: refetchFavorites } =
    Api.favorite.findMany.useQuery({
      where: { userId: user?.id },
      include: { track: true },
    })

  // Fetch user playlists
  const { data: playlists, refetch: refetchPlaylists } =
    Api.playlist.findMany.useQuery({
      where: { userId: user?.id },
    })

  // Mutations
  const { mutateAsync: removeFavorite } = Api.favorite.delete.useMutation()
  const { mutateAsync: createPlaylist } = Api.playlist.create.useMutation()
  const { mutateAsync: createPlaylistTrack } =
    Api.playlistTrack.create.useMutation()

  const handleRemoveFavorite = async (favoriteId: string) => {
    try {
      await removeFavorite({ where: { id: favoriteId } })
      message.success('Track removed from favorites')
      refetchFavorites()
    } catch (error) {
      message.error('Failed to remove from favorites')
    }
  }

  const handleCreatePlaylist = async () => {
    if (!newPlaylistName) {
      message.error('Please enter a playlist name')
      return
    }

    try {
      const playlist = await createPlaylist({
        data: {
          name: newPlaylistName,
          description: newPlaylistDescription,
          isPublic: false,
          userId: user?.id || '',
        },
      })

      // Add selected tracks to playlist
      for (let i = 0; i < selectedTracks.length; i++) {
        await createPlaylistTrack({
          data: {
            position: i,
            playlistId: playlist.id,
            trackId: selectedTracks[i],
          },
        })
      }

      message.success('Playlist created successfully')
      setIsModalVisible(false)
      setNewPlaylistName('')
      setNewPlaylistDescription('')
      setSelectedTracks([])
      refetchPlaylists()
    } catch (error) {
      message.error('Failed to create playlist')
    }
  }

  return (
    <PageLayout layout="narrow">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-heart" style={{ marginRight: '8px' }}></i>
          My Favorites
        </Title>
        <Text type="secondary">
          Manage your favorite meditation tracks and create custom playlists
        </Text>

        <div style={{ marginTop: '24px' }}>
          <Button
            type="primary"
            icon={<i className="las la-plus"></i>}
            onClick={() => setIsModalVisible(true)}
            disabled={!favorites?.length}
            style={{ marginBottom: '24px' }}
          >
            Create Playlist from Favorites
          </Button>

          <Row gutter={[16, 16]}>
            {favorites?.map(favorite => (
              <Col xs={24} sm={12} md={8} key={favorite.id}>
                <Card
                  hoverable
                  actions={[
                    <Button
                      key="play"
                      type="text"
                      icon={<i className="las la-play"></i>}
                      onClick={() => navigate(`/tracks/${favorite.track?.id}`)}
                    >
                      Play
                    </Button>,
                    <Button
                      key="remove"
                      type="text"
                      danger
                      icon={<i className="las la-trash"></i>}
                      onClick={() => handleRemoveFavorite(favorite.id)}
                    >
                      Remove
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={favorite.track?.title}
                    description={
                      <div>
                        <Text type="secondary">
                          Duration: {favorite.track?.duration.toString()} min
                        </Text>
                        <br />
                        <Text type="secondary">
                          By: {favorite.track?.creatorName || 'Unknown'}
                        </Text>
                      </div>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>

          {(!favorites || favorites.length === 0) && (
            <Text type="secondary">
              <i className="las la-info-circle"></i> You haven't added any
              favorites yet
            </Text>
          )}
        </div>

        <Modal
          title="Create New Playlist"
          open={isModalVisible}
          onOk={handleCreatePlaylist}
          onCancel={() => setIsModalVisible(false)}
        >
          <Input
            placeholder="Playlist Name"
            value={newPlaylistName}
            onChange={e => setNewPlaylistName(e.target.value)}
            style={{ marginBottom: '16px' }}
          />
          <Input.TextArea
            placeholder="Playlist Description (optional)"
            value={newPlaylistDescription}
            onChange={e => setNewPlaylistDescription(e.target.value)}
            style={{ marginBottom: '16px' }}
          />
          <Text>Select tracks to include:</Text>
          {favorites?.map(favorite => (
            <div key={favorite.track?.id} style={{ marginTop: '8px' }}>
              <input
                type="checkbox"
                onChange={e => {
                  if (e.target.checked) {
                    setSelectedTracks([
                      ...selectedTracks,
                      favorite.track?.id || '',
                    ])
                  } else {
                    setSelectedTracks(
                      selectedTracks.filter(id => id !== favorite.track?.id),
                    )
                  }
                }}
              />
              <Text style={{ marginLeft: '8px' }}>{favorite.track?.title}</Text>
            </div>
          ))}
        </Modal>
      </div>
    </PageLayout>
  )
}
