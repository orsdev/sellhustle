import { FC } from 'react'

type PageTitleType = {
  title: string
  sub?: string
}

const PageTitle: FC<PageTitleType> = ({ title, sub = '' }) => {
  return (
    <div className="common__page__title">
      {sub && <p className="font-bas mb-3">{sub}</p>}
      <h1 className="text-left font-medium text-lg text-primary-blue_dark_1">
        {title}
      </h1>
    </div>
  )
}

export default PageTitle
