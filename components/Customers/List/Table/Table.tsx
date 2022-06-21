import { useState } from 'react'
import { Table, Switch } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'
import TableWrapper, {
  CustomerDataType,
  DataTypes
} from '@/components/Common/TableWrapper'
import { customDate } from '@/utils/customDate'
import Router from 'next/router'
import dayjs from 'dayjs'

const data: CustomerDataType[] = [
  {
    id: '#00004',
    name: 'Joan Dyer',
    date: customDate(10, 'years'),
    mail: 'joan@gmail.com',
    country: 'Germany',
    order: '02',
    phone: '203-111-1802',
    price: 2000
  },
  {
    id: '#51004',
    name: 'Anna Wilson',
    date: customDate(5, 'years'),
    mail: 'Annawilson@gmail.com',
    country: 'U.S.A',
    order: '06',
    phone: '203-111-1802',
    price: 1000
  },
  {
    id: '#1945',
    name: 'Jacob Lee',
    date: customDate(7, 'years'),
    mail: 'Jacob@gmail.com',
    country: 'U.K',
    order: '07',
    phone: '203-111-1802',
    price: 64000
  },
  {
    id: '#37094',
    name: 'Saly Grahan',
    date: customDate(16, 'years'),
    mail: 'Sally@gmail.com',
    country: 'Scotland',
    order: '08',
    phone: '203-111-1802',
    price: 12000
  },
  {
    id: '#30304',
    name: 'Nonton Kapersky',
    date: customDate(30, 'years'),
    mail: 'Nonton@gmail.com',
    country: 'Austria',
    order: '34',
    phone: '203-111-1802',
    price: 24000
  },
  {
    id: '#03084',
    name: 'Wilson Charity',
    date: customDate(2, 'years'),
    mail: 'Wilson@gmail.com',
    country: 'Barbados',
    order: '05',
    phone: '203-111-1802',
    price: 23000
  },
  {
    id: '#02004',
    name: 'Henry Love',
    date: customDate(7, 'years'),
    mail: 'Henry@gmail.com',
    country: 'Germany',
    order: '13',
    phone: '203-111-1802',
    price: 34000
  }
]

const CustomersTable = () => {
  const [current, setCurrent] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(7)

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
              width: 100,
              ...getColumnSearch('id'),
              render: (id) => {
                return (
                  <button
                    className="font-xs text-secondary cursor-pointer"
                    onClick={() =>
                      Router.push(
                        '/customers/details?id= ' + encodeURIComponent(id)
                      )
                    }
                  >
                    {id}
                  </button>
                )
              }
            },
            {
              title: 'Customer Name',
              dataIndex: 'name',
              ...getColumnSearch('name'),
              render: (name, record: any) => {
                return (
                  <button
                    type="button"
                    className="ml-4 customers__table__title cursor-pointer"
                    onClick={() =>
                      Router.push(
                        '/customers/details?id= ' +
                          encodeURIComponent(record.id)
                      )
                    }
                  >
                    {name}
                  </button>
                )
              }
            },
            {
              title: 'Mail',
              dataIndex: 'mail',
              ...getColumnSearch('mail'),
              render: (mail, record: any) => {
                return (
                  <button
                    type="button"
                    className="ml-4 customers__table__mail"
                    onClick={() =>
                      Router.push(
                        '/customers/details?id= ' +
                          encodeURIComponent(record.id)
                      )
                    }
                  >
                    {mail}
                  </button>
                )
              }
            },
            {
              title: 'Phone',
              dataIndex: 'phone',
              ...getColumnSearch('phone'),
              render: (phone, record: any) => {
                return (
                  <button
                    type="button"
                    className="ml-4 customers__table__phone"
                  >
                    {phone}
                  </button>
                )
              }
            },
            {
              title: 'Order',
              dataIndex: 'order',
              width: 100,
              sortDirections: ['descend'],
              sorter: (a: any, b: any) => a.order - b.order,
              render: (order: string) => (
                <span className="text-secondary">{order}</span>
              )
            },
            {
              title: 'Spent',
              dataIndex: 'price',
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
            }
          ]

          return (
            <Table
              className="customers__table"
              rowKey="id"
              columns={[
                ...columns,
                {
                  title: 'Actions',
                  fixed: 'right',
                  width: 100,
                  render: (_, record) => {
                    return (
                      <div className="text-center">
                        <div className="flex items-center justify-center">
                          <button
                            className="mr-3 hover:opacity-80"
                            onClick={() =>
                              Router.push(
                                '/customers/details?id= ' +
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
                showTotal: (total) => `1 - 6 of ${total} items`,
                pageSize,
                showSizeChanger: true,
                onShowSizeChange: (current, value) => setPageSize(value),
                onChange: (page) => setCurrent(page)
              }}
              scroll={{ x: 900 }}
            />
          )
        }}
        tableData={data}
      />
    </div>
  )
}

export default CustomersTable
