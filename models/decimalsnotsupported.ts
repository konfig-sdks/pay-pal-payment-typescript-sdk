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
 * @interface DECIMALSNOTSUPPORTED
 */
export interface DECIMALSNOTSUPPORTED {
    /**
     * 
     * @type {string}
     * @memberof DECIMALSNOTSUPPORTED
     */
    'description'?: DECIMALSNOTSUPPORTEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof DECIMALSNOTSUPPORTED
     */
    'issue'?: DECIMALSNOTSUPPORTEDIssueEnum;
}

type DECIMALSNOTSUPPORTEDDescriptionEnum = 'Currency does not support decimals. Please refer to https://developer.paypal.com/docs/api/reference/currency-codes/ for more information.'
type DECIMALSNOTSUPPORTEDIssueEnum = 'DECIMALS_NOT_SUPPORTED'


