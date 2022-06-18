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
          height={75}
          width={75}
          className="card__latest__image"
          objectFit="cover"
        />
        <div className="ml-3">
          <button
            type="button"
            className="font-base text-primary-blue_dark_1 mb-2 text-left"
            style={{
              fontWeight: 600
            }}
          >
            {title}
          </button>
          <p className="font-base">
            Qty:
            <span className="text-primary-blue_dark_1 font-semibold ml-1">
              {quantity}
            </span>
          </p>
        </div>
      </div>

      <div>
        <p className="font-base mb-2">
          <span className="inline-block w-12">Color:</span>
          <span className="text-primary-blue_dark_1 font-semibold capitalize">
            {color}
          </span>
        </p>
        <p className="font-base">
          <span className="inline-block w-12">Size:</span>
          <span className="text-primary-blue_dark_1 font-semibold">{size}</span>
        </p>
      </div>

      <div>
        <p
          className="font-base text-primary-blue_dark_1 mb-2"
          style={{
            fontWeight: 600
          }}
        >
          {currencyFormatter(5000, 'USD')}
        </p>
        <p className="font-base">
          Buyer:
          <span className="text-primary-blue_dark_1 font-semibold ml-1 capitalize">
            {buyer}
          </span>
        </p>
      </div>

      <div className="md:text-right">
        <button
          className="font-base text-primary-blue_light_3 hover:opacity-70"
          onClick={onViewOrder}
        >
          View Order
          <i
            className="fa fa-angle-right ml-2 text-secondary"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  )
}

export default CardLatest
