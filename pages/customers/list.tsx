import Head from 'next/head'
import AppLayout from '@/components/Layout/Layout'
import LayoutHeader from '@/components/Common/LayoutHeader'
import CustomersTable from '@/components/Customers/List/Table/Table'
import CustomerStats from '@/components/Customers/List/Stats/Stats'

const CustomersList = () => {
  return (
    <AppLayout>
      <Head>
        <title>Sel Hustle | Customers List </title>
      </Head>
      <div className="px-7 py-7">
        <LayoutHeader
          title="Customers List"
          sub="Dashboard / Customers"
          showSearchForm={true}
          placeholder="Search for Customer"
        />
        <div className="mt-[30px]">
          <CustomerStats />
          <CustomersTable />
        </div>
      </div>
    </AppLayout>
  )
}

export default CustomersList
