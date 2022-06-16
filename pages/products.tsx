import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import InnerLayout from '@/components/Layout/InnerLayout'
import Products from '@/components/Products/Products'

const Index = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Products </title>
      </Head>
      <InnerLayout>
        <Products />
      </InnerLayout>
    </AppLayout>
  )
}

export default Index
