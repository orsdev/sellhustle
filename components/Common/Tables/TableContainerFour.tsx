import { FC, Key, useState } from 'react'
import Image from 'next/image'
import { Dropdown } from 'antd'
import Table, { ColumnsType } from 'antd/lib/table'
import TableHeader from './TableHeader'

type TableContainerProps = {
  columns: ColumnsType<any[]>
  data: any[]
  headerTitle: string
  xWidth?: number
  pagination?: boolean
}

const TableContainerFour: FC<TableContainerProps> = ({
  columns,
  data,
  headerTitle,
  xWidth = 985,
  pagination = false
}) => {
  const [dataSource, setDataSource] = useState<any[]>(data)
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  const handleDeleteOrder = (orderID: string | number) => {
    const newData = dataSource.filter((item: any) => item.orderID !== orderID)
    setDataSource(newData)
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
            width: 98,
            className: 'table__container__action',
            render: (_, record) => {
              return (
                <div className="text-center">
                  <Dropdown
                    trigger={['click']}
                    overlay={
                      <>
                        <div
                          className="table__container__dropdown"
                          key="dropdown"
                        >
                          <button
                            className="table__container__dropdown__item"
                            onClick={() => handleDeleteOrder(record.orderID)}
                          >
                            <Image
                              src="/icons/edit.png"
                              alt="Edit Row"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                            <span className="ml-2">Edit Selected</span>
                          </button>
                          <button className="table__container__dropdown__item">
                            <Image
                              src="/icons/remove.png"
                              alt="Delete Row"
                              height={16}
                              width={16}
                              objectFit="contain"
                            />
                            <span className="ml-2">Remove Selected</span>
                          </button>
                        </div>
                      </>
                    }
                    placement="bottom"
                  >
                    <div className="flex relative items-center">
                      <div className="mb-1 relative  -right-[35px]">
                        <button className="text-secondary ">
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

export default TableContainerFour
