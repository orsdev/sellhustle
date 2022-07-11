import TableRender from '@/components/Common/Tables/TableRender'
import { Dropdown } from 'antd'
import Table from 'antd/lib/table'
import dayjs from 'dayjs'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import Header from './Header'

interface DataType {
  orderID: number | string
  image: string
  fullName: string
  firstName: string
  lastName: string
  phone: string
  email: string
  date: string
  verified: boolean
  status: string
}

const data: DataType[] = [
  {
    orderID: 23342,
    fullName: 'Adam Butcher',
    firstName: 'Adam',
    lastName: 'Butcher',
    image: '/product-sm.png',
    phone: '123-343-1719',
    email: 'adam@gmail.com',
    date: dayjs(new Date()).subtract(2, 'y').format('DD MMM YYYY'),
    verified: true,
    status: 'active'
  },
  {
    orderID: 54432,
    fullName: 'Dean John',
    firstName: 'Dean',
    lastName: 'John',
    phone: '783-343-1719',
    email: 'dean@gmail.com',
    image: '/product-sm.png',
    date: dayjs(new Date()).subtract(1, 'd').format('DD MMM YYYY'),
    verified: false,
    status: 'suspend'
  },
  {
    orderID: 24432,
    fullName: 'Pence Mike',
    firstName: 'Mike',
    lastName: 'Pence',
    phone: '325-343-1719',
    email: 'pence@gmail.com',
    image: '/product-sm.png',
    date: dayjs(new Date()).subtract(20, 'd').format('DD MMM YYYY'),
    verified: false,
    status: 'active'
  },
  {
    orderID: 64832,
    fullName: 'Jane Doe',
    firstName: 'Doe',
    lastName: 'Jane',
    phone: '432-343-1719',
    email: 'jane@gmail.com',
    image: '/product-sm.png',
    date: dayjs(new Date()).subtract(30, 'd').format('DD MMM YYYY'),
    verified: true,
    status: 'pending'
  },
  {
    orderID: 74412,
    fullName: 'Harry Potter',
    firstName: 'Potter',
    lastName: 'Harry',
    phone: '832-343-1719',
    email: 'harry@gmail.com',
    image: '/product-sm.png',
    date: dayjs(new Date()).subtract(3, 'y').format('DD MMM YYYY'),
    verified: false,
    status: 'pending'
  },
  {
    orderID: 95412,
    fullName: 'Ben Spike',
    firstName: 'Spike',
    lastName: 'Ben',
    phone: '632-343-1719',
    email: 'ben@gmail.com',
    image: '/product-sm.png',
    date: dayjs(new Date()).subtract(5, 'd').format('DD MMM YYYY'),
    verified: true,
    status: 'active'
  },
  {
    orderID: 61412,
    fullName: 'Angela Frank',
    firstName: 'Angela',
    lastName: 'Frank',
    phone: '254-343-1719',
    email: 'frank@gmail.com',
    image: '/product-sm.png',
    date: dayjs(new Date()).subtract(50, 'd').format('DD MMM YYYY'),
    verified: true,
    status: 'suspend'
  },
  {
    orderID: 19712,
    fullName: 'Elon Pete',
    firstName: 'Pete',
    lastName: 'Elone',
    phone: '765-343-1719',
    email: 'pete@gmail.com',
    image: '/product-sm.png',
    date: dayjs(new Date()).subtract(34, 'd').format('DD MMM YYYY'),
    verified: true,
    status: 'pending'
  }
]

const EmployeeList = () => {
  const [dataSource, setDataSource] = useState<any[]>(data)

  return (
    <div className="pt-6 px-7 overflow-hidden">
      <Header />
      <div className="bg-white">
        <TableRender
          title="All Users"
          render={({ rowSelection, selectedRowKeys, setSelectedRowKeys }) => {
            const columns = [
              {
                title: <span className="relative -left-2">User Name </span>,
                dataIndex: 'fullName',
                width: 220,
                render: (fullName: string, record: any) => {
                  return (
                    <>
                      <div className="cm__table__info relative -left-4">
                        <div className="cm__table__name">
                          {record.lastName?.substring(0, 1)}
                          {record.firstName?.substring(0, 1)}
                        </div>
                        <div>
                          <button
                            type="button"
                            className="font-base text-primary-blue_dark_1 ml-3"
                            style={{
                              fontWeight: 400,
                              left: 0
                            }}
                            onClick={() =>
                              Router.push(
                                '/user/details?id= ' +
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
                title: 'Phone',
                dataIndex: 'phone',
                width: 160,
                render: (phone: string) => {
                  return (
                    <span className="text-secondary font-base ml-1">
                      {phone}
                    </span>
                  )
                }
              },
              {
                title: 'Verified',
                dataIndex: 'verified',
                width: 160,
                render: (verified: boolean) => {
                  return (
                    <div className="text-secondary font-base flex items-center">
                      {verified && (
                        <Image
                          src="/icons/check-success.png"
                          alt="Email Verified"
                          height={13}
                          width={13}
                          objectFit="contain"
                        />
                      )}
                      {!verified && (
                        <Image
                          src="/icons/warn.png"
                          alt="Email Not Verified"
                          height={13}
                          width={13}
                          objectFit="contain"
                        />
                      )}
                      <span className="ml-2">Email</span>
                    </div>
                  )
                }
              },
              {
                title: 'Last Login',
                dataIndex: 'date',
                width: 160,
                render: (date: string) => {
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
                title: 'Status',
                dataIndex: 'status',
                width: 160,
                render: (status: string) => {
                  const formattedStatus = status.toLowerCase()
                  let color = 'text-primary-green_dark_1 bg-green-100'

                  if (formattedStatus === 'active') {
                    color = 'text-primary-green_dark_1 bg-green-100'
                  } else if (formattedStatus === 'inactive') {
                    color = 'text-primary-green-500 bg-blue-100'
                  } else if (formattedStatus === 'suspend') {
                    color = 'text-primary-danger bg-red-100'
                  } else if (formattedStatus === 'pending') {
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
                            <span className="ml-2">Send Email</span>
                          </button>
                          <button className="cm__table__dropdown__item">
                            <Image
                              src="/icons/suspend.png"
                              alt="Suspend"
                              height={13}
                              width={13}
                              objectFit="contain"
                            />
                            <span className="ml-2">Suspend User</span>
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
                render: (_: any, record: any) => {
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
                                    '/user/details?id= ' +
                                      encodeURIComponent(record.orderID)
                                  )
                                }
                              >
                                <Image
                                  src="/icons/eye.png"
                                  alt="View"
                                  height={16}
                                  width={16}
                                  objectFit="contain"
                                />
                                <span className="ml-2">View Details</span>
                              </button>
                              <button className="cm__table__dropdown__item">
                                <Image
                                  src="/icons/reset.png"
                                  alt="Reset"
                                  height={16}
                                  width={16}
                                  objectFit="contain"
                                />
                                <span className="ml-2">Reset Password</span>
                              </button>
                              <button className="cm__table__dropdown__item">
                                <Image
                                  src="/icons/suspend.png"
                                  alt="Suspend"
                                  height={13}
                                  width={13}
                                  objectFit="contain"
                                />
                                <span className="ml-2">Suspend User</span>
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
                                src="/icons/mail.png"
                                alt="Mail"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                            </div>
                            <div>
                              <Image
                                src="/icons/suspend.png"
                                alt="Suspend"
                                height={13}
                                width={13}
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
                  className: 'cm__table__pagination pl-2 py-5 pt-1',
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
    </div>
  )
}

export default EmployeeList
