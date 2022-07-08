import CategoriesTable from './Table/Index'

const Categories = () => {
  return (
    <div className="categories">
      <header className="categories__header">
        <h1 className="text-left font-semibold text-lg text-primary-blue_dark_1">
          Category List
        </h1>
        <button className="categories__header__button">Add Category</button>
      </header>
      <CategoriesTable />
    </div>
  )
}

export default Categories
