import { useFormik } from 'formik'
import Header from './Header'
import StoreDetail from './StoreDetail'
import StoreAddress from './StoreAddress'
import Formats from './Formats'
import Currency from './Currency'

interface FormikValues {
  storeName: string
  accountEmail: string
  customerEmail: string
  businessName: string
  street: string
  phoneNumber: string
  suite: string
  city: string
  postalCode: string
  country: string
  province: string
  unitSystem: string
  timezone: string
  weightUnit: string
  currency: string
}

const SettingsGeneral = () => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      storeName: '',
      accountEmail: '',
      customerEmail: '',
      businessName: '',
      street: '',
      phoneNumber: '',
      suite: '',
      city: '',
      postalCode: '',
      country: '',
      province: '',
      unitSystem: '',
      timezone: '',
      weightUnit: '',
      currency: ''
    },
    onSubmit: (values: FormikValues) => {
      console.log(values)
    }
  })

  return (
    <div className="settings__general py-6 px-7">
      <Header />
      <div className="settings__general__wrapper cm-border mt-5">
        <StoreDetail formik={formik} />
      </div>
      <div className="settings__general__wrapper cm-border mt-5">
        <StoreAddress formik={formik} />
      </div>
      <div className="settings__general__wrapper cm-border mt-5">
        <Formats formik={formik} />
      </div>
      <div className="settings__general__wrapper cm-border mt-5">
        <Currency formik={formik} />
      </div>
    </div>
  )
}

export default SettingsGeneral
