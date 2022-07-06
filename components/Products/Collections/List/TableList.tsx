import TableContainerFive from '@/components/Common/Tables/TableContainerFive'

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

const columns: any = [
  {
    title: 'Collection Name',
    dataIndex: 'collectionName',
    render: (value: string) => {
      return (
        <>
          <span
            className="capitalize font-xs text-primary-blue_dark_1 relative -left-3"
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
  }
]

const TableList = () => {
  return (
    <div className="bg-white">
      <TableContainerFive
        columns={columns}
        data={data}
        pagination={true}
        headerTitle="All Collections"
      />
    </div>
  )
}

export default TableList
