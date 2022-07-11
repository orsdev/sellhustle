import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import EmployeeList from '@/components/Employee/List/Index'

const List = () => {
  return (
    <MainLayout>
      <Head>
        <title>Employee List | Sel Hustle </title>
      </Head>
      <EmployeeList />
    </MainLayout>
  )
}

export default List
