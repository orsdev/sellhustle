import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const Info = () => {
  return (
    <div className="customers__details__info">
      <div className="customers__info__data cm-border">
        <h3 className="customers__info__heading">Jacob Henry</h3>
        <div className="customers__info__body mt-8">
          <div className="flex flex-col xs:flex-row">
            <div className="text-left">
              <p className="font-xs">ID</p>
              <p className="font-xs customers__info__body__value">89564</p>
            </div>
            <div className="text-left ml-0 mt-5 xs:mt-0 xs:ml-8">
              <p className="font-xs">Last Order</p>
              <p className="font-xs customers__info__body__value">
                {dayjs('2022-05-20').fromNow()}
                <span className="text-primary-blue_dark_2 ml-1">#82930</span>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <p className="font-xs">Email</p>
            <p className="font-xs customers__info__body__value">
              Jacob@gmail.com
            </p>
          </div>
          <div className="mt-6">
            <p className="font-xs">Registered</p>
            <p className="font-xs customers__info__body__value">
              {dayjs('2022-02-20').fromNow()}
            </p>
          </div>
        </div>
      </div>

      <div className="customers__info__address cm-border">
        <div className="flex flex-col xs:flex-row xs:justify-between">
          <h3 className="customers__info__heading mb-1">Address</h3>
          <button className="font-xs text-primary-blue_dark_2 text-right mb-1">
            <i className="fa fa-plus mr-2" aria-hidden="true" />
            <span>New Address</span>
          </button>
        </div>
        <div className="customers__address mt-5 relative">
          <div
            className="relative py-4 px-6"
            style={{
              background: 'rgba(238, 245, 255, 0.3)'
            }}
          >
            <p className="font-xs">Address #1</p>
            <p className="font-xs customers__address__value">
              Random Federation 115302, Moscow ul. Varshavskaya, 15-2-178
            </p>
            <button className="absolute right-2 top-1">
              <i className="fa fa-ellipsis-v" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-7">
            <textarea
              name="note"
              rows={3}
              className="w-full p-6 cm-border rounded-lg font-base"
              placeholder="Write notes about customer here"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
