import Goback from '@/components/Common/Goback'

const Header = () => {
  return (
    <header className="settings__header">
      <Goback />
      <div className="settings__header__container mt-2">
        <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
          General Settings
        </h1>
        <div className="w-6" />
        <div className="settings__header__btn">
          <button>Save</button>
        </div>
      </div>
    </header>
  )
}

export default Header
