import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'

const data = [
  {
    id: '#00004',
    categoryName: 'Levis T-Shirt',
    subCategory: 0,
    noOfProducts: 5
  },
  {
    id: '#00004',
    categoryName: 'Paints',
    subCategory: 3,
    noOfProducts: 2
  },
  {
    id: '#00004',
    categoryName: 'Gift Cards',
    subCategory: 1,
    noOfProducts: 100
  }
]

const columns: ColumnsType<any[]> = [
  {
    title: 'Category Name',
    dataIndex: 'categoryName',
    render: (value) => {
      return (
        <>
          <button type="button">{value}</button>
        </>
      )
    }
  },
  {
    title: 'Subcategory',
    dataIndex: 'subCategory',
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => a.subCategory - b.subCategory
  },
  {
    title: 'No. of Products',
    dataIndex: 'noOfProducts',
    sortDirections: ['descend'],
    sorter: (a: any, b: any) => a.noOfProducts - b.noOfProducts
  }
]

const SubCategoriesTable = () => {
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
    <div className="edit__subcategory__table cm-border">
      <header className="edit__subcategory__header mb-7">
        <h3 className="edit__subcategory__heading">All Subcategories</h3>
        <button className="font-xs text-primary-blue_dark_2 text-right mt-4 base:mt-0">
          <i className="fa fa-plus mr-2" aria-hidden="true" />
          <span>Create Subcategory</span>
        </button>
      </header>
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
  )
}

export default SubCategoriesTable
