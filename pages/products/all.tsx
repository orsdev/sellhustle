import Head from 'next/head'
import Products from '@/components/Products/All/Products'
import LayoutHeader from '@/components/Common/LayoutHeader'
import MainLayout from '@/components/Layout/Main'

const ProductsList = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Products </title>
      </Head>
      <div className="px-7 py-7">
        <LayoutHeader title="Product List" showSearchForm={false} />
        <div className="mt-[30px]">
          <Products />
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductsList
