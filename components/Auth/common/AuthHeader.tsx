import Image from 'next/image'

const AuthHeader = () => {
  return (
    <header className="auth__header flex items-center mb-16">
      <Image
        src="/logo.png"
        alt="Sell Hustle Logo"
        height={40}
        width={40}
        objectFit="contain"
      />
      <span className="ml-2 font-medium text-md text-primary-blue_dark_1">
        Sel Hustle
      </span>
    </header>
  )
}

export default AuthHeader
