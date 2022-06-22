import CustomButton from '@/components/Common/CustomButton'
import Image from 'next/image'

const TableHeader = () => {
  return (
    <header className="product__table__header">
      <CustomButton
        title="New Order"
        bg="bg-primary-blue_light_3"
        color="text-white"
        showIcon={true}
      />
      <div className="header__right">
        <div className="header__right__upload">
          <p className="font-xs mr-4">CSV file</p>
          <button className="bg-white">
            Upload
            <Image
              src="/icons/upload.png"
              alt="upload"
              height={10.5}
              width={10.5}
              objectFit="contain"
            />
          </button>
        </div>
        <div className="header__right__download base:ml-4">
          <button className="bg-primary-blue_light_1 text-primary-blue_dark_1">
            Download
            <Image
              src="/icons/download.png"
              alt="Download"
              height={11}
              width={11}
              objectFit="contain"
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default TableHeader
