import Image from 'next/image'
import React, { ChangeEvent, FC } from 'react'

type Props = {
  showSearchForm?: boolean
  title: string
  sub?: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const LayoutHeader: FC<Props> = ({
  title,
  onChange,
  sub = '',
  placeholder = '',
  showSearchForm = false
}) => {
  return (
    <header className="layout__header">
      <div className="layout__header__title">
        {sub && <p className="font-xs mb-3">{sub}</p>}
        <h1 className="text-left font-medium text-lg text-primary-blue_dark_1">
          {title}
        </h1>
      </div>
      {showSearchForm && (
        <>
          <div className="w-6" />
          <div className="layout__header__form__container">
            <div className="layout__header__form">
              <form>
                <label htmlFor="search">
                  <Image
                    src="/icons/overlay/search.png"
                    alt="Search"
                    height={38}
                    width={38}
                  />
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder={placeholder}
                  onChange={onChange}
                />
              </form>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default LayoutHeader
