import { Key, useState } from 'react'
import { Table, Dropdown } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import dayjs from 'dayjs'
import Image from 'next/image'
import Router from 'next/router'
import { currencyFormatter } from '@/utils/currencyFormatter'

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

const customDate = (duration: number, unit: 'days' | 'years' | 'months') => {
  let _date

  if (unit === 'days') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/mm/YYYY')
  } else if (unit === 'years') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/mm/YYYY')
  } else if (unit === 'months') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/mm/YYYY')
  } else {
    _date = dayjs(new Date()).format('DD/mm/YYYY')
  }

  return _date
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Order ID',
    dataIndex: 'orderID',
    width: 110,
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
    width: 200,
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
              style={{
                fontWeight: 400
              }}
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
    title: 'Price',
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
  }
]

const OrdersTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])
  const [dataSource, setDataSource] = useState<DataType[]>(data)

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const handleDeleteOrder = (orderID: string | number) => {
    const newData = dataSource.filter(
      (item: DataType) => item.orderID !== orderID
    )
    setDataSource(newData)
  }

  return (
    <div className="mt-3 recent__orders__table">
      <Table
        rowSelection={rowSelection}
        columns={[
          ...columns,
          {
            title: '',
            key: 'operation',
            // fixed: 'right',
            width: 110,
            className: 'recent__orders__table__action',
            render: (_, record) => {
              return (
                <div className="text-right">
                  <Dropdown
                    trigger={['click']}
                    overlay={
                      <>
                        <div
                          className="recent__orders__table__dropdown"
                          key="dropdown"
                        >
                          <button
                            className="recent__orders__table__dropdown__item"
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
                          <button className="recent__orders__table__dropdown__item">
                            <Image
                              src="/icons/truck.png"
                              alt="Delivered"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                            <span className="ml-2">Mark as Delivered</span>
                          </button>
                          <button className="recent__orders__table__dropdown__item">
                            <Image
                              src="/icons/cash.png"
                              alt="Paid"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                            <span className="ml-2">Mark as Paid</span>
                          </button>
                          <button className="recent__orders__table__dropdown__item">
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
                            className="recent__orders__table__dropdown__item"
                            onClick={() => handleDeleteOrder(record.orderID)}
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
                      <div className="recent__orders__table__action__icons">
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
                      <div className="mb-1">
                        <button className="text-secondary">
                          <i className="fa fa-ellipsis-h" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </Dropdown>
                </div>
              )
            }
          }
        ]}
        rowKey="orderID"
        dataSource={dataSource}
        pagination={false}
        scroll={{ x: 975 }}
      />
    </div>
  )
}

export default OrdersTable
