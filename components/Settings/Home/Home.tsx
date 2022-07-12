import Image from 'next/image'
import Router from 'next/router'

type SettingsNavigationProps = {
  icon: string
  title: string
  text: string
  route: string
}

const SettingsNavigation: SettingsNavigationProps[] = [
  {
    icon: '/icons/settings-md.png',
    title: 'General Settings',
    text: 'View you update your store details',
    route: '/settings/general'
  },
  {
    icon: '/icons/payment.png',
    title: 'Payment Providers',
    text: 'Enable and manage your store’s payment providers',
    route: ''
  },
  {
    icon: '/icons/cart.png',
    title: 'Checkout',
    text: 'Customize your online checkout process',
    route: ''
  },
  {
    icon: '/icons/bell-md.png',
    title: 'Notifications',
    text: 'Manage notifications sent to you and your customers',
    route: ''
  },
  {
    icon: '/icons/sales.png',
    title: 'Sales Channels',
    text: 'Manage the channels you use to sell your products and services',
    route: ''
  },
  {
    icon: '/icons/sales.png',
    title: 'Languages',
    text: 'Manage the languages your customers can view on your store',
    route: ''
  },
  {
    icon: '/icons/shipping.png',
    title: 'Shipping',
    text: 'Manage how you ship orders to customers',
    route: ''
  },
  {
    icon: '/icons/bill.png',
    title: 'Billing',
    text: 'Manage the languages your customers can view on your store',
    route: ''
  }
]

const SettingsHome = () => {
  return (
    <div className="pt-6 px-7 settings__home">
      <header>
        <h1 className="text-left font-semibold text-lg text-primary-blue_dark_1">
          Settings
        </h1>
        <div className="settings__home__body">
          <div className="settings__home__wrapper">
            {SettingsNavigation.map(({ icon, title, text, route }) => (
              <div
                key={title}
                className="settings__home__item"
                onClick={() => Router.push(route)}
              >
                <div className="settings__home__icon">
                  <Image
                    src={icon}
                    alt={title}
                    height={24}
                    width={24}
                    objectFit="contain"
                  />
                </div>
                <div>
                  <h4
                    className="font-base text-primary-blue_dark_1 mb-1"
                    style={{
                      fontSize: '16px'
                    }}
                  >
                    {title}
                  </h4>
                  <h6 className="font-xs base:w-10/12">{text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  )
}

export default SettingsHome
