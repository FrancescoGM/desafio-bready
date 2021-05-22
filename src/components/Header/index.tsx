import React, { useState } from 'react'
import { Container, Mobile, Web } from './styles'
import { IoPersonCircle, IoSearchCircle, IoBag, IoMenu } from 'react-icons/io5'

interface HeaderProps {
  onAbout: () => void
  onProduct: () => void
  onLocal: () => void
}

export function Header({ onAbout, onLocal, onProduct }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Web>
        <img src="/logo.svg" alt="Bready" />

        <ul>
          <li onClick={onAbout}>Sobre nós</li>
          <li onClick={onProduct}>Produtos</li>
          <li onClick={onLocal}>Ambiente</li>
        </ul>
        <nav>
          <IoSearchCircle />
          <IoPersonCircle />
          <IoBag />
        </nav>
      </Web>
      <Mobile isOpen={isOpen}>
        <img src="/logo.svg" alt="Bready" />

        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <IoMenu />
        </button>

        <ul>
          <li onClick={onAbout}>Sobre nós</li>
          <li onClick={onProduct}>Produtos</li>
          <li onClick={onLocal}>Ambiente</li>
        </ul>
      </Mobile>
    </Container>
  )
}
