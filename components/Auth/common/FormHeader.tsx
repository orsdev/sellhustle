import { FC } from 'react'

type Props = {
  heading: string
  text: string
}

const FormHeader: FC<Props> = ({ heading, text }) => {
  return (
    <div className="form__header mb-10">
      <h1
        className="text-3xl font-semibold"
        style={{
          color: '#021342'
        }}
      >
        {heading}
      </h1>
      <p
        className="text-secondary font-base mt-3"
        style={{
          fontWeight: 400
        }}
      >
        {text}
      </p>
    </div>
  )
}

export default FormHeader
