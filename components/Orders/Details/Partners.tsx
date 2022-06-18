import Image from 'next/image'

const Partners = () => {
  return (
    <div className="details__partners pl-8 pr-2 pt-10 pb-8">
      <h3 className="order__timeline__heading text-primary-blue_dark_1 mb-6">
        Delivery Parner
      </h3>
      <p className="font-xs">
        This Package is being delivered by Deutshe Post, all rights reserved
        under copyright policy
      </p>
      <div className="mt-6 -ml-4">
        <Image
          src="/deutsche.png"
          alt="Partner Logo"
          height={58}
          width={142}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Partners
