import Image from 'next/image'
import { ChangeEvent } from 'react'

type SearchInputProps = {
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}
const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  return (
    <div className="common__search__form">
      <form>
        <label htmlFor="search">
          <Image
            src="/icons/overlay/search.png"
            alt="Search"
            height={38}
            width={38}
          />
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder={placeholder}
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default SearchInput
