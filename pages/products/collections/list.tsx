import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import CollectionsList from '@/components/Products/Collections/List/Index'

const Index = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Collections </title>
      </Head>
      <div className="mx-auto w-full px-7 pb-5">
        <CollectionsList />
      </div>
    </AppLayout>
  )
}

export default Index
