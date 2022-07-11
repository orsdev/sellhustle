import Image from 'next/image'

const Personal = () => {
  return (
    <div className="employee__personal cm-border-left">
      <div className="relative">
        <h4
          className="text-md font-bold"
          style={{
            color: '#1B1B1B'
          }}
        >
          Personal Information
        </h4>
        <p className="font-xs">
          View your personal information used in Hustle Dashboard
        </p>
      </div>

      <div className="employee__personal__content mt-6">
        <header className="flex items-center justify-between">
          <h6
            className="font-xs"
            style={{
              fontSize: '11.6px',
              color: '#848B95'
            }}
          >
            BASIC INFO
          </h6>
          <div className="employee__personal__icon">
            <button>
              <Image
                src="/icons/pen.png"
                alt="Edit User"
                height="14px"
                width="14px"
              />
            </button>
          </div>
        </header>

        <div className="employee__personal__body mt-6 pl-4">
          <div className="employee__personal__item">
            <h6 className="font-xs">Full Name</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              Miracle Ayodele
            </h5>
          </div>
          <div className="employee__personal__item">
            <h6>Display Name</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              Miracle
            </h5>
          </div>
          <div className="employee__personal__item">
            <h6>Email</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              info@softnio.com
            </h5>
          </div>
          <div className="employee__personal__item">
            <h6>Phone Number</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              Not add yet
            </h5>
          </div>
          <div className="employee__personal__item">
            <h6>Date of Birth</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              29 Feb, 1986
            </h5>
          </div>
          <div className="employee__personal__item">
            <h6>Address</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              237 Kildeer Drive, Canada
            </h5>
          </div>
        </div>

        <header className="flex items-center justify-between mt-10">
          <h6
            className="font-xs"
            style={{
              fontSize: '11.6px',
              color: '#848B95'
            }}
          >
            PREFERENCES
          </h6>
          <div className="employee__personal__icon">
            <button>
              <Image
                src="/icons/pen.png"
                alt="Edit User"
                height="14px"
                width="14px"
              />
            </button>
          </div>
        </header>

        <div className="employee__personal__body mt-6 pl-4">
          <div className="employee__personal__item">
            <h6 className="font-xs">Language</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              English (United State)
            </h5>
          </div>
          <div className="employee__personal__item">
            <h6 className="font-xs">Date Format</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              MM,DD,YYYY
            </h5>
          </div>
          <div className="employee__personal__item">
            <h6 className="font-xs">Timezone</h6>
            <h5
              className="font-base"
              style={{
                color: '#414141'
              }}
            >
              Bangladesh (GMT +6)
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Personal
