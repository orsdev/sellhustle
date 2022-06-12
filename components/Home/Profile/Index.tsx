import ProfileAvatar from './Avatar'
import ProfileHeader from './Header'
import ProfileReputation from './Reputation'
import ProfileStats from './Stats'

const Profile = () => {
  return (
    <div className="home__profile">
      <ProfileHeader />
      <ProfileAvatar />
      <ProfileStats />
      <ProfileReputation />
    </div>
  )
}

export default Profile
