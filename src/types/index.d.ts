declare global {
  interface Window {
    googlePayClient: google.payments.api.PaymentsClient;
    ApplePaySession: ApplePaySession;
  }
}