import Image from 'next/image'

const ProfileStats = () => {
  return (
    <div className="home__profile__stats">
      <div className="home__profile__stats__product">
        <Image
          src="/icons/light/box.png"
          alt="Products"
          height={28}
          width={28}
          objectFit="contain"
        />
        <hgroup className="block ml-3 mt-1">
          <h3 className="home__profile__stats__total font-xs">218</h3>
          <h3 className="home__profile__stats__text">Products</h3>
        </hgroup>
      </div>
      <div className="home__profile__stats__followers">
        <hr />
        <Image
          src="/icons/light/user.png"
          alt="Followers"
          height={28}
          width={28}
          objectFit="contain"
        />
        <hgroup className="block ml-3 mt-1">
          <h3 className="home__profile__stats__total font-xs">2,580</h3>
          <h3 className="home__profile__stats__text">Followers</h3>
        </hgroup>
      </div>
    </div>
  )
}

export default ProfileStats
