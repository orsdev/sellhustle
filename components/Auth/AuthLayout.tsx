import { FC, ReactNode } from 'react'
import dayjs from 'dayjs'
import Image from 'next/image'

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="auth__layout">
      <div className="auth__layout__container">
        <div className="auth__layout__bg">
          <div className="auth__layout__logo">
            <Image
              src="/logo-light.png"
              alt="Logo"
              height={100}
              width={100}
              className="auth__layout__logo__img"
              objectFit="contain"
            />
            <h3 className="auth__layout__name">Sel Hustle</h3>
          </div>
        </div>
        <div className="bg-white auth__layout__content px-5 base:px-10 md:px-12 lg:px-28">
          <div>{children}</div>
          <small className="auth__layout__copyright">
            SEL HUSTLE All Rights Reserved. {dayjs(new Date()).format('YYYY')}
          </small>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
