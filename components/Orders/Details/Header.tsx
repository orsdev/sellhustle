import Goback from '@/components/Common/Goback'

const Header = ({ id }: { id: string }) => {
  return (
    <header className="details__header">
      <Goback />
      <div className="details__header__container mt-2">
        <div className="common__page__title">
          <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
            <span>Order</span>{' '}
            <span className="text-primary-blue_dark_2">{id}</span>
          </h1>
        </div>
        <div className="w-6" />
        <div className="details__header__btn">
          <button className="details__header__delete mr-3">Delete</button>
          <button className="details__header__edit">Edit</button>
        </div>
      </div>
    </header>
  )
}

export default Header
