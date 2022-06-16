import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import InnerLayout from '@/components/Layout/InnerLayout'
import OrderStats from '@/components/Orders/Stats/Stats'
import AllOrders from '@/components/Orders/AllOrders/Index'
import LatestOrder from '@/components/Orders/LatestOrder/Index'

const Orders = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Orders </title>
      </Head>
      <InnerLayout>
        <OrderStats />
        <AllOrders />
        <LatestOrder />
      </InnerLayout>
    </AppLayout>
  )
}

export default Orders
