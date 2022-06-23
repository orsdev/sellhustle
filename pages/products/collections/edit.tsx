import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import CollectionsEdit from '@/components/Products/Collections/Edit/Index'

const Edit = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Edit Collections</title>
      </Head>
      <div className="mx-auto w-full px-7">
        <CollectionsEdit />
      </div>
    </AppLayout>
  )
}

export default Edit
