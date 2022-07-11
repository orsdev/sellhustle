import { Dispatch, FC, Key, ReactNode, useState } from 'react'
import TableHeader from './TableHeader'

type RenderProps = {
  rowSelection: any
  selectedRowKeys: Key[]
  setSelectedRowKeys: Dispatch<Key[]>
}

type Props = {
  render: ({
    rowSelection,
    selectedRowKeys,
    setSelectedRowKeys
  }: RenderProps) => ReactNode
  title: string
  showFilters?: boolean
}
const TableRender: FC<Props> = ({ render, title, showFilters = true }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([])

  const onSelectChange = (newSelectedRowKeys: Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange
  }

  return (
    <div className="cm__table">
      <TableHeader headerTitle={title} showFilters={showFilters} />
      {render({ rowSelection, selectedRowKeys, setSelectedRowKeys })}
    </div>
  )
}

export default TableRender
