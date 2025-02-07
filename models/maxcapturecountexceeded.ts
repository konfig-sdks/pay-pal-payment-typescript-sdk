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
 * @interface MAXCAPTURECOUNTEXCEEDED
 */
export interface MAXCAPTURECOUNTEXCEEDED {
    /**
     * 
     * @type {string}
     * @memberof MAXCAPTURECOUNTEXCEEDED
     */
    'description'?: MAXCAPTURECOUNTEXCEEDEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof MAXCAPTURECOUNTEXCEEDED
     */
    'issue'?: MAXCAPTURECOUNTEXCEEDEDIssueEnum;
}

type MAXCAPTURECOUNTEXCEEDEDDescriptionEnum = 'Maxmimum number of allowable captures has been reached. No additional captures are possible for this authorization. Contact Customer Service or your account manager to change the number of captures for a given authorization.'
type MAXCAPTURECOUNTEXCEEDEDIssueEnum = 'MAX_CAPTURE_COUNT_EXCEEDED'


