import CustomButton from '@/components/Common/CustomButton'

const Header = () => {
  return (
    <header className="customers__list__header">
      <h1 className="text-left font-semibold text-lg text-primary-blue_dark_1">
        Customers List
      </h1>
      <button className="sales__order__header__button">Add Customer</button>
    </header>
  )
}

export default Header
