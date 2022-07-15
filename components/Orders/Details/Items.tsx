import { Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'

interface DataType {
  id: string
  name: string
  weight: string
  quantity: number
  category: string
  image: string
  price: number
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Item Details',
    dataIndex: 'name',
    render: (_, record) => {
      return (
        <>
          <div className="details__item__table__info ">
            <div className="details__item__table__image">
              <Image
                src={record.image}
                alt={record.name}
                height={70}
                width={70}
              />
            </div>
            <div className="ml-3">
              <button
                type="button"
                className="font-base text-primary-blue_dark_1"
              >
                {record.name}
              </button>
              <p className="font-xs text-secondary mt-1">{record.category}</p>
            </div>
          </div>
        </>
      )
    }
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    width: 100
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price) => {
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
    title: 'Quantity',
    dataIndex: 'quantity',
    width: 100
  },
  {
    title: 'Total',
    dataIndex: 'total',
    width: 100,
    render: (_, record) => {
      return (
        <>
          <span className="font-xs text-primary-blue_dark_1">
            {currencyFormatter(record.price * record.quantity, 'USD')}
          </span>
        </>
      )
    }
  }
]

const data: DataType[] = [
  {
    id: '001',
    name: 'Brandix Brake Kit',
    image: '/product.png',
    price: 250,
    weight: '13lb',
    category: 'Fashion',
    quantity: 1
  },
  {
    id: '002',
    name: 'iPhone 12 X Pro',
    image: '/product.png',
    price: 450,
    weight: '10lb',
    category: 'Accessories',
    quantity: 2
  },
  {
    id: '003',
    name: 'Playstation 5 | Gold Edition',
    image: '/product.png',
    price: 325,
    weight: '20lb',
    category: 'Games & Entertainment',
    quantity: 3
  }
]

const Items = () => {
  return (
    <div className="details__item cm-border rounded-md">
      <h4 className="details__item__title mb-8">Order Items</h4>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 700 }}
        footer={() => (
          <div className="details__item__footer">
            <div className="details__item__footer__content">
              <h5 className="font-xs  mb-3">Order Note</h5>
              <p
                className="font-xs"
                style={{
                  fontSize: '12px'
                }}
              >
                Ship all the ordered items together by friday and I send you an
                <span className="block">
                  email please check out that email. Thanks!
                </span>
              </p>
            </div>
            <div className="details__item__footer__total">
              <div className="details__item__footer__grid">
                <p className="font-xs text-secondary">Subtotal</p>
                <p className="font-xs text-secondary details__item__footer__amount">
                  {currencyFormatter(2125, 'USD')}
                </p>
                <p className="font-xs text-secondary">Shipping Cost</p>
                <p className="font-xs text-secondary details__item__footer__amount">
                  {currencyFormatter(124, 'USD')}
                </p>
                <p className="font-xs text-secondary">Tax Fee</p>
                <p className="font-xs text-secondary details__item__footer__amount">
                  {currencyFormatter(130, 'USD')}
                </p>
              </div>
              <div className="mt-4">
                <hr />
                <div className="details__item__footer__grid mt-4">
                  <p
                    className="font-xs text-primary-blue_dark_1"
                    style={{
                      fontWeight: 600
                    }}
                  >
                    Total
                  </p>
                  <p
                    className="font-xs text-primary-blue_dark_1 details__item__footer__amount"
                    style={{
                      fontWeight: 600
                    }}
                  >
                    {currencyFormatter(2379, 'USD')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default Items
