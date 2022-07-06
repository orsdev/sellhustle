import { Input } from 'antd'
import { FC } from 'react'

type TextInputProps = {
  onChange: (event: any) => void
  onBlur?: (event: any) => void
  value: string
  name: string
  hasError?: boolean | undefined
  status?: boolean
  labelTitle: string
  placeholder?: string
}

export const TextInput: FC<TextInputProps> = ({
  onChange,
  onBlur,
  name,
  labelTitle,
  value = '',
  hasError = false,
  placeholder = ''
}) => {
  return (
    <div className="cm__form__input">
      <label htmlFor={name}>{labelTitle}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        id={name}
        data-error={hasError}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export const EmailInput: FC<TextInputProps> = ({
  onChange,
  onBlur,
  name,
  labelTitle,
  value = '',
  hasError = false,
  placeholder = ''
}) => {
  return (
    <div className="cm__form__input cm__form__input__email">
      <label htmlFor={name}>{labelTitle}</label>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        data-error={hasError}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export const PasswordInput: FC<TextInputProps> = ({
  onChange,
  onBlur,
  name,
  labelTitle,
  value = '',
  hasError = false,
  placeholder = ''
}) => {
  return (
    <div className="cm__form__input">
      <label htmlFor={name}>{labelTitle}</label>
      <Input.Password
        className="cm__form__input__password"
        name={name}
        value={value}
        placeholder={placeholder}
        status={hasError ? 'error' : ''}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}
