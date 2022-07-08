import { useState } from 'react'
import { CountryDropdown } from 'react-country-region-selector'
import TextInput from '@/components/Common/TextInput'

const Location = () => {
  const [countryValue, setCountryValue] = useState('')

  return (
    <div className="customer__location mt-5">
      <h3 className="customer__location__heading mb-10">Primary Address</h3>
      <div className="mb-6">
        <TextInput
          labelTitle="Address Line 1"
          name="addressLine1"
          onChange={() => {}}
          onBlur={() => {}}
        />
      </div>
      <div className="mb-6">
        <TextInput
          labelTitle="Address Line 2"
          name="addressLine2"
          isOptional={true}
          onChange={() => {}}
          onBlur={() => {}}
        />
      </div>
      <div className="grid grid-cols-1 mid:grid-cols-2 gap-5 mb-6">
        <TextInput
          labelTitle="City"
          name="city"
          onChange={() => {}}
          onBlur={() => {}}
        />
        <TextInput
          labelTitle="Zip / Postal Code"
          name="postalCode"
          onChange={() => {}}
          onBlur={() => {}}
        />
      </div>
      <div className="grid grid-cols-1 mid:grid-cols-2 gap-5 mb-6">
        <div>
          <label
            htmlFor="country"
            className="text-primary-blue_dark_1 mb-4 block font-xs"
          >
            Country
          </label>
          <CountryDropdown
            classes="country__dropdown"
            name="country"
            defaultOptionLabel="Select Country"
            priorityOptions={['US']}
            value={countryValue}
            onChange={(value) => setCountryValue(value)}
          />
        </div>
        <TextInput
          labelTitle="Country Area"
          name="countryArea"
          onChange={() => {}}
          onBlur={() => {}}
        />
      </div>
    </div>
  )
}

export default Location
