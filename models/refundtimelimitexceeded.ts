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
 * @interface REFUNDTIMELIMITEXCEEDED
 */
export interface REFUNDTIMELIMITEXCEEDED {
    /**
     * 
     * @type {string}
     * @memberof REFUNDTIMELIMITEXCEEDED
     */
    'description'?: REFUNDTIMELIMITEXCEEDEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof REFUNDTIMELIMITEXCEEDED
     */
    'issue'?: REFUNDTIMELIMITEXCEEDEDIssueEnum;
}

type REFUNDTIMELIMITEXCEEDEDDescriptionEnum = 'You are over the time limit to perform a refund on this capture'
type REFUNDTIMELIMITEXCEEDEDIssueEnum = 'REFUND_TIME_LIMIT_EXCEEDED'


