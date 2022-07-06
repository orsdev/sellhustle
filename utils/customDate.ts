import dayjs from 'dayjs'

// This function is just for testing purposes
export const customDate = (
  duration: number,
  unit: 'days' | 'years' | 'months'
) => {
  let _date

  if (unit === 'days') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/MM/YYYY')
  } else if (unit === 'years') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/MM/YYYY')
  } else if (unit === 'months') {
    _date = dayjs(new Date()).subtract(duration, unit).format('DD/MM/YYYY')
  } else {
    _date = dayjs(new Date()).format('DD/MM/YYYY')
  }

  return _date
}
