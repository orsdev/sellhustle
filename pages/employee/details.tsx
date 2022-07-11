import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import EmployeeDetails from '@/components/Employee/Details/Index'

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Employee Details | Sel Hustle </title>
      </Head>
      <EmployeeDetails />
    </MainLayout>
  )
}

export default Index
