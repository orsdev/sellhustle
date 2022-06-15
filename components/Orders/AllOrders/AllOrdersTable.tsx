import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import dayjs from 'dayjs'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'
import TableWrapper from '@/components/Common/TableWrapper'
import { useState } from 'react'

interface DataType {
  id: string
  orderID: string
  image: string
  customer: string
  item: number
  date: string
  title: string
  price: number
  status: string
  paymentMethod: string
  children?: DataType[]
}

const customDate = (duration: number, unit: 'days' | 'years' | 'months') => {
  let _date

  if (unit === 'days') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD MMM YYYY')
  } else if (unit === 'years') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD MMM YYYY')
  } else if (unit === 'months') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD MMM YYYY')
  } else {
    _date = dayjs(new Date()).format('DD MMM YYYY')
  }

  return _date
}

const data: DataType[] = [
  {
    id: '010',
    orderID: '#00004',
    customer: 'Ilesanmi Funmi',
    image: '/product-sm.png',
    item: 1,
    title: 'V-neck',
    date: customDate(10, 'years'),
    price: 1000,
    status: 'Canceled',
    paymentMethod: 'Credit Card',
    children: [
      {
        id: '0110',
        orderID: '#000104',
        image: '/product-sm.png',
        customer: 'Ilesanmi Funmi',
        item: 1,
        title: 'Turtle neck',
        date: customDate(10, 'years'),
        price: 200,
        status: 'In Progress',
        paymentMethod: 'Credit Card'
      },
      {
        id: '0150',
        orderID: '#020804',
        customer: 'Adeola Efunsetan',
        item: 2,
        image: '/avatar-lg.png',
        title: 'V-neck',
        date: customDate(10, 'years'),
        price: 9000,
        status: 'In Progress',
        paymentMethod: 'Credit Card'
      }
    ]
  },
  {
    id: '020',
    orderID: '#00008',
    image: '/product-sm.png',
    customer: 'Oke Busayo',
    item: 4,
    title: 'Knot Crop',
    date: customDate(2, 'years'),
    price: 25000,
    status: 'Available',
    paymentMethod: 'Paypal',
    children: [
      {
        id: '4320',
        orderID: '#320104',
        image: '/product-sm.png',
        customer: 'Ajani James',
        item: 5,
        title: 'Round Neck',
        date: customDate(10, 'years'),
        price: 200,
        status: 'In Progress',
        paymentMethod: 'Paypal'
      }
    ]
  },
  {
    id: '030',
    orderID: '#02004',
    customer: 'Jeremiah Olisa',
    image: '/avatar-lg.png',
    item: 3,
    title: 'Polo',
    date: customDate(6, 'years'),
    price: 8000,
    status: 'Completed',
    paymentMethod: 'Paypal'
  },
  {
    id: '060',
    orderID: '#07004',
    customer: 'Jeremiah Olisa',
    image: '/avatar-lg.png',
    item: 8,
    title: 'T shirt',
    date: customDate(6, 'years'),
    price: 5600,
    status: 'In Progress',
    paymentMethod: 'Credit Card'
  },
  {
    id: '090',
    orderID: '#07204',
    customer: 'Lola Alao',
    image: '/avatar-lg.png',
    item: 7,
    title: 'Sneakers',
    date: customDate(6, 'years'),
    price: 15600,
    status: 'Canceled',
    paymentMethod: 'Credit Card'
  },
  {
    id: '210',
    orderID: '#07214',
    customer: 'David Saul',
    image: '/avatar-lg.png',
    item: 3,
    title: 'Sneakers',
    date: customDate(8, 'years'),
    price: 15600,
    status: 'In Progress',
    paymentMethod: 'Credit Card'
  },
  {
    id: '980',
    orderID: '#07224',
    customer: 'Idinmu Korede',
    image: '/avatar-lg.png',
    item: 7,
    title: 'Sneakers',
    date: customDate(60, 'years'),
    price: 15600,
    status: 'Available',
    paymentMethod: 'Credit Card'
  },
  {
    id: '880',
    orderID: '#07224',
    customer: 'Blessing Favour',
    image: '/avatar-lg.png',
    item: 5,
    title: 'Sneakers',
    date: customDate(6, 'years'),
    price: 15600,
    status: 'In Progress',
    paymentMethod: 'Credit Card'
  }
]

const AllOrdersTable = () => {
  const [current, setCurrent] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(7)

  return (
    <div>
      <TableWrapper
        render={({
          getColumnSearch,
          rowSelection,
          dataSource,
          expandedRowKeys
        }) => {
          const columns: ColumnsType<DataType> = [
            {
              title: 'Order ID',
              dataIndex: 'orderID',
              width: 160,
              render: (id, record) => {
                return (
                  <>
                    <div className="all__orders__table__info">
                      <div className="flex">
                        <div
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '8px'
                          }}
                        >
                          <Image
                            src={record.image}
                            alt={record.title}
                            height={34}
                            width={34}
                            objectFit="contain"
                          />
                        </div>
                        <button
                          type="button"
                          className="font-base ml-2 all__orders__table__title"
                        >
                          {record.title}
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="font-base all__orders__table__id"
                    >
                      {id}
                    </button>
                  </>
                )
              },
              ...getColumnSearch('orderID')
            },
            {
              title: 'Customer',
              dataIndex: 'customer',
              render: (customer: string) => (
                <span className="text-secondary">{customer}</span>
              ),
              ...getColumnSearch('customer')
            },
            {
              title: 'Items',
              dataIndex: 'item',
              width: 110,
              sortDirections: ['descend'],
              sorter: (a: any, b: any) => a.item - b.item,
              render: (item: string) => (
                <span className="text-secondary">{item}</span>
              )
            },
            {
              title: 'Date',
              dataIndex: 'date',
              width: 140,
              sortDirections: ['descend'],
              sorter: (a: any, b: any) => dayjs(a.date).diff(dayjs(b.date)),
              render: (date) => {
                return (
                  <>
                    <div className="flex items-center">
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
              title: 'Price',
              dataIndex: 'price',
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
              title: 'Status',
              dataIndex: 'status',
              width: 110,
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
              onFilter: (value: any, record) =>
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
              onFilter: (value: any, record) =>
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
              className="all__orders__table"
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
                total: data.length,
                showTotal: (total) => `1 - 6 of ${total} items`,
                pageSize,
                showSizeChanger: true,
                onShowSizeChange: (current, value) => setPageSize(value),
                onChange: (page) => setCurrent(page)
              }}
              scroll={{ x: 1020 }}
            />
          )
        }}
        tableData={data}
      />
    </div>
  )
}

export default AllOrdersTable
