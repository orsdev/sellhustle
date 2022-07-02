import Head from 'next/head'
import EditProduct from '@/components/Products/Edit/Index'
import MainLayout from '@/components/Layout/Main'

const Edit = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Edit Product</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <EditProduct />
      </div>
    </MainLayout>
  )
}

export default Edit
