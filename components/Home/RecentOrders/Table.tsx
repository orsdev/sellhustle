import React, { useState } from 'react'
import { Table, Dropdown, Menu } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import dayjs from 'dayjs'
import Image from 'next/image'

interface DataType {
  key: React.Key
  image: string
  date: string
  title: string
  price: number
  status: string
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

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 200,
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => a.title.localeCompare(b.title),
    render: (_, record) => {
      return (
        <>
          <div className="recent__orders__table__info">
            <div className="recent__orders__table__image">
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
              className="font-base text-primary-blue_dark_1 ml-3"
            >
              {record.title}
            </button>
          </div>
        </>
      )
    }
  },
  {
    title: 'Date',
    dataIndex: 'date',
    width: 150,
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
          <span className="font-xs text-primary-blue_dark_1">
            <b>&#65284;</b>
            {price}
          </span>
        </>
      )
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => a.status.localeCompare(b.status),
    render: (status) => {
      const formattedStatus = status.toLowerCase()
      let color = 'text-primary-green_dark_1'

      if (formattedStatus === 'available') {
        color = 'text-primary-green_dark_1'
      } else if (formattedStatus === 'completed') {
        color = 'text-green-500'
      } else {
        color = 'text-primary-blue_light_3'
      }

      return (
        <>
          <span className={color + ' font-xs'}>{status}</span>
        </>
      )
    }
  }
]

const data: DataType[] = [
  {
    key: 0,
    title: 'Knot Crop',
    image: '/product-sm.png',
    date: customDate(2, 'years'),
    price: 200,
    status: 'Available'
  },
  {
    key: 1,
    title: 'V-neck',
    image: '/product-sm.png',
    date: customDate(10, 'years'),
    price: 1000,
    status: 'In Progress'
  },
  {
    key: 2,
    title: 'Mini Jean',
    image: '/product-sm.png',
    date: customDate(10, 'months'),
    price: 500,
    status: 'Completed'
  },
  {
    key: 3,
    title: 'Tank Top',
    image: '/product-sm.png',
    date: customDate(1000, 'days'),
    price: 200,
    status: 'In Progress'
  },
  {
    key: 4,
    title: 'Tube Top',
    image: '/product-sm.png',
    date: customDate(4, 'years'),
    price: 580,
    status: 'Available'
  }
]

const OrdersTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [dataSource, setDataSource] = useState<DataType[]>(data)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
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
        scroll={{ x: 700 }}
      />
    </div>
  )
}

export default OrdersTable
