import Dropzone from '@/components/Common/Dropzone'

const Organization = () => {
  return (
    <div className="product__edit__organization cm-border">
      <h3 className="product__edit__organization__heading">Organize Product</h3>
      <div className="mt-7">
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="" disabled selected>
              Select Category
            </option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
        </div>

        <div className="my-7">
          <label htmlFor="type" id="type">
            Product Type
          </label>
          <select name="type" id="type">
            <option value="" disabled selected>
              Select Product Type
            </option>
            <option value="Category 1">Type 1</option>
            <option value="Category 2">Type 2</option>
          </select>
        </div>
        <div>
          <label htmlFor="collection">Collection</label>
          <select name="collection" id="collection">
            <option value="" disabled selected>
              Select Collection
            </option>
            <option value="Category 1">Collection 1</option>
            <option value="Category 2">Collection 2</option>
          </select>
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
