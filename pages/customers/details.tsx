import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import Header from '@/components/Customers/Details/Header'
import Info from '@/components/Customers/Details/Info'
import OrderTable from '@/components/Customers/Details/OrderTable'
import MainLayout from '@/components/Layout/Main'

const CustomerDetails = () => {
  const { query } = useRouter()
  const [orderID, setOrderID] = useState<string>('')

  useEffect(() => {
    if (query) {
      if (query?.id) {
        setOrderID(query.id as string)
      } else {
        Router.push('/customers')
      }
    }
  }, [query])

  return (
    <MainLayout>
      <Head>
        <title>Sel Hustle | Customer Details </title>
      </Head>
      <div className="mx-auto w-full">
        <div className="px-7 pt-6">
          <Header id={orderID} />
        </div>
        <div className="w-full p-7">
          <Info />
          <OrderTable />
        </div>
      </div>
    </MainLayout>
  )
}

export default CustomerDetails
