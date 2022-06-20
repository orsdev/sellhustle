import { FC } from 'react'
import Image from 'next/image'

type ProductStatsProps = {
  value: number | string
  title: string
  image: string
  titleClass?: string
  valueClass?: string
  greenBorderClass?: string
}

const StatsCard: FC<ProductStatsProps> = ({
  image,
  title,
  value,
  titleClass = '',
  valueClass = '',
  greenBorderClass = ''
}) => {
  return (
    <div className={'customers__stats__card ' + greenBorderClass}>
      <div className="flex">
        <Image
          src={image}
          alt={title}
          height={45}
          width={45}
          objectFit="contain"
        />
        <hgroup className="ml-4 block">
          <h6 className={'customers__stats__card__title ' + titleClass}>
            {title}
          </h6>
          <h4
            className={
              'customers__stats__card__value font-xs text-primary-blue_dark_1  ' +
              valueClass
            }
          >
            {value}
          </h4>
        </hgroup>
      </div>
    </div>
  )
}

export default StatsCard
