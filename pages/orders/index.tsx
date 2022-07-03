import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import SalesOrder from '@/components/Orders/Sales/Index'

const OrdersList = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Orders </title>
      </Head>
      <SalesOrder />
    </MainLayout>
  )
}

export default OrdersList
