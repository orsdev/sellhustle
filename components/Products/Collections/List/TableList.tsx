import Router from 'next/router'
import { useState } from 'react'
import Table, { ColumnsType } from 'antd/lib/table'
import TableRender from '@/components/Common/Tables/TableRender'

type DataTypes = {
  orderID: string
  collectionName: string
  noOfProducts: number
  availability: string
}

const data: DataTypes[] = [
  {
    orderID: '#00004',
    collectionName: 'Featured Products',
    noOfProducts: 5,
    availability: '3 Channels'
  },
  {
    orderID: '#00008',
    collectionName: 'Summer Collection',
    noOfProducts: 2,
    availability: '2 Channels'
  },
  {
    orderID: '#00005',
    collectionName: 'Winter Sale',
    noOfProducts: 100,
    availability: '3 Channels'
  }
]

const columns: ColumnsType<any> = [
  {
    title: <span className="relative -left-3">Collection Name </span>,
    dataIndex: 'collectionName',
    render: (value: string, record: any) => {
      return (
        <>
          <button
            className="capitalize font-xs text-primary-blue_dark_1 relative"
            onClick={() =>
              Router.push(
                '/products/collections/edit?id= ' +
                  encodeURIComponent(record.orderID)
              )
            }
            style={{
              fontWeight: 400,
              left: '-12px'
            }}
          >
            {value}
          </button>
        </>
      )
    }
  },
  {
    title: 'No. of Products',
    width: 250,
    dataIndex: 'noOfProducts',
    render: (value: string) => {
      return (
        <>
          <span
            className="text-secondary font-xs"
            style={{
              fontWeight: 400
            }}
          >
            {value}
          </span>
        </>
      )
    }
  },
  {
    title: 'Availability',
    width: 150,
    dataIndex: 'availability',
    render: (value: string) => {
      return (
        <>
          <button
            type="button"
            className="font-xs text-primary-blue_dark_1"
            style={{
              fontWeight: 400
            }}
          >
            {value}
          </button>
        </>
      )
    }
  },
  {
    title: '',
    key: 'operation',
    width: 70
  }
]

const TableList = () => {
  const [dataSource] = useState<any[]>(data)

  return (
    <div className="bg-white">
      <TableRender
        title="All Collections"
        render={({ rowSelection }) => {
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

export default TableList
