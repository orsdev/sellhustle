import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import Categories from '@/components/Products/Categories/List/Categories'

const CategoriesList = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Categories </title>
      </Head>
      <div className="px-6 py-7">
        <Categories />
      </div>
    </MainLayout>
  )
}

export default CategoriesList
