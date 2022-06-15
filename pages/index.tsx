import Head from 'next/head'
import AbandonedCart from '@/components/Home/AbandonedCart/Index'
import Header from '@/components/Home/Header/Header'
import PopularProducts from '@/components/Home/PopularProducts/PopularProducts'
import Profile from '@/components/Home/Profile/Index'
import RecentOrders from '@/components/Home/RecentOrders/Index'
import Stats from '@/components/Home/Stats/Stats'
import AppLayout from '@/components/Layout/Layout'

function Home() {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Home </title>
      </Head>
      <div className="mx-auto w-full">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-[73%]  mb-12 xl:mb-0 px-7 py-12">
            <Header />
            <Stats />
            <AbandonedCart />
            <RecentOrders />
          </div>
          <div className="w-full xl:w-[27%] p-7 bg-white cm-border-left">
            <Profile />
            <PopularProducts />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home
