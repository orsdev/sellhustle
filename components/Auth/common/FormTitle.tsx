import { FC } from 'react'

type FormTitleProps = {
  title: string
  borderDirection?: 'right' | 'left'
}

const FormTitle: FC<FormTitleProps> = ({ title, borderDirection = 'left' }) => {
  return (
    <div className="form__title">
      <h3 className={'form__title__heading font-base ' + borderDirection}>
        {title}
      </h3>
    </div>
  )
}

export default FormTitle
