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

const BusinessNavigation = [
  {
    icon: '/icons/shipment-',
    title: 'Shipment',
    route: '/shipment'
  },
  {
    icon: '/icons/user-',
    title: 'Employee',
    route: '/employee'
  }
]

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState('hidden')
  const router = useRouter()

  const onClick: MenuProps['onClick'] = (e) => {
    if (e && e.key) {
      if (e.key !== '/orders/details' && e.key !== '/customers/details') {
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
            <div className="sidebar__navigation__menu">
              <Menu
                onClick={onClick}
                defaultSelectedKeys={AndDesignPathFormat(router.pathname)}
                defaultOpenKeys={AndDesignPathFormat(router.pathname)}
                mode="inline"
                inlineCollapsed={false}
                items={[
                  getItem(
                    'Dashboard',
                    '/',
                    <>
                      {router.pathname === '/' ? (
                        <Image
                          src={`/icons/dashboard-dark.png`}
                          alt="Dashboard"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      ) : (
                        <Image
                          src={`/icons/dashboard-light.png`}
                          alt="Dashboard"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      )}
                    </>
                  ),
                  getItem(
                    'Orders',
                    'orders',
                    <>
                      {router.pathname === '/orders' ? (
                        <Image
                          src={`/icons/orders-dark.png`}
                          alt="Orders"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      ) : (
                        <Image
                          src={`/icons/orders-light.png`}
                          alt="Orders"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      )}
                    </>,
                    [
                      getItem('Orders List', '/orders/list'),
                      getItem('Order Details', '/orders/details')
                    ]
                  ),
                  getItem(
                    'Customers',
                    'customers',
                    <>
                      {router.pathname === '/customers' ? (
                        <Image
                          src={`/icons/avatar-dark.png`}
                          alt="Customers"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      ) : (
                        <Image
                          src={`/icons/avatar-light.png`}
                          alt="Customers"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      )}
                    </>,
                    [
                      getItem('Customers List', '/customers/list'),
                      getItem('Customers Detail', '/customers/detail')
                    ]
                  ),
                  getItem(
                    'Categories',
                    'categories',
                    <>
                      {router.pathname === '/categories' ? (
                        <Image
                          src={`/icons/tree-dark.png`}
                          alt="Categories"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      ) : (
                        <Image
                          src={`/icons/tree-light.png`}
                          alt="Categories"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      )}
                    </>,
                    [
                      getItem('Edit Category', '/category/edit'),
                      getItem('Category List', '/category/list')
                    ]
                  ),
                  getItem(
                    'Products',
                    '/products',
                    <>
                      {router.pathname === '/products' ? (
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
                      getItem('Product List', '/products/list'),
                      getItem('Edit Product', '/products/edit')
                    ]
                  ),
                  getItem(
                    'Settings',
                    '/settings',
                    <>
                      {router.pathname === '/settings' ? (
                        <Image
                          src={`/icons/settings-dark.png`}
                          alt="Settings"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      ) : (
                        <Image
                          src={`/icons/settings-light.png`}
                          alt="Settings"
                          height={20}
                          width={20}
                          objectFit="contain"
                        />
                      )}
                    </>
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
                            router.pathname === route ? 'dark.png' : 'light.png'
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
