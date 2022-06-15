import { FC } from 'react'
import Image from 'next/image'
import { currencyFormatter } from '@/utils/currencyFormatter'

type CardLatestProps = {
  id: string
  image: string
  title: string
  quantity: number
  color: string
  size: number
  buyer: string
  onViewOrder: () => void
}

const CardLatest: FC<CardLatestProps> = ({
  id,
  image,
  title,
  quantity,
  color,
  size,
  buyer,
  onViewOrder
}) => {
  return (
    <div className="card__latest  cm-border">
      <div className="flex items-center">
        <Image
          src={image}
          alt={title}
          height={50}
          width={50}
          className="card__latest__image"
          objectFit="cover"
        />
        <div className="ml-3">
          <button
            type="button"
            className="font-xs text-primary-blue_dark_1 mb-2 text-left"
            style={{
              fontWeight: 500
            }}
          >
            {title}
          </button>
          <p className="font-xs">Qty: {quantity}</p>
        </div>
      </div>

      <div>
        <p className="font-xs mb-2">Color: {color}</p>
        <p className="font-xs">Size: {size}</p>
      </div>

      <div>
        <p
          className="font-xs text-primary-blue_dark_1 mb-2"
          style={{
            fontWeight: 600
          }}
        >
          {currencyFormatter(5000, 'USD')}
        </p>
        <p className="font-xs">Buyer: {buyer}</p>
      </div>

      <div className="md:text-right">
        <button
          className="font-xs text-primary-blue_light_3 hover:opacity-70"
          onClick={onViewOrder}
        >
          View Order
        </button>
      </div>
    </div>
  )
}

export default CardLatest
