import { Collapse } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons'
import { FC, ReactNode } from 'react'

const { Panel } = Collapse

type Props = {
  title: string
  children: ReactNode
}
const CustomCollapse: FC<Props> = ({ title, children }) => {
  return (
    <div className="custom__collapse">
      <Collapse
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        expandIconPosition="end"
      >
        <Panel
          header={<h3 className="custom__collapse__heading">{title}</h3>}
          key="1"
        >
          {children}
        </Panel>
      </Collapse>
    </div>
  )
}

export default CustomCollapse
