import Head from 'next/head'
import Products from '@/components/Products/All/Products'
import MainLayout from '@/components/Layout/Main'

const ProductsList = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Products </title>
      </Head>
      <div className="pt-6 px-7">
        <Products />
      </div>
    </MainLayout>
  )
}

export default ProductsList
