import { KeyboardEvent, useState } from 'react'
import { InputNumber } from 'antd'
import TextInput from '@/components/Common/TextInput'
import TagInput from '@/components/Common/Tags'

const GeneralInfo = () => {
  const [price, setPrice] = useState<string | number>('')
  const [tags, setTags] = useState<string[]>([])

  const removeTagData = (indexToRemove: number) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)])
  }

  const addTagData = (event: KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement

    if (target.value !== '') {
      setTags([...tags, target.value])
      target.value = ''
    }
  }

  const onChangePrice = (value: number | string) => {
    setPrice(value)
  }

  return (
    <div className="product__edit__general__info cm-border">
      <h3 className="product__edit__general__info__heading">
        General Information
      </h3>
      <div className="mt-7">
        <TextInput
          labelTitle="Name"
          name="productName"
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
        <div className="mt-5 grid mid:grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,200px] gap-5">
          <div className="input__tags">
            <label htmlFor="Tags" className="field__label" id="Tags">
              Tags
            </label>
            <div>
              <TagInput
                tags={tags}
                addTag={addTagData}
                removeTag={removeTagData}
              />
            </div>
            <small>Press enter key to separate tags</small>
          </div>
          <div className="field__price">
            <label htmlFor="pricing" className="field__label" id="pricing">
              Pricing
            </label>
            <InputNumber
              value={price}
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
              onChange={onChangePrice}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralInfo
