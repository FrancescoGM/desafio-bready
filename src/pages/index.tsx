import React from 'react'
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Bready</title>
      </Head>
      <Container>
        <Header />
        <Banner />
        <Content>
          <ProductsContainer>
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
        <About />
        <Footer />
      </Container>
    </>
  )
}
