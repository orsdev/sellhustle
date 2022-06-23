import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import EditProduct from '@/components/Products/Edit/Index'

const Edit = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Edit Product</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <EditProduct />
      </div>
    </AppLayout>
  )
}

export default Edit
