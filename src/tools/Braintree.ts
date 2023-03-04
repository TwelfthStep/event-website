/**
 * A payment error object.
 */
export interface PaymentError {
  title: string;
  description: string;
}

/**
 * Type for braintreeDeclinationErrors below.
 */
export type BraintreeDeclinationErrorType = {
  [key: string]: PaymentError;
};

/**
 * Known Braintree decline errors and their PaymentError objects.
 */
export const braintreeDeclinationErrors: BraintreeDeclinationErrorType = {
  ERR_PROCESSOR_DECLINED_INSUFFICIENT_FUNDS: {
    title: 'Insufficient funds',
    description: 'Your payment was declined due to insufficient funds.\n\nPlease try with a different payment method or contact your bank for more info.'
  },
  ERR_GATEWAY_REJECTED_DUPLICATE: {
    title: 'Duplicate purchase',
    description: 'Your payment was declined because you already purchased this.'
  },
  ERR_CANNOT_USE_A_PAYMENT_METHOD_NONCE_MORE_THAN_ONCE: {
    title: 'Payment method already used',
    description: 'Your payment was declined because we already tried processing it.\n\nThis likely means that your payment method failed and we were unable to complete your purchase.'
  },
  ERR_GATEWAY_REJECTED_CVV: {
    title: 'Incorrect CVV',
    description: 'The three or four digit CVV you entered above is incorrect.\n\nPlease enter the proper CVV from the back of your card and try again, or use a different card.'
  },
  ERR_GATEWAY_REJECTED_AVS: {
    title: 'Incorrect ZIP or postal code',
    description: 'The ZIP or postal code you entered above does not match the one your bank has on file.\n\nPlease enter the proper ZIP or postal code and try again, or use a different card.'
  },
  ERR_PROCESSOR_DECLINED_INVALID_EXPIRATION_DATE: {
    title: 'Invalid expiration date',
    description: 'Your payment was declined because the expiration date on your card was invalid.\n\nPlease try again using the proper expiration date, or use a different card.'
  },
  ERR_PROCESSOR_DECLINED_LIMIT_EXCEEDED: {
    title: 'Card limit exceeded',
    description: 'The limit on your card was exceeded, so your payment was declined.\n\nPlease contact your bank to increase your limit, wait until tomorrow and try again, or use a different card.'
  },
  ERR_PROCESSOR_DECLINED_DECLINED: {
    title: 'Payment declined',
    description: 'Your bank is unwilling to accept this transaction, but they gave us no specific reason as to why.\n\nFor credit or debit card transactions, you will need to contact your bank for more details regarding this generic decline.\n\nIf this is a PayPal transaction, you will need to contact PayPal for more info.\n\nWe recommend trying a different payment method if you continue to be declined.'
  },
  ERR_PROCESSOR_DECLINED_EXPIRED_CARD: {
    title: 'Invalid expiration date',
    description: 'Your card has expired or has been cancelled by your bank.'
  },
  ERR_PROCESSOR_DECLINED_PROCESSOR_DOES_NOT_SUPPORT_THIS_FEATURE: {
    title: 'Payment declined',
    description: `Your bank does not support making this type of online purchase. That's all they've told us.\n\nFor credit or debit card transactions, you will need to contact your bank for more details regarding this generic decline.\n\nIf this is a PayPal transaction, you will need to contact PayPal for more info.\n\nWe recommend trying a different payment method if you continue to be declined.`
  }
};