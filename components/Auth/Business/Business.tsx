import Router from 'next/router'
import * as Yup from 'yup'
import Select from 'react-select'
import { useFormik } from 'formik'
import { CountryDropdown } from 'react-country-region-selector'
import AuthHeader from '../common/AuthHeader'
import FormHeader from '../common/FormHeader'
import SubmitButton from '../common/SubmitButton'
import { TextInput } from '../common/FormInputs'

interface FormikValues {
  businessName: string
  businessCategory: string | null
  businessCountry: string
}

const ValidationSchema = Yup.object({
  businessName: Yup.string().required('Required'),
  businessCategory: Yup.mixed().required('Required'),
  businessCountry: Yup.mixed().required('Required')
})

const options = [
  { value: 'Eccomerce', label: 'eccomerce' },
  { value: 'Shopping Site', label: 'Shopping Site' },
  { value: 'Gaming Site', label: 'Gaming Site' },
  { value: 'Bicycles', label: 'bicycles' }
]

const Business = () => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      businessName: '',
      businessCategory: null,
      businessCountry: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: (values: FormikValues) => {
      Router.push('/dashboard')
    }
  })

  return (
    <div className="business__details">
      <AuthHeader />
      <FormHeader
        heading="Business Details"
        text="Please enter your business details"
      />
      <form onSubmit={formik.handleSubmit}>
        <TextInput
          labelTitle="Business Name"
          name="businessName"
          placeholder="Enter your business name"
          value={formik.values.businessName}
          hasError={
            formik.touched.businessName &&
            (formik.errors.businessName?.length as number) > 0
          }
          onChange={formik.handleChange}
        />
        <div className="mt-7" />
        <div>
          <label htmlFor="businessCategory">Business Category</label>
          <Select
            options={options}
            name="businessCategory"
            className="business__details__select"
            classNamePrefix="select__inner"
            placeholder="Enter your business category"
            onChange={(selectedOption) => {
              formik.setFieldValue('businessCategory', selectedOption)
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                backgroundColor:
                  formik.touched.businessCategory &&
                  (formik.errors.businessCategory?.length as number) > 0
                    ? 'rgba(232, 83, 71, 0.1)'
                    : '#fff',
                borderColor:
                  formik.touched.businessCategory &&
                  (formik.errors.businessCategory?.length as number) > 0
                    ? '#e85347'
                    : '#dbdfea',
                color:
                  formik.touched.businessCategory &&
                  (formik.errors.businessCategory?.length as number) > 0
                    ? '#e85347'
                    : '#c0cee6'
              }),
              placeholder: (provided) => ({
                ...provided,
                color:
                  formik.touched.businessCategory &&
                  (formik.errors.businessCategory?.length as number) > 0
                    ? '#f03738'
                    : '#c0cee6'
              })
            }}
          />
        </div>

        <div className="mt-7" />
        <div>
          <label htmlFor="businessCountry">Business Country</label>
          <CountryDropdown
            value={formik.values.businessCountry}
            onChange={(value) => formik.setFieldValue('businessCountry', value)}
            defaultOptionLabel="Enter your business country"
            classes={
              formik.touched.businessCountry &&
              (formik.errors.businessCountry?.length as number) > 0
                ? 'has-error'
                : ''
            }
          />
        </div>
        <div className="mt-7" />
        <SubmitButton title="Register Now" />
      </form>
    </div>
  )
}

export default Business
