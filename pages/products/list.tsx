import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import Products from '@/components/Products/Products'
import LayoutHeader from '@/components/Common/LayoutHeader'

const ProductsList = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Products </title>
      </Head>
      <div className="px-7 py-7">
        <LayoutHeader title="Product List" showSearchForm={false} />
        <div className="mt-[30px]">
          <Products />
        </div>
      </div>
    </AppLayout>
  )
}

export default ProductsList
