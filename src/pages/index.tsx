import React, { RefObject, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import {
  Banner,
  Container,
  Content,
  ProductsContainer
} from '../styles/pages/home'
import { About } from '../components/About'
import { Product } from '../components/Product'
import { Local } from '../components/Local'

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const productRef = useRef<HTMLDivElement>(null)
  const localRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  function navigateTo(
    ref: RefObject<HTMLDivElement>,
    options?: ScrollIntoViewOptions
  ) {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      ...options
    })
  }

  return (
    <>
      <Head>
        <title>Bready</title>
      </Head>
      <Container ref={headerRef}>
        <Header
          onAbout={() => navigateTo(aboutRef)}
          onProduct={() => navigateTo(productRef)}
          onLocal={() => navigateTo(localRef)}
          onInitMobile={() => navigateTo(headerRef, { block: 'start' })}
          onAboutMobile={() => navigateTo(aboutRef, { block: 'start' })}
          onProductMobile={() => navigateTo(productRef, { block: 'start' })}
          onLocalMobile={() => navigateTo(localRef, { block: 'start' })}
        />
        <Banner data-aos="fade-up" />
        <Content>
          <ProductsContainer data-aos="fade-up">
            <Image
              src="https://images.unsplash.com/photo-1589661329742-713c46926e34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              alt="Pão caseiro"
              width="150"
              height="150"
              objectFit="cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              alt="Pão integral"
              width="150"
              height="150"
              objectFit="cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Donut"
              width="150"
              height="150"
              objectFit="cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1611463979370-4eca78c4df91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              alt="Cupcake"
              width="150"
              height="150"
              objectFit="cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
              alt="Bolo"
              width="150"
              height="150"
              objectFit="cover"
            />
          </ProductsContainer>
        </Content>
        <About ref={aboutRef} />
        <Product ref={productRef} />
        <Local ref={localRef} />
        <Footer
          onInit={() => navigateTo(headerRef, { block: 'start' })}
          onAbout={() => navigateTo(aboutRef)}
          onProduct={() => navigateTo(productRef)}
          onLocal={() => navigateTo(localRef)}
        />
      </Container>
    </>
  )
}
