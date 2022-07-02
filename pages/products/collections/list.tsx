import Head from 'next/head'
import CollectionsList from '@/components/Products/Collections/List/Index'
import MainLayout from '@/components/Layout/Main'

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Collections </title>
      </Head>
      <div className="mx-auto w-full px-7 pb-5">
        <CollectionsList />
      </div>
    </MainLayout>
  )
}

export default Index
