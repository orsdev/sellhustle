const Header = ({ name }: { name: string }) => {
  return (
    <header className="customer__details__header">
      <div className="common__page__title">
        <p className="font-xs mb-3">Dashboard / Customers / {name}</p>
        <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
          <span>Customers Detail</span>
        </h1>
      </div>
      <div className="w-6" />
      <div className="customer__details__header__btn">
        <button className="customer__details__header__delete mr-3">
          Delete
        </button>
        <button className="customer__details__header__edit">Edit</button>
      </div>
    </header>
  )
}

export default Header
