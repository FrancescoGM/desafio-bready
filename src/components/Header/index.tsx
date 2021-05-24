import React, { useState } from 'react'
import { Container, Mobile, Web } from './styles'
import { IoPersonCircle, IoSearchCircle, IoBag, IoMenu } from 'react-icons/io5'

interface HeaderProps {
  onAbout: () => void
  onProduct: () => void
  onLocal: () => void
  onInitMobile: () => void
  onAboutMobile: () => void
  onProductMobile: () => void
  onLocalMobile: () => void
}

export function Header({
  onAbout,
  onLocal,
  onProduct,
  onInitMobile,
  onAboutMobile,
  onLocalMobile,
  onProductMobile
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  function onNavigate(fn: () => void) {
    setIsOpen(false)
    fn()
  }

  return (
    <Container>
      <Web>
        <img src="/logo.svg" alt="Bready" />

        <ul>
          <li onClick={() => onNavigate(onAbout)}>Sobre nós</li>
          <li onClick={() => onNavigate(onProduct)}>Produtos</li>
          <li onClick={() => onNavigate(onLocal)}>Ambiente</li>
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
          <li onClick={() => onNavigate(onInitMobile)}>Início</li>
          <li onClick={() => onNavigate(onAboutMobile)}>Sobre nós</li>
          <li onClick={() => onNavigate(onProductMobile)}>Produtos</li>
          <li onClick={() => onNavigate(onLocalMobile)}>Ambiente</li>
        </ul>
      </Mobile>
    </Container>
  )
}
