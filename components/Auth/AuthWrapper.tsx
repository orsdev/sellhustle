import { ReactNode } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

type Props = {
  children: ReactNode
}
const AuthWrapper = ({ children }: Props) => {
  return (
    <div className="auth__wrapper">
      <div className="auth__wrapper__content bg-white z-10 relative">
        <div className="auth__wrapper__body">{children}</div>
        <footer className="auth__wrapper__footer text-center">
          <ul className="auth__wrapper__footer__nav">
            <li className="text-secondary font-xs">
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li className="text-secondary font-xs">
              <Link href="#">Privacy Policy</Link>
            </li>
            <li className="text-secondary font-xs">
              <Link href="#">Help</Link>
            </li>
          </ul>
          <p className="mt-6 font-xs">
            &copy;
            <span className="ml-1">
              {new Date().getFullYear()} Sel Hustle. All Rights Reserved.
            </span>
          </p>
        </footer>
      </div>
      <div className="auth__wrapper__bg">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="auth__wrapper__swiper"
        >
          <SwiperSlide>
            <div className="auth__wrapper__slider text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/slider/one.png" alt="Dashboard" />

              <div className="-mt-3">
                <h4>Sel Hustle</h4>
                <p className="text-secondary mt-2 w-[430px] mx-auto">
                  You can start to create your products easily with its
                  user-friendly design & most completed responsive layout
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="auth__wrapper__slider text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/slider/one.png" alt="Dashboard" />

              <div className="-mt-3">
                <h4>Sel Hustle</h4>
                <p className="text-secondary mt-2 w-[430px] mx-auto">
                  You can start to create your products easily with its
                  user-friendly design & most completed responsive layout
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="auth__wrapper__slider text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/slider/one.png" alt="Dashboard" />

              <div className="-mt-3">
                <h4>Sel Hustle</h4>
                <p className="text-secondary mt-2 w-[430px] mx-auto">
                  You can start to create your products easily with its
                  user-friendly design & most completed responsive layout
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AuthWrapper
