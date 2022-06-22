import React, { FC, ReactNode, useRef, useState } from 'react'
import { Button, Input, InputRef, Space } from 'antd'
import { ColumnType } from 'antd/lib/table'
import { TableRowSelection } from 'antd/lib/table/interface'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'

export interface OrderDataType {
  id: string
  orderID: string
  image: string
  customer: string
  item: number
  date: string
  name: string
  price: number
  status: string
  paymentMethod: string
  children?: OrderDataType[]
}

export interface ProductDataType {
  id: string
  sku: string
  category: string
  date?: string
  published: boolean
  image: string
  stock: number
  status?: string
  name: string
  price: number
  children?: ProductDataType[]
}

export interface CustomerDataType {
  id: string
  name: string
  date: string
  mail: string
  country?: string
  phone: string | number
  order: string | number
  price: number
  status?: string
  paymentMethod?: string
}

type StringOrNumber = string | number

type OrderDataIndex = keyof OrderDataType
type ProductDataIndex = keyof ProductDataType
type CustomerDataIndex = keyof CustomerDataType

type DataIndex = OrderDataIndex | ProductDataIndex | CustomerDataIndex
export type DataTypes = OrderDataType | ProductDataType | CustomerDataType

type RenderProps = {
  getColumnSearch(dataIndex: DataIndex): ColumnType<DataTypes>
  onGetRowID?(id: string): void
  onRemoveRowID?(id: string): void
  rowSelection: any
  dataSource: any[]
  expandedRowKeys: string[]
}

type TableWrapperProps = {
  tableData: any
  render: ({
    getColumnSearch,
    rowSelection,
    dataSource,
    expandedRowKeys,
    onGetRowID,
    onRemoveRowID
  }: RenderProps) => ReactNode
}

const TableWrapper: FC<TableWrapperProps> = ({ tableData, render }) => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState<StringOrNumber>('')
  const searchInputRef = useRef<InputRef | null>(null)
  const [dataSource] = useState<DataTypes[]>(tableData)
  const [expandedRowKeys, setExpandRowKeys] = useState<string[]>([])

  const onGetRowID = (id: string) => {
    if (id) {
      setExpandRowKeys([id])
    }
  }

  const onRemoveRowID = (id: string) => {
    if (id) {
      const rowsID = expandedRowKeys.filter((rowId) => rowId !== id)
      setExpandRowKeys(rowsID)
    }
  }

  const rowSelection: TableRowSelection<DataTypes> = {
    onSelect: (record, selected, selectedRows) => {
      const rowsId = selectedRows.map((item) => item.id)
      setExpandRowKeys(rowsId)
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      const rowsId = selectedRows.map((item) => item.id)
      setExpandRowKeys(rowsId)
    }
  }

  const handleSearch = (
    selectedKeys: any[],
    confirm: (data?: { closeDropdown: boolean }) => void,
    dataIndex: StringOrNumber
  ) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters: () => void) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearch = (dataIndex: DataIndex): ColumnType<DataTypes> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInputRef.current = node
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginTop: '-1px' }}
          >
            Search
          </Button>
          <Button
            size="small"
            style={{ width: 90 }}
            onClick={() => {
              if (clearFilters) {
                handleReset(clearFilters)
              }

              confirm({ closeDropdown: true })
              setSearchedColumn([] as never)
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record: any) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(
          () => searchInputRef.current && searchInputRef.current.select(),
          100
        )
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        <>
          {dataIndex === 'orderID' ? (
            <span className="text-primary-blue_dark_1">{text}</span>
          ) : (
            <span className="text-secondary">{text}</span>
          )}
        </>
      )
  })

  return (
    <div className="bg-white">
      {render({
        getColumnSearch,
        rowSelection,
        dataSource,
        expandedRowKeys,
        onGetRowID,
        onRemoveRowID
      })}
    </div>
  )
}

export default TableWrapper
