import Head from 'next/head'
import OrderStats from '@/components/Orders/List/Stats/Stats'
import AllOrders from '@/components/Orders/List/AllOrders/Index'
import LatestOrder from '@/components/Orders/List/LatestOrder/Index'
import LayoutHeader from '@/components/Common/LayoutHeader'
import MainLayout from '@/components/Layout/Main'

const OrdersList = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Orders List </title>
      </Head>
      <div className="px-7 py-7">
        <LayoutHeader
          title="Orders List"
          placeholder="Search for the orders"
          showSearchForm={true}
          onChange={(event) => console.log(event.target.value)}
        />
        <div className="mt-[30px]">
          <OrderStats />
          <AllOrders />
          <LatestOrder />
        </div>
      </div>
    </MainLayout>
  )
}

export default OrdersList
