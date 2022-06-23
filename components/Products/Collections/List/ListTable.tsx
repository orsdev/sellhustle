import React, { useState } from 'react'
import { Tabs, Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import Router from 'next/router'

const { TabPane } = Tabs

type DataTypes = {
  id: string
  collectionName: string
  noOfProducts: number
  availability: string
}

const data: DataTypes[] = [
  {
    id: '#00004',
    collectionName: 'Featured Products',
    noOfProducts: 5,
    availability: '3 Channels'
  },
  {
    id: '#00004',
    collectionName: 'Summer Collection',
    noOfProducts: 2,
    availability: '2 Channels'
  },
  {
    id: '#00004',
    collectionName: 'Winter Sale',
    noOfProducts: 100,
    availability: '3 Channels'
  }
]

const columns: ColumnsType<DataTypes[]> = [
  {
    title: 'Collection Name',
    dataIndex: 'collectionName',
    render: (value, record: any) => {
      return (
        <>
          <button
            type="button"
            onClick={() =>
              Router.push(
                '/products/collections/edit?id= ' +
                  encodeURIComponent(record.id)
              )
            }
          >
            {value}
          </button>
        </>
      )
    }
  },
  {
    title: 'No. of Products',
    width: 150,
    dataIndex: 'noOfProducts',
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => a.noOfProducts - b.noOfProducts
  },
  {
    title: 'Availability',
    width: 150,
    dataIndex: 'availability',
    render: (value) => {
      return (
        <>
          <button
            type="button"
            className="font-xs bg-primary-blue_light_3 text-white"
            style={{
              width: '111px',
              height: '38px',
              borderRadius: '8px'
            }}
          >
            {value}
          </button>
        </>
      )
    }
  }
]

const ListTable = () => {
  const [current, setCurrent] = useState<number>(1)
  const [pageSize] = useState<number>(10)
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([])
  const [dataSource] = useState<any[]>(data)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  return (
    <div className="collections__list__table">
      <Tabs defaultActiveKey="1">
        <TabPane tab="All Collections" key="1">
          <div className="collections__list__table__body cm-border">
            <header className="collections__list__table__header mb-7">
              <h3 className="collections__list__table__heading">
                All Subcategories
              </h3>
              <button className="font-xs text-primary-blue_dark_2 text-right mt-4 base:mt-0">
                <i className="fa fa-plus mr-2" aria-hidden="true" />
                <span>Create Collection</span>
              </button>
            </header>

            <div className="collections__list__table__filter mb-12">
              <button>Filters</button>
              <input
                type="text"
                name="searchCollections"
                placeholder="Search Collections"
              />
            </div>

            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              pagination={{
                current,
                className: 'px-2',
                total: data.length,
                showTotal: (total) => `1 - ${pageSize} of ${total} items`,
                pageSize,
                onChange: (page) => setCurrent(page)
              }}
              scroll={{ x: 500 }}
            />
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default ListTable
