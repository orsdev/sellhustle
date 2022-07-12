import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import UserList from '@/components/Users/List/Index'

const List = () => {
  return (
    <MainLayout>
      <Head>
        <title>User List | Sel Hustle </title>
      </Head>
      <UserList />
    </MainLayout>
  )
}

export default List
