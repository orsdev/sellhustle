import Header from './Header'
import Location from './Location'
import Note from './Note'
import Overview from './Overview'

const Edit = () => {
  return (
    <div className="customer__edit">
      <div className="pt-12">
        <Header onSaveDraft={() => {}} onSave={() => {}} />
      </div>
      <div className="w-full mt-5">
        <div className="customer__edit__body">
          <div>
            <Overview />
            <Location />
          </div>
          <Note />
        </div>
      </div>
    </div>
  )
}

export default Edit
