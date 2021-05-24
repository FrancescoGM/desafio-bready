import React, { HTMLAttributes, ReactNode } from 'react'
import Image from 'next/image'
import { Container } from './styles'

interface LocalCardProps extends HTMLAttributes<HTMLDivElement> {
  url: string
  alt: string
  children: ReactNode
}

export function LocalCard({ children, url, alt, ...rest }: LocalCardProps) {
  return (
    <Container {...rest}>
      <Image src={url} alt={alt} width="350" height="425" objectFit="cover" />

      <p>{children}</p>
    </Container>
  )
}
