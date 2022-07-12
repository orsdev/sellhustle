import { FC } from 'react'
import { Switch } from 'antd'

type SwitchInputProps = {
  onChange: (checked: boolean) => void
  labelTitle: string
  checked: boolean
}

const SwitchInput: FC<SwitchInputProps> = ({
  onChange,
  labelTitle,
  checked
}) => (
  <label>
    <Switch onChange={onChange} size="small" defaultChecked={checked} />
    <span className="text-secondary font-xs ml-3">{labelTitle}</span>
  </label>
)
const Notification = () => {
  return (
    <div className="user__notification cm-border-left">
      <div className="relative">
        <h4
          className="text-md font-bold"
          style={{
            color: '#1B1B1B'
          }}
        >
          Notification Settings
        </h4>
        <p className="font-xs">
          Check out your settings based on your preferences
        </p>
      </div>
      <div className="mt-10">
        <h4
          className="font-base"
          style={{
            color: '#1B1B1B',
            fontWeight: 700
          }}
        >
          Security Alerts
        </h4>
        <p className="font-xs">
          You will only recieve notifications which you have enabled
        </p>
      </div>

      <div className="mt-7">
        <SwitchInput
          checked={true}
          labelTitle="Email me whenever encounter unusual activity"
          onChange={(checked) => console.log(checked)}
        />
      </div>
      <div className="mt-5">
        <SwitchInput
          checked={false}
          labelTitle="Email me if new browser is used to sign in"
          onChange={(checked) => console.log(checked)}
        />
      </div>

      <div className="mt-10">
        <h4
          className="font-base"
          style={{
            color: '#1B1B1B',
            fontWeight: 700
          }}
        >
          News
        </h4>
        <p className="font-xs">
          You will get only those email notification what you want.
        </p>
      </div>

      <div className="mt-7">
        <SwitchInput
          checked={true}
          labelTitle="Notify me by email about sales and latest news"
          onChange={(checked) => console.log(checked)}
        />
      </div>
      <div className="mt-5">
        <SwitchInput
          checked={false}
          labelTitle="Email me about new features and updates"
          onChange={(checked) => console.log(checked)}
        />
      </div>
      <div className="mt-5">
        <SwitchInput
          checked={false}
          labelTitle="Email me about tips on using account"
          onChange={(checked) => console.log(checked)}
        />
      </div>
    </div>
  )
}

export default Notification
