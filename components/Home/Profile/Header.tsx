import Image from 'next/image'

const Header = () => {
  return (
    <div className="home__profile__header">
      <div className="home__profile__header__left">
        <button>
          <Image
            src="/icons/light/notification.png"
            alt="Notification"
            height={18}
            width={18}
            objectFit="contain"
          />
        </button>
        <button>
          <Image
            src="/icons/light/message.png"
            alt="Message"
            height={18}
            width={18}
            objectFit="contain"
          />
        </button>
      </div>
      <div className="home__profile__header__right">
        <button>
          <Image
            src="/icons/light/edit.png"
            alt="Message"
            height={18}
            width={18}
            objectFit="contain"
          />
        </button>
      </div>
    </div>
  )
}

export default Header
