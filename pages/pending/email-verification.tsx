import Head from 'next/head'
import AuthWrapper from '@/components/Auth/AuthWrapper'
import EmailVerification from '@/components/Auth/EmailVerification/EmailVerification'

const registration = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>Verify Email | Sel Hustle </title>
      </Head>
      <EmailVerification />
    </AuthWrapper>
  )
}

export default registration
