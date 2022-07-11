import { customDate } from '@/utils/customDate'
import Table, { ColumnsType } from 'antd/lib/table'
import Router from 'next/router'
import Header from './Header'
import { currencyFormatter } from '@/utils/currencyFormatter'
import Image from 'next/image'
import { Dropdown } from 'antd'
import { useState } from 'react'
import TableRender from '@/components/Common/Tables/TableRender'

interface DataType {
  orderID: number | string
  image: string
  fullName: string
  firstName: string
  lastName: string
  email: string
  country: string
  phone: string | number
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
    country: 'Germany',
    email: 'adam@gmail.com',
    title: 'Knot Crop',
    phone: '203-11-1803',
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
    email: 'dean@gmail.com',
    phone: '203-11-1803',
    country: 'Italy',
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
    email: 'mike@gmail.com',
    phone: '203-11-1803',
    title: 'Mini Jean',
    country: 'France',
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
    email: 'janem@gmail.com',
    phone: '203-11-1803',
    country: 'Russia',
    title: 'Tank Top',
    image: '/product-sm.png',
    date: customDate(1000, 'days'),
    price: 200,
    status: 'In Progress'
  },
  {
    orderID: 74412,
    title: 'Tube Top',
    country: 'Nigeria',
    fullName: 'Harry Potter',
    email: 'jane@gmail.com',
    phone: '203-11-1803',
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
    country: 'Ghana',
    fullName: 'Ben Spike',
    email: 'spike@gmail.com',
    firstName: 'Spike',
    lastName: 'Ben',
    phone: '203-11-1803',
    image: '/product-sm.png',
    date: customDate(8, 'years'),
    price: 880,
    status: 'Available'
  },
  {
    orderID: 61412,
    title: 'Tube Top',
    country: 'France',
    fullName: 'Angela Frank',
    firstName: 'Angela',
    email: 'angela@gmail.com',
    phone: '203-11-1803',
    lastName: 'Frank',
    image: '/product-sm.png',
    date: customDate(2, 'years'),
    price: 4580,
    status: 'Canceled'
  },
  {
    orderID: 19712,
    title: 'Tube Top',
    country: 'Togo',
    fullName: 'Elon Pete',
    firstName: 'Pete',
    email: 'pete@gmail.com',
    phone: '203-11-1803',
    lastName: 'Elone',
    image: '/product-sm.png',
    date: customDate(4, 'years'),
    price: 580,
    status: 'Due'
  }
]

const CustomersList = () => {
  const [dataSource, setDataSource] = useState<any[]>(data)

  const handleDelete = (orderID: string | number) => {
    const newData = dataSource.filter((item: any) => item.orderID !== orderID)
    setDataSource(newData)
  }

  return (
    <div className="pt-6 px-7 overflow-hidden">
      <Header />
      <TableRender
        title="All Customers"
        render={({ rowSelection, selectedRowKeys, setSelectedRowKeys }) => {
          const columns: ColumnsType<any[]> = [
            {
              title: <span className="relative -left-2">Customer ID</span>,
              dataIndex: 'orderID',
              width: 140,
              render: (id: string) => {
                return (
                  <button
                    type="button"
                    className="font-base text-primary-blue_dark_1 ml-3 z-50 relative -left-[25px]"
                    onClick={() =>
                      Router.push(
                        '/customers/details?id= ' + encodeURIComponent(id)
                      )
                    }
                  >
                    #{id}
                  </button>
                )
              }
            },
            {
              title: 'Customer Name',
              dataIndex: 'fullName',
              width: 200,
              render: (fullName, record: any) => {
                return (
                  <>
                    <div className="cm__table__info">
                      <div className="cm__table__name">
                        {record.lastName?.substring(0, 1)}
                        {record.firstName?.substring(0, 1)}
                      </div>
                      <div>
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
                        <span
                          className="text-secondary font-xs ml-3 -mt-[3px] block"
                          style={{
                            fontSize: '11.5px',
                            textTransform: 'lowercase'
                          }}
                        >
                          {record.email}
                        </span>
                      </div>
                    </div>
                  </>
                )
              }
            },
            {
              title: 'Country',
              dataIndex: 'country',
              width: 150,
              render: (country) => {
                return (
                  <span className="text-secondary font-base ml-1 capitalize">
                    {country}
                  </span>
                )
              }
            },
            {
              title: 'Phone',
              dataIndex: 'phone',
              width: 150,
              render: (phone) => {
                return (
                  <span className="text-secondary font-base ml-1">{phone}</span>
                )
              }
            },
            {
              title: 'Spent',
              dataIndex: 'price',
              width: 135,
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
              title: 'Last Order',
              dataIndex: 'date',
              width: 135,
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
              title: (
                <Dropdown
                  trigger={['click']}
                  overlay={
                    <>
                      <div className="cm__table__dropdown" key="dropdown">
                        <button className="cm__table__dropdown__item">
                          <Image
                            src="/icons/mail-dark.png"
                            alt="Send Email"
                            height={16}
                            width={16}
                            objectFit="contain"
                          />
                          <span className="ml-2">Send email to all</span>
                        </button>
                        <button
                          className="cm__table__dropdown__item"
                          onClick={() => {
                            if (selectedRowKeys.length > 0) {
                              const newData = dataSource.filter(
                                (item: any) =>
                                  selectedRowKeys.includes(item.orderID) ===
                                  false
                              )
                              setDataSource(newData)
                              setSelectedRowKeys([])
                            }
                          }}
                        >
                          <Image
                            src="/icons/remove.png"
                            alt="Remove"
                            height={16}
                            width={16}
                            objectFit="contain"
                          />
                          <span className="ml-2">Remove Selected</span>
                        </button>
                      </div>
                    </>
                  }
                  placement="bottom"
                >
                  <div className="flex relative items-center">
                    <div className="mb-1 relative  -right-[35px]">
                      <button className="text-secondary ">
                        <i className="fa fa-ellipsis-h" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </Dropdown>
              ),
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
                              onClick={() => handleDelete(record.orderID)}
                            >
                              <Image
                                src="/icons/remove.png"
                                alt="Delete"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Remove Selected</span>
                            </button>
                            <button className="cm__table__dropdown__item">
                              <Image
                                src="/icons/mail-dark.png"
                                alt="Mail"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Send email to all</span>
                            </button>
                          </div>
                        </>
                      }
                      placement="bottom"
                    >
                      <div className="flex relative items-center">
                        <div className="cm__table__action__icons cm__table__action__icons__mail">
                          <div className="mr-5">
                            <Image
                              src="/icons/mail.png"
                              alt="Mail"
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

export default CustomersList
