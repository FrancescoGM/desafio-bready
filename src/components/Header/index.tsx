import React from 'react'
import { Container, Content } from './styles'
import { IoPersonCircle, IoSearchCircle, IoBag } from 'react-icons/io5'

export function Header() {
  return (
    <Container>
      <Content>
        <img src="/logo.svg" alt="Bready" />

        <ul>
          <li>Sobre nós</li>
          <li>Produtos</li>
          <li>Ambiente</li>
        </ul>
        <div>
          <IoSearchCircle />
          <IoPersonCircle />
          <IoBag />
        </div>
      </Content>
    </Container>
  )
}
