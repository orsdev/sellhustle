import { FC } from 'react'

type Props = {
  onSave(): void
  onSaveDraft(): void
}

const Header: FC<Props> = ({ onSave, onSaveDraft }) => {
  return (
    <header className="customer__edit__header">
      <div>
        <p className="font-xs mb-3">Dashboard / Customers / Edit Customer </p>
        <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
          <span>Edit Customer</span>
        </h1>
      </div>
      <div className="w-6" />
      <div className="customer__edit__header__btn">
        <button
          className="customer__edit__header__draft mr-3"
          onClick={onSaveDraft}
        >
          Save as Draft
        </button>
        <button className="customer__edit__header__save" onClick={onSave}>
          Save
        </button>
      </div>
    </header>
  )
}

export default Header
