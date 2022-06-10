import { AppProps } from 'next/app'

import 'antd/dist/antd.css'
import '../styles/globals.scss'
import '../styles/style.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
