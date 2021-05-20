import React from 'react'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Container } from '../styles/pages/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bready</title>
      </Head>
      <Container>
        <Header />
        <Footer />
      </Container>
    </>
  )
}
