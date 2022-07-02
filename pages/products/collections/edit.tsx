import Head from 'next/head'
import CollectionsEdit from '@/components/Products/Collections/Edit/Index'
import MainLayout from '@/components/Layout/Main'

const Edit = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Edit Collections</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <CollectionsEdit />
      </div>
    </MainLayout>
  )
}

export default Edit
