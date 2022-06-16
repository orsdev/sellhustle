import TableProducts from './Table'
import TableHeader from './TableHeader'

const ProductTable = () => {
  return (
    <div className="products__table">
      <TableHeader />
      <TableProducts />
    </div>
  )
}

export default ProductTable
