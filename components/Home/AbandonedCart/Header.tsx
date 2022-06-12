import CustomDate from '@/components/Home/AbandonedCart/Date'

const Header = () => {
  return (
    <header className="abandoned__cart__header">
      <h4 className="abandoned__cart__header__title mr-4">Abandoned Cart</h4>
      <div className="abandoned__cart__header__date">
        <div className="abandoned__cart__header__from mb-3 base:mb-0 ">
          <h5 className="font-xs">From</h5>
          <CustomDate name="From" placeholder="Date Selection" />
        </div>
        <div className="w-4" />
        <div className="abandoned__cart__header__to">
          <h5 className="font-xs">To</h5>
          <CustomDate name="From" placeholder="Date Selection" />
        </div>
      </div>
    </header>
  )
}

export default Header
