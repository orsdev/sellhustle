import Header from '@/components/Home/Header/Header'
import PopularProducts from '@/components/Home/PopularProducts/PopularProducts'
import Profile from '@/components/Home/Profile/Index'
import Stats from '@/components/Home/Stats/Stats'
import AppLayout from '@/components/Layout/Layout'

function Home() {
  return (
    <AppLayout>
      <div className="mx-auto w-full">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-[68%]  mb-12 xl:mb-0 px-7 py-12">
            <Header />
            <Stats />
          </div>
          <div className="w-full xl:w-[32%] p-7 bg-white cm-border-left">
            <Profile />
            <PopularProducts />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Home
