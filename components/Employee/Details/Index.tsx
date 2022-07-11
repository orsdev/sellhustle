import { createContext, Dispatch, useState } from 'react'
import Notification from './Notification'
import Personal from './Personal'
import Security from './Security'
import Sidebar from './Sidebar'

export enum EmployeeTab {
  PERSONAL = 'PERSONAL',
  NOTIFICATION = 'NOTIFICATION',
  SECURITY = 'SECURITY'
}

type ContextProps = {
  tab: EmployeeTab
  showSidebar: boolean
  setTab: Dispatch<EmployeeTab>
  setShowSidebar: Dispatch<boolean>
}

export const EmployeeDetailsContext = createContext<ContextProps>({
  tab: EmployeeTab.PERSONAL,
  showSidebar: false,
  setTab: () => {},
  setShowSidebar: () => {}
})

const EmployeeDetails = () => {
  const [tab, setTab] = useState(EmployeeTab.PERSONAL)
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <EmployeeDetailsContext.Provider
      value={{
        tab,
        showSidebar,
        setTab,
        setShowSidebar
      }}
    >
      <>
        <div
          className="employee__mobile__overlay"
          data-show={showSidebar}
          onClick={() => setShowSidebar(false)}
        />
        <div className="employee__details">
          <div className="employee__details__inner cm-border">
            <Sidebar />
            <div className="flex-1">
              {tab === EmployeeTab.PERSONAL && <Personal />}
              {tab === EmployeeTab.NOTIFICATION && <Notification />}
              {tab === EmployeeTab.SECURITY && <Security />}
              <div className="employee__details__mobile">
                <button onClick={() => setShowSidebar(true)}>
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </EmployeeDetailsContext.Provider>
  )
}

export default EmployeeDetails
