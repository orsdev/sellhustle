import { currencyFormatter } from '@/utils/currencyFormatter'
import Image from 'next/image'

type StatsDataProps = {
  id: string
  amount: number
  amountTitle: string
  percentage: number
  comparison: string
  status: string
}

const StatsData: StatsDataProps[] = [
  {
    id: '01',
    amount: 12000,
    amountTitle: 'Sales Amount',
    percentage: 10,
    comparison: 'vs last month',
    status: 'loss'
  },
  {
    id: '02',
    amount: 2000,
    amountTitle: 'Sales Amount',
    percentage: 50,
    comparison: 'vs last year',
    status: 'normal'
  },
  {
    id: '03',
    amount: 4600,
    amountTitle: 'Sales Amount',
    percentage: 30,
    comparison: 'vs last 2 months',
    status: 'gain'
  }
]

const OrderStats = () => {
  return (
    <div className="orders__stats">
      {StatsData.map(
        ({ id, amount, amountTitle, percentage, status, comparison }) => (
          <div
            className={'orders__stats__card orders__stats__card__' + status}
            key={id}
          >
            <div className="flex">
              {status === 'loss' && (
                <Image
                  src="/icons/overlay/bar-danger.png"
                  alt={amountTitle}
                  height={45}
                  width={45}
                  objectFit="contain"
                />
              )}
              {status === 'normal' && (
                <Image
                  src="/icons/overlay/bar-warning.png"
                  alt={amountTitle}
                  height={45}
                  width={45}
                  objectFit="contain"
                />
              )}
              {status === 'gain' && (
                <Image
                  src="/icons/overlay/bar-success.png"
                  alt={amountTitle}
                  height={45}
                  width={45}
                  objectFit="contain"
                />
              )}
              <hgroup className="ml-4 block">
                <h6 className="orders__stats__card__title">{amountTitle}</h6>
                <h4 className="orders__stats__card__amount font-xs">
                  {currencyFormatter(amount, 'USD')}
                </h4>
              </hgroup>
            </div>
            <div className="mt-4 xs:mt-0 text-right xs:text-left w-full xs:w-auto">
              <div>
                {status === 'loss' && (
                  <Image
                    src="/icons/light/downrarr-danger.png"
                    alt={amountTitle}
                    height={10}
                    width={10}
                    objectFit="contain"
                  />
                )}
                {status === 'normal' && (
                  <Image
                    src="/icons/light/rarr-warning.png"
                    alt={amountTitle}
                    height={10}
                    width={10}
                    objectFit="contain"
                  />
                )}
                {status === 'gain' && (
                  <Image
                    src="/icons/light/uprarr-success.png"
                    alt={amountTitle}
                    height={10}
                    width={10}
                    objectFit="contain"
                  />
                )}
                <span className={`orders__stats__percentage__${status} ml-1`}>
                  {percentage}%
                </span>
              </div>
              <h6>{comparison}</h6>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default OrderStats
