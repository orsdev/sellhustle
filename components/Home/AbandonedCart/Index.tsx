import dynamic from 'next/dynamic'
import Header from './Header'

const LineChart = dynamic(() => import('./LineChart'), { ssr: false })

const AbandonedCart = () => {
  return (
    <div className="home__abandoned__cart cm-border-radius">
      <Header />
      <LineChart />
    </div>
  )
}

export default AbandonedCart
