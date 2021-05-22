import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { theme } from '../styles/theme'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'

import SwiperCore, { Autoplay, Navigation } from 'swiper/core'

SwiperCore.use([Navigation, Autoplay])

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
