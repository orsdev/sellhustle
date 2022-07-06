import Head from 'next/head'
import AuthWrapper from '@/components/Auth/AuthWrapper'
import Register from '@/components/Auth/Register/Register'

const registration = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>Registration | Sel Hustle </title>
      </Head>
      <Register />
    </AuthWrapper>
  )
}

export default registration
