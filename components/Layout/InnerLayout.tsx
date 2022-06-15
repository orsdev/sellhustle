import { FC, ReactNode } from 'react'
import PageTitle from '../Common/PageTitle'
import SearchInput from '../Common/SearchInput'

type InnerLayoutProps = {
  children: ReactNode
  showSearchForm?: boolean
}

const InnerLayout: FC<InnerLayoutProps> = ({
  children,
  showSearchForm = true
}) => {
  return (
    <div className="inner__layout px-7 py-7">
      <header className="inner__layout__header">
        <PageTitle />
        {showSearchForm && (
          <>
            <div className="w-6" />
            <div className="inner__layout__header__input">
              <SearchInput
                placeholder="Search for the orders"
                onChange={(event) => console.log(event.target.value)}
              />
            </div>
          </>
        )}
      </header>
      <div className="w-full inner__layout__body">{children}</div>
    </div>
  )
}

export default InnerLayout
