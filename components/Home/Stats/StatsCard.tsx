import Image from 'next/image'

type CardStatsProps = {
  statSubtitle: string
  statTitle: string
  statIcon: string
}

const isAmountOrIncome = (value: string) =>
  value.toLocaleLowerCase() === 'sales amount' ||
  value.toLocaleLowerCase() === 'your income'

const StatsCard = ({
  statSubtitle,
  statTitle,
  statIcon = '/'
}: CardStatsProps) => {
  return (
    <div className="home__stats__card cm-border-radius">
      <Image
        src={statIcon}
        alt={statSubtitle}
        height={45}
        width={45}
        objectFit="contain"
      />
      <hgroup className="ml-4 block">
        <h6 className="home__stats__card__sub">{statSubtitle}</h6>
        <h4 className="home__stats__card__title font-xs">
          {isAmountOrIncome(statSubtitle) ? (
            <>
              <span>&#65284;</span>
              {Number(statTitle).toLocaleString()}
            </>
          ) : (
            statTitle
          )}
        </h4>
      </hgroup>
    </div>
  )
}

export default StatsCard
