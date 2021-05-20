import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bready</title>
      </Head>
      <main>
        <Header />
      </main>
    </>
  )
}
