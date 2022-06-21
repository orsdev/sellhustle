import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

const MenuNavigation = [
  {
    icon: '/icons/dashboard-',
    title: 'Dashboard',
    route: '/dashboard'
  },
  {
    icon: '/icons/orders-',
    title: 'Orders',
    route: '/orders'
  },
  {
    icon: '/icons/avatar-',
    title: 'Customers',
    route: '/customers'
  },
  {
    icon: '/icons/tree-',
    title: 'Categories',
    route: '/categories'
  },
  {
    icon: '/icons/product-',
    title: 'Products',
    route: '/products'
  },
  {
    icon: '/icons/settings-',
    title: 'Settings',
    route: '/settings'
  }
]

const BusinessNavigation = [
  {
    icon: '/icons/shipment-',
    title: 'Shipment',
    route: '/shipment',
    subRoute: '/shipment'
  },
  {
    icon: '/icons/user-',
    title: 'Employee',
    route: '/employee',
    subRoute: '/employee'
  }
]

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState('hidden')
  const router = useRouter()

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__container">
          {/* Logo */}
          <div className="pl-7">
            <Link href="/">
              <a className="sidebar__logo">
                <Image
                  src="/logo.png"
                  alt="Sell Hustle Logo"
                  height={50}
                  width={50}
                />
                <span className="hidden md:block">Sel Hustle</span>
              </a>
            </Link>
          </div>

          {/* Toggler */}
          <button
            className="sidebar__mobile__hamburger"
            type="button"
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Collapse */}
          <div className={'sidebar__navigation__collapse ' + collapseShow}>
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a className="sidebar__logo">
                      <Image
                        src="/logo.png"
                        alt="Sell Hustle Logo"
                        height={50}
                        width={50}
                      />
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="sidebar__navigation__mobile__close"
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Navigation */}
            <h6 className="sidebar__navigation__title">Menu</h6>
            <ul className="sidebar__navigation__ul">
              {MenuNavigation.map(({ route, title, icon }) => (
                <li
                  className={`sidebar__navigation__list ${
                    router.pathname.includes(route)
                      ? 'sidebar__navigation__list__active'
                      : ''
                  }
                  `}
                  key={title}
                >
                  <Link href={route}>
                    <a className="sidebar__navigation__link">
                      <Image
                        src={
                          icon +
                          `${
                            router.pathname.includes(route)
                              ? 'dark.png'
                              : 'light.png'
                          }`
                        }
                        alt={title}
                        height={20}
                        width={20}
                      />
                      <span className="inline-block ml-4">{title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <br />
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />

            {/* Business Navigation */}
            <h6 className="sidebar__navigation__title">Business</h6>
            <ul className="sidebar__navigation__ul">
              {BusinessNavigation.map(({ route, title, icon }) => (
                <li className="sidebar__navigation__list" key={title}>
                  <Link href={route}>
                    <a className="sidebar__navigation__link">
                      <Image
                        src={
                          icon +
                          `${
                            router.pathname.includes(route)
                              ? 'dark.png'
                              : 'light.png'
                          }`
                        }
                        alt={title}
                        height={21}
                        width={21}
                        objectFit="contain"
                      />
                      <span className="inline-block ml-4">{title}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            <br />
            {/* Divider */}
            <hr className="md:min-w-full" />
            <div className="h-4 md:h-8" />
            <div className="sidebar__navigation__logout">
              <button type="button" className="flex items-center">
                <Image
                  src="/icons/logout.png"
                  alt="Signout"
                  height={19}
                  width={18}
                  objectFit="contain"
                />
                <span className="inline-block ml-4">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
