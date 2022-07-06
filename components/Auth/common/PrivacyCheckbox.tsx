import Link from 'next/link'
import { FC } from 'react'

type Props = {
  onChange: (event: any) => void
  onBlur?: (event: any) => void
  checked: boolean
  hasError: boolean | undefined
}

const PrivacyCheckbox: FC<Props> = ({
  onChange,
  checked = false,
  hasError = false
}) => {
  return (
    <div className="privacy__checkbox">
      <label
        htmlFor="privacy"
        className="flex items-center select-none"
        data-labelerror={hasError}
      >
        <input
          type="checkbox"
          name="privacy"
          id="privacy"
          onChange={onChange}
          checked={checked}
        />
        <p className="text-secondary font-xs ml-2">
          I agree to Sel Hustle
          <Link href={'#'}>
            <a className="ml-1 text-primary-blue_dark_2">
              Privacy Policy
              <span className="text-secondary mx-1">&</span>
              Terms
            </a>
          </Link>
        </p>
      </label>
    </div>
  )
}

export default PrivacyCheckbox
