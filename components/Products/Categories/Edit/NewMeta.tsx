import CustomCollapse from '@/components/Common/CustomCollapse'

const NewMeta = () => {
  return (
    <div className="edit__category__new__meta cm-border">
      <CustomCollapse
        title="Meta Data"
        content="No metadata created for this element. Use the button below to add new metadata field."
      />
      <div className="mt-7">
        <button className="font-xs text-primary-blue_dark_2 text-right mb-1">
          <i className="fa fa-plus mr-2" aria-hidden="true" />
          <span>Add Field</span>
        </button>
      </div>
    </div>
  )
}

export default NewMeta
