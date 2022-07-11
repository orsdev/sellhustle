import Head from 'next/head'
import AuthWrapper from '@/components/Auth/AuthWrapper'
import Login from '@/components/Auth/Login/Login'

const index = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>Login | Sel Hustle </title>
      </Head>
      <Login />
    </AuthWrapper>
  )
}

export default index
