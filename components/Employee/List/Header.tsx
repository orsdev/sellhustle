import CustomButton from '@/components/Common/CustomButton'

const Header = () => {
  return (
    <header className="employee__list__header">
      <h1 className="text-left font-semibold text-lg text-primary-blue_dark_1">
        User List
      </h1>
      <div className="flex items-center">
        <button className="employee__list__header__button-import">
          Import User
        </button>
        <button className="employee__list__header__button-add">Add User</button>
      </div>
    </header>
  )
}

export default Header
