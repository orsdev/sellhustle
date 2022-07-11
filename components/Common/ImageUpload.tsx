import React, { useState } from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import { UploadFile, UploadProps } from 'antd/lib/upload/interface'
import Image from 'next/image'

const beforeUpload = (file: File) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'

  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }

  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
  }

  return isJpgOrPng && isLt2M
}

const ImageUpload = () => {
  const [loading, setLoading] = useState(false)
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList)

  const uploadButton = (
    <div>
      {loading ? (
        <LoadingOutlined />
      ) : (
        <Image
          alt="Upload"
          src="/icons/media.png"
          height={25}
          width={25}
          objectFit="contain"
        />
      )}
      <div className="mt-0">
        <p
          className="text-secondary w-[90%] mx-auto inline-block"
          style={{
            fontSize: '11px'
          }}
        >
          Drop your image here, or{' '}
          <span className="text-primary-blue_dark_1 block cursor-pointer">
            {' '}
            Click to upload
          </span>
        </p>
      </div>
    </div>
  )
  return (
    <div className="image__uploader">
      <Upload
        name="media"
        listType="picture-card"
        className="image__uploader__card"
        multiple={false}
        maxCount={1}
        showUploadList={{
          showPreviewIcon: false
        }}
        fileList={fileList}
        accept="image/*"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        onPreview={() => false}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
    </div>
  )
}

export default ImageUpload
