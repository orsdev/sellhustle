import React from 'react'
import ProductTable from './ProductTable'

const Featured = () => {
  return (
    <div className="collections__featured mt-4">
      <header className="collections__featured__header mb-7">
        <h3 className="collections__featured__heading">
          Products In Featured Products
        </h3>
        <button className="collections__featured__assign__btn">
          Assign Product
        </button>
      </header>
      <ProductTable />
    </div>
  )
}

export default Featured
