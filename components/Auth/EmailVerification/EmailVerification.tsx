import Router from 'next/router'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import OtpInput from 'react-otp-input'
import AuthHeader from '../common/AuthHeader'
import FormHeader from '../common/FormHeader'
import SubmitButton from '../common/SubmitButton'

interface FormikValues {
  otp: string
}

const ValidationSchema = Yup.object({
  otp: Yup.string().length(6)
})

const EmailVerification = () => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      otp: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: (values: FormikValues) => {
      Router.push('/business')
    }
  })

  const handleChange = (otp: string) => formik.setFieldValue('otp', otp)

  return (
    <div className="email__verification">
      <AuthHeader />
      <FormHeader
        heading="Email Verification"
        text="Please enter the 6-Digit code sent to your email address"
      />
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-7" />
        <OtpInput
          value={formik.values.otp}
          onChange={handleChange}
          numInputs={6}
          className="email__verification__otp"
          containerStyle={{
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        />
        <div className="mt-7">
          <p
            className="font-base text-secondary"
            style={{
              fontWeight: 400
            }}
          >
            A verification code is sent to mira*****@gmail.com
          </p>
          <div className="mt-7" />
          <SubmitButton
            title="Verify"
            disabled={formik.values.otp.length !== 6}
          />
        </div>
      </form>
      <div className="mt-7" />
      <h4 className="email__verification__overline text-secondary">
        <span className="font-xs">or</span>
      </h4>
      <div className="mt-4" />
      <p className="text-secondary text-center font-base">
        Didn&lsquo;t get a code?
        <button className="ml-1 text-primary-blue_dark_2">Resend now</button>
      </p>
    </div>
  )
}

export default EmailVerification
