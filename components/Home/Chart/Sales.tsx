import { useState } from 'react'
import dayjs from 'dayjs'
import ReactApexChart from 'react-apexcharts'
import { currencyFormatter } from '@/utils/currencyFormatter'

export const dateFormatter = (duration: number) =>
  dayjs(new Date()).add(duration, 'd').format('MM/DD')

const options = {
  height: '100%',
  type: 'area' as any,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    fill: {
      type: 'solid',
      colors: ['#244DB7']
    },
    sparkline: {
      enabled: true
    }
  }
}

function Chart() {
  const [chartSeries] = useState({
    series: [
      {
        name: 'Total Sales',
        data: [20, 22, 19, 21, 22, 18, 24]
      }
    ]
  })

  return (
    <>
      <div
        className="relative"
        style={{
          height: '190px'
        }}
      >
        <ReactApexChart
          type="area"
          options={options.options}
          series={chartSeries.series}
          height={'100%'}
        />
      </div>
    </>
  )
}

const ChartHeader = () => {
  return (
    <div className="home__sales__chart__header">
      <button className="font-base text-white absolute right-10 top-4 xs:top-10 opacity-80">
        View Report
      </button>
      <h5 className="font-base text-white">Total Sales</h5>
      <h2 className="text-3xl my-4 text-white font-semibold">
        {currencyFormatter(45000, 'USD', 0)}
      </h2>
      <h5
        className="font-base text-primary-blue_light_3"
        style={{
          fontWeight: 400
        }}
      >
        {currencyFormatter(45000, 'USD', 0)} in last month
      </h5>

      <p className="font-base text-white mt-7 mb-4">This week so far</p>
      <div className="flex flex-col xs:flex-row justify-between">
        <h2 className="text-3xl text-white font-semibold">
          {currencyFormatter(538, 'USD', 0)}
        </h2>
        <h6 className="font-xs text-white flex flex-col text-right mt-3 xs:-mt-3">
          <span className="text-primary-success mb-2">
            <i className="fa fa-arrow-up mr-1" aria-hidden="true" />
            35%
          </span>
          <span>vs last week</span>
        </h6>
      </div>
    </div>
  )
}

const SalesChart = () => {
  return (
    <div className="home__sales__chart">
      <ChartHeader />
      <Chart />
    </div>
  )
}

export default SalesChart
