import { Input } from 'antd'
import Link from 'next/link'
import AuthButton from '../common/Button'

const LoginForm = () => {
  return (
    <div className="login__form mt-7 w-full">
      <form>
        <div className="login__form__input mb-7">
          <label
            htmlFor="email"
            className="font-base mb-2 block text-secondary"
          >
            Email
          </label>
          <Input type="email" />
        </div>
        <div className="login__form__input">
          <label
            htmlFor="password"
            className="font-base mb-2 block text-secondary"
          >
            Password
          </label>
          <Input.Password />
        </div>
        <p className="font-xs text-secondary mt-4 mb-5">
          Forgot your passwod?
          <Link href="/forgot-password">
            <a className="text-primary-blue_dark_2 font-semibold inline-block ml-2">
              Reset here?
            </a>
          </Link>
        </p>
        <AuthButton type="submit" title="Login" />
      </form>
    </div>
  )
}

export default LoginForm
