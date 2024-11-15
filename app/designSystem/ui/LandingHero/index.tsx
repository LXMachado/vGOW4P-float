import { Button, Flex, Typography } from 'antd'
import { useNavigate } from '@remix-run/react'

const { Title, Text, Paragraph } = Typography

type Props = {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  imageSrc: string
  imageAlt: string
}

export const LandingHero: React.FC<Props> = ({
  title,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
}) => {
  const navigate = useNavigate()

  return (
    <Flex 
      className="py-20 px-4"
      justify="center"
      wrap="wrap"
      gap="large"
    >
      <Flex 
        vertical 
        className="max-w-xl"
        justify="center"
      >
        <Title level={1} className="text-5xl mb-6">
          {title}
        </Title>
        <Paragraph className="text-xl mb-8">
          {description}
        </Paragraph>
        <Button 
          type="primary" 
          size="large" 
          onClick={() => navigate(ctaLink)}
        >
          {ctaText}
        </Button>
      </Flex>

      <Flex 
        className="max-w-xl w-full"
        justify="center"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-lg shadow-xl"
        />
      </Flex>
    </Flex>
  )
}
