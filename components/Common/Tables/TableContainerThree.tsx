import { FC, Key, useState } from 'react'
import Table, { ColumnsType } from 'antd/lib/table'

type TableContainerProps = {
  columns: ColumnsType<any[]>
  data: any[]
  headerTitle: string
  xWidth?: number
  pagination?: boolean
}

const TableContainerThree: FC<TableContainerProps> = ({
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
    <div className="table__container bg-white">
      <h4
        className="text-primary-blue_dark_1 font-medium mb-5 px-3 pl-[44px]"
        style={{
          fontSize: '17px'
        }}
      >
        {headerTitle}
      </h4>
      <Table
        rowSelection={rowSelection}
        columns={[
          ...columns,
          {
            title: '',
            key: 'operation',
            width: 50,
            className: 'bg-white'
          }
        ]}
        rowKey="orderID"
        dataSource={dataSource}
        className="table__nohover"
        scroll={{ x: xWidth }}
        pagination={
          pagination && {
            total: Math.floor(dataSource.length * 9),
            showSizeChanger: false,
            pageSize: 10,
            position: ['bottomLeft'],
            className: 'table__container__pagination pl-2',
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

export default TableContainerThree
