import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Container } from './styles'

interface LocalCardProps {
  url: string
  alt: string
  children: ReactNode
}

export function LocalCard({ children, url, alt }: LocalCardProps) {
  return (
    <Container>
      <Image src={url} alt={alt} width="350" height="425" objectFit="cover" />

      <p>{children}</p>
    </Container>
  )
}
