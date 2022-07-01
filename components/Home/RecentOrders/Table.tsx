import React, { useState } from 'react'
import { Table, Dropdown, Menu } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import dayjs from 'dayjs'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'

interface DataType {
  key: React.Key
  orderID: number
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

const customDate = (duration: number, unit: 'days' | 'years' | 'months') => {
  let _date

  if (unit === 'days') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/MMM/YYYY')
  } else if (unit === 'years') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/MMM/YYYY')
  } else if (unit === 'months') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/MMM/YYYY')
  } else {
    _date = dayjs(new Date()).format('DD MMM YYYY')
  }

  return _date
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Order ID',
    dataIndex: 'orderID',
    render: (id: string) => {
      return (
        <button
          type="button"
          className="font-base text-primary-blue_dark_1 ml-3"
        >
          #{id}
        </button>
      )
    }
  },
  {
    title: 'Customer',
    dataIndex: 'fullName',
    width: 180,
    render: (fullName, record) => {
      return (
        <>
          <div className="recent__orders__table__info">
            <div className="recent__orders__table__name">
              {record.lastName?.substring(0, 1)}
              {record.firstName?.substring(0, 1)}
            </div>
            <button
              type="button"
              className="font-base text-primary-blue_dark_1 ml-3"
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
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => dayjs(a.purchased).diff(dayjs(b.purchased)),
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
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => dayjs(a.date).diff(dayjs(b.date)),
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
    title: 'Price',
    dataIndex: 'price',
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => a.price - b.price,
    render: (price) => {
      return (
        <>
          <span
            className="font-xs text-primary-blue_dark_1"
            style={{
              fontWeight: 600
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
            minWidth: '80px'
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
    key: 0,
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
    key: 1,
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
    key: 2,
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
    key: 3,
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
    key: 4,
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
  }
]

const OrdersTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [dataSource, setDataSource] = useState<DataType[]>(data)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const handleDelete = (key: React.Key) => {
    const newData = dataSource.filter((item) => item.key !== key)
    setDataSource(newData)
  }

  return (
    <div className="mt-7 recent__orders__table">
      <Table
        rowSelection={rowSelection}
        columns={[
          ...columns,
          {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            className: 'recent__orders__table__action',
            render: (_, record) => {
              return (
                <div className="text-center">
                  <Dropdown
                    overlay={
                      <>
                        <Menu
                          items={[
                            {
                              key: 'edit',
                              label: (
                                <button className="recent__orders__table__edit">
                                  <Image
                                    src="/icons/light/edit-xs.png"
                                    alt="Edit Record"
                                    height={10}
                                    width={10}
                                    objectFit="contain"
                                  />
                                  <span className="ml-2">Edit</span>
                                </button>
                              )
                            },
                            {
                              key: 'delete',
                              label: (
                                <button
                                  className="recent__orders__table__delete"
                                  onClick={() => handleDelete(record.key)}
                                >
                                  <Image
                                    src="/icons/light/delete-xs.png"
                                    alt="Deleted Record"
                                    height={10}
                                    width={10}
                                    objectFit="contain"
                                  />
                                  <span className="ml-2">Delete</span>
                                </button>
                              )
                            }
                          ]}
                        />
                      </>
                    }
                    placement="bottom"
                    arrow
                    className="ml-10"
                  >
                    <button className="text-secondary -ml-5">
                      <i className="fa fa-ellipsis-h" aria-hidden="true" />
                    </button>
                  </Dropdown>
                </div>
              )
            }
          }
        ]}
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: 940 }}
      />
    </div>
  )
}

export default OrdersTable
