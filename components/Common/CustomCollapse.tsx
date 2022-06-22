import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { FC } from 'react'

const { Panel } = Collapse

type Props = {
  title: string
  content: string
}
const CustomCollapse: FC<Props> = ({ title, content }) => {
  return (
    <div className="custom__collapse">
      <Collapse
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        expandIconPosition="right"
      >
        <Panel
          header={<h3 className="custom__collapse__heading">{title}</h3>}
          key="1"
        >
          <p className="font-xs">{content}</p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default CustomCollapse
