import { customDate } from '@/utils/customDate'
import { ColumnsType } from 'antd/lib/table'
import Router from 'next/router'
import TableContainerSix from '@/components/Common/Tables/TableContainerSix'

interface DataType {
  orderID: number | string
  category: string
  date: string
  status: string
}

const columns: ColumnsType<any> = [
  {
    title: 'ID',
    dataIndex: 'orderID',
    width: 180,
    render: (id: string) => {
      return (
        <button
          type="button"
          className="font-base text-primary-blue_dark_1 relative"
          onClick={() =>
            Router.push(
              '/products/categories/edit?id= ' + encodeURIComponent(id)
            )
          }
        >
          #{id}
        </button>
      )
    }
  },
  {
    title: 'Category',
    dataIndex: 'category',
    width: 220,
    render: (category: string) => (
      <span className="text-secondary font-xs">{category}</span>
    )
  },
  {
    title: 'Date',
    dataIndex: 'date',
    width: 160,
    render: (date) => {
      return (
        <>
          <div className="flex items-center">
            <span className="text-secondary font-base">{date}</span>
          </div>
        </>
      )
    }
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 120,
    render: (status) => {
      const formattedStatus = status.toLowerCase()
      let color = 'text-primary-green_dark_1 bg-green-100'

      if (formattedStatus === 'available') {
        color = 'text-primary-green_dark_1 bg-green-100'
      } else if (formattedStatus === 'completed') {
        color = 'text-primary-green-500 bg-blue-100'
      } else if (formattedStatus === 'canceled') {
        color = 'text-primary-danger bg-red-100'
      } else if (formattedStatus === 'due') {
        color = 'text-yellow-500 bg-yellow-100'
      } else {
        color = 'text-primary-blue_light_3 bg-blue-100'
      }

      return (
        <span
          className={`${color} font-xs py-[3px] px-[7px] rounded-md inline-block text-center`}
          style={{
            minWidth: '80px',
            fontSize: '12px'
          }}
        >
          {status}
        </span>
      )
    }
  }
]

const data: DataType[] = [
  {
    orderID: 23342,
    category: 'watch',
    date: customDate(2, 'years'),
    status: 'Available'
  },
  {
    orderID: 54432,
    category: 'smart phones',
    date: customDate(10, 'years'),
    status: 'Canceled'
  },
  {
    orderID: 24432,
    category: 'Sofa',
    date: customDate(10, 'months'),
    status: 'Completed'
  },
  {
    orderID: 64832,
    category: 'Entertainment',
    date: customDate(1000, 'days'),
    status: 'In Progress'
  },
  {
    orderID: 74412,
    category: 'Gaming devices',
    date: customDate(4, 'years'),
    status: 'Due'
  },
  {
    orderID: 95412,
    category: 'Electronin Equipment',
    date: customDate(8, 'years'),
    status: 'Available'
  },
  {
    orderID: 61412,
    category: 'bedroom set',
    date: customDate(2, 'years'),
    status: 'Canceled'
  },
  {
    orderID: 19712,
    category: 'Watch',
    date: customDate(4, 'years'),
    status: 'Due'
  }
]

const CategoriesTable = () => {
  return (
    <div className="bg-white">
      <TableContainerSix
        columns={columns}
        data={data}
        pagination={true}
        headerTitle="All Categories"
      />
    </div>
  )
}

export default CategoriesTable
