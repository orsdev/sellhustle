import { ChangeEvent } from 'react'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import SearchInput from './SearchInput'

const ProfileHeader = ({
  onChange
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <header className="profile__header bg-white py-3 px-8">
      <div className="profile__header__search">
        <SearchInput onChange={onChange} />
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
        <div className="profile__header__profile">
          <div className="profile__header__avatar profile__header__avatar__light">
            MA
          </div>
          <div className="profile__header__name">
            <h6 className="profile__header__role font-xs">Admin</h6>
            <Dropdown
              overlay={
                <>
                  <div className="profile__header__dropdown__menu">
                    <div className="profile__header__avatar__dropdown flex items-center">
                      <h5 className="profile__header__avatar profile__header__avatar__dark">
                        MA
                      </h5>
                      <div className="ml-1">
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

                    <button
                      className="profile__header__dropdown__item"
                      key="view"
                    >
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
              <button className="profile__header__dropdown__name font-xs">
                <span className="mr-1">Miracle Ayodele</span>
                <DownOutlined />
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ProfileHeader
