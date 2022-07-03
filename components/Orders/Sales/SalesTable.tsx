import { Key, useRef, useState } from 'react'
import Image from 'next/image'
import { Dropdown } from 'antd'
import Table, { ColumnsType } from 'antd/lib/table'
import { customDate } from '@/utils/customDate'
import { DataType } from '@/components/Home/RecentOrders/Table'
import { currencyFormatter } from '@/utils/currencyFormatter'
import Router from 'next/router'

const columns: ColumnsType<DataType> = [
  {
    title: 'Order ID',
    dataIndex: 'orderID',
    width: 99,
    render: (id: string) => {
      return (
        <button
          type="button"
          className="font-base text-primary-blue_dark_1 ml-3 z-50 relative"
          onClick={() =>
            Router.push('/orders/details?id= ' + encodeURIComponent(id))
          }
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
          <div className="sales__table__info">
            <div className="sales__table__name">
              {record.lastName?.substring(0, 1)}
              {record.firstName?.substring(0, 1)}
            </div>
            <button
              type="button"
              className="font-base text-primary-blue_dark_1 ml-3"
              style={{
                fontWeight: 400
              }}
              onClick={() =>
                Router.push(
                  '/orders/details?id= ' + encodeURIComponent(record.orderID)
                )
              }
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
    title: 'Total',
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
  },
  {
    orderID: 95412,
    title: 'Tube Top',
    purchased: 7,
    fullName: 'Ben Spike',
    firstName: 'Spike',
    lastName: 'Ben',
    image: '/product-sm.png',
    date: customDate(8, 'years'),
    price: 880,
    status: 'Available'
  },
  {
    orderID: 61412,
    title: 'Tube Top',
    purchased: 7,
    fullName: 'Angela Frank',
    firstName: 'Angela',
    lastName: 'Frank',
    image: '/product-sm.png',
    date: customDate(2, 'years'),
    price: 4580,
    status: 'Canceled'
  },
  {
    orderID: 19712,
    title: 'Tube Top',
    purchased: 7,
    fullName: 'Elon Pete',
    firstName: 'Pete',
    lastName: 'Elone',
    image: '/product-sm.png',
    date: customDate(4, 'years'),
    price: 580,
    status: 'Due'
  }
]

const TableHeader = () => {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="sales__header">
      {/* Search Input */}
      <div className="search__header__content" data-show={showSearchInput}>
        <div className="flex flex-1">
          <button className="mr-1" onClick={() => setShowSearchInput(false)}>
            <i
              className="fa fa-arrow-left text-primary-blue_dark_1"
              aria-hidden="true"
            />
          </button>
          <input
            type="text"
            className="search__header__content__input"
            placeholder="Quick Search by order ID"
            ref={inputRef}
          />
        </div>
        <button>
          <Image
            src="/icons/search.png"
            alt="Search Trigger"
            height={13}
            width={13}
          />
        </button>
      </div>

      <div className="sales__header__content" data-show={showSearchInput}>
        <h4 className="sales__header__title hidden xs:block">All Orders</h4>
        {/* Search Filter, Sort Triggers */}
        <div className="sales__header__tools">
          <button
            onClick={() => {
              setShowSearchInput(true)
              if (inputRef.current) {
                inputRef.current.focus()
              }
            }}
          >
            <Image
              src="/icons/search.png"
              alt="Search Trigger"
              height={13}
              width={13}
            />
          </button>
          <span className="sales__header__sep" />

          {/* Filter Dropdown */}
          <Dropdown
            overlay={
              <div
                className="sales__filter__dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <h6
                  className="font-xs text-primary-blue_dark_1 px-5 pb-3"
                  style={{
                    fontWeight: 500,
                    borderBottom: '1px solid #e5e9f2'
                  }}
                >
                  Advanced Filter
                </h6>
                <div className="mt-4">
                  <div className="sales__filter__dropdown__filter px-5">
                    <div>
                      <h4 className="mb-3">TYPE</h4>
                      <select name="type">
                        <option value="any">Any Type</option>
                      </select>
                    </div>
                    <div>
                      <h4 className="mb-3">STATUS</h4>
                      <select name="status">
                        <option value="any">Any Status</option>
                      </select>
                    </div>
                  </div>
                  <div className="px-5">
                    <button className="sales__filter__dropdown__apply">
                      Apply Filter
                    </button>
                  </div>
                  <div className="sales__filter__dropdown__footer">
                    <button>Reset Filter</button>
                    <button>Save Filter</button>
                  </div>
                </div>
              </div>
            }
            trigger={['click']}
          >
            <button>
              <Image
                src="/icons/filter.png"
                alt="Filter Trigger"
                height={28}
                width={28}
              />
            </button>
          </Dropdown>

          {/* Settings Dropdown */}
          <Dropdown
            overlay={
              <div className="sales__settings__dropdown">
                <h6
                  className="font-xs text-primary-blue_dark_1 px-5"
                  style={{
                    fontWeight: 500
                  }}
                >
                  SHOW
                </h6>
                <div className="mt-2 px-5">
                  <button>10</button>
                  <button>20</button>
                  <button>50</button>
                </div>
                <h6
                  className="font-xs text-primary-blue_dark_1 pt-3 mt-3 px-5"
                  style={{
                    fontWeight: 500,
                    borderTop: '1px solid #e5e9f2'
                  }}
                >
                  ORDER
                </h6>
                <div className="mt-1 px-5">
                  <button>Asc</button>
                  <button>Desc</button>
                </div>
              </div>
            }
            trigger={['click']}
          >
            <button className="ml-5 mt-2">
              <Image
                src="/icons/setting.png"
                alt="Sort Trigger"
                height={16}
                width={16}
              />
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

const SalesTable = () => {
  const [dataSource, setDataSource] = useState<DataType[]>(data)
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

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
    <div className="sales__table cm-border">
      <TableHeader />
      <Table
        rowSelection={rowSelection}
        columns={[
          ...columns,
          {
            title: '',
            key: 'operation',
            width: 95,
            className: 'sales__table__action',
            render: (_, record) => {
              return (
                <div className="text-center">
                  <Dropdown
                    trigger={['click']}
                    overlay={
                      <>
                        <div className="sales__table__dropdown" key="dropdown">
                          <button
                            className="sales__table__dropdown__item"
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
                          <button className="sales__table__dropdown__item">
                            <Image
                              src="/icons/truck.png"
                              alt="Delivered"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                            <span className="ml-2">Mark as Delivered</span>
                          </button>
                          <button className="sales__table__dropdown__item">
                            <Image
                              src="/icons/cash.png"
                              alt="Paid"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                            <span className="ml-2">Mark as Paid</span>
                          </button>
                          <button className="sales__table__dropdown__item">
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
                            className="sales__table__dropdown__item"
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
                      <div className="sales__table__action__icons">
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
                      <div className="mb-1 relative right-2">
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
        scroll={{ x: 985 }}
        pagination={{
          total: Math.floor(dataSource.length * 9),
          showSizeChanger: false,
          pageSize: 10,
          position: ['bottomLeft'],
          className: 'sales__pagination',
          itemRender: (_, type, originalElement) => {
            if (type === 'prev') {
              return (
                <button className="text-secondary ml-5 sales__pagination__prev">
                  Prev
                </button>
              )
            }
            if (type === 'next') {
              return (
                <button className="text-secondary sales__pagination__next">
                  Next
                </button>
              )
            }
            return originalElement
          }
        }}
      />
    </div>
  )
}

export default SalesTable
