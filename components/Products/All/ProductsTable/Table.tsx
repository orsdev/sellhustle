import Router from 'next/router'
import Image from 'next/image'
import Table, { ColumnsType } from 'antd/lib/table'
import { useState } from 'react'
import { Dropdown } from 'antd'
import { currencyFormatter } from '@/utils/currencyFormatter'
import TableRender from '@/components/Common/Tables/TableRender'

interface DataType {
  orderID: number | string
  image: string
  sku: string
  stock: string | number
  category: string
  title: string
  price: number
}

const data: DataType[] = [
  {
    orderID: '010',
    sku: 'UY3751',
    category: 'Gadgets, Fitbit, Tracker',
    image: '/products/1.png',
    stock: 1,
    title: 'V-neck',
    price: 1000
  },
  {
    orderID: '020',
    sku: 'Q2WE2',
    image: '/products/2.png',
    category: 'Fashion',
    stock: 4,
    title: 'Pure Cotton | Red Bag',
    price: 25000
  },
  {
    orderID: '030',
    sku: 'UY3752',
    category: 'Headphone, Gadgets',
    image: '/products/3.png',
    stock: 3,
    title: 'Pure Cotton | Red Bag',
    price: 8000
  },
  {
    orderID: '060',
    sku: 'RW2343',
    category: 'Fashion',
    image: '/products/4.png',
    stock: 8,
    title: 'T shirt',
    price: 5600
  },
  {
    orderID: '090',
    sku: 'YT2343',
    category: 'Fashion',
    image: '/products/5.png',
    stock: 7,
    title: 'Mic Blue with Wire',
    price: 15600
  },
  {
    orderID: '210',
    sku: 'MN3353',
    category: 'Fashion',
    image: '/products/2.png',
    stock: 3,
    title: 'Sneakers',
    price: 15600
  },
  {
    orderID: '980',
    sku: 'MN2353',
    category: 'Fashion',
    image: '/products/4.png',
    stock: 7,
    title: 'Sneakers',
    price: 15600
  },
  {
    orderID: '880',
    sku: 'MN2353',
    category: 'Fashion',
    image: '/products/1.png',
    stock: 5,
    title: 'Sneakers',
    price: 15600
  }
]

const TableProducts = () => {
  const [dataSource, setDataSource] = useState<any[]>(data)

  const handleDelete = (orderID: string | number) => {
    const newData = dataSource.filter((item: any) => item.orderID !== orderID)
    setDataSource(newData)
  }

  return (
    <div className="bg-white">
      <TableRender
        title="All Products"
        render={({ rowSelection }) => {
          const columns: ColumnsType<any[]> = [
            {
              title: <span className="relative -left-1">Name</span>,
              dataIndex: 'title',
              render: (title: string, record: any) => {
                return (
                  <div className="flex items-center relative -left-[22px] pl-3">
                    <div
                      className="mr-1"
                      style={{
                        width: '50px',
                        height: '50px'
                      }}
                    >
                      <Image
                        src={record.image}
                        alt={record.title}
                        height={50}
                        width={50}
                        objectFit="contain"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="font-base text-primary-blue_dark_1"
                        style={{
                          fontWeight: 500
                        }}
                        onClick={() =>
                          Router.push(
                            '/products/edit?id= ' +
                              encodeURIComponent(record.orderID)
                          )
                        }
                      >
                        {title}
                      </button>
                    </div>
                  </div>
                )
              }
            },
            {
              title: 'SKU',
              dataIndex: 'sku',
              width: 95,
              render: (sku: string) => (
                <span className="text-secondary">{sku}</span>
              )
            },
            {
              title: 'Stock',
              dataIndex: 'stock',
              width: 95,
              render: (stock: string) => (
                <span className="text-secondary">{stock}</span>
              )
            },
            {
              title: 'Price',
              dataIndex: 'price',
              width: 150,
              render: (price: number) => {
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
              title: 'Category',
              dataIndex: 'category',
              width: 180,
              render: (category: string) => (
                <span className="text-secondary font-xs">{category}</span>
              )
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
                            <button className="cm__table__dropdown__item">
                              <Image
                                src="/icons/edit.png"
                                alt="Edit Row"
                                height={16}
                                width={16}
                                objectFit="contain"
                              />
                              <span className="ml-2">Edit Selected</span>
                            </button>
                            <button
                              className="cm__table__dropdown__item"
                              onClick={() => handleDelete(record.orderID)}
                            >
                              <Image
                                src="/icons/remove.png"
                                alt="Delete Row"
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
  )
}

export default TableProducts
