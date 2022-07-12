import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import UserDetails from '@/components/Users/Details/Index'

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>User Details | Sel Hustle </title>
      </Head>
      <UserDetails />
    </MainLayout>
  )
}

export default Index
