import { useEffect, useState } from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import AppLayout from '@/components/Layout/Layout'
import Header from '@/components/Orders/Details/Header'
import Items from '@/components/Orders/Details/Items'
import Shipping from '@/components/Orders/Details/Shipping'
import OrderTimeline from '@/components/Orders/Details/OrderTimeline'
import Partners from '@/components/Orders/Details/Partners'

const OrderDetails = () => {
  const { query } = useRouter()
  const [orderID, setOrderID] = useState<string>('')

  useEffect(() => {
    if (query) {
      if (query?.id) {
        setOrderID(query.id as string)
      } else {
        Router.push('/orders')
      }
    }
  }, [query])

  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Order Details </title>
      </Head>
      <div className="mx-auto w-full">
        <div className="px-7 pt-12">
          <Header id={orderID} />
        </div>
        <div className="flex flex-wrap  p-7">
          <div className="w-full xl:w-[75%]  mb-12 xl:mb-0 md:pr-7">
            <Items />
            <Shipping />
          </div>
          <div className="w-full xl:w-[25%]">
            <div className="bg-white cm-border rounded-2xl base:pl-4">
              <OrderTimeline />
            </div>
            <div className="bg-white cm-border rounded-2xl base:pl-4 mt-5">
              <Partners />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default OrderDetails
