import { useState } from 'react'
import Image from 'next/image'
import { Timeline } from 'antd'

enum Status {
  'PLACED' = 1,
  'PACKED' = 2,
  'SHIPPED' = 3,
  'DELIVERED' = 4
}

const OrderTimeline = () => {
  const [status] = useState<Status>(Status.SHIPPED)

  return (
    <div className="order__timeline px-8 py-12 pb-8">
      <h3 className="order__timeline__heading text-primary-blue_dark_1 mb-10">
        Order History
      </h3>
      <Timeline>
        <Timeline.Item
          dot={
            <>
              {status >= Status.PLACED && (
                <Image
                  src="/icons/timeline/placed-light.png"
                  alt="Order Placed"
                  height={50}
                  width={50}
                  objectFit="contain"
                />
              )}
            </>
          }
        >
          <div className="ml-4 relative -top-2 flex">
            <div>
              <h4 className="font-base text-primary-blue_dark_1">
                Order Placed
              </h4>
              <p className="font-xs mt-1">25 July 2022</p>
            </div>
            <div className="ml-3 pt-1">
              {status >= Status.PLACED && (
                <Image
                  src="/icons/check-light.png"
                  alt="Placed"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
              {status < Status.PLACED && (
                <Image
                  src="/icons/check-dark.png"
                  alt="Placed"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
            </div>
          </div>
        </Timeline.Item>
        <br />
        <Timeline.Item
          dot={
            <>
              {status >= Status.PACKED && (
                <Image
                  src="/icons/timeline/packed-light.png"
                  alt="Order Packed"
                  height={50}
                  width={50}
                  objectFit="contain"
                />
              )}
              {status < Status.PACKED && (
                <Image
                  src="/icons/timeline/packed-dark.png"
                  alt="Order Packed"
                  height={50}
                  width={50}
                  objectFit="contain"
                />
              )}
            </>
          }
        >
          <div className="ml-4 relative -top-2 flex">
            <div>
              <h4 className="font-base text-primary-blue_dark_1">
                Order Packed
              </h4>
              <p className="font-xs mt-1">28 July 2022</p>
            </div>
            <div className="ml-3 pt-1">
              {status >= Status.PACKED && (
                <Image
                  src="/icons/check-light.png"
                  alt="Packed"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
              {status < Status.PACKED && (
                <Image
                  src="/icons/check-dark.png"
                  alt="Packed"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
            </div>
          </div>
        </Timeline.Item>
        <br />
        <Timeline.Item
          dot={
            <>
              {status >= Status.SHIPPED && (
                <Image
                  src="/icons/timeline/shipped-light.png"
                  alt="Order Shipped"
                  height={50}
                  width={50}
                  objectFit="contain"
                />
              )}
              {status < Status.SHIPPED && (
                <Image
                  src="/icons/timeline/shipped-dark.png"
                  alt="Order Shipped"
                  height={50}
                  width={50}
                  objectFit="contain"
                />
              )}
            </>
          }
        >
          <div className="ml-4 relative -top-2 flex">
            <div>
              <h4 className="font-base text-primary-blue_dark_1">Shipped</h4>
              <p className="font-xs mt-1">30 July 2022</p>
            </div>
            <div className="ml-3 pt-1">
              {status >= Status.SHIPPED && (
                <Image
                  src="/icons/check-light.png"
                  alt="Shipped"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
              {status < Status.SHIPPED && (
                <Image
                  src="/icons/check-dark.png"
                  alt="Shipped"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
            </div>
          </div>
        </Timeline.Item>
        <br />
        <Timeline.Item
          dot={
            <>
              {status >= Status.DELIVERED && (
                <Image
                  src="/icons/timeline/delivered-light.png"
                  alt="Order Delivered"
                  height={50}
                  width={50}
                  objectFit="contain"
                />
              )}
              {status < Status.DELIVERED && (
                <Image
                  src="/icons/timeline/delivered-dark.png"
                  alt="Order Delivered"
                  height={50}
                  width={50}
                  objectFit="contain"
                />
              )}
            </>
          }
        >
          <div className="ml-4 relative -top-2 flex">
            <div>
              <h4 className="font-base text-primary-blue_dark_1">Delivered</h4>
              <p className="font-xs mt-1">31 July 2022</p>
            </div>
            <div className="ml-3 pt-1">
              {status >= Status.DELIVERED && (
                <Image
                  src="/icons/check-light.png"
                  alt="Delivered"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
              {status < Status.DELIVERED && (
                <Image
                  src="/icons/check-dark.png"
                  alt="Delivered"
                  height={16}
                  width={16}
                  objectFit="contain"
                />
              )}
            </div>
          </div>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default OrderTimeline
