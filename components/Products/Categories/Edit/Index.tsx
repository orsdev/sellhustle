import GeneralInfo from './GeneralInfo'
import Header from './Header'
import Media from './Media'
import NewMeta from './NewMeta'
import Seo from './Seo'
import CategoriesTab from './Tabs/Index'

const CategoryEdit = () => {
  return (
    <div className="category__edit">
      <div className="pt-6">
        <Header onSaveDraft={() => {}} onPublished={() => {}} />
      </div>
      <div className="w-full mt-5">
        <div className="category__edit__body">
          <div className="category__edit__body__left">
            <GeneralInfo />
            <CategoriesTab />
          </div>
          <div className="category__edit__body__right">
            <Media />
            <Seo />
            <NewMeta />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryEdit
