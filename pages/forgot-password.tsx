import Head from 'next/head'
import AuthLayout from '@/components/Auth/AuthLayout'
import FormTitle from '@/components/Auth/common/FormTitle'
import ResetForm from '@/components/Auth/Reset/Form'

const Login = () => {
  return (
    <>
      <Head>
        <title>Sel Hustle | Forgot Password </title>
      </Head>
      <AuthLayout>
        <div>
          <div className="mt-8">
            <FormTitle title="Reset your password" borderDirection="right" />
            <ResetForm />
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Login
