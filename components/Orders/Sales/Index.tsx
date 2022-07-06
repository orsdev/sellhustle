import TableContainer from '@/components/Common/Tables/TableContainerOne'
import { currencyFormatter } from '@/utils/currencyFormatter'
import { customDate } from '@/utils/customDate'
import { ColumnsType } from 'antd/lib/table'
import Router from 'next/router'
import Header from './Header'

interface DataType {
  orderID: number | string
  image: string
  fullName: string
  firstName: string
  lastName: string
  purchased: number
  date: string
  title: string
  price: number
  status: string
}

const columns: ColumnsType<any> = [
  {
    title: 'Order ID',
    dataIndex: 'orderID',
    width: 99,
    render: (id: string) => {
      return (
        <button
          type="button"
          className="font-base text-primary-blue_dark_1 ml-3 z-50 relative"
          onClick={() =>
            Router.push('/orders/details?id= ' + encodeURIComponent(id))
          }
        >
          #{id}
        </button>
      )
    }
  },
  {
    title: 'Customer',
    dataIndex: 'fullName',
    width: 200,
    render: (fullName, record) => {
      return (
        <>
          <div className="table__container__info">
            <div className="table__container__name">
              {record.lastName?.substring(0, 1)}
              {record.firstName?.substring(0, 1)}
            </div>
            <button
              type="button"
              className="font-base text-primary-blue_dark_1 ml-3"
              style={{
                fontWeight: 400
              }}
              onClick={() =>
                Router.push(
                  '/orders/details?id= ' + encodeURIComponent(record.orderID)
                )
              }
            >
              {fullName}
            </button>
          </div>
        </>
      )
    }
  },
  {
    title: 'Purchased',
    dataIndex: 'purchased',
    width: 150,
    render: (purchased) => {
      return (
        <span className="text-secondary font-base ml-1">
          {purchased > 1 ? `${purchased} items` : `${purchased} item`}
        </span>
      )
    }
  },
  {
    title: 'Date',
    dataIndex: 'date',
    width: 150,
    render: (date) => {
      return (
        <>
          <div className="flex items-center">
            <span className="text-secondary font-base ml-1">{date}</span>
          </div>
        </>
      )
    }
  },
  {
    title: 'Total',
    dataIndex: 'price',
    width: 140,
    render: (price) => {
      return (
        <>
          <span
            className="font-xs text-primary-blue_dark_1"
            style={{
              fontWeight: 500
            }}
          >
            {currencyFormatter(price, 'USD')}
          </span>
        </>
      )
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 120,
    render: (status) => {
      const formattedStatus = status.toLowerCase()
      let color = 'text-primary-green_dark_1 bg-green-100'

      if (formattedStatus === 'available') {
        color = 'text-primary-green_dark_1 bg-green-100'
      } else if (formattedStatus === 'completed') {
        color = 'text-primary-green-500 bg-blue-100'
      } else if (formattedStatus === 'canceled') {
        color = 'text-primary-danger bg-red-100'
      } else if (formattedStatus === 'due') {
        color = 'text-yellow-500 bg-yellow-100'
      } else {
        color = 'text-primary-blue_light_3 bg-blue-100'
      }

      return (
        <span
          className={`${color} font-xs p-1 px-2 rounded-md inline-block text-center`}
          style={{
            minWidth: '80px',
            fontSize: '13px'
          }}
        >
          {status}
        </span>
      )
    }
  }
]

const data: DataType[] = [
  {
    orderID: 23342,
    fullName: 'Adam Butcher',
    firstName: 'Adam',
    lastName: 'Butcher',
    purchased: 1,
    title: 'Knot Crop',
    image: '/product-sm.png',
    date: customDate(2, 'years'),
    price: 200,
    status: 'Available'
  },
  {
    orderID: 54432,
    fullName: 'Dean John',
    firstName: 'Dean',
    lastName: 'John',
    purchased: 2,
    title: 'V-neck',
    image: '/product-sm.png',
    date: customDate(10, 'years'),
    price: 1000,
    status: 'Canceled'
  },
  {
    orderID: 24432,
    fullName: 'Pence Mike',
    firstName: 'Mike',
    lastName: 'Pence',
    title: 'Mini Jean',
    purchased: 6,
    image: '/product-sm.png',
    date: customDate(10, 'months'),
    price: 500,
    status: 'Completed'
  },
  {
    orderID: 64832,
    fullName: 'Jane Doe',
    firstName: 'Doe',
    lastName: 'Jane',
    purchased: 3,
    title: 'Tank Top',
    image: '/product-sm.png',
    date: customDate(1000, 'days'),
    price: 200,
    status: 'In Progress'
  },
  {
    orderID: 74412,
    title: 'Tube Top',
    purchased: 7,
    fullName: 'Harry Potter',
    firstName: 'Potter',
    lastName: 'Harry',
    image: '/product-sm.png',
    date: customDate(4, 'years'),
    price: 580,
    status: 'Due'
  },
  {
    orderID: 95412,
    title: 'Tube Top',
    purchased: 7,
    fullName: 'Ben Spike',
    firstName: 'Spike',
    lastName: 'Ben',
    image: '/product-sm.png',
    date: customDate(8, 'years'),
    price: 880,
    status: 'Available'
  },
  {
    orderID: 61412,
    title: 'Tube Top',
    purchased: 7,
    fullName: 'Angela Frank',
    firstName: 'Angela',
    lastName: 'Frank',
    image: '/product-sm.png',
    date: customDate(2, 'years'),
    price: 4580,
    status: 'Canceled'
  },
  {
    orderID: 19712,
    title: 'Tube Top',
    purchased: 7,
    fullName: 'Elon Pete',
    firstName: 'Pete',
    lastName: 'Elone',
    image: '/product-sm.png',
    date: customDate(4, 'years'),
    price: 580,
    status: 'Due'
  }
]

const SalesOrder = () => {
  return (
    <div className="pt-6 px-7 overflow-hidden">
      <Header />
      {/* <SalesTable /> */}
      <TableContainer
        columns={columns}
        data={data}
        pagination={true}
        headerTitle="All Orders"
      />
    </div>
  )
}

export default SalesOrder
