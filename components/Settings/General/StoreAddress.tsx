import TextInput from '@/components/Common/TextInput'
import { CountryDropdown } from 'react-country-region-selector'
import FormHeader from './FormHeader'

const StoreAddress = ({ formik }: any) => {
  return (
    <>
      <FormHeader
        heading="Store Address"
        info="This address will appear on your invoices. You can edit the address used to calculate shipping rates in your shipping settings."
      />
      <div className="settings__store__address mt-7">
        <div>
          <TextInput
            labelTitle="Legal names of business"
            name="businessName"
            value={formik.values.businessName}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <TextInput
            labelTitle="Phone"
            name="phoneNumber"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <TextInput
            labelTitle="Street"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
          />
        </div>
      </div>
      <div className="settings__store__col-2 mt-7">
        <div>
          <TextInput
            labelTitle="Appartment, suite, etc (optional)"
            name="suite"
            value={formik.values.suite}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <TextInput
            labelTitle="City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className="settings__store__address mt-7">
        <div>
          <TextInput
            labelTitle="Postal / Zip code"
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <CountryDropdown
            value={formik.values.country}
            onChange={(value) => formik.setFieldValue('country', value)}
            defaultOptionLabel="Select your country"
          />
        </div>
        <div>
          <TextInput
            labelTitle="Province"
            name="province"
            value={formik.values.province}
            onChange={formik.handleChange}
          />
        </div>
      </div>
    </>
  )
}

export default StoreAddress
