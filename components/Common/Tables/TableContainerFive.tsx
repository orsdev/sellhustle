import { FC, Key, useState } from 'react'
import Table, { ColumnsType } from 'antd/lib/table'
import TableHeader from './TableHeader'

type TableContainerProps = {
  columns: ColumnsType<any[]>
  data: any[]
  headerTitle: string
  xWidth?: number
  pagination?: boolean
}

const TableContainerFive: FC<TableContainerProps> = ({
  columns,
  data,
  headerTitle,
  xWidth = 985,
  pagination = false
}) => {
  const [dataSource] = useState<any[]>(data)
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  return (
    <div className="table__container">
      <TableHeader headerTitle={headerTitle} />
      <Table
        rowSelection={rowSelection}
        className="table__hover"
        columns={[
          ...columns,
          {
            title: '',
            key: 'operation',
            width: 70,
            className: 'bg-white'
          }
        ]}
        rowKey="orderID"
        dataSource={dataSource}
        scroll={{ x: xWidth }}
        pagination={
          pagination && {
            total: Math.floor(dataSource.length * 9),
            showSizeChanger: false,
            pageSize: 10,
            position: ['bottomLeft'],
            className: 'table__container__pagination pl-2 py-5 pt-1',
            itemRender: (_, type, originalElement) => {
              if (type === 'prev') {
                return (
                  <button className="text-secondary ml-5 table__container__pagination__prev">
                    Prev
                  </button>
                )
              }
              if (type === 'next') {
                return (
                  <button className="text-secondary table__container__pagination__next">
                    Next
                  </button>
                )
              }
              return originalElement
            }
          }
        }
      />
    </div>
  )
}

export default TableContainerFive
