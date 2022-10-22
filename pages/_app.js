import '../styles/globals.css'
// import { AuthProvider } from '../context/AuthProvider'
import { UserProvider } from '../context/UserContext'

import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (

    <>
      <UserProvider>

        <Head>
          <title>Etickets</title>
        </Head>
        <Component {...pageProps} />

      </UserProvider>

    </>
  )
}

export default MyApp
