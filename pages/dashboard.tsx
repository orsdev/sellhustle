import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '@/components/Home/Header'
import MainLayout from '@/components/Layout/Main'

const SalesChart = dynamic(() => import('../components/Home/Chart/Sales'), {
  ssr: false
})

const OrdersChart = dynamic(() => import('../components/Home/Chart/Orders'), {
  ssr: false
})

const VisitorsChart = dynamic(
  () => import('../components/Home/Chart/Visitors'),
  {
    ssr: false
  }
)

const RecentOrders = dynamic(
  () => import('../components/Home/RecentOrders/Index'),
  { ssr: false }
)

function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Dashboard </title>
      </Head>
      <div className="mx-auto w-full">
        <div className="w-full">
          <div className="w-full px-7 py-12 pt-6">
            <Header />
            <div className="flex flex-col lg:flex-row mt-6">
              <div className="lg:w-[60%]">
                <SalesChart />
              </div>
              <div className="lg:w-[40%] lg:pl-4 mt-5 lg:mt-0">
                <OrdersChart />
                <VisitorsChart />
              </div>
            </div>
            <RecentOrders />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home
