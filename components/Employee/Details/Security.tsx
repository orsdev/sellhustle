import { Switch } from 'antd'
import React from 'react'

const Security = () => {
  return (
    <div className="employee__security cm-border-left">
      <div className="relative">
        <h4
          className="text-md font-bold"
          style={{
            color: '#1B1B1B'
          }}
        >
          Security Settings
        </h4>
        <p className="font-xs">
          These settings are helps you keep your account secure.
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
          Save my Activity Logs
        </h4>
        <div className="flex items-center justify-between">
          <p className="font-xs w-9/12 md:w-full mt-1">
            You can save your all activity logs including unusual activity
            detected.
          </p>
          <div>
            <Switch
              onChange={(checked: boolean) => console.log(checked)}
              size="small"
              defaultChecked={true}
            />
          </div>
        </div>
      </div>

      <div className="mt-7">
        <h4
          className="font-base relative top-1"
          style={{
            color: '#1B1B1B',
            fontWeight: 700
          }}
        >
          Change Password
        </h4>

        <div className="flex flex-wrap base:flex-nowrap items-center justify-between">
          <p className="font-xs base:w-7/12 md:w-8/12 pr-2 mt-1">
            Set a unique password to protect your account.
          </p>
          <button className="btn relative base:-top-3 mt-3 base:mt-0 w-[140px]">
            Change Password
          </button>
        </div>
      </div>
      <div className="mt-7">
        <h4
          className="font-base"
          style={{
            color: '#1B1B1B',
            fontWeight: 700
          }}
        >
          2 Factor Auth
          <span
            className="text-bg px-2 py-1 text-center rounded ml-2 font-xs"
            style={{
              background: '#1EE0AC'
            }}
          >
            Enabled
          </span>
        </h4>

        <div className="flex flex-wrap base:flex-nowrap items-center justify-between">
          <p className="font-xs base:w-7/12 md:w-8/12 pr-2 mt-1">
            Secure your account with 2FA security. When it is activated you will
            need to enter not only your password, but also a special code using
            app. You can receive this code by in mobile app.
          </p>
          <button className="btn relative base:-top-3 mt-3 base:mt-0 w-[90px]">
            Disable
          </button>
        </div>
      </div>
    </div>
  )
}

export default Security
