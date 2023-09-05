
export interface ProductTypes {
  denomination: any[]
  _id: string
  category: string
  name: string
  countries: string[]
  image: string
  verification: boolean
  stock_count: boolean
  local_currency: string
  local_currency_rate: number
  amount_range?: AmountRange
  purchase_description: string
  product_description: string
  how_to_redeem: string
  terms_and_conditions: string
  _comment?: string
  serviceID?: string
  billersCode?: string
  variation_code?: string
  operator_id?: string
  country_code?: string
  product_type_id?: string
  email_required?: boolean
  airtime_type?: string
  provider?: string
  variation?: string
  multiple_variation?: MultipleVariation[]
}

export interface AmountRange {
  min: number
  max: number
}

export interface MultipleVariation {
  variation_code: string
  name: string
  variation_amount?: string
}
