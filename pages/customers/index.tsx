import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import CustomersList from '@/components/Customers/List/Index'

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Customers List | Sel Hustle </title>
      </Head>
      <CustomersList />
    </MainLayout>
  )
}

export default Index
