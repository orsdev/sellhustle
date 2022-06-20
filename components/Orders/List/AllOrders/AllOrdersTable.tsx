import { useState } from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import dayjs from 'dayjs'
import Image from 'next/image'
import Router from 'next/router'
import { currencyFormatter } from '@/utils/currencyFormatter'
import TableWrapper, { DataTypes } from '@/components/Common/TableWrapper'
import { customDate } from '@/utils/customDate'

const data: DataTypes[] = [
  {
    id: '010',
    orderID: '#00004',
    customer: 'Ilesanmi Funmi',
    image: '/product-sm.png',
    item: 1,
    name: 'V-neck',
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
        name: 'Turtle neck',
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
        name: 'V-neck',
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
    name: 'Knot Crop',
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
        name: 'Round Neck',
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
    name: 'Polo',
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
    name: 'T shirt',
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
    name: 'Sneakers',
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
    name: 'Sneakers',
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
    name: 'Sneakers',
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
    name: 'Sneakers',
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
          expandedRowKeys,
          onGetRowID,
          onRemoveRowID
        }) => {
          const columns: ColumnsType<DataTypes> = [
            {
              title: 'Order ID',
              dataIndex: 'orderID',
              width: 150,
              ...getColumnSearch('orderID'),
              render: (id, record: any) => {
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
                            alt={record.name}
                            height={34}
                            width={34}
                            objectFit="contain"
                          />
                        </div>
                        <button
                          type="button"
                          className="font-base ml-2 all__orders__table__title"
                          onClick={() =>
                            Router.push(
                              '/orders/details?id= ' + encodeURIComponent(id)
                            )
                          }
                        >
                          {record.name}
                        </button>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="font-base all__orders__table__id"
                      onClick={() =>
                        Router.push(
                          '/orders/details?id= ' + encodeURIComponent(id)
                        )
                      }
                    >
                      {id}
                    </button>
                  </>
                )
              }
            },
            {
              title: 'Customer',
              dataIndex: 'customer',
              width: 140,
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
              width: 100,
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
              className="all__orders__table"
              rowKey="id"
              columns={[
                ...columns,
                {
                  title: '',
                  width: 100,
                  render: (_, record) => {
                    return (
                      <div className="text-center all__orders__table__icon">
                        <div className="flex items-center justify-center">
                          {expandedRowKeys.indexOf(record.id) === -1 && (
                            <button
                              className="mr-3 hover:opacity-80"
                              onClick={() =>
                                onGetRowID && onGetRowID(record?.id)
                              }
                            >
                              <Image
                                src="/icons/collapse.png"
                                alt="Collapse"
                                height={10}
                                width={10}
                                objectFit="contain"
                              />
                            </button>
                          )}
                          {expandedRowKeys.indexOf(record.id) >= 0 && (
                            <button
                              className="hover:opacity-80 flex justify-center items-center bg-primary-blue_light_2 w-7 h-7 rounded-full"
                              onClick={() =>
                                onRemoveRowID && onRemoveRowID(record?.id)
                              }
                            >
                              <Image
                                src="/icons/expand.png"
                                alt="Expand"
                                height={10}
                                width={10}
                                objectFit="contain"
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    )
                  }
                }
              ]}
              rowSelection={{
                ...rowSelection,
                selectedRowKeys: expandedRowKeys
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
