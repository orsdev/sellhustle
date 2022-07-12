import TextInput from '@/components/Common/TextInput'
import FormHeader from './FormHeader'

const StoreDetail = ({ formik }: any) => {
  return (
    <>
      <FormHeader
        heading="Store Details"
        info="Your customers will use this info to contact you"
      />
      <div className="settings__store__details mt-7">
        <div>
          <TextInput
            labelTitle="Store Name"
            name="storeName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <TextInput
            labelTitle="Account email"
            name="accountEmail"
            value={formik.values.accountEmail}
            onChange={formik.handleChange}
          />
          <p className="font-xs mt-3">
            We’ll use this address if we need to contact you about your account.
          </p>
        </div>
        <div>
          <TextInput
            labelTitle="Customer email"
            name="customerEmail"
            value={formik.values.customerEmail}
            onChange={formik.handleChange}
          />
          <p className="font-xs mt-3">
            Your customers will see this address if you email them
          </p>
        </div>
      </div>
    </>
  )
}

export default StoreDetail
