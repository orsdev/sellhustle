import { useState } from 'react'
import Router from 'next/router'
import { Table, Switch } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'
import TableWrapper, {
  DataTypes,
  ProductDataType
} from '@/components/Common/TableWrapper'

const data: ProductDataType[] = [
  {
    id: '010',
    sku: '#00004',
    category: 'Fashion',
    image: '/product-sm.png',
    stock: 1,
    published: true,
    name: 'V-neck',
    price: 1000,
    children: [
      {
        id: '0110',
        sku: '#000104',
        image: '/product-sm.png',
        category: 'Fashion',
        stock: 1,
        published: true,
        name: 'Turtle neck',
        price: 200
      },
      {
        id: '0150',
        sku: '#020804',
        category: 'Fashion',
        stock: 2,
        image: '/avatar-lg.png',
        published: false,
        name: 'V-neck',
        price: 9000
      }
    ]
  },
  {
    id: '020',
    sku: '#00008',
    image: '/product-sm.png',
    category: 'Fashion',
    stock: 4,
    published: false,
    name: 'Knot Crop',
    price: 25000,
    children: [
      {
        id: '4320',
        image: '/avatar-lg.png',
        sku: '#320104',
        published: true,
        category: 'Fashion',
        stock: 5,
        name: 'Round Neck',
        price: 200
      }
    ]
  },
  {
    id: '030',
    sku: '#02004',
    category: 'Fashion',
    image: '/product-sm.png',
    stock: 3,
    published: true,
    name: 'Polo',
    price: 8000
  },
  {
    id: '060',
    sku: '#07004',
    category: 'Fashion',
    image: '/avatar-lg.png',
    stock: 8,
    published: false,
    name: 'T shirt',
    price: 5600
  },
  {
    id: '090',
    sku: '#07204',
    category: 'Fashion',
    image: '/product-sm.png',
    stock: 7,
    published: true,
    name: 'Sneakers',
    price: 15600
  },
  {
    id: '210',
    sku: '#07214',
    category: 'Fashion',
    image: '/avatar-lg.png',
    stock: 3,
    published: false,
    name: 'Sneakers',
    price: 15600
  },
  {
    id: '980',
    sku: '#07224',
    category: 'Fashion',
    image: '/avatar-lg.png',
    stock: 7,
    published: false,
    name: 'Sneakers',
    price: 15600
  },
  {
    id: '880',
    sku: '#07224',
    category: 'Fashion',
    image: '/product-sm.png',
    stock: 5,
    published: true,
    name: 'Sneakers',
    price: 15600
  }
]

const TableProducts = () => {
  const [current, setCurrent] = useState<number>(1)
  const [pageSize, setPageSize] = useState<number>(7)

  const onPublish = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

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
              title: 'SKU',
              dataIndex: 'sku',
              width: 160,
              ...getColumnSearch('sku')
            },
            {
              title: 'Product Name',
              dataIndex: 'name',
              ...getColumnSearch('name'),
              render: (name, record: any) => {
                return (
                  <div className="table__products__name">
                    <div className="flex">
                      <div
                        style={{
                          width: '34px',
                          height: '34px'
                        }}
                      >
                        <Image
                          src={record.image}
                          alt={record.name}
                          height={34}
                          width={34}
                          className="rounded-full"
                          objectFit="contain"
                        />
                      </div>
                      <button
                        type="button"
                        className="font-base ml-4 table__products__title"
                        onClick={() =>
                          Router.push(
                            '/products/edit?id= ' +
                              encodeURIComponent(record.id)
                          )
                        }
                      >
                        {name}
                      </button>
                    </div>
                  </div>
                )
              }
            },
            {
              title: 'Category',
              dataIndex: 'category',
              render: (category: string) => (
                <span className="text-secondary">{category}</span>
              ),
              ...getColumnSearch('category')
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
                      {currencyFormatter(price, 'USD')}
                    </span>
                  </>
                )
              }
            },
            {
              title: 'Stocks',
              dataIndex: 'stock',
              width: 100,
              sortDirections: ['descend'],
              sorter: (a: any, b: any) => a.stock - b.stock,
              render: (stock: string) => (
                <span className="text-secondary">{stock}</span>
              )
            }
          ]

          return (
            <Table
              className="table__products"
              rowKey="id"
              columns={[
                ...columns,
                {
                  title: 'Published',
                  dataIndex: 'published',
                  width: 120,
                  filters: [
                    {
                      text: 'Published',
                      value: true
                    },
                    {
                      text: 'Unpublished',
                      value: false
                    }
                  ],
                  onFilter: (value: any, record: any) =>
                    record.published === value,
                  render: (_, record: any) => {
                    return (
                      <div className="text-center">
                        <Switch
                          defaultChecked={record.published}
                          onChange={onPublish}
                        />
                      </div>
                    )
                  }
                },
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
                                '/products/edit?id= ' +
                                  encodeURIComponent(record.id)
                              )
                            }
                          >
                            <Image
                              src="/icons/pencil.png"
                              alt="Edit"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                          </button>
                          <button className="hover:opacity-80">
                            <Image
                              src="/icons/delete.png"
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
              scroll={{ x: 1020 }}
            />
          )
        }}
        tableData={data}
      />
    </div>
  )
}

export default TableProducts
