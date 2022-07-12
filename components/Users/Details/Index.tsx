import { createContext, Dispatch, useState } from 'react'
import Notification from './Notification'
import Personal from './Personal'
import Security from './Security'
import Sidebar from './Sidebar'

export enum UserTab {
  PERSONAL = 'PERSONAL',
  NOTIFICATION = 'NOTIFICATION',
  SECURITY = 'SECURITY'
}

type ContextProps = {
  tab: UserTab
  showSidebar: boolean
  setTab: Dispatch<UserTab>
  setShowSidebar: Dispatch<boolean>
}

export const UserDetailsContext = createContext<ContextProps>({
  tab: UserTab.PERSONAL,
  showSidebar: false,
  setTab: () => {},
  setShowSidebar: () => {}
})

const UserDetails = () => {
  const [tab, setTab] = useState(UserTab.PERSONAL)
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <UserDetailsContext.Provider
      value={{
        tab,
        showSidebar,
        setTab,
        setShowSidebar
      }}
    >
      <>
        <div
          className="user__mobile__overlay"
          data-show={showSidebar}
          onClick={() => setShowSidebar(false)}
        />
        <div className="user__details">
          <div className="user__details__inner cm-border">
            <Sidebar />
            <div className="flex-1">
              {tab === UserTab.PERSONAL && <Personal />}
              {tab === UserTab.NOTIFICATION && <Notification />}
              {tab === UserTab.SECURITY && <Security />}
              <div className="user__details__mobile">
                <button onClick={() => setShowSidebar(true)}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </UserDetailsContext.Provider>
  )
}

export default UserDetails
