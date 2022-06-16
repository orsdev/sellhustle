export const currencyFormatter = (
  amount: number,
  currency: string,
  fractionDigit?: number | undefined
) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    maximumFractionDigits: fractionDigit,
    currency
  }).format(amount)
