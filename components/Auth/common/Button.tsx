import React, { FC } from 'react'

type ButtonProps = {
  title: string
  type?: 'submit' | 'reset' | 'button'
}
const AuthButton: FC<ButtonProps> = ({ title, type = 'submit' }) => {
  return (
    <button type={type || 'submit'} className="auth__common__button">
      {title}
    </button>
  )
}

export default AuthButton
