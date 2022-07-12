import TextInput from '@/components/Common/TextInput'
import { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import FormHeader from './FormHeader'

const Formats = ({ formik }: any) => {
  const [selectedTimezone, setSelectedTimezone] = useState<any>({})

  return (
    <>
      <FormHeader
        heading="Standards and formats"
        info="Standards and formats are used to calculate product prices, shipping weights, and order times."
      />
      <div className="settings__store__formats mt-7">
        <div>
          <label htmlFor="timezone">Timezone</label>
          <TimezoneSelect
            value={selectedTimezone}
            placeholder="Select your timezone"
            onChange={(value) => {
              setSelectedTimezone(value)
              formik.setFieldValue('timezone', value.value)
            }}
            classNamePrefix="select__inner"
          />
        </div>
        <div>
          <TextInput
            labelTitle="Unit System"
            name="unitSystem"
            placeholder="Enter unit system"
            value={formik.values.unitSystem}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <TextInput
            labelTitle="Default weight unit"
            name="weightUnit"
            placeholder="Enter weight unit"
            value={formik.values.weightUnit}
            onChange={formik.handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default Formats
