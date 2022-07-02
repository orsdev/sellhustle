import { ChangeEvent, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { MainLayoutContext } from '../Layout/Main'

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const ProfileHeader = ({ onChange }: Props) => {
  const { setShowSidebar } = useContext(MainLayoutContext)

  return (
    <header className="profile__header bg-white py-3 px-8">
      <div className="profile__header__mobile flex items-center lg:hidden">
        <button onClick={() => setShowSidebar(true)}>
          <i
            className="fa fa-bars text-md text-secondary"
            aria-hidden="true"
          ></i>
        </button>
        <div className="profile__header__logo">
          <Link href="/">
            <a className="flex items-center ml-5 md:ml-8 text-primary-blue_dark_4">
              <Image
                src="/logo.png"
                alt="Sell Hustle Logo"
                height={30}
                width={30}
                objectFit="contain"
              />
              <span className="ml-2 text-sm">Sel Hustle</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="profile__header__search">
        <label htmlFor="search">
          <Image
            src="/icons/light/search.png"
            alt="Search"
            height={13}
            width={13}
          />
        </label>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for anything"
          onChange={onChange}
        />
      </div>
      <div className="profile__header__right">
        <div className="flex items-center">
          <div className="profile__header__message">
            <button>
              <Image
                src="/icons/light/message.png"
                alt="Message"
                height={20}
                width={20}
                objectFit="contain"
              />
            </button>
          </div>
          <div className="profile__header__bell">
            <button>
              <Image
                src="/icons/light/bell.png"
                alt="Notification"
                height={20}
                width={20}
                objectFit="contain"
              />

              <div className="profile__header__bell__badge" />
            </button>
          </div>
        </div>
        <Dropdown
          overlay={
            <>
              <div className="profile__header__dropdown__menu">
                <div className="profile__header__avatar__dropdown flex items-center">
                  <h5 className="profile__header__avatar profile__header__avatar__dark">
                    MA
                  </h5>
                  <div className="ml-2">
                    <h6
                      className="font-xs text-primary-blue_dark_4"
                      style={{
                        fontWeight: 500
                      }}
                    >
                      Miracle Ayodele
                    </h6>
                    <h6
                      className="opacity-70"
                      style={{
                        fontSize: '12px'
                      }}
                    >
                      ayo@gmail.com
                    </h6>
                  </div>
                </div>

                <button className="profile__header__dropdown__item" key="view">
                  View Profile
                </button>
                <button
                  className="profile__header__dropdown__item"
                  key="settings"
                >
                  Account Settings
                </button>
                <div className="my-3">
                  <hr />
                </div>
                <button
                  className="profile__header__dropdown__item"
                  key="logoff"
                >
                  Sign Out
                </button>
              </div>
            </>
          }
          className="profile__header__dropdown"
        >
          <div className="profile__header__profile">
            <div className="profile__header__avatar profile__header__avatar__light">
              MA
            </div>
            <button className="profile__header__profile__button font-xs text-left">
              <h6 className="profile__header__role font-xs">Admin</h6>
              <div className="flex items-center">
                <span className="mr-1 font-medium">Miracle Ayodele</span>
                <DownOutlined />
              </div>
            </button>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

export default ProfileHeader
