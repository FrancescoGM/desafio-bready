import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Container, Content } from './styles'

interface AboutCardProps {
  url: string
  title: string
  children: ReactNode
  width: string
  height: string
}

export function AboutCard({
  children,
  title,
  url,
  height,
  width
}: AboutCardProps) {
  return (
    <Container>
      <Image src={url} alt={url} width={width} height={height} />
      <Content>
        <h3>{title}</h3>
        <p>{children}</p>
      </Content>
    </Container>
  )
}
