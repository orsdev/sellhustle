import { Progress } from 'antd'

const ProfileReputation = () => {
  return (
    <div className="home__profile__reputation mt-10">
      <h4 className="home__profile__reputation__title font-base">Reputation</h4>
      <div className="home__profile__reputation__progress">
        <header className="block">
          <h5 className="font-base text-primary-deep_1">Star seller</h5>
          <h5 className="font-base text-primary-deep_1">85%</h5>
        </header>
        <Progress
          percent={85}
          strokeColor={'#F5BD4F'}
          trailColor="#EEF5FF"
          showInfo={false}
        />
      </div>
    </div>
  )
}

export default ProfileReputation
