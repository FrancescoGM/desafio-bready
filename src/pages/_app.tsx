import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

import SwiperCore, { Autoplay, Navigation } from 'swiper/core'

SwiperCore.use([Navigation, Autoplay])

function MyApp({ Component, pageProps }: AppProps) {
  if (process.browser) {
    AOS.init({ duration: 1500, once: true })
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
