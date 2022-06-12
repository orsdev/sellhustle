import { useRouter } from 'next/router'

const FormatTitle = (pathname: string) => {
  if (pathname === '/') {
    return 'Dashboard'
  } else {
    const getFirstLetter = pathname.substring(1, 2)
    const remainingLetters = pathname.substring(2)
    return getFirstLetter.toUpperCase() + remainingLetters
  }
}

const PageTitle = () => {
  const { pathname } = useRouter()

  console.log(pathname)
  return (
    <div className="common__page__title">
      <h1 className="text-left font-medium text-lg text-primary-blue_dark_1">
        {FormatTitle(pathname)}
      </h1>
    </div>
  )
}

export default PageTitle
