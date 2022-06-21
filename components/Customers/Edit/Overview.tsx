import TextInput from '@/components/Common/TextInput'

const Overview = () => {
  return (
    <div className="customer__overview cm-border">
      <h3 className="customer__overview__heading">Customer Overview</h3>
      <div className="customer__overview__body mt-7">
        <div className="grid  grid-cols-1 mid:grid-cols-2 gap-5">
          <TextInput
            labelTitle="First Name"
            name="firstName"
            onChange={() => {}}
            onBlur={() => {}}
          />
          <TextInput
            labelTitle="Last Name"
            name="lastName"
            onChange={() => {}}
            onBlur={() => {}}
          />
        </div>
        <div className="grid grid-cols-1 mid:grid-cols-2 gap-5 mt-5">
          <TextInput
            labelTitle="Email Address"
            name="emailAddress"
            onChange={() => {}}
            onBlur={() => {}}
          />
          <TextInput
            labelTitle="Phone Number"
            name="phoneNumber"
            onChange={() => {}}
            onBlur={() => {}}
          />
        </div>
      </div>
    </div>
  )
}

export default Overview
