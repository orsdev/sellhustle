import TextInput from '@/components/Common/TextInput'
import CustomCollapse from '@/components/Common/CustomCollapse'

const FormSeo = () => {
  return (
    <div className="common__form__seo w-full">
      <CustomCollapse title="Seo Optimization">
        <p
          className="font-xs opacity-50"
          style={{
            fontSize: '12px'
          }}
        >
          Provide information that will help improve the snippet and bring your
          product to the top of search engines.
        </p>

        <div className="mt-7">
          <TextInput
            labelTitle="Page Title"
            name="pageTitle"
            onChange={() => {}}
            onBlur={() => {}}
          />
          <div className="mt-5">
            <label
              htmlFor="metaDescription"
              className="text-primary-blue_dark_1 mb-4 block font-xs"
            >
              Meta Description
            </label>
            <textarea
              name="metaDescription"
              rows={3}
              className="w-full p-6 cm-border rounded-lg font-base"
            />
          </div>
        </div>
      </CustomCollapse>
    </div>
  )
}

export default FormSeo
