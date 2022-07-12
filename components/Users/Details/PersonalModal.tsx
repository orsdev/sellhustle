import { FC } from 'react'
import { Modal, Tabs, DatePicker } from 'antd'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Image from 'next/image'

import TextInput from '@/components/Common/TextInput'

const { TabPane } = Tabs

interface PersonalFormikValues {
  fullName: string
  displayName: string
  phoneNumber: string
  dob: string
}

interface AddressFormikValues {
  addressLine1: string
  addressLine2: string
}

const AddressValidationSchema = Yup.object({
  addressLine1: Yup.string(),
  addressLine2: Yup.string()
})

const PersonalValidationSchema = Yup.object({
  fullName: Yup.string(),
  displayName: Yup.string(),
  phoneNumber: Yup.string(),
  dob: Yup.string()
})

const AddressForm = () => {
  const formik = useFormik<AddressFormikValues>({
    initialValues: {
      addressLine1: '',
      addressLine2: ''
    },
    validationSchema: AddressValidationSchema,
    onSubmit: (values: AddressFormikValues) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="mt-5 personal__form">
      <div className="grid base:grid-cols-2 gap-5">
        <TextInput
          labelTitle="Address Line 1"
          name="addressLine1"
          placeholder=""
          value={formik.values.addressLine1}
          onChange={formik.handleChange}
          style={{
            height: '41px'
          }}
        />
        <TextInput
          labelTitle="Address Line 2"
          name="addressLine2"
          placeholder=""
          value={formik.values.addressLine2}
          onChange={formik.handleChange}
          style={{
            height: '41px'
          }}
        />
      </div>
      <div className="personal__form__btn mt-7 pb-4">
        <button className="personal__form__submit" type="submit">
          Update Profile
        </button>
        <button className="personal__form__cancel ml-6" type="button">
          Cancel
        </button>
      </div>
    </form>
  )
}

const PersonalForm = () => {
  const formik = useFormik<PersonalFormikValues>({
    initialValues: {
      fullName: '',
      displayName: '',
      phoneNumber: '',
      dob: ''
    },
    validationSchema: PersonalValidationSchema,
    onSubmit: (values: PersonalFormikValues) => {
      console.log(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="mt-5 personal__form">
      <div className="grid base:grid-cols-2 gap-5">
        <TextInput
          labelTitle="Full Name"
          name="fullName"
          placeholder="Enter your name"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          style={{
            height: '41px'
          }}
        />
        <TextInput
          labelTitle="Display Name"
          name="displayName"
          placeholder="Enter your display name"
          value={formik.values.displayName}
          onChange={formik.handleChange}
          style={{
            height: '41px'
          }}
        />
      </div>
      <div className="grid base:grid-cols-2 gap-5 mt-5 base:mt-8">
        <TextInput
          labelTitle="Phone Number"
          name="phoneNumber"
          placeholder="Enter your phone Number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          style={{
            height: '41px'
          }}
        />
        <div className="personal__form__dob">
          <label htmlFor="dob" className="">
            Date of Birth
          </label>
          <DatePicker
            onChange={() => {}}
            className="personal__form__dob__input"
          />
        </div>
      </div>
      <div className="personal__form__btn mt-7 pb-4">
        <button className="personal__form__submit" type="submit">
          Update Profile
        </button>
        <button className="personal__form__cancel ml-6" type="button">
          Cancel
        </button>
      </div>
    </form>
  )
}

const PersonalModal: FC<{
  visible: boolean
  handleCancel: () => void
}> = ({ visible, handleCancel }) => {
  return (
    <div className="personal__modal__container">
      <Modal
        title={<h3 className="text-md font-bold pt-4">Update Profile</h3>}
        visible={visible}
        centered={true}
        onCancel={handleCancel}
        closeIcon={
          <button className="relative top-4 right-1">
            <Image
              src="/icons/close.png"
              alt="Close"
              height="14px"
              width="14px"
            />
          </button>
        }
        className="personal__modal"
        width={600}
        bodyStyle={{
          minHeight: '300px'
        }}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={<h6 className="font-base">Personal</h6>} key="1">
            <PersonalForm />
          </TabPane>
          <TabPane tab={<h6 className="font-base">Address</h6>} key="2">
            <AddressForm />
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  )
}

export default PersonalModal
