import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="home__profile__avatar mt-7 mb-8">
      <Image
        src="/avatar-lg.png"
        alt="Notification"
        height={100}
        width={100}
        objectFit="contain"
      />
      <hgroup className="block mt-3">
        <h3 className="home__profile__avatar__name">John Doe</h3>
        <h5 className="home__profile__avatar__role">Sales Manager</h5>
      </hgroup>
    </div>
  )
}

export default Avatar
