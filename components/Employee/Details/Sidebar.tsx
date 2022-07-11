import React, { useContext } from 'react'
import Image from 'next/image'
import { EmployeeDetailsContext, EmployeeTab } from './Index'

const Sidebar = () => {
  const { tab, setTab, showSidebar, setShowSidebar } = useContext(
    EmployeeDetailsContext
  )

  return (
    <>
      <div className="employee__sidebar__container" data-show={showSidebar} />
      <aside className="employee__sidebar" data-show={showSidebar}>
        <div className="employee__sidebar__avatar">
          <div className="employee__sidebar__photo font-xs">AB</div>
          <div className="ml-2">
            <h5 className="font-base text-primary-blue_dark_4">Adam Butcher</h5>
            <h6 className="font-xs">adam@gmail.com</h6>
          </div>
          <div className="absolute right-4">
            <button>
              <Image
                src="/icons/pen.png"
                alt="Edit User"
                height="14px"
                width="14px"
              />
            </button>
          </div>
        </div>

        <ul className="employee__sidebar__nav">
          <li>
            <button
              className="font-base flex items-center"
              style={{
                color:
                  tab === EmployeeTab.PERSONAL
                    ? '#0544DD'
                    : 'rgba(11, 25, 45, 0.5)'
              }}
              onClick={() => {
                setShowSidebar(false)
                setTab(EmployeeTab.PERSONAL)
              }}
            >
              {tab === EmployeeTab.PERSONAL && (
                <Image
                  src="/icons/person-dark.png"
                  alt="Edit User"
                  height="16px"
                  width="16px"
                />
              )}
              {tab !== EmployeeTab.PERSONAL && (
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
              {tab === EmployeeTab.PERSONAL && (
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
              {tab !== EmployeeTab.PERSONAL && (
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
                  tab === EmployeeTab.NOTIFICATION
                    ? '#0544DD'
                    : 'rgba(11, 25, 45, 0.5)'
              }}
              onClick={() => {
                setShowSidebar(false)
                setTab(EmployeeTab.NOTIFICATION)
              }}
            >
              {tab === EmployeeTab.NOTIFICATION && (
                <Image
                  src="/icons/gong-dark.png"
                  alt="Notifications"
                  height="16px"
                  width="16px"
                />
              )}
              {tab !== EmployeeTab.NOTIFICATION && (
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
              {tab === EmployeeTab.NOTIFICATION && (
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
              {tab !== EmployeeTab.NOTIFICATION && (
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
                  tab === EmployeeTab.SECURITY
                    ? '#0544DD'
                    : 'rgba(11, 25, 45, 0.5)'
              }}
              onClick={() => {
                setShowSidebar(false)
                setTab(EmployeeTab.SECURITY)
              }}
            >
              {tab === EmployeeTab.SECURITY && (
                <Image
                  src="/icons/shield-dark.png"
                  alt="Security"
                  height="16px"
                  width="16px"
                />
              )}
              {tab !== EmployeeTab.SECURITY && (
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
              {tab === EmployeeTab.SECURITY && (
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
              {tab !== EmployeeTab.SECURITY && (
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
