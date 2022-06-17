import { Input } from 'antd'
import AuthButton from '../common/Button'

const ResetForm = () => {
  return (
    <div className="reset__form mt-7 w-full">
      <form>
        <div className="reset__form__input mb-7">
          <label
            htmlFor="email"
            className="font-base mb-2 block text-secondary"
          >
            Email
          </label>
          <Input type="email" />
        </div>
        <AuthButton type="submit" title="Reset your password" />
      </form>
    </div>
  )
}

export default ResetForm
