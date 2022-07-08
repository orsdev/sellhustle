import Router from 'next/router'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'
import TableContainerFour from '@/components/Common/Tables/TableContainerFour'

interface DataType {
  orderID: number | string
  image: string
  sku: string
  stock: string | number
  category: string
  title: string
  price: number
}

const data: DataType[] = [
  {
    orderID: '010',
    sku: 'UY3751',
    category: 'Gadgets, Fitbit, Tracker',
    image: '/products/1.png',
    stock: 1,
    title: 'V-neck',
    price: 1000
  },
  {
    orderID: '020',
    sku: 'Q2WE2',
    image: '/products/2.png',
    category: 'Fashion',
    stock: 4,
    title: 'Pure Cotton | Red Bag',
    price: 25000
  },
  {
    orderID: '030',
    sku: 'UY3752',
    category: 'Headphone, Gadgets',
    image: '/products/3.png',
    stock: 3,
    title: 'Pure Cotton | Red Bag',
    price: 8000
  },
  {
    orderID: '060',
    sku: 'RW2343',
    category: 'Fashion',
    image: '/products/4.png',
    stock: 8,
    title: 'T shirt',
    price: 5600
  },
  {
    orderID: '090',
    sku: 'YT2343',
    category: 'Fashion',
    image: '/products/5.png',
    stock: 7,
    title: 'Mic Blue with Wire',
    price: 15600
  },
  {
    orderID: '210',
    sku: 'MN3353',
    category: 'Fashion',
    image: '/products/2.png',
    stock: 3,
    title: 'Sneakers',
    price: 15600
  },
  {
    orderID: '980',
    sku: 'MN2353',
    category: 'Fashion',
    image: '/products/4.png',
    stock: 7,
    title: 'Sneakers',
    price: 15600
  },
  {
    orderID: '880',
    sku: 'MN2353',
    category: 'Fashion',
    image: '/products/1.png',
    stock: 5,
    title: 'Sneakers',
    price: 15600
  }
]

const columns: any = [
  {
    title: 'Name',
    dataIndex: 'title',
    render: (title: string, record: any) => {
      return (
        <div className="flex items-center">
          <div
            className="mr-7"
            style={{
              width: '50px',
              height: '50px'
            }}
          >
            <Image
              src={record.image}
              alt={record.title}
              height={50}
              width={50}
              objectFit="contain"
            />
          </div>
          <div>
            <button
              type="button"
              className="font-base text-primary-blue_dark_1"
              style={{
                fontWeight: 500
              }}
              onClick={() =>
                Router.push(
                  '/products/edit?id= ' + encodeURIComponent(record.orderID)
                )
              }
            >
              {title}
            </button>
          </div>
        </div>
      )
    }
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    width: 95,
    render: (sku: string) => <span className="text-secondary">{sku}</span>
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    width: 95,
    render: (stock: string) => <span className="text-secondary">{stock}</span>
  },
  {
    title: 'Price',
    dataIndex: 'price',
    width: 150,
    render: (price: number) => {
      return (
        <>
          <span className="font-xs text-primary-blue_dark_1">
            {currencyFormatter(price, 'USD')}
          </span>
        </>
      )
    }
  },
  {
    title: 'Category',
    dataIndex: 'category',
    width: 180,
    render: (category: string) => (
      <span className="text-secondary font-xs">{category}</span>
    )
  }
]

const TableProducts = () => {
  return (
    <div className="bg-white">
      <TableContainerFour
        columns={columns}
        data={data}
        pagination={true}
        headerTitle="All Products"
      />
    </div>
  )
}

export default TableProducts
