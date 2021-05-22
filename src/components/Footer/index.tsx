import React, { FormEvent, useRef } from 'react'
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { Container, Content, SubmitButton } from './styles'

interface FooterProps {
  onInit: () => void
  onAbout: () => void
  onProduct: () => void
  onLocal: () => void
}

export function Footer({ onAbout, onInit, onLocal, onProduct }: FooterProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const email = inputRef.current?.value
    if (!email) {
      return alert('E-mail obrigatório')
    }
    const data = {
      email,
      message: 'E-mail enviado para entrar em contato via bready'
    }
    fetch('https://formspree.io/f/xayaevvv', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => {
        if (res.status !== 200) {
          return alert('Erro ao tentar enviar o e-mail')
        }

        alert('E-mail enviado com sucesso')
      })
      .catch(() => {
        alert('Erro ao tentar enviar o e-mail')
      })
  }

  return (
    <Container>
      <header>
        <div />
        <img src="/icons/bread.svg" alt="bread" />
        <div />
      </header>
      <Content>
        <nav>
          <h3>Menu</h3>
          <ul>
            <li onClick={onInit}>Início</li>
            <li onClick={onAbout}>Sobre nós</li>
            <li onClick={onProduct}>Produtos</li>
            <li onClick={onLocal}>Ambiente</li>
          </ul>
        </nav>
        <form onSubmit={handleSubmit}>
          <h3>Entre em contato</h3>
          <div>
            <input ref={inputRef} type="email" placeholder="E-mail" />

            <SubmitButton>Enviar</SubmitButton>
          </div>
        </form>
        <div>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <FaFacebookSquare />
              bready_oficial
            </li>
            <li>
              <FaInstagramSquare />
              bready_oficial
            </li>
          </ul>
        </div>
      </Content>
      <span>@vnda - Tecnologia para e-commerce - CNPJ 00.0000.00/0001-00</span>
    </Container>
  )
}
