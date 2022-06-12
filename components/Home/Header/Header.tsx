import PageTitle from '@/components/Common/PageTitle'
import SearchInput from '@/components/Common/SearchInput'

const Header = () => {
  return (
    <header className="home__header">
      <PageTitle />
      <div className="w-6" />
      <div className="home__header__input">
        <SearchInput
          placeholder="Search for the product"
          onChange={(event) => console.log(event.target.value)}
        />
      </div>
    </header>
  )
}

export default Header
