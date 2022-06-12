import { useState } from 'react'
import dayjs from 'dayjs'
import ReactApexChart from 'react-apexcharts'

const dateFormatterr = (duration: number) =>
  dayjs(new Date()).add(duration, 'd').format('MM/DD')

export default function LineChart() {
  const [chartData] = useState({
    series: [
      {
        name: 'Total Incomes',
        data: [35, 52, 38, 45, 19, 23, 18]
      }
    ],
    options: {
      chart: {
        height: 350,
        zoom: {
          enabled: false
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      markers: {
        size: 6,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        showNullDataPoints: true
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        strokeDashArray: 2
      },
      yaxis: {
        labels: {
          style: {
            colors: 'rgba(11, 25, 45, 0.5)',
            fontSize: '13px'
          },
          formatter: function (value: number) {
            return value + ' K+'
          }
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: 'rgba(11, 25, 45, 0.5)',
            fontSize: '13px'
          }
        },
        categories: [
          dateFormatterr(200),
          dateFormatterr(90),
          dateFormatterr(70),
          dateFormatterr(60),
          dateFormatterr(20),
          dateFormatterr(50),
          dateFormatterr(100)
        ]
      }
    }
  })

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="p-4 flex-auto">
          {/* Chart */}

          <ReactApexChart
            type="area"
            options={chartData.options}
            series={chartData.series}
            height={350}
          />
        </div>
      </div>
    </>
  )
}
