import { createContext, Dispatch, ReactNode, useState } from 'react'
import ProfileHeader from '../Common/ProfileHeader'
import Sidebar from '../Sidebar/Sidebar'

type MainContextProps = {
  showSidebar: boolean
  setShowSidebar: Dispatch<boolean>
}

export const MainLayoutContext = createContext<MainContextProps>({
  showSidebar: true,
  setShowSidebar: () => {}
})

export default function MainLayout({ children }: { children: ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <MainLayoutContext.Provider
        value={{
          showSidebar,
          setShowSidebar
        }}
      >
        <Sidebar />
        <div className="relative lg:ml-56 bg-bg">
          <ProfileHeader
            onChange={(event) => console.log(event.target.value)}
          />
          <div className="relative top-[54.5px]">{children}</div>
        </div>
      </MainLayoutContext.Provider>
    </>
  )
}
