import { FC, useState } from 'react'
import dayjs from 'dayjs'
import ReactApexChart from 'react-apexcharts'

export const dateFormatter = (duration: number) =>
  dayjs(new Date()).add(duration, 'd').format()

const options = {
  height: '100%',
  type: 'line' as any,
  options: {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      colors: ['#7FB5FF'],
      width: 2
    },
    grid: {
      strokeDashArray: 2
    },
    fill: {
      type: 'solid',
      colors: ['#fff']
    },
    labels: [
      dateFormatter(200),
      dateFormatter(90),
      dateFormatter(70),
      dateFormatter(60),
      dateFormatter(20),
      dateFormatter(50),
      dateFormatter(100),
      dateFormatter(30),
      dateFormatter(300),
      dateFormatter(200)
    ],
    yaxis: {
      labels: {
        style: {
          colors: 'rgba(11, 25, 45, 0.5)',
          fontSize: '10px'
        },
        formatter: function (value: number) {
          return value + ' K'
        }
      }
    },
    xaxis: {
      labels: {
        rotate: 0, // no need to rotate since hiding labels gives plenty of room
        hideOverlappingLabels: false, // all labels must be rendered
        style: {
          colors: 'rgba(11, 25, 45, 0.5)',
          fontSize: '10px'
        },
        formatter: function (value: any) {
          return dayjs(value).format('DD/MMM')
        }
      }
    }
  }
}

type StatCardProps = {
  title: string
  stat: number
  gain?: number
  loss?: number
}

const StatCard: FC<StatCardProps> = ({ title, stat, gain, loss }) => {
  return (
    <div className="home__visitors__chart__stat">
      <h6 className="font-xs opacity-50">{title}</h6>
      <h3 className="text-lg font-semibold uppercase mt-2 mb-1 -ml-1">
        {stat}K
      </h3>
      {gain && (
        <p className="text-primary-success">
          <i className="fa fa-arrow-up mr-1" aria-hidden="true" />
          {gain}%
        </p>
      )}
      {loss && (
        <p className="text-primary-danger">
          <i className="fa fa-arrow-down mr-1" aria-hidden="true" />
          {loss}%
        </p>
      )}
    </div>
  )
}

const ChartHeader = () => {
  return (
    <div className="home__visitors__chart__header">
      <h5 className="font-base"> Store Visitors</h5>
      <div className="home__visitors__chart__content mt-4">
        <StatCard title="Monthly" stat={12.4} gain={35} />
        <StatCard title="Weekly" stat={6} loss={12.6} />
        <StatCard title="Daily (Avg)" stat={0.91} gain={38} />
      </div>
    </div>
  )
}

const VisitorsChart = () => {
  const [chartSeries] = useState({
    series: [
      {
        name: 'Total Visitors',
        data: [35, 38, 44, 28, 36, 24, 55, 31, 37, 32]
      }
    ]
  })

  return (
    <div className="home__visitors__chart mt-3 cm-border">
      <ChartHeader />
      <div
        className="relative"
        style={{
          height: '130px'
        }}
      >
        <ReactApexChart
          type="line"
          options={options.options}
          series={chartSeries.series}
          height={'100%'}
        />
      </div>
    </div>
  )
}

export default VisitorsChart
