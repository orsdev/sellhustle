import * as Yup from 'yup'
import { useFormik } from 'formik'
import Router from 'next/router'
import { Popover } from 'antd'
import AuthHeader from '../common/AuthHeader'
import FormHeader from '../common/FormHeader'
import { EmailInput } from '../common/FormInputs'
import SubmitButton from '../common/SubmitButton'
import Goback from '@/components/Common/Goback'

interface ResetFormikValues {
  email: string
}

const ValidationSchema = Yup.object({
  email: Yup.string()
    .email(
      'The email you entered is incorrect. Please enter a valid email address to continue'
    )
    .required('Email is required')
})

const ResetForm = () => {
  const formik = useFormik<ResetFormikValues>({
    initialValues: {
      email: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: (values: ResetFormikValues) => {
      console.log(values)
    }
  })

  return (
    <div className="reset">
      <AuthHeader />
      <Goback />
      <div className="mt-5" />
      <FormHeader heading="Reset" text="Enter your email address" />
      <form onSubmit={formik.handleSubmit}>
        {/* Email */}
        <Popover
          placement="topLeft"
          trigger={'hover'}
          overlayStyle={{
            paddingBottom: '25px'
          }}
          overlayClassName={
            formik.touched.email && (formik.errors.email?.length as number) > 0
              ? 'email-popover-visible bottom-1'
              : 'email-popover-hidden'
          }
          content={
            <>
              {formik.touched.email &&
                (formik.errors.email?.length as number) > 0 && (
                  <div
                    style={{
                      maxWidth: '350px'
                    }}
                  >
                    <p className="font-xs text-primary-blue_dark_1">
                      {formik.errors.email}
                    </p>
                  </div>
                )}
            </>
          }
        >
          <div>
            <EmailInput
              labelTitle="Email"
              name="email"
              value={formik.values.email}
              hasError={
                formik.touched.email &&
                (formik.errors.email?.length as number) > 0
              }
              placeholder="Enter your email"
              onChange={formik.handleChange}
            />
          </div>
        </Popover>
        <div className="mt-7" />
        <SubmitButton title="Reset Password" />
      </form>
    </div>
  )
}

export default ResetForm
