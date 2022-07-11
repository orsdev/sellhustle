import ImageUpload from '@/components/Common/ImageUpload'

const UploadPhotos = () => {
  return (
    <div className="collections__photos">
      <h3 className="collections__photos__heading">Background Image</h3>
      <p className="text-primary-blue_dark_1 my-7 text-xs">Upload Photos</p>
      <div className="mt-7">
        <div className="collections__photos__upload">
          <ImageUpload />
          <ImageUpload />
          <ImageUpload />
        </div>
      </div>
    </div>
  )
}

export default UploadPhotos
