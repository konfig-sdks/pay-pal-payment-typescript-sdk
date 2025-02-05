/*
Payments

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href=\"/docs/api/orders/v2/\">Orders API</a>. For more information, see the <a href=\"/docs/checkout/\">PayPal Checkout Overview</a>.

The version of the OpenAPI document: 2.5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface REFUNDAMOUNTTOOLOW
 */
export interface REFUNDAMOUNTTOOLOW {
    /**
     * 
     * @type {string}
     * @memberof REFUNDAMOUNTTOOLOW
     */
    'description'?: REFUNDAMOUNTTOOLOWDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof REFUNDAMOUNTTOOLOW
     */
    'issue'?: REFUNDAMOUNTTOOLOWIssueEnum;
}

type REFUNDAMOUNTTOOLOWDescriptionEnum = 'The amount after applying currency conversion is zero and hence the capture cannot be refunded. The currency conversion is required because the currency of the capture is different than the currency in which the amount was settled into the payee account.'
type REFUNDAMOUNTTOOLOWIssueEnum = 'REFUND_AMOUNT_TOO_LOW'


