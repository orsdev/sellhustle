import { FC } from 'react'

type Props = {
  onPublished(): void
  onSaveDraft(): void
}

const Header: FC<Props> = ({ onPublished, onSaveDraft }) => {
  return (
    <header className="product__edit__header">
      <div>
        <p className="font-xs mb-3">Dashboard / Products / New Product</p>
        <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
          <span>Edit / New Product</span>
        </h1>
      </div>
      <div className="w-6" />
      <div className="product__edit__header__btn">
        <button
          className="product__edit__header__draft mr-3"
          onClick={onSaveDraft}
        >
          Save as Draft
        </button>
        <button className="product__edit__header__save" onClick={onPublished}>
          Save
        </button>
      </div>
    </header>
  )
}

export default Header
