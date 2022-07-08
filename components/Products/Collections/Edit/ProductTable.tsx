import React, { useState } from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import Image from 'next/image'

type DataTypes = {
  id: string
  collectionName: string
  type: string
  availability: string
}

const data: DataTypes[] = [
  {
    id: '#00004',
    collectionName: 'Featured Products',
    type: 'Paint',
    availability: '3 Channels'
  },
  {
    id: '#00004',
    collectionName: 'Summer Collection',
    type: 'Gift',
    availability: '2 Channels'
  },
  {
    id: '#00004',
    collectionName: 'Winter Sale',
    type: 'Paint',
    availability: '3 Channels'
  }
]

const columns: ColumnsType<DataTypes[]> = [
  {
    title: 'Collection Name',
    dataIndex: 'collectionName',
    render: (value) => {
      return (
        <>
          <button type="button">{value}</button>
        </>
      )
    }
  },
  {
    title: 'Type',
    width: 100,
    dataIndex: 'type'
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

const ProductTable = () => {
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
    <div className="collections__product__table">
      <Table
        rowSelection={rowSelection}
        columns={[
          ...columns,
          {
            title: 'Actions',
            fixed: 'right',
            width: 90,
            render: (_, record) => {
              return (
                <div className="text-center">
                  <button
                    className="hover:opacity-80"
                    onClick={() => console.log(record.id)}
                  >
                    <Image
                      src="/icons/delete-light.png"
                      alt="Delete"
                      height={16}
                      width={16}
                      objectFit="contain"
                    />
                  </button>
                </div>
              )
            }
          }
        ]}
        dataSource={dataSource}
        scroll={{ x: 500 }}
        pagination={false}
      />
    </div>
  )
}

export default ProductTable
