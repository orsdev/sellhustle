import { FC, ReactNode } from 'react'

type Props = {
  heading: string
  info: string | ReactNode
}

const FormHeader: FC<Props> = ({ heading, info }) => {
  return (
    <div>
      <h4
        className="font-base text-primary-blue_dark_1 mb-1"
        style={{
          fontSize: '16px',
          fontWeight: 600
        }}
      >
        {heading}
      </h4>
      <h6 className="font-xs">{info}</h6>
    </div>
  )
}

export default FormHeader
