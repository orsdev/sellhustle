import Head from 'next/head'
import CategoryEdit from '@/components/Products/Categories/Edit/Index'
import MainLayout from '@/components/Layout/Main'

const Edit = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Edit Category</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <CategoryEdit />
      </div>
    </MainLayout>
  )
}

export default Edit
