import Head from 'next/head'
import Header from '@/components/Products/Categories/List/Header'
import CategoriesTable from '@/components/Products/Categories/List/Table/Index'
import MainLayout from '@/components/Layout/Main'

const CategoriesList = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Categories </title>
      </Head>
      <div className="px-7 py-7">
        <Header />
        <div className="mt-[30px]">
          <CategoriesTable />
        </div>
      </div>
    </MainLayout>
  )
}

export default CategoriesList
