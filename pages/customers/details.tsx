import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import AppLayout from '@/components/Layout/Layout'
import Header from '@/components/Customers/Details/Header'
import Info from '@/components/Customers/Details/Info'
import OrderTable from '@/components/Customers/Details/OrderTable'

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
    <AppLayout>
      <Head>
        <title>Sel Hustle | Home </title>
      </Head>
      <div className="mx-auto w-full">
        <div className="px-7 pt-12">
          <Header name="Jacob Henry" />
        </div>
        <div className="w-full p-7">
          <Info />
          <OrderTable />
        </div>
      </div>
    </AppLayout>
  )
}

export default CustomerDetails
