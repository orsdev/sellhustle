import ProductTable from './ProductsTable/Index'

const Products = () => {
  return (
    <div className="products">
      <header className="products__header">
        <h1 className="text-left font-semibold text-lg text-primary-blue_dark_1">
          Products List
        </h1>
        <button className="products__header__button">Add Product</button>
      </header>
      <ProductTable />
    </div>
  )
}

export default Products
