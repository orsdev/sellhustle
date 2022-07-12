import Head from 'next/head'
import MainLayout from '@/components/Layout/Main'
import SettingsGeneral from '@/components/Settings/General/Index'

const Index = () => {
  return (
    <MainLayout>
      <Head>
        <title> General Settings | Sel Hustle </title>
      </Head>
      <SettingsGeneral />
    </MainLayout>
  )
}

export default Index
