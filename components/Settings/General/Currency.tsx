import Select from 'react-select'
import CurrencyList from 'currency-list'
import FormHeader from './FormHeader'
import Link from 'next/link'

const currencyFormatter = (currency: any) => {
  if (!currency) return []

  const values = []

  for (const val in currency as any) {
    if (currency[val].name && currency[val].code)
      values.push({
        label: currency[val].name,
        value: currency[val].code
      })
  }

  return values
}

const Currency = ({ formik }: any) => {
  return (
    <div className="settings__currency">
      <FormHeader
        heading="Store currency"
        info={
          <p>
            Customers use this currency to buy your products. It can only be
            changed before you’ve made your first sale.
            <span className="block">
              {' '}
              To change your payout currency, go to{' '}
              <Link href="">
                <a
                  style={{
                    color: '#0064AC'
                  }}
                >
                  payment settings
                </a>
              </Link>
            </span>
          </p>
        }
      />
      <div className="mt-7">
        <div>
          <label htmlFor="currency">Store currency</label>
          <Select
            options={currencyFormatter(CurrencyList.getAll('en_US'))}
            classNamePrefix="select__inner"
            placeholder="Euro (EUR)"
            onChange={(selectedOption) => {
              formik.setFieldValue('currency', selectedOption?.value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Currency
