import '../styles/globals.css'
import Head from 'next/head'
import useGtag from 'utils/useGtag'
import { init } from 'utils/sentry'
import type { AppProps } from 'next/app'
import type React from 'react'

init()

const APP_NAME = 'tlslides'
const APP_DESCRIPTION = 'Create slides using tldraw.'
const APP_URL = 'https://tlslides.com'
const IMAGE = 'https://tlslides.com/social-image.png'

function MyApp({ Component, pageProps }: AppProps) {
  useGtag()

  return (
    <>
      <Head>
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#fafafa" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:url" content={APP_URL} />
        <meta property="og:image" content={IMAGE} />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />

        <title>tlslides</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
