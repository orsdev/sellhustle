import Head from 'next/head'
import AuthWrapper from '@/components/Auth/AuthWrapper'
import Business from '@/components/Auth/Business/Business'

const BusinessRegistration = () => {
  return (
    <AuthWrapper>
      <Head>
        <title>Business Registration | Sel Hustle </title>
      </Head>
      <Business />
    </AuthWrapper>
  )
}

export default BusinessRegistration
