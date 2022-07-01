import { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const options = {
  height: '100%',
  type: 'area' as any,
  options: {
    chart: {
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      colors: ['#A5EAFA'],
      width: 3
    },
    fill: {
      opacity: 1,
      type: 'solid'
    },
    colors: ['#DEF7FD'],
    sparkline: {
      enabled: true
    }
  }
}

function Chart() {
  const [chartSeries] = useState({
    series: [
      {
        name: 'Orders',
        data: [
          37, 35, 44, 28, 36, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93,
          53, 61, 27, 54, 43, 19, 46, 39, 62, 51, 35, 41, 67
        ]
      }
    ]
  })

  return (
    <div className="relative h-20">
      <ReactApexChart
        type="area"
        options={options.options}
        series={chartSeries.series}
        height={'100%'}
      />
    </div>
  )
}

const ChartHeader = () => {
  return (
    <div className="home__orders__chart__header text-primary-blue_dark_1">
      <div className="flex justify-between">
        <div>
          <h5
            className="font-base"
            style={{
              fontWeight: 600
            }}
          >
            Orders
          </h5>
          <h2 className="text-md mt-1 mb-4 font-semibold">254</h2>
        </div>
        <div className="flex justify-between">
          <h6 className="font-xs flex flex-col text-right">
            <span className="text-primary-success mb-2">
              <i className="fa fa-arrow-up mr-1" aria-hidden="true" />
              35%
            </span>
            <span>vs last week</span>
          </h6>
        </div>
      </div>
    </div>
  )
}

const OrdersChart = () => {
  return (
    <div className="home__orders__chart cm-border">
      <div></div>
      <ChartHeader />
      <Chart />
    </div>
  )
}

export default OrdersChart
