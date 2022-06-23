import Availability from './Availability'
import Featured from './Featured'
import GeneralInfo from './GeneralInfo'
import Header from './Header'
import UploadPhotos from './UploadPhotos'

const CollectionsEdit = () => {
  return (
    <div className="collections__edit">
      <div className="pt-12">
        <Header onSaveDraft={() => {}} onPublished={() => {}} />
      </div>
      <div className="w-full mt-5">
        <div className="collections__edit__body">
          <div className="collections__edit__body__left">
            <GeneralInfo />
            <Featured />
          </div>
          <div className="collections__edit__body__right">
            <Availability />
            <UploadPhotos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionsEdit
