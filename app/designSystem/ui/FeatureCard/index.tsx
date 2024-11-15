import { Flex, Typography } from 'antd'
import { ReactNode } from 'react'

const { Title, Paragraph } = Typography

interface Props {
  icon: ReactNode
  title: string
  description: string
}

export const FeatureCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <Flex 
      vertical 
      align="center" 
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <div className="text-4xl mb-4">
        {icon}
      </div>
      <Title level={3} className="mb-4 text-center">
        {title}
      </Title>
      <Paragraph className="text-center text-gray-600">
        {description}
      </Paragraph>
    </Flex>
  )
}
