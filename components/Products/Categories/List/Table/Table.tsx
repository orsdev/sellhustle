import { useState } from 'react'
import { Table } from 'antd'
import Router from 'next/router'
import { ColumnsType } from 'antd/lib/table'
import Image from 'next/image'
import TableWrapper, {
  DataTypes,
  ProductDataType
} from '@/components/Common/TableWrapper'
import { customDate } from '@/utils/customDate'
import dayjs from 'dayjs'

const data: Partial<ProductDataType>[] = [
  {
    id: '#00004',
    date: customDate(10, 'years'),
    category: 'watch',
    status: 'Published'
  },
  {
    id: '#51004',
    date: customDate(5, 'years'),
    category: 'gaming',
    status: 'Published'
  },
  {
    id: '#1945',
    category: 'entertainment',
    date: customDate(7, 'years'),
    status: 'Scheduled'
  },
  {
    id: '#54245',
    category: 'Smart Phone',
    date: customDate(2, 'years'),
    status: 'Hidden'
  },
  {
    id: '#10745',
    category: 'Fashion',
    date: customDate(3, 'years'),
    status: 'Scheduled'
  },
  {
    id: '#3905',
    category: 'gaming',
    date: customDate(10, 'years'),
    status: 'Hidden'
  },
  {
    id: '#9545',
    category: 'entertainment',
    date: customDate(5, 'years'),
    status: 'Published'
  },
  {
    id: '#8545',
    category: 'Food',
    date: customDate(7, 'months'),
    status: 'Scheduled'
  },
  {
    id: '#19470',
    category: 'Toys',
    date: customDate(70, 'days'),
    status: 'Hidden'
  },
  {
    id: '#261945',
    category: 'entertainment',
    date: customDate(6, 'years'),
    status: 'Scheduled'
  },
  {
    id: '#25945',
    category: 'entertainment',
    date: customDate(9, 'years'),
    status: 'Published'
  }
]

const CustomersTable = () => {
  const [current, setCurrent] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(12)

  return (
    <div>
      <TableWrapper
        render={({
          getColumnSearch,
          rowSelection,
          dataSource,
          expandedRowKeys
        }) => {
          const columns: ColumnsType<DataTypes> = [
            {
              title: 'ID',
              dataIndex: 'id',
              ...getColumnSearch('id'),
              render: (id) => {
                return (
                  <button
                    className="font-xs text-secondary cursor-pointer"
                    onClick={() =>
                      Router.push(
                        '/products/categories/edit?id= ' +
                          encodeURIComponent(id)
                      )
                    }
                  >
                    {id}
                  </button>
                )
              }
            },
            {
              title: 'Category',
              dataIndex: 'category',
              ...getColumnSearch('category'),
              render: (category) => {
                return (
                  <button
                    type="button"
                    className="text-primary-blue_dark_2 cursor-pointer capitalize"
                  >
                    {category}
                  </button>
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
              title: 'Status',
              dataIndex: 'status',
              filters: [
                {
                  text: 'Published',
                  value: 'published'
                },
                {
                  text: 'Scheduled',
                  value: 'scheduled'
                },
                {
                  text: 'Hidden',
                  value: 'hidden'
                }
              ],
              onFilter: (value: any, record: any) =>
                record.status.toLowerCase().indexOf(value.toLowerCase()) === 0,
              render: (status) => {
                const formattedStatus = status.toLowerCase()
                let color = 'text-primary-green_dark_1'

                if (formattedStatus === 'published') {
                  color = 'text-primary-green_dark_1'
                } else if (formattedStatus === 'scheduled') {
                  color = 'text-primary-blue_light_3'
                } else if (formattedStatus === 'hidden') {
                  color = 'text-red-500'
                }

                return (
                  <>
                    <span className={color + ' font-xs'}>{status}</span>
                  </>
                )
              }
            }
          ]

          return (
            <Table
              className="categories__list__table"
              rowKey="id"
              columns={[
                ...columns,
                {
                  title: 'Actions',
                  fixed: 'right',
                  width: 120,
                  render: (_, record) => {
                    return (
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <button
                            className="mr-3 hover:opacity-80"
                            onClick={() =>
                              Router.push(
                                '/products/categories/edit?id= ' +
                                  encodeURIComponent(record.id)
                              )
                            }
                          >
                            <Image
                              src="/icons/edit-light.png"
                              alt="Edit"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                          </button>
                          <button className="hover:opacity-80">
                            <Image
                              src="/icons/delete-light.png"
                              alt="Delete"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                          </button>
                        </div>
                      </div>
                    )
                  }
                }
              ]}
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
                className: 'px-2',
                total: data.length,
                showTotal: (total) => `1 - ${data.length} of ${total} items`,
                pageSize,
                showSizeChanger: true,
                onShowSizeChange: (current, value) => setPageSize(value),
                onChange: (page) => setCurrent(page)
              }}
              scroll={{ x: 700 }}
            />
          )
        }}
        tableData={data}
      />
    </div>
  )
}

export default CustomersTable
