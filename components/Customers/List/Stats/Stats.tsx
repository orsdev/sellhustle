import { currencyFormatter } from '@/utils/currencyFormatter'
import StatsCard from './StatsCard'

const CustomerStats = () => {
  return (
    <div className="customer__stats mb-10">
      <StatsCard
        image="/icons/overlay/group.png"
        title="Total Customers"
        value={12}
      />
      <StatsCard
        image="/icons/overlay/bag.png"
        title="Total Customer Orders"
        value={25}
      />
      <StatsCard
        image="/icons/overlay/currency.png"
        title="Total Spent"
        greenBorderClass="customers__stats__card__border__green"
        titleClass="text-green-600"
        valueClass="text-green-600"
        value={currencyFormatter(12000000, 'USD', 0)}
      />
    </div>
  )
}

export default CustomerStats
