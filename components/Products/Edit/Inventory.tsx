import { useState } from 'react'
import { InputNumber } from 'antd'
import TextInput from '@/components/Common/TextInput'

const Inventory = () => {
  const [quantity, setQuantity] = useState<number>(0)

  const onChange = (value: number) => {
    setQuantity(value)
  }

  return (
    <div className="product__inventory cm-border">
      <h3 className="product__inventory__heading">Inventory</h3>
      <div className="mt-7">
        <div className="mt-5 grid mid:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,200px] gap-5">
          <TextInput
            labelTitle="SKU"
            name="sku"
            onChange={() => {}}
            onBlur={() => {}}
          />
          <div className="field__quantity">
            <label htmlFor="quantity" className="field__label" id="quantity">
              Stock Quantity
            </label>
            <InputNumber value={quantity} onChange={onChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inventory
