import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import Header from '@/components/Products/Categories/List/Header'
import CategoriesTable from '@/components/Products/Categories/List/Table/Index'

const CategoriesList = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Categories </title>
      </Head>
      <div className="px-7 py-7">
        <Header />
        <div className="mt-[30px]">
          <CategoriesTable />
        </div>
      </div>
    </AppLayout>
  )
}

export default CategoriesList
