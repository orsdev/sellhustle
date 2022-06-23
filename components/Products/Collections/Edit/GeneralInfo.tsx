import TextInput from '@/components/Common/TextInput'

const GeneralInfo = () => {
  return (
    <div className="collections__general__info cm-border">
      <h3 className="collections__general__info__heading">
        General Information
      </h3>
      <div className="mt-7">
        <TextInput
          labelTitle="Category Name"
          name="categoryName"
          onChange={() => {}}
          onBlur={() => {}}
        />
        <div className="mt-5">
          <label
            htmlFor="Description"
            className="text-primary-blue_dark_1 mb-4 block font-xs"
          >
            Description
          </label>
          <textarea
            name="Description"
            rows={4}
            className="w-full p-6 cm-border rounded-lg font-base"
          />
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
