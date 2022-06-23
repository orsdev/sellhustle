import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'

const { Panel } = Collapse

const Availability = () => {
  return (
    <div className="collections__availability">
      <header className="collections__availability__header">
        <h3 className="collections__availability__heading">Availability</h3>
        <button>Manage</button>
      </header>
      <p className="font-xs">Available at 2 out of 2 channels</p>
      <hr />
      <div className="collections__availability__collapse mb-5">
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? -90 : 90} />
          )}
          expandIconPosition="end"
        >
          <Panel
            header={
              <h3 className="collections__availability__collapse__heading">
                Channel-USD
              </h3>
            }
            key="1"
          >
            <label
              htmlFor="channelUSDVisible"
              className="cursor-pointer select-none"
            >
              <input type="radio" name="channelUSD" id="channelUSDVisible" />
              <span className="ml-4 text-primary-blue_dark_1"> Visible</span>
            </label>
            <div className="mb-3" />
            <label
              htmlFor="channelUSDHidden"
              className="cursor-pointer select-none"
            >
              <input type="radio" name="channelUSD" id="channelUSDHidden" />
              <span className="ml-3 text-primary-blue_dark_1"> Hidden </span>
            </label>
          </Panel>
        </Collapse>
      </div>
      <hr />
      <div className="collections__availability__collapse mt-5">
        <Collapse
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? -90 : 90} />
          )}
          expandIconPosition="end"
        >
          <Panel
            header={
              <h3 className="collections__availability__collapse__heading">
                Channel-PLN
              </h3>
            }
            key="1"
          >
            <label
              htmlFor="channelPLNVisible"
              className="cursor-pointer select-none"
            >
              <input type="radio" name="channelPLN" id="channelPLNVisible" />
              <span className="ml-4 text-primary-blue_dark_1"> Visible</span>
            </label>
            <div className="mb-3" />
            <label
              htmlFor="channelPLNHidden"
              className="cursor-pointer select-none"
            >
              <input type="radio" name="channelPLN" id="channelPLNHidden" />
              <span className="ml-3 text-primary-blue_dark_1"> Hidden </span>
            </label>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}

export default Availability
