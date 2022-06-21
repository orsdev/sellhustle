import { useState } from 'react'
import { Table, Switch } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'
import TableWrapper, {
  CustomerDataType,
  DataTypes
} from '@/components/Common/TableWrapper'
import { customDate } from '@/utils/customDate'
import Router from 'next/router'
import dayjs from 'dayjs'

const data: CustomerDataType[] = [
  {
    id: '#00004',
    name: 'Joan Dyer',
    date: customDate(10, 'years'),
    mail: 'joan@gmail.com',
    country: 'Germany',
    order: '02',
    phone: '203-111-1802',
    status: 'Canceled',
    paymentMethod: 'Credit Card',
    price: 2000
  },
  {
    id: '#51004',
    name: 'Anna Wilson',
    date: customDate(5, 'years'),
    mail: 'Annawilson@gmail.com',
    country: 'U.S.A',
    order: '06',
    phone: '203-111-1802',
    status: 'Canceled',
    paymentMethod: 'Credit Card',
    price: 1000
  },
  {
    id: '#18945',
    name: 'Jacob Lee',
    date: customDate(7, 'years'),
    mail: 'Jacob@gmail.com',
    country: 'U.K',
    order: '07',
    phone: '203-111-1802',
    status: 'Available',
    paymentMethod: 'Paypal',
    price: 64000
  },
  {
    id: '#37094',
    name: 'Saly Grahan',
    date: customDate(16, 'years'),
    mail: 'Sally@gmail.com',
    country: 'Scotland',
    order: '08',
    phone: '203-111-1802',
    price: 12000,
    status: 'Completed',
    paymentMethod: 'Paypal'
  },
  {
    id: '#30304',
    name: 'Nonton Kapersky',
    date: customDate(30, 'years'),
    mail: 'Nonton@gmail.com',
    country: 'Austria',
    order: '34',
    phone: '203-111-1802',
    price: 24000,
    status: 'In Progress',
    paymentMethod: 'Credit Card'
  },
  {
    id: '#03084',
    name: 'Wilson Charity',
    date: customDate(2, 'years'),
    mail: 'Wilson@gmail.com',
    country: 'Barbados',
    order: '05',
    phone: '203-111-1802',
    price: 23000,
    status: 'Canceled',
    paymentMethod: 'Credit Card'
  },
  {
    id: '#02004',
    name: 'Henry Love',
    date: customDate(7, 'years'),
    mail: 'Henry@gmail.com',
    country: 'Germany',
    order: '13',
    phone: '203-111-1802',
    price: 34000,
    status: 'Available',
    paymentMethod: 'Credit Card'
  }
]

const OrderTable = () => {
  const [current, setCurrent] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(7)

  return (
    <div className="customers__order__table mt-5 cm-border">
      <h4 className="customers__order__title mb-7">Customer Order</h4>
      <TableWrapper
        render={({
          getColumnSearch,
          rowSelection,
          dataSource,
          expandedRowKeys
        }) => {
          const columns: ColumnsType<DataTypes> = [
            {
              title: 'ID',
              dataIndex: 'id',
              width: 100,
              ...getColumnSearch('id'),
              render: (id) => {
                return (
                  <button
                    className="font-xs text-primary-blue_dark_1 cursor-pointer"
                    style={{
                      fontWeight: 600
                    }}
                    onClick={() =>
                      Router.push(
                        '/orders/details?id= ' + encodeURIComponent(id)
                      )
                    }
                  >
                    {id}
                  </button>
                )
              }
            },
            {
              title: 'Items',
              dataIndex: 'order',
              width: 140,
              sortDirections: ['descend'],
              sorter: (a: any, b: any) => a.order - b.order,
              render: (order: string) => (
                <span className="text-secondary">{order} Items</span>
              )
            },
            {
              title: 'Price',
              dataIndex: 'price',
              width: 130,
              sortDirections: ['descend'],
              sorter: (a: any, b: any) => a.price - b.price,
              render: (price) => {
                return (
                  <>
                    <span className="font-xs text-primary-blue_dark_1">
                      {currencyFormatter(price, 'USD')}
                    </span>
                  </>
                )
              }
            },
            {
              title: 'Ordered Date',
              dataIndex: 'date',
              width: 150,
              sortDirections: ['descend'],
              sorter: (a: any, b: any) => dayjs(a.date).diff(dayjs(b.date)),
              render: (date) => {
                return (
                  <>
                    <div className="flex items-center justify-center">
                      <Image
                        src="/icons/light/calendar.png"
                        alt="Calendar"
                        height={16}
                        width={16}
                        objectFit="contain"
                      />
                      <span className="text-secondary font-base ml-1">
                        {date}
                      </span>
                    </div>
                  </>
                )
              }
            },
            {
              title: 'Status',
              dataIndex: 'status',
              width: 140,
              filters: [
                {
                  text: 'In Progress',
                  value: 'in progress'
                },
                {
                  text: 'Completed',
                  value: 'completed'
                },
                {
                  text: 'Available',
                  value: 'Available'
                },
                {
                  text: 'Canceled',
                  value: 'canceled'
                }
              ],
              onFilter: (value: any, record: any) =>
                record.status.toLowerCase().indexOf(value.toLowerCase()) === 0,
              render: (status) => {
                const formattedStatus = status.toLowerCase()
                let color = 'text-primary-green_dark_1'

                if (formattedStatus === 'available') {
                  color = 'text-primary-green_dark_1'
                } else if (formattedStatus === 'completed') {
                  color = 'text-green-500'
                } else if (formattedStatus === 'canceled') {
                  color = 'text-red-500'
                } else {
                  color = 'text-primary-blue_light_3'
                }

                return (
                  <>
                    <span className={color + ' font-xs'}>{status}</span>
                  </>
                )
              }
            },
            {
              title: 'Payment Method',
              dataIndex: 'paymentMethod',
              width: 160,
              filters: [
                {
                  text: 'Credit Card',
                  value: 'credit card'
                },
                {
                  text: 'Paypal',
                  value: 'paypal'
                }
              ],
              onFilter: (value: any, record: any) =>
                record.paymentMethod
                  .toLowerCase()
                  .indexOf(value.toLowerCase()) === 0,
              render: (payment: string) => (
                <span className="text-secondary">{payment}</span>
              )
            }
          ]

          return (
            <Table
              rowKey="id"
              columns={columns}
              rowSelection={{
                ...rowSelection
              }}
              expandable={{
                expandedRowKeys,
                expandIcon: () => undefined
              }}
              dataSource={dataSource}
              pagination={{
                current,
                className: 'px-2',
                total: data.length,
                showTotal: (total) => `1 - 6 of ${total} items`,
                pageSize,
                showSizeChanger: true,
                onShowSizeChange: (current, value) => setPageSize(value),
                onChange: (page) => setCurrent(page)
              }}
              scroll={{ x: 900 }}
            />
          )
        }}
        tableData={data}
      />
    </div>
  )
}

export default OrderTable
