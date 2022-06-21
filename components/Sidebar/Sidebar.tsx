import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const AndDesignPathFormat = (path: string): string[] => {
  if (path.includes('orders')) {
    if (path === '/orders/list') {
      return ['orders', '/orders/list']
    } else {
      return ['orders', '/orders/details']
    }
  } else if (path.includes('customers')) {
    if (path === '/customers/list') {
      return ['customers', '/customers/list']
    } else {
      return ['customers', '/customers/details']
    }
  } else {
    return [path]
  }
}

const MenuNavigation = [
  {
    icon: '/icons/dashboard-',
    title: 'Dashboard',
    route: '/',
    subRoute: '/'
  },
  {
    icon: '/icons/orders-',
    title: 'Orders',
    route: '/orders',
    subRoute: '/orders/details'
  },
  {
    icon: '/icons/avatar-',
    title: 'Customers',
    route: '/customers',
    subRoute: '/customers/details'
  },
  {
    icon: '/icons/tree-',
    title: 'Categories',
    route: '/categories',
    subRoute: '/categories/details'
  },
  {
    icon: '/icons/product-',
    title: 'Products',
    route: '/products',
    subRoute: '/products/details'
  },
  {
    icon: '/icons/settings-',
    title: 'Settings',
    route: '/settings',
    subRoute: '/settings'
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
              {MenuNavigation.map(({ route, subRoute, title, icon }) => (
                <li
                  className={`sidebar__navigation__list ${
                    router.pathname === route || router.pathname === subRoute
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
                            router.pathname === route ||
                            router.pathname === subRoute
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
              {BusinessNavigation.map(({ route, subRoute, title, icon }) => (
                <li className="sidebar__navigation__list" key={title}>
                  <Link href={route}>
                    <a className="sidebar__navigation__link">
                      <Image
                        src={
                          icon +
                          `${
                            router.pathname === route ||
                            router.pathname === subRoute
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
