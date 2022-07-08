import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Router from 'next/router'
import { Popover } from 'antd'
import AuthHeader from '../common/AuthHeader'
import FormHeader from '../common/FormHeader'
import { EmailInput, PasswordInput, TextInput } from '../common/FormInputs'
import PrivacyCheckbox from '../common/PrivacyCheckbox'
import SubmitButton from '../common/SubmitButton'

interface RegisterFormikValues {
  fullName: string
  email: string
  checked: boolean
  password: string
}

const ValidationSchema = Yup.object({
  fullName: Yup.string().required('Please enter your full name.'),
  email: Yup.string()
    .email(
      'The email you entered is incorrect. Please enter a valid email address to continue'
    )
    .required('Email is required'),
  checked: Yup.boolean().oneOf([true, null]),
  password: Yup.string().required('enter your password')
})

const Register = () => {
  const formik = useFormik<RegisterFormikValues>({
    initialValues: {
      fullName: '',
      email: '',
      checked: false,
      password: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: (values: RegisterFormikValues) => {
      Router.push('/email-verification')
    }
  })

  return (
    <div className="register">
      <AuthHeader />
      <FormHeader heading="Register" text="Create New Sel Hustle Account" />
      <form onSubmit={formik.handleSubmit}>
        {/* Full Name */}
        <Popover
          placement="topLeft"
          trigger={'hover'}
          overlayStyle={{
            paddingBottom: '25px'
          }}
          overlayClassName={
            formik.touched.fullName &&
            (formik.errors.fullName?.length as number) > 0
              ? 'name-popover-visible bottom-1'
              : 'name-popover-hidden'
          }
          content={
            <>
              {formik.touched.fullName &&
                (formik.errors.fullName?.length as number) > 0 && (
                  <div
                    style={{
                      maxWidth: '350px'
                    }}
                  >
                    <p className="font-xs text-primary-blue_dark_1">
                      {formik.errors.fullName}
                    </p>
                  </div>
                )}
            </>
          }
        >
          <div>
            <TextInput
              labelTitle="Name"
              name="fullName"
              placeholder="Enter your name"
              value={formik.values.fullName}
              hasError={
                formik.touched.fullName &&
                (formik.errors.fullName?.length as number) > 0
              }
              onChange={formik.handleChange}
            />
          </div>
        </Popover>
        <div className="mt-7" />

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

        {/* Password */}
        <Popover
          placement="topLeft"
          trigger={'hover'}
          overlayStyle={{
            paddingBottom: '25px'
          }}
          overlayClassName={
            formik.touched.password &&
            (formik.errors.password?.length as number) > 0
              ? 'password-popover-visible bottom-1'
              : 'password-popover-hidden'
          }
          content={
            <>
              {formik.touched.password &&
                (formik.errors.password?.length as number) > 0 && (
                  <div
                    style={{
                      maxWidth: '350px'
                    }}
                  >
                    <p className="font-xs text-primary-blue_dark_1">
                      {formik.errors.password}
                    </p>
                  </div>
                )}
            </>
          }
        >
          <div>
            <PasswordInput
              labelTitle="Password"
              name="password"
              value={formik.values.password}
              hasError={
                formik.touched.password &&
                (formik.errors.password?.length as number) > 0
              }
              placeholder="Enter your password"
              onChange={formik.handleChange}
            />
          </div>
        </Popover>
        <div className="mt-7" />
        <PrivacyCheckbox
          hasError={
            formik.touched.checked &&
            (formik.errors.checked?.length as number) > 0
          }
          onChange={(event) =>
            formik.setFieldValue('checked', event.target.checked)
          }
          checked={formik.values.checked}
        />
        <div className="mt-7" />
        <SubmitButton title="Register Now" />
        <div className="mt-7" />
        <h4 className="register__overline text-secondary">
          <span className="font-xs">or</span>
        </h4>
        <div className="mt-4" />
        <p className="text-secondary text-center font-base">
          Already have an account?
          <Link href="#">
            <a className="ml-1 text-primary-blue_dark_2">Sign in instead</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Register
