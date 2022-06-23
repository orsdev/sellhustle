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
  const [collapseShow, setCollapseShow] = React.useState('hidden')
  const router = useRouter()

  const onClickProduct: MenuProps['onClick'] = (e) => {
    if (e && e.key) {
      if (e.key.includes('products')) {
        router.push(e.key)
      }
    }
  }

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
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      ) : (
                        <Image
                          src={`/icons/product-light.png`}
                          alt="Products"
                          height={20}
                          width={20}
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
