import { customDate } from '@/utils/customDate'
import Table, { ColumnsType } from 'antd/lib/table'
import Router from 'next/router'
import { useState } from 'react'
import { Dropdown } from 'antd'
import Image from 'next/image'
import TableRender from '@/components/Common/Tables/TableRender'

interface DataType {
  orderID: number | string
  category: string
  date: string
  status: string
}

const data: DataType[] = [
  {
    orderID: 23342,
    category: 'watch',
    date: customDate(2, 'years'),
    status: 'Available'
  },
  {
    orderID: 54432,
    category: 'smart phones',
    date: customDate(10, 'years'),
    status: 'Canceled'
  },
  {
    orderID: 24432,
    category: 'Sofa',
    date: customDate(10, 'months'),
    status: 'Completed'
  },
  {
    orderID: 64832,
    category: 'Entertainment',
    date: customDate(1000, 'days'),
    status: 'In Progress'
  },
  {
    orderID: 74412,
    category: 'Gaming devices',
    date: customDate(4, 'years'),
    status: 'Due'
  },
  {
    orderID: 95412,
    category: 'Electronin Equipment',
    date: customDate(8, 'years'),
    status: 'Available'
  },
  {
    orderID: 61412,
    category: 'bedroom set',
    date: customDate(2, 'years'),
    status: 'Canceled'
  },
  {
    orderID: 19712,
    category: 'Watch',
    date: customDate(4, 'years'),
    status: 'Due'
  }
]

const CategoriesTable = () => {
  const [dataSource, setDataSource] = useState<any[]>(data)

  const handleDelete = (orderID: string | number) => {
    const newData = dataSource.filter((item: any) => item.orderID !== orderID)
    setDataSource(newData)
  }

  return (
    <div className="bg-white">
      <TableRender
        title="All Categories"
        render={({ rowSelection }) => {
          const columns: ColumnsType<any[]> = [
            {
              title: <span className="relative -left-5">ID</span>,
              dataIndex: 'orderID',
              width: 180,
              render: (id: string) => {
                return (
                  <button
                    type="button"
                    className="font-base text-primary-blue_dark_1 relative -left-[22px]"
                    onClick={() =>
                      Router.push(
                        '/products/categories/edit?id= ' +
                          encodeURIComponent(id)
                      )
                    }
                  >
                    #{id}
                  </button>
                )
              }
            },
            {
              title: 'Category',
              dataIndex: 'category',
              width: 220,
              render: (category: string) => (
                <span className="text-secondary font-xs">{category}</span>
              )
            },
            {
              title: 'Date',
              dataIndex: 'date',
              width: 160,
              render: (date) => {
                return (
                  <>
                    <div className="flex items-center">
                      <span className="text-secondary font-base">{date}</span>
                    </div>
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
                    className={`${color} font-xs py-[3px] px-[7px] rounded-md inline-block text-center`}
                    style={{
                      minWidth: '80px',
                      fontSize: '12px'
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
              width: 50,
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
                                  '/products/categories/edit?id= ' +
                                    encodeURIComponent(record.orderID)
                                )
                              }
                            >
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
                      <div className="mb-1 relative text-right pr-5">
                        <button className="text-secondary ">
                          <i className="fa fa-ellipsis-h" aria-hidden="true" />
                        </button>
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

export default CategoriesTable
