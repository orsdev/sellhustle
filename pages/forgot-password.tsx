import Head from 'next/head'
import AuthWrapper from '@/components/Auth/AuthWrapper'
import ResetForm from '@/components/Auth/Reset/Reset'

const index = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>Forgot Password | Sel Hustle </title>
      </Head>
      <ResetForm />
    </AuthWrapper>
  )
}

export default index
