import React from 'react'

const Shipping = () => {
  return (
    <div className="details__shipping cm-border-radius">
      <h4 className="details__shipping__title mb-8">Shipping Details</h4>
      <div className="details__shipping__body">
        <p className="font-xs">Jessica Moore</p>
        <p className="font-xs">United States</p>
        <p className="font-xs">
          <span
            className="text-primary-blue_dark_2"
            style={{
              fontWeight: 600
            }}
          >
            moore@example.com
          </span>
        </p>
        <p className="font-xs">Washington</p>
        <p className="font-xs">+ 89 389 - 234 - 455</p>
        <p className="font-xs">490 PST South Road Tampa, LA</p>
      </div>
    </div>
  )
}

export default Shipping
