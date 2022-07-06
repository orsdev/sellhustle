import { useRef, useState } from 'react'
import { Dropdown } from 'antd'
import Image from 'next/image'

const TableHeader = ({ headerTitle }: { headerTitle: string }) => {
  const [showSearchInput, setShowSearchInput] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="cm__table__header bg-white cm-border">
      {/* Search Input */}
      <div className="cm__table__header__search" data-show={showSearchInput}>
        <div className="flex flex-1">
          <button className="mr-1" onClick={() => setShowSearchInput(false)}>
            <i
              className="fa fa-arrow-left text-primary-blue_dark_1"
              aria-hidden="true"
            />
          </button>
          <input
            type="text"
            className="cm__table__header__search__input"
            placeholder="Quick Search by order ID"
            ref={inputRef}
          />
        </div>
        <button>
          <Image
            src="/icons/search.png"
            alt="Search Trigger"
            height={13}
            width={13}
          />
        </button>
      </div>

      <div className="cm__table__header__content" data-show={showSearchInput}>
        <h4 className="cm__table__header__title hidden xs:block">
          {headerTitle}
        </h4>
        {/* Search Filter, Sort Triggers */}
        <div className="cm__table__header__tools">
          <button
            onClick={() => {
              setShowSearchInput(true)
              if (inputRef.current) {
                inputRef.current.focus()
              }
            }}
          >
            <Image
              src="/icons/search.png"
              alt="Search Trigger"
              height={13}
              width={13}
            />
          </button>
          <span className="cm__table__header__sep" />

          {/* Filter Dropdown */}
          <Dropdown
            overlay={
              <div
                className="cm__table__header__filter__dropdown"
                onClick={(e) => e.stopPropagation()}
              >
                <h6
                  className="font-xs text-primary-blue_dark_1 px-5 pb-3"
                  style={{
                    fontWeight: 500,
                    borderBottom: '1px solid #e5e9f2'
                  }}
                >
                  Advanced Filter
                </h6>
                <div className="mt-4">
                  <div className="cm__table__header__filter__dropdown__filter px-5">
                    <div>
                      <h4 className="mb-3">TYPE</h4>
                      <select name="type">
                        <option value="any">Any Type</option>
                      </select>
                    </div>
                    <div>
                      <h4 className="mb-3">STATUS</h4>
                      <select name="status">
                        <option value="any">Any Status</option>
                      </select>
                    </div>
                  </div>
                  <div className="px-5">
                    <button className="cm__table__header__filter__dropdown__apply">
                      Apply Filter
                    </button>
                  </div>
                  <div className="cm__table__header__filter__dropdown__footer">
                    <button>Reset Filter</button>
                    <button>Save Filter</button>
                  </div>
                </div>
              </div>
            }
            trigger={['click']}
          >
            <button>
              <Image
                src="/icons/filter.png"
                alt="Filter Trigger"
                height={28}
                width={28}
              />
            </button>
          </Dropdown>

          {/* Settings Dropdown */}
          <Dropdown
            overlay={
              <div className="cm__table__header__settings__dropdown">
                <h6
                  className="font-xs text-primary-blue_dark_1 px-5"
                  style={{
                    fontWeight: 500
                  }}
                >
                  SHOW
                </h6>
                <div className="mt-2 px-5">
                  <button>10</button>
                  <button>20</button>
                  <button>50</button>
                </div>
                <h6
                  className="font-xs text-primary-blue_dark_1 pt-3 mt-3 px-5"
                  style={{
                    fontWeight: 500,
                    borderTop: '1px solid #e5e9f2'
                  }}
                >
                  ORDER
                </h6>
                <div className="mt-1 px-5">
                  <button>Asc</button>
                  <button>Desc</button>
                </div>
              </div>
            }
            trigger={['click']}
          >
            <button className="ml-5 mt-2">
              <Image
                src="/icons/setting.png"
                alt="Sort Trigger"
                height={16}
                width={16}
              />
            </button>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default TableHeader
