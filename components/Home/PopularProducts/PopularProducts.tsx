import Image from 'next/image'

const Products = [
  {
    id: '01',
    image: '/product-avatar.png',
    price: 40.99,
    title: 'Tshirt Levels',
    uploaded: '2 min ago'
  },
  {
    id: '02',
    image: '/product-avatar.png',
    price: 100.0,
    title: 'Crop Top',
    uploaded: '5 min ago'
  },
  {
    id: '03',
    image: '/product-avatar.png',
    price: 80,
    title: 'Polo',
    uploaded: '5 min ago'
  },
  {
    id: '04',
    image: '/product-avatar.png',
    price: 200,
    title: 'Round Neck',
    uploaded: '5 min ago'
  },
  {
    id: '05',
    image: '/product-avatar.png',
    price: 100,
    title: 'White Shirt',
    uploaded: '5 min ago'
  }
]

const PopularProducts = () => {
  return (
    <div className="home__popular__products mt-8">
      <header className="block">
        <h5 className="font-base home__popular__products__heading">
          Popular Products
        </h5>
        <button className="text-primary-blue_dark_1 font-xs">
          <span className="pr-2">See all</span>
          <Image
            src="/icons/light/next.png"
            alt="Notification"
            height={10}
            width={10}
            objectFit="contain"
          />
        </button>
      </header>

      <div className="home__popular__products__body cm-border">
        {Products.map(({ title, id, image, price, uploaded }) => (
          <div className="home__popular__products__card" key={id}>
            <div className="home__popular__products__info">
              <div className="home__popular__products__image">
                <Image
                  src={image}
                  alt={title}
                  height={60}
                  width={60}
                  objectFit="contain"
                />
              </div>
              <hgroup className="block ml-3">
                <button
                  type="button"
                  className="font-base text-primary-blue_dark_1"
                >
                  {title}
                </button>
                <h5 className="font-xs">{uploaded}</h5>
              </hgroup>
            </div>
            <div className="home__popular__products__price font-xs">
              <span>&#65284;</span>
              <span>{price}</span>
            </div>
          </div>
        ))}
        <div className="home__popular__products__mask" />
      </div>
    </div>
  )
}

export default PopularProducts
