import Router from 'next/router'

const Header = () => {
  return (
    <header className="categories__list__header">
      <div>
        <p className="font-xs mb-3">Dashboard / Categories / Category List</p>
        <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
          <span>Categories List</span>
        </h1>
      </div>
      <div className="w-6" />
      <div className="categories__list__header__btn">
        <button className="font-xs text-primary-blue_dark_2 text-right mb-1">
          <i className="fa fa-plus mr-2" aria-hidden="true" />
          <span>Add Category</span>
        </button>
      </div>
    </header>
  )
}

export default Header
