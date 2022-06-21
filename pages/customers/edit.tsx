import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import Edit from '@/components/Customers/Edit/Index'

const EditCustomer = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Edit Customer</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <Edit />
      </div>
    </AppLayout>
  )
}

export default EditCustomer
