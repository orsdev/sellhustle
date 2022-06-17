import Head from 'next/head'
import AuthLayout from '@/components/Auth/AuthLayout'
import FormTitle from '@/components/Auth/common/FormTitle'
import LoginForm from '@/components/Auth/Login/Form'
import LoginHeader from '@/components/Auth/Login/Header'

const Login = () => {
  return (
    <>
      <Head>
        <title>Sel Hustle | Login </title>
      </Head>
      <AuthLayout>
        <div>
          <LoginHeader />
          <div className="mt-8">
            <FormTitle title="Sign In" />
            <LoginForm />
          </div>
        </div>
      </AuthLayout>
    </>
  )
}

export default Login
