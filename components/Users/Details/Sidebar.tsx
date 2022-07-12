import React, { useContext } from 'react'
import Image from 'next/image'
import { UserDetailsContext, UserTab } from './Index'
import { Dropdown } from 'antd'

const Sidebar = () => {
  const { tab, setTab, showSidebar, setShowSidebar } =
    useContext(UserDetailsContext)

  return (
    <>
      <div className="user__sidebar__container" data-show={showSidebar} />
      <aside className="user__sidebar" data-show={showSidebar}>
        <div className="user__sidebar__avatar">
          <div className="user__sidebar__photo font-xs">AB</div>
          <div className="ml-2">
            <h5 className="font-base text-primary-blue_dark_4">Adam Butcher</h5>
            <h6 className="font-xs">adam@gmail.com</h6>
          </div>
          <div className="absolute right-4">
            <Dropdown
              trigger={['click']}
              placement="bottomRight"
              overlay={
                <>
                  <div className="user__sidebar__dropdown" key="dropdown">
                    <button className="user__sidebar__dropdown__item">
                      <Image
                        src="/icons/camera.png"
                        alt="Change Photo"
                        height={16}
                        width={16}
                        objectFit="contain"
                      />
                      <span className="ml-2">Change Photo</span>
                    </button>
                    <button className="user__sidebar__dropdown__item">
                      <Image
                        src="/icons/edit.png"
                        alt="Update Profile"
                        height={16}
                        width={16}
                        objectFit="contain"
                      />
                      <span className="ml-2">Update Profile</span>
                    </button>
                  </div>
                </>
              }
            >
              <button>
                <Image
                  src="/icons/pen.png"
                  alt="Edit User"
                  height="14px"
                  width="14px"
                />
              </button>
            </Dropdown>
          </div>
        </div>

        <ul className="user__sidebar__nav">
          <li>
            <button
              className="font-base flex items-center"
              style={{
                color:
                  tab === UserTab.PERSONAL ? '#0544DD' : 'rgba(11, 25, 45, 0.5)'
              }}
              onClick={() => {
                setShowSidebar(false)
                setTab(UserTab.PERSONAL)
              }}
            >
              {tab === UserTab.PERSONAL && (
                <Image
                  src="/icons/person-dark.png"
                  alt="Edit User"
                  height="16px"
                  width="16px"
                />
              )}
              {tab !== UserTab.PERSONAL && (
                <Image
                  src="/icons/person-light.png"
                  alt="Edit User"
                  height="16px"
                  width="16px"
                />
              )}
              <span className="ml-2">Personal Information</span>
            </button>
            <div className="absolute right-4">
              {tab === UserTab.PERSONAL && (
                <div className="relative top-1 -right-1">
                  <Image
                    src="/icons/right-dark.png"
                    alt="Collapse"
                    height="18px"
                    width="18px"
                    objectFit="contain"
                  />
                </div>
              )}
              {tab !== UserTab.PERSONAL && (
                <Image
                  src="/icons/right.png"
                  alt="Collapse"
                  height="12px"
                  width="12px"
                  objectFit="contain"
                />
              )}
            </div>
          </li>
          <li>
            <button
              className="font-base flex items-center"
              style={{
                color:
                  tab === UserTab.NOTIFICATION
                    ? '#0544DD'
                    : 'rgba(11, 25, 45, 0.5)'
              }}
              onClick={() => {
                setShowSidebar(false)
                setTab(UserTab.NOTIFICATION)
              }}
            >
              {tab === UserTab.NOTIFICATION && (
                <Image
                  src="/icons/gong-dark.png"
                  alt="Notifications"
                  height="16px"
                  width="16px"
                />
              )}
              {tab !== UserTab.NOTIFICATION && (
                <Image
                  src="/icons/gong-light.png"
                  alt="Notifications"
                  height="16px"
                  width="16px"
                />
              )}
              <span className="ml-2">Notifications</span>
            </button>
            <div className="absolute right-4">
              {tab === UserTab.NOTIFICATION && (
                <div className="relative top-1 -right-1">
                  <Image
                    src="/icons/right-dark.png"
                    alt="Collapse"
                    height="18px"
                    width="18px"
                    objectFit="contain"
                  />
                </div>
              )}
              {tab !== UserTab.NOTIFICATION && (
                <Image
                  src="/icons/right.png"
                  alt="Collapse"
                  height="12px"
                  width="12px"
                  objectFit="contain"
                />
              )}
            </div>
          </li>
          <li>
            <button
              className="font-base flex items-center"
              style={{
                color:
                  tab === UserTab.SECURITY ? '#0544DD' : 'rgba(11, 25, 45, 0.5)'
              }}
              onClick={() => {
                setShowSidebar(false)
                setTab(UserTab.SECURITY)
              }}
            >
              {tab === UserTab.SECURITY && (
                <Image
                  src="/icons/shield-dark.png"
                  alt="Security"
                  height="16px"
                  width="16px"
                />
              )}
              {tab !== UserTab.SECURITY && (
                <Image
                  src="/icons/shield-light.png"
                  alt="Security"
                  height="16px"
                  width="16px"
                />
              )}
              <span className="ml-2">Security Settings</span>
            </button>
            <div className="absolute right-4">
              {tab === UserTab.SECURITY && (
                <div className="relative top-1 -right-1">
                  <Image
                    src="/icons/right-dark.png"
                    alt="Collapse"
                    height="18px"
                    width="18px"
                    objectFit="contain"
                  />
                </div>
              )}
              {tab !== UserTab.SECURITY && (
                <Image
                  src="/icons/right.png"
                  alt="Collapse"
                  height="12px"
                  width="12px"
                  objectFit="contain"
                />
              )}
            </div>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
