import { ChangeEvent } from 'react'
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import SearchInput from './SearchInput'

const ProfileHeader = ({
  onChange
}: {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <header className="profile__header bg-white py-3 px-8 cm-border">
      <SearchInput onChange={onChange} />
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
          <div className="profile__header__avatar">
            <Image
              src="/avatar-profile.png"
              alt="Avatar"
              height={38}
              width={38}
              objectFit="contain"
            />
          </div>
          <div className="profile__header__name">
            <h6 className="profile__header__role font-xs">Admin</h6>
            <Dropdown
              overlay={
                <>
                  <Menu className="profile__header__dropdown__menu">
                    <Menu.Item className="profile__header__dropdown__item">
                      View Profile
                    </Menu.Item>
                    <Menu.Item className="profile__header__dropdown__item">
                      Account Settings
                    </Menu.Item>
                    <div className="my-3">
                      <hr />
                    </div>
                    <Menu.Item className="profile__header__dropdown__item">
                      Sign Out
                    </Menu.Item>
                  </Menu>
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
