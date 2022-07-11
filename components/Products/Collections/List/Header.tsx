import { FC } from 'react'

type Props = {
  onPublished(): void
  onSaveDraft(): void
}

const Header: FC<Props> = ({ onPublished, onSaveDraft }) => {
  return (
    <header className="collections__list__header mt-2">
      <div>
        <h1 className="text-left font-medium text-md base:text-lg text-primary-blue_dark_1">
          <span>Collection List</span>
        </h1>
      </div>
      <div className="w-6" />
      <div className="collections__list__header__btn">
        <button
          className="collections__list__header__draft mr-3"
          onClick={onSaveDraft}
        >
          Save as Draft
        </button>
        <button
          className="collections__list__header__published"
          onClick={onPublished}
        >
          Publish
        </button>
      </div>
    </header>
  )
}

export default Header
