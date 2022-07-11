import { Dropdown } from 'antd'
import Table, { ColumnsType } from 'antd/lib/table'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import TableRender from '@/components/Common/Tables/TableRender'
import { currencyFormatter } from '@/utils/currencyFormatter'
import { customDate } from '@/utils/customDate'
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
  const [dataSource, setDataSource] = useState<any[]>(data)

  const handleDelete = (orderID: string | number) => {
    const newData = dataSource.filter((item: any) => item.orderID !== orderID)
    setDataSource(newData)
  }

  return (
    <div className="pt-6 px-7 overflow-hidden">
      <Header />
      <TableRender
        title="All Orders"
        render={({ rowSelection }) => {
          const columns: ColumnsType<any[]> = [
            {
              title: <span className="relative -left-2">Order ID</span>,
              dataIndex: 'orderID',
              width: 99,
              render: (id: string) => {
                return (
                  <button
                    type="button"
                    className="font-base text-primary-blue_dark_1 ml-3 z-50 relative -left-[25px]"
                    onClick={() =>
                      Router.push(
                        '/orders/details?id= ' + encodeURIComponent(id)
                      )
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
              render: (fullName, record: any) => {
                return (
                  <>
                    <div className="cm__table__info relative -left-2">
                      <div className="cm__table__name">
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
                            '/orders/details?id= ' +
                              encodeURIComponent(record.orderID)
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
                      <span className="text-secondary font-base ml-1">
                        {date}
                      </span>
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
            },
            {
              title: '',
              key: 'operation',
              width: 98,
              className: 'cm__table__action',
              render: (_, record: any) => {
                return (
                  <div className="text-center">
                    <Dropdown
                      trigger={['click']}
                      overlay={
                        <>
                          <div className="cm__table__dropdown" key="dropdown">
                            <button
                              className="cm__table__dropdown__item"
                              onClick={() =>
                                Router.push(
                                  '/orders/details?id= ' +
                                    encodeURIComponent(record.orderID)
                                )
                              }
                            >
                              <Image
                                src="/icons/eye.png"
                                alt="Order Details"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Order Details</span>
                            </button>
                            <button className="cm__table__dropdown__item">
                              <Image
                                src="/icons/truck.png"
                                alt="Delivered"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Mark as Delivered</span>
                            </button>
                            <button className="cm__table__dropdown__item">
                              <Image
                                src="/icons/cash.png"
                                alt="Paid"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Mark as Paid</span>
                            </button>
                            <button className="cm__table__dropdown__item">
                              <Image
                                src="/icons/invoice.png"
                                alt="Send Invoice"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Send Invoice</span>
                            </button>
                            <button
                              className="cm__table__dropdown__item"
                              onClick={() => handleDelete(record.orderID)}
                            >
                              <Image
                                src="/icons/remove.png"
                                alt="Deleted"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Remove Order</span>
                            </button>
                          </div>
                        </>
                      }
                      placement="bottom"
                    >
                      <div className="flex relative items-center">
                        <div className="cm__table__action__icons cm__table__action__icons__view">
                          <div className="mr-5">
                            <Image
                              src="/icons/truck.png"
                              alt="Truck"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                          </div>
                          <div>
                            <Image
                              src="/icons/eye.png"
                              alt="View"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                          </div>
                        </div>
                        <div className="mb-1 relative  -right-[35px]">
                          <button className="text-secondary ">
                            <i
                              className="fa fa-ellipsis-h"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </Dropdown>
                  </div>
                )
              }
            }
          ]

          return (
            <Table
              rowSelection={rowSelection}
              className="cm__table__hover"
              columns={columns}
              rowKey="orderID"
              dataSource={dataSource}
              scroll={{ x: 985 }}
              pagination={{
                total: Math.floor(dataSource.length * 4),
                showSizeChanger: false,
                pageSize: 10,
                position: ['bottomLeft'],
                className: 'cm__table__pagination cm-border h-20',
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

export default SalesOrder
