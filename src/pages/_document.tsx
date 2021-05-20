import React from 'react'
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg" />
          <link
            href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Bready is a website to show and divulgate the products of bready"
          />

          <meta property="og:site_name" content="Bready" />

          <meta property="og:title" content="Bready" />
          <meta
            property="og:description"
            content="Bready is a website to show and divulgate the products of bready"
          />

          <meta property="og:image" content="/images/thumbnail.png" />
          <meta property="og:image:type" content="image/png" />

          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="340" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Bready" />
          <meta
            name="twitter:description"
            content="Bready is a website to show and divulgate the products of bready"
          />
          <meta name="twitter:image" content="/images/thumbnail.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
