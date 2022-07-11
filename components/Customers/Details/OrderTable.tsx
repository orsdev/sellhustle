import Table, { ColumnsType } from 'antd/lib/table'
import { currencyFormatter } from '@/utils/currencyFormatter'
import { customDate } from '@/utils/customDate'
import { useState } from 'react'
import TableRender from '@/components/Common/Tables/TableRender'

const data: any[] = [
  {
    orderID: 23342,
    name: 'Joan Dyer',
    date: customDate(10, 'years'),
    mail: 'joan@gmail.com',
    country: 'Germany',
    order: 1,
    phone: '203-111-1802',
    status: 'Canceled',
    paymentMethod: 'Credit Card',
    price: 2000
  },
  {
    orderID: 23352,
    name: 'Anna Wilson',
    date: customDate(5, 'years'),
    mail: 'Annawilson@gmail.com',
    country: 'U.S.A',
    order: 7,
    phone: '203-111-1802',
    status: 'Canceled',
    paymentMethod: 'Credit Card',
    price: 1000
  },
  {
    orderID: 23342,
    name: 'Jacob Lee',
    date: customDate(7, 'years'),
    mail: 'Jacob@gmail.com',
    country: 'U.K',
    order: 7,
    phone: '203-111-1802',
    status: 'Available',
    paymentMethod: 'Paypal',
    price: 64000
  },
  {
    orderID: 60342,
    name: 'Saly Grahan',
    date: customDate(16, 'years'),
    mail: 'Sally@gmail.com',
    country: 'Scotland',
    order: 8,
    phone: '203-111-1802',
    price: 12000,
    status: 'Completed',
    paymentMethod: 'Paypal'
  },
  {
    orderID: 98342,
    name: 'Nonton Kapersky',
    date: customDate(30, 'years'),
    mail: 'Nonton@gmail.com',
    country: 'Austria',
    order: 34,
    phone: '203-111-1802',
    price: 24000,
    status: 'In Progress',
    paymentMethod: 'Credit Card'
  },
  {
    orderID: 78642,
    name: 'Wilson Charity',
    date: customDate(2, 'years'),
    mail: 'Wilson@gmail.com',
    country: 'Barbados',
    order: 5,
    phone: '203-111-1802',
    price: 23000,
    status: 'Canceled',
    paymentMethod: 'Credit Card'
  },
  {
    orderID: 20442,
    name: 'Henry Love',
    date: customDate(7, 'years'),
    mail: 'Henry@gmail.com',
    country: 'Germany',
    order: 13,
    phone: '203-111-1802',
    price: 34000,
    status: 'Available',
    paymentMethod: 'Credit Card'
  }
]

const columns: ColumnsType<any[]> = [
  {
    title: <span className="relative -left-5">Order ID</span>,
    dataIndex: 'orderID',
    width: 100,
    render: (id: string) => {
      return (
        <button
          type="button"
          className="font-base text-primary-blue_dark_1 ml-3 z-50 relative -left-[30px]"
        >
          #{id}
        </button>
      )
    }
  },
  {
    title: 'Items',
    dataIndex: 'order',
    width: 100,
    render: (purchased) => {
      return (
        <span className="text-primary-blue_dark_1 font-base ml-1">
          {purchased > 1 ? `${purchased} items` : `${purchased} item`}
        </span>
      )
    }
  },
  {
    title: 'Ordered Date',
    dataIndex: 'date',
    width: 100,
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
    width: 110,
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
    width: 110,
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
          className={`${color} font-xs py-[3px] px-[7px] rounded-md inline-block text-center`}
          style={{
            minWidth: '80px',
            fontSize: '12px'
          }}
        >
          {status}
        </span>
      )
    }
  },
  {
    title: <span className="relative left-4">Payment Method</span>,
    dataIndex: 'paymentMethod',
    width: 120,
    className: 'text-center',
    render: (payment: string) => (
      <span className="text-secondary">{payment}</span>
    )
  },
  {
    title: '',
    key: 'operation',
    width: 50,
    className: 'bg-white'
  }
]

const OrderTable = () => {
  const [dataSource] = useState<any[]>(data)

  return (
    <div className="customers__order__table mt-5 cm-border">
      <TableRender
        title="Customer Order"
        showFilters={false}
        render={({ rowSelection }) => {
          return (
            <Table
              rowSelection={rowSelection}
              className="cm__table__nohover"
              columns={columns}
              rowKey="orderID"
              dataSource={dataSource}
              scroll={{ x: 985 }}
              pagination={{
                total: Math.floor(dataSource.length * 4),
                showSizeChanger: false,
                pageSize: 10,
                position: ['bottomLeft'],
                className: 'cm__table__pagination pl-2',
                itemRender: (_: any, type: string, originalElement: any) => {
                  if (type === 'prev') {
                    return (
                      <button className=" cm__table__pagination__prev">
                        Prev
                      </button>
                    )
                  }
                  if (type === 'next') {
                    return (
                      <button className="cm__table__pagination__next">
                        Next
                      </button>
                    )
                  }
                  return originalElement
                }
              }}
            />
          )
        }}
      />
    </div>
  )
}

export default OrderTable
