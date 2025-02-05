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
 * @interface AUTHCURRENCYMISMATCH
 */
export interface AUTHCURRENCYMISMATCH {
    /**
     * 
     * @type {string}
     * @memberof AUTHCURRENCYMISMATCH
     */
    'description'?: AUTHCURRENCYMISMATCHDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof AUTHCURRENCYMISMATCH
     */
    'issue'?: AUTHCURRENCYMISMATCHIssueEnum;
}

type AUTHCURRENCYMISMATCHDescriptionEnum = 'The currency specified during reauthorization should be the same as the currency specified in the original authorization. Please check the currency of the authorization for which you are trying to reauthorize and try again.'
type AUTHCURRENCYMISMATCHIssueEnum = 'AUTH_CURRENCY_MISMATCH'


