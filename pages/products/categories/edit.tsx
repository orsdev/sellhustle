import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import CategoryEdit from '@/components/Products/Categories/Edit/Index'

const Edit = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Edit Category</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <CategoryEdit />
      </div>
    </AppLayout>
  )
}

export default Edit
