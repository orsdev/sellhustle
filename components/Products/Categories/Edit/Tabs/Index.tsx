import { Tabs } from 'antd'
import ProductTable from './ProductsTable'
import SubCategoriesTable from './SubCategoriesTable'

const { TabPane } = Tabs

const CategoriesTab = () => {
  return (
    <div className="category__tab mt-7">
      <Tabs defaultActiveKey="1">
        <TabPane tab="SubCategories" key="1">
          <SubCategoriesTable />
        </TabPane>
        <TabPane tab="Products" key="2">
          <ProductTable />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default CategoriesTab
