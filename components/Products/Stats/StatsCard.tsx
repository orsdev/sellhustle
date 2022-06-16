import { FC } from 'react'
import Image from 'next/image'

type ProductStatsProps = {
  value: number | string
  title: string
  image: string
}

const StatsCard: FC<ProductStatsProps> = ({ image, title, value }) => {
  return (
    <div className={'product__stats__card cm-border-radius'}>
      <div className="flex">
        <Image
          src={image}
          alt={title}
          height={45}
          width={45}
          objectFit="contain"
        />
        <hgroup className="ml-4 block">
          <h6 className="product__stats__card__title">{title}</h6>
          <h4 className="product__stats__card__value font-xs">{value}</h4>
        </hgroup>
      </div>
    </div>
  )
}

export default StatsCard
