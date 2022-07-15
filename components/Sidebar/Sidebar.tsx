import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { MainLayoutContext } from '../Layout/Main'

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

const DashboardNavigation = [
  {
    icon: '/icons/dashboard-',
    title: 'Dashboard',
    route: '/dashboard'
  }
]

const MenuNavigation = [
  {
    icon: '/icons/avatar-',
    title: 'Customers',
    route: '/customers'
  },
  {
    icon: '/icons/orders-',
    title: 'Orders',
    route: '/orders'
  }
]

const BusinessNavigation = [
  {
    icon: '/icons/user-',
    title: 'Users',
    route: '/user',
    subRoute: '/user'
  }
]

const SettingsNavigation = [
  {
    icon: '/icons/settings-',
    title: 'Settings',
    route: '/settings'
  }
]

const AndDesignPathFormat = (path: string) => {
  if (path.includes('products')) {
    if (path === '/products/all') {
      return ['products', '/products/all']
    } else if (path === '/products/edit') {
      return ['products', '/products/all']
    } else if (path === '/products/categories/list') {
      return ['products', '/products/categories/list']
    } else if (path === '/products/categories/edit') {
      return ['products', '/products/categories/list']
    } else if (path === '/products/collections/list') {
      return ['products', '/products/collections/list']
    } else if (path === '/products/collections/edit') {
      return ['products', '/products/collections/list']
    }
  } else {
    return [path]
  }

  return []
}

const Sidebar = () => {
  const router = useRouter()
  const { showSidebar, setShowSidebar } = useContext(MainLayoutContext)

  const onClickProduct: MenuProps['onClick'] = (e) => {
    if (e && e.key) {
      if (e.key.includes('products')) {
        router.push(e.key)
      }
    }
  }

  return (
    <>
      <div
        className="sidebar__overlay"
        data-show={showSidebar}
        onClick={() => setShowSidebar(false)}
      />
      <div className="sidebar sidebar__fixed" data-show={showSidebar}>
        <div className="sidebar__head relative">
          <div className="sidebar__brand">
            <Link href="/">
              <a className="sidebar__logo">
                <Image
                  src="/logo.png"
                  alt="Sell Hustle Logo"
                  height={40}
                  width={40}
                  objectFit="contain"
                />
                <span className="ml-2">Sel Hustle</span>
              </a>
            </Link>
          </div>

          <div className="sidebar__toggle__close lg:hidden">
            <button
              className="sidebar__toggle__close__button"
              onClick={() => setShowSidebar(false)}
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="sidebar__element">
          {/* Menu Navigation */}
          <h6 className="sidebar__navigation__title mt-4">Menu</h6>

          <ul className="sidebar__navigation__ul">
            {DashboardNavigation.map(({ route, title, icon }) => (
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
                      height={18}
                      width={18}
                    />
                    <span className="inline-block ml-4">{title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Ant Design Menu */}
          <div className="sidebar__navigation__menu">
            <Menu
              onClick={onClickProduct}
              defaultSelectedKeys={AndDesignPathFormat(router.pathname)}
              defaultOpenKeys={AndDesignPathFormat(router.pathname)}
              mode="inline"
              inlineCollapsed={false}
              items={[
                getItem(
                  'Products',
                  '/products',
                  <>
                    {router.pathname.includes('/products') ? (
                      <Image
                        src={`/icons/product-dark.png`}
                        alt="Products"
                        height={18}
                        width={18}
                        objectFit="contain"
                      />
                    ) : (
                      <Image
                        src={`/icons/product-light.png`}
                        alt="Products"
                        height={18}
                        width={18}
                        objectFit="contain"
                      />
                    )}
                  </>,
                  [
                    getItem('All Products', '/products/all'),
                    getItem('Categories', '/products/categories/list'),
                    getItem('Collections', '/products/collections/list')
                  ]
                )
              ]}
              expandIcon={(item) => {
                return (
                  <>
                    {!item.isOpen && (
                      <Image
                        src="/icons/back.png"
                        alt="Collapse"
                        height={10}
                        width={10}
                        objectFit="contain"
                      />
                    )}
                    {item.isOpen && (
                      <Image
                        src="/icons/down.png"
                        alt="Expand"
                        height={10}
                        width={10}
                        objectFit="contain"
                      />
                    )}
                  </>
                )
              }}
            />
          </div>

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
                      height={18}
                      width={18}
                    />
                    <span className="inline-block ml-4">{title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <hr className="my-4 md:min-w-full block" />

          {/* Business Navigation */}
          <h6 className="sidebar__navigation__title">Business</h6>
          <ul className="sidebar__navigation__ul">
            {BusinessNavigation.map(({ route, title, icon }) => (
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
                      objectFit="contain"
                    />
                    <span className="inline-block ml-4">{title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* Settings Navigation */}
          <ul className="sidebar__navigation__ul sidebar__navigation__ul__footer">
            {SettingsNavigation.map(({ route, title, icon }) => (
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
                      objectFit="contain"
                    />
                    <span className="inline-block ml-4">{title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-4 md:h-8" />
        </div>
      </div>
    </>
  )
}

export default Sidebar
