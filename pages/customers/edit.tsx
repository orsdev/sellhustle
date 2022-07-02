import Head from 'next/head'
import Edit from '@/components/Customers/Edit/Index'
import MainLayout from '@/components/Layout/Main'

const EditCustomer = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Edit Customer</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <Edit />
      </div>
    </MainLayout>
  )
}

export default EditCustomer
