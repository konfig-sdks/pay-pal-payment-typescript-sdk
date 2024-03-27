<div align="left">

[![Visit Paypal](./header.png)](https://www.paypal.com&#x2F;)

# [Paypal](https://www.paypal.com&#x2F;)<a id="paypal"></a>

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href="/docs/api/orders/v2/">Orders API</a>. For more information, see the <a href="/docs/checkout/">PayPal Checkout Overview</a>.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`paypalpayment.authorizations.capturePayment`](#paypalpaymentauthorizationscapturepayment)
  * [`paypalpayment.authorizations.reauthorizePayment`](#paypalpaymentauthorizationsreauthorizepayment)
  * [`paypalpayment.authorizations.showDetails`](#paypalpaymentauthorizationsshowdetails)
  * [`paypalpayment.authorizations.voidPayment`](#paypalpaymentauthorizationsvoidpayment)
  * [`paypalpayment.captures.refundPayment`](#paypalpaymentcapturesrefundpayment)
  * [`paypalpayment.captures.showDetails`](#paypalpaymentcapturesshowdetails)
  * [`paypalpayment.refunds.details`](#paypalpaymentrefundsdetails)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=PayPal&serviceName=Payment&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { PayPalPayment } from "pay-pal-payment-typescript-sdk";

const paypalpayment = new PayPalPayment({
  // Defining the base path is optional and defaults to https://api-m.sandbox.paypal.com
  // basePath: "https://api-m.sandbox.paypal.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const capturePaymentResponse =
  await paypalpayment.authorizations.capturePayment({
    authorizationId: "authorizationId_example",
    prefer: "return=minimal",
    invoice_id: "INVOICE-123",
    final_capture: true,
    note_to_payer:
      "If the ordered color is not available, we will substitute with a different color free of charge.",
    soft_descriptor: "Bob's Custom Sweaters",
  });

console.log(capturePaymentResponse);
```

## Reference<a id="reference"></a>


### `paypalpayment.authorizations.capturePayment`<a id="paypalpaymentauthorizationscapturepayment"></a>

Captures an authorized payment, by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const capturePaymentResponse =
  await paypalpayment.authorizations.capturePayment({
    authorizationId: "authorizationId_example",
    prefer: "return=minimal",
    invoice_id: "INVOICE-123",
    final_capture: true,
    note_to_payer:
      "If the ordered color is not available, we will substitute with a different color free of charge.",
    soft_descriptor: "Bob's Custom Sweaters",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizationId: `string`<a id="authorizationid-string"></a>

The PayPal-generated ID for the authorized payment to void.

##### invoice_id: `string`<a id="invoice_id-string"></a>

The API caller-provided external invoice number for this order. Appears in both the payer\\\'s transaction history and the emails that the payer receives.

##### note_to_payer: `string`<a id="note_to_payer-string"></a>

An informational note about this settlement. Appears in both the payer\\\'s transaction history and the emails that the payer receives.

##### amount: [`Money`](./models/money.ts)<a id="amount-moneymodelsmoneyts"></a>

##### final_capture: `boolean`<a id="final_capture-boolean"></a>

Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.

##### payment_instruction: [`PaymentInstruction`](./models/payment-instruction.ts)<a id="payment_instruction-paymentinstructionmodelspayment-instructionts"></a>

##### soft_descriptor: `string`<a id="soft_descriptor-string"></a>

The payment descriptor on the payer\\\'s account statement.

##### PayPalRequestId: `string`<a id="paypalrequestid-string"></a>

The server stores keys for 45 days.

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

#### 🔄 Return<a id="🔄-return"></a>

[Capture2](./models/capture2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/authorizations/{authorization_id}/capture` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalpayment.authorizations.reauthorizePayment`<a id="paypalpaymentauthorizationsreauthorizepayment"></a>

Reauthorizes an authorized PayPal account payment, by ID. To ensure that funds are still available, reauthorize a payment after its initial three-day honor period expires. Within the 29-day authorization period, you can issue multiple re-authorizations after the honor period expires.<br/><br/>If 30 days have transpired since the date of the original authorization, you must create an authorized payment instead of reauthorizing the original authorized payment.<br/><br/>A reauthorized payment itself has a new honor period of three days.<br/><br/>You can reauthorize an authorized payment from 4 to 29 days after the 3-day honor period. The allowed amount depends on context and geography, for example in US it is up to 115% of the original authorized amount, not to exceed an increase of $75 USD.<br/><br/>Supports only the `amount` request parameter.<blockquote><strong>Note:</strong> This request is currently not supported for Partner use cases.</blockquote>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const reauthorizePaymentResponse =
  await paypalpayment.authorizations.reauthorizePayment({
    authorizationId: "authorizationId_example",
    prefer: "return=minimal",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizationId: `string`<a id="authorizationid-string"></a>

The PayPal-generated ID for the authorized payment to void.

##### amount: [`Money`](./models/money.ts)<a id="amount-moneymodelsmoneyts"></a>

##### PayPalRequestId: `string`<a id="paypalrequestid-string"></a>

The server stores keys for 45 days.

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

#### 🔄 Return<a id="🔄-return"></a>

[Authorization2](./models/authorization2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/authorizations/{authorization_id}/reauthorize` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalpayment.authorizations.showDetails`<a id="paypalpaymentauthorizationsshowdetails"></a>

Shows details for an authorized payment, by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await paypalpayment.authorizations.showDetails({
  authorizationId: "authorizationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizationId: `string`<a id="authorizationid-string"></a>

The PayPal-generated ID for the authorized payment to void.

#### 🔄 Return<a id="🔄-return"></a>

[Authorization2](./models/authorization2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/authorizations/{authorization_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalpayment.authorizations.voidPayment`<a id="paypalpaymentauthorizationsvoidpayment"></a>

Voids, or cancels, an authorized payment, by ID. You cannot void an authorized payment that has been fully captured.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const voidPaymentResponse = await paypalpayment.authorizations.voidPayment({
  authorizationId: "authorizationId_example",
  prefer: "return=minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorizationId: `string`<a id="authorizationid-string"></a>

The PayPal-generated ID for the authorized payment to void.

##### PayPalAuthAssertion: `string`<a id="paypalauthassertion-string"></a>

An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.</blockquote>

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

#### 🔄 Return<a id="🔄-return"></a>

[Authorization2](./models/authorization2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/authorizations/{authorization_id}/void` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalpayment.captures.refundPayment`<a id="paypalpaymentcapturesrefundpayment"></a>

Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const refundPaymentResponse = await paypalpayment.captures.refundPayment({
  captureId: "captureId_example",
  prefer: "return=minimal",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### captureId: `string`<a id="captureid-string"></a>

The PayPal-generated ID for the captured payment to refund.

##### amount: [`Money`](./models/money.ts)<a id="amount-moneymodelsmoneyts"></a>

##### custom_id: `string`<a id="custom_id-string"></a>

The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. The pattern is defined by an external party and supports Unicode.

##### invoice_id: `string`<a id="invoice_id-string"></a>

The API caller-provided external invoice ID for this order. The pattern is defined by an external party and supports Unicode.

##### note_to_payer: `string`<a id="note_to_payer-string"></a>

The reason for the refund. Appears in both the payer\\\'s transaction history and the emails that the payer receives. The pattern is defined by an external party and supports Unicode.

##### payment_instruction: [`PaymentInstruction2`](./models/payment-instruction2.ts)<a id="payment_instruction-paymentinstruction2modelspayment-instruction2ts"></a>

##### PayPalRequestId: `string`<a id="paypalrequestid-string"></a>

The server stores keys for 45 days.

##### prefer: `string`<a id="prefer-string"></a>

The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>

##### PayPalAuthAssertion: `string`<a id="paypalauthassertion-string"></a>

An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.</blockquote>

#### 🔄 Return<a id="🔄-return"></a>

[Refund](./models/refund.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/captures/{capture_id}/refund` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalpayment.captures.showDetails`<a id="paypalpaymentcapturesshowdetails"></a>

Shows details for a captured payment, by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await paypalpayment.captures.showDetails({
  captureId: "captureId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### captureId: `string`<a id="captureid-string"></a>

The PayPal-generated ID for the captured payment to refund.

#### 🔄 Return<a id="🔄-return"></a>

[Capture2](./models/capture2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/captures/{capture_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `paypalpayment.refunds.details`<a id="paypalpaymentrefundsdetails"></a>

Shows details for a refund, by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detailsResponse = await paypalpayment.refunds.details({
  refundId: "refundId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### refundId: `string`<a id="refundid-string"></a>

The PayPal-generated ID for the refund for which to show details.

#### 🔄 Return<a id="🔄-return"></a>

[Refund](./models/refund.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/payments/refunds/{refund_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
