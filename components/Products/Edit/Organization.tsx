import Select from 'react-select'
import Dropzone from '@/components/Common/Dropzone'

const Organization = () => {
  return (
    <div className="product__edit__organization cm-border">
      <h3 className="product__edit__organization__heading">Organize Product</h3>
      <div className="mt-7">
        <div>
          <label htmlFor="category">Category</label>
          <Select
            options={[
              { value: 'Category 1', label: 'Category 1' },
              { value: 'Category 2', label: 'Category 2' }
            ]}
            name="category"
            classNamePrefix="select__inner"
            placeholder="Select a category"
          />
        </div>

        <div className="my-7">
          <label htmlFor="type" id="type">
            Product Type
          </label>
          <Select
            options={[
              { value: 'Type 1', label: 'Type 1' },
              { value: 'Type 2', label: 'Type 2' }
            ]}
            name="type"
            classNamePrefix="select__inner"
            placeholder="Select product type"
          />
        </div>
        <div>
          <label htmlFor="collection">Collection</label>
          <Select
            options={[
              { value: 'Collection 1', label: 'Collection 1' },
              { value: 'Collection 2', label: 'Collection 2' }
            ]}
            name="type"
            classNamePrefix="select__inner"
            placeholder="Select collection"
          />
        </div>
      </div>

      {/* Media */}
      <h3 className="product__edit__organization__heading mt-11">Image</h3>
      <p className="text-primary-blue_dark_1 my-7 text-xs">Upload Photos</p>
      <div className="mt-7">
        <Dropzone />
      </div>
    </div>
  )
}

export default Organization
