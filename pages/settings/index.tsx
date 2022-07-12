import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import SettingsHome from '@/components/Settings/Home/Home'

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title>Settings | Sel Hustle </title>
      </Head>
      <SettingsHome />
    </MainLayout>
  )
}

export default Index
