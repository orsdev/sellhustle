import StatsCard from './StatsCard'

const Stats = () => {
  return (
    <div className="home__stats">
      <StatsCard
        statSubtitle="Sales Amount"
        statTitle="350897"
        statIcon="/icons/overlay/bar.png"
      />
      <StatsCard
        statSubtitle="Products"
        statTitle="25 Products"
        statIcon="/icons/overlay/cube.png"
      />
      <StatsCard
        statSubtitle="Sales"
        statTitle="5 Orders"
        statIcon="/icons/overlay/bag.png"
      />
      <StatsCard
        statSubtitle="Your Income"
        statTitle="350897"
        statIcon="/icons/overlay/dollar.png"
      />
      <StatsCard
        statSubtitle="Returned"
        statTitle="2 Orders"
        statIcon="/icons/overlay/arrow.png"
      />
      <StatsCard
        statSubtitle="Visitors"
        statTitle="23 Visitors"
        statIcon="/icons/overlay/chat.png"
      />
    </div>
  )
}

export default Stats
