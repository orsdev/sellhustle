import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'
import { useState } from 'react'
import Image from 'next/image'

type CustomDateProps = {
  name: string
  placeholder: string
}

const CustomDate = ({ name, placeholder }: CustomDateProps) => {
  const [value, setValue] = useState('')
  return (
    <div className="custom__date cm-border">
      <Image
        src="/icons/light/calendar.png"
        alt="Calendar"
        height={16}
        width={16}
        objectFit="contain"
      />
      <Flatpickr
        name={name}
        placeholder={placeholder}
        className="custom__flatpickr ml-1"
        options={{
          enableTime: false
        }}
        value={value}
        onChange={([date]: any) => {
          setValue(date)
        }}
      />
    </div>
  )
}

export default CustomDate
