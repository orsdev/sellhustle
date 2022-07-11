import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Router from 'next/router'
import { Popover } from 'antd'
import AuthHeader from '../common/AuthHeader'
import FormHeader from '../common/FormHeader'
import { EmailInput, PasswordInput } from '../common/FormInputs'
import SubmitButton from '../common/SubmitButton'

interface LoginFormikValues {
  email: string
  password: string
}

const ValidationSchema = Yup.object({
  email: Yup.string()
    .email(
      'The email you entered is incorrect. Please enter a valid email address to continue'
    )
    .required('Email is required'),
  password: Yup.string().required('enter your password')
})

const Login = () => {
  const formik = useFormik<LoginFormikValues>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: (values: LoginFormikValues) => {
      Router.push('/dashboard')
    }
  })

  return (
    <div className="login">
      <AuthHeader />
      <FormHeader heading="Login" text="Welcome back to Sel Hustle" />
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
        <p className="font-xs text-secondary mt-4 text-right">
          Forgot your passwod?
          <Link href="/forgot-password">
            <a className="text-primary-blue_dark_2 font-semibold inline-block ml-2">
              Reset here?
            </a>
          </Link>
        </p>
        <div className="mt-7" />
        <SubmitButton title="Login" />
        <div className="mt-7" />
        <h4 className="login__overline text-secondary">
          <span className="font-xs">or</span>
        </h4>
        <div className="mt-4" />
        <p className="text-secondary text-center font-base">
          Don&lsquo;t have an account?
          <Link href="/registration">
            <a className="ml-1 text-primary-blue_dark_2">Create new here</a>
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
