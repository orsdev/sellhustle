import { ReactNode } from 'react'
import Sidebar from '../Sidebar/Sidebar'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-52 app__layout bg-bg">{children}</div>
    </>
  )
}
