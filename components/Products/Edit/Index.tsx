import GeneralInfo from './GeneralInfo'
import Header from './Header'
import Inventory from './Inventory'
import Organization from './Organization'
import Seo from './Seo'

const EditProduct = () => {
  return (
    <div className="product__edit">
      <div className="pt-12">
        <Header onSaveDraft={() => {}} onPublished={() => {}} />
      </div>
      <div className="w-full mt-5">
        <div className="product__edit__body">
          <div className="product__edit__body__left">
            <GeneralInfo />
            <Inventory />
          </div>
          <div className="product__edit__body__right">
            <Organization />
            <Seo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct
