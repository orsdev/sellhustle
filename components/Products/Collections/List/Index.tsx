import Header from './Header'
import TableList from './TableList'

const CollectionsList = () => {
  return (
    <div className="collections__list">
      <div className="pt-6">
        <Header onSaveDraft={() => {}} onPublished={() => {}} />
      </div>
      <div className="w-full mt-5 bg-white">
        <TableList />
      </div>
    </div>
  )
}

export default CollectionsList
