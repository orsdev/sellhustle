import CardLatest from './Card'

const data = [
  {
    id: '01',
    image: '/product-avatar.png',
    title: 'Levis T-Shirt',
    quantity: 1,
    color: 'white',
    size: 30,
    buyer: 'Filian Fisteku'
  },
  {
    id: '02',
    image: '/avatar-lg.png',
    title: 'Polo',
    quantity: 4,
    color: 'green',
    size: 60,
    buyer: 'Alonso Nani'
  },
  {
    id: '03',
    image: '/avatar-lg.png',
    title: 'Turtle Neck',
    quantity: 1,
    color: 'red',
    size: 26,
    buyer: 'Timi Allen'
  },
  {
    id: '04',
    image: '/product-avatar.png',
    title: 'Turtle Neck',
    quantity: 1,
    color: 'red',
    size: 26,
    buyer: 'Timi Allen'
  },
  {
    id: '05',
    image: '/product-avatar.png',
    title: 'Turtle Neck',
    quantity: 10,
    color: 'red',
    size: 46,
    buyer: 'Nani Twin'
  },
  {
    id: '06',
    image: '/avatar-lg.png',
    title: 'Turtle Neck',
    quantity: 1,
    color: 'red',
    size: 26,
    buyer: 'Timi Allen'
  }
]

const LatestOrder = () => {
  return (
    <div className="order__lastest mt-10">
      <div className="flex justify-between items-center px-2 mb-5">
        <h4 className="order__latest__title">Latest Products</h4>
        <button className="font-base">Show all</button>
      </div>
      <div className="order__latest__grid">
        {data &&
          data.map(({ id, image, title, quantity, color, size, buyer }) => (
            <CardLatest
              key={id}
              id={id}
              image={image}
              title={title}
              quantity={quantity}
              color={color}
              size={size}
              buyer={buyer}
              onViewOrder={() => console.log(id)}
            />
          ))}
      </div>
    </div>
  )
}

export default LatestOrder
