import Header from './Header'
import ListTable from './ListTable'

const CollectionsList = () => {
  return (
    <div className="collections__list">
      <div className="pt-12">
        <Header onSaveDraft={() => {}} onPublished={() => {}} />
      </div>
      <div className="w-full mt-5">
        <ListTable />
      </div>
    </div>
  )
}

export default CollectionsList
