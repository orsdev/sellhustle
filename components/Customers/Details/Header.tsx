import Router from 'next/router'
import Goback from '@/components/Common/Goback'

const Header = ({ id }: { id: string }) => {
  return (
    <header className="customer__details__header">
      <Goback />
      <div className="customer__details__header__container mt-2">
        <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
          <span>Customers Detail</span>
        </h1>
        <div className="w-6" />
        <div className="customer__details__header__btn">
          <button className="customer__details__header__delete mr-3">
            Delete
          </button>
          <button
            className="customer__details__header__edit"
            onClick={() =>
              Router.push('/customers/edit?id= ' + encodeURIComponent(id))
            }
          >
            Edit
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
