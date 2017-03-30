export const FORM_ELEMENT_TYPE: Object = {
  AMOUNT: 'amount',
  BOOLEAN: 'boolean',
  CURRENCY: 'currency',
  CURRENCY_CODE: 'currency-code',
  DATE: 'date',
  DATE_RANGE: 'date-range',
  DATE_TIME: 'date-time',
  MULTI_SELECT: 'multi-select',
  NUMBER: 'number',
  NUMBER_RANGE: 'number-range',
  OPTIONS: 'select-single',
  PERCENTAGE: 'percentage',
  PERCENTAGE_RANGE: 'range',
  RADIO_GROUP: 'radio-group',
  SELECTIZE_SINGLE: 'selectize-single',
  SELECT_SINGLE: 'select-single',
  STATUS: 'status',
  TELEPHONE: 'telephone',
  TEXT: 'text',
  TEXTAREA: 'textarea',
  TIME_RANGE: 'time-range'
};

export const FORM_ELEMENT_PATTERNS = {
  FLOATING_POINT: '^[-+]?[0-9]*\.?[0-9]+$',
  INTEGER: '^[+]?[0-9]*$'
};

export type FormElementError = {
  title: string;
  message: string;
};

export type FormElementConfig = {
  title: string;
  property: string;
  type: string;
  placeholder?: string;
  mandatory?: boolean;
  error?: Array<FormElementError>;
  class?: string;
  model?: Object;
  config?: Object;
};

export const FORM_ELEMENTS: {[key: string]: FormElementConfig} = {
  TRADING_LIMIT: {
    name: 'trading_limit',
    title: 'forms.fields.trading_limit',
    property: 'tradingLimit',
    placeholder: '0.00',
    type: FORM_ELEMENT_TYPE.CURRENCY,
    mandatory: true,
    config: {
      min: 0,
      pattern: FORM_ELEMENT_PATTERNS.FLOATING_POINT,
      currency: 'tradingLimitCurrency',
      fractionSize: 2
    }
  },
  TRADING_LIMIT_CURRENCY: {
    name: 'trading_limit_currency',
    title: 'forms.fields.trading_limit_currency',
    property: 'tradingLimitCurrency',
    type: FORM_ELEMENT_TYPE.OPTIONS,
    mandatory: true,
    config: {
      values: 'currencies'
    }
  },
  INELIG_AFTER_DAYS_REMAINING: {
    name: 'ineligible_after_days_remaining',
    title: 'forms.fields.ineligible_after_days_remaining',
    property: 'ineligibleAfterDaysRemaining',
    type: FORM_ELEMENT_TYPE.NUMBER,
    mandatory: true,
    config: {
      min: 0,
      pattern: FORM_ELEMENT_PATTERNS.INTEGER
    }
  },
  MAXIMUM_INVOICE_TENURE: {
    name: 'maximum_invoice_tenure',
    title: 'forms.fields.maximum_invoice_tenure',
    property: 'maximumInvoiceTenor',
    type: FORM_ELEMENT_TYPE.NUMBER,
    mandatory: true,
    config: {
      min: 0,
      max: 1001,
      pattern: FORM_ELEMENT_PATTERNS.INTEGER
    }
  },
  BASIS_TYPE: {
    name: 'basis_type',
    title: 'forms.fields.basis_type',
    property: 'basisType',
    mandatory: true,
    type: FORM_ELEMENT_TYPE.RADIO_GROUP,
    config: {
      values: 'basisTypes'
    }
  },
  DISCOUNT_MARGIN: {
    name: 'discount_margin',
    title: 'forms.fields.discount_margin',
    property: 'discountMargin',
    placeholder: '<= 25',
    type: FORM_ELEMENT_TYPE.PERCENTAGE,
    mandatory: true,
    config: {
      min: 0,
      max: 25,
      pattern: FORM_ELEMENT_PATTERNS.FLOATING_POINT,
      fractionSize: 2
    }
  },
  COMMISSION_TYPE: {
    name: 'commission_type',
    title: 'forms.fields.commission_type',
    property: 'commissionType',
    mandatory: true,
    type: FORM_ELEMENT_TYPE.RADIO_GROUP,
    config: {
      values: 'commissionTypes'
    }
  },
  COMMISSION_MARGIN: {
    name: 'commission_margin',
    title: 'forms.fields.commission_margin',
    property: 'commissionMargin',
    placeholder: '<= 25',
    type: FORM_ELEMENT_TYPE.PERCENTAGE,
    required: true,
    config: {
      min: 0,
      max: 25,
      pattern: FORM_ELEMENT_PATTERNS.FLOATING_POINT,
      fractionSize: 2
    }
  },
  MINIMUM_DISCOUNT_AMOUNT: {
    name: 'min_discount_amount',
    title: 'forms.fields.min_discount_amount',
    property: 'minimumDiscountAmount',
    type: FORM_ELEMENT_TYPE.AMOUNT,
    mandatory: true,
    config: {
      min: 0,
      max: 9999.99,
      pattern: FORM_ELEMENT_PATTERNS.FLOATING_POINT,
      currency: 'tradingLimitCurrency',
      fractionSize: 2
    }
  },
  MINIMUM_COMMISION_AMOUNT: {
    name: 'min_commission_amount',
    title: 'forms.fields.min_commission_amount',
    property: 'minimumCommissionAmount',
    type: FORM_ELEMENT_TYPE.AMOUNT,
    mandatory: true,
    config: {
      min: 0,
      max: 9999.99,
      pattern: FORM_ELEMENT_PATTERNS.FLOATING_POINT,
      currency: 'tradingLimitCurrency',
      fractionSize: 2
    }
  },
  DISCOUNT_TAX_RATE: {
    name: 'discount_tax_rate',
    title: 'forms.fields.discount_tax_rate',
    property: 'discountTaxRate',
    placeholder: '<= 50',
    type: FORM_ELEMENT_TYPE.PERCENTAGE,
    mandatory: true,
    config: {
      min: 0,
      max: 50,
      pattern: FORM_ELEMENT_PATTERNS.FLOATING_POINT,
      fractionSize: 2
    }
  },
  COMMISION_TAX_RATE: {
    name: 'commission_tax_rate',
    title: 'forms.fields.commission_tax_rate',
    property: 'commissionTaxRate',
    placeholder: '<= 50',
    type: FORM_ELEMENT_TYPE.PERCENTAGE,
    mandatory: true,
    config: {
      min: 0,
      max: 50,
      pattern: FORM_ELEMENT_PATTERNS.FLOATING_POINT,
      fractionSize: 2
    }
  },
  SUPPLIER_PHONE: {
    name: 'supplier_phone',
    title: 'forms.fields.supplier_phone',
    property: 'phone',
    type: FORM_ELEMENT_TYPE.TELEPHONE,
    mandatory: false
  }
};
