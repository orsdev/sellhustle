import { currencyFormatter } from '@/utils/currencyFormatter'
import ProductTable from './ProductsTable/Index'
import StatsCard from './Stats/StatsCard'

const Products = () => {
  return (
    <div className="products">
      <header className="products__header">
        <StatsCard
          image="/icons/overlay/cube.png"
          title="Total Products"
          value={250}
        />
        <StatsCard
          image="/icons/overlay/bag.png"
          title="Used Categories"
          value={5}
        />
        <StatsCard
          image="/icons/overlay/dollar.png"
          title="Inventory Value"
          value={currencyFormatter(12000000, 'USD', 0)}
        />
      </header>
      <ProductTable />
    </div>
  )
}

export default Products
