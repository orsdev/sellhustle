import CustomButton from '@/components/Common/CustomButton'

const Header = () => {
  return (
    <header className="sales__order__header">
      <h1 className="text-left font-semibold text-lg text-primary-blue_dark_1">
        Sales Order
      </h1>
      <button className="sales__order__header__button">Add Order</button>
    </header>
  )
}

export default Header
