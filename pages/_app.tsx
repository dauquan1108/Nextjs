// import '../styles/globals.css'
import '../src/styles/tailwind-pre-build.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
