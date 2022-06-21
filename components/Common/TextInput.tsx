import { spawn } from 'child_process'
import { FC } from 'react'

type TextInputProps = {
  onChange: (event: any) => void
  onBlur?: (event: any) => void
  name: string
  labelTitle: string
  placeholder?: string
  isOptional?: boolean
  value?: string
}

const TextInput: FC<TextInputProps> = ({
  onChange,
  onBlur,
  name,
  value,
  labelTitle,
  isOptional = false,
  placeholder = ''
}: TextInputProps) => {
  return (
    <div>
      <div className="common__text__field">
        <label htmlFor={name} className="common__text__field__label" id={name}>
          {labelTitle}
          {isOptional && (
            <span className="ml-1 text-primary-blue_dark_2">(Optional)</span>
          )}
        </label>
        <input
          type="text"
          name={name}
          id={name}
          className="common__text__field__input cm-border"
          onChange={onChange}
          placeholder={placeholder}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </div>
  )
}

export default TextInput
