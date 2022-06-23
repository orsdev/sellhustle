import { FC, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {
  maxFile?: number
}

const Dropzone: FC<Props> = ({ maxFile = 5 }) => {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: maxFile,
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const thumbs = files.map((file: any) => (
    <div className="dropzone__preview__image" key={file.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={file.preview}
        alt=""
        // Revoke data uri after image is loaded
        onLoad={() => {
          URL.revokeObjectURL(file.preview)
        }}
      />
    </div>
  ))

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mt-7">
      <div {...getRootProps({ className: 'dropzone w-full' })}>
        <input {...getInputProps()} />
        <p className="text-secondary">
          Drop your an image here, or select{' '}
          <span className="text-primary-blue_dark_1 block cursor-pointer">
            {' '}
            Click to browse
          </span>
        </p>
      </div>
      <div>
        <small className="italic">Max of {maxFile} image(s)</small>
      </div>
      <div className="dropzone__preview">{thumbs}</div>
    </div>
  )
}

export default Dropzone
