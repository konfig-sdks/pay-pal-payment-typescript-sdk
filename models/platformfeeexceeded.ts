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
 * @interface PLATFORMFEEEXCEEDED
 */
export interface PLATFORMFEEEXCEEDED {
    /**
     * 
     * @type {string}
     * @memberof PLATFORMFEEEXCEEDED
     */
    'description'?: PLATFORMFEEEXCEEDEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PLATFORMFEEEXCEEDED
     */
    'issue'?: PLATFORMFEEEXCEEDEDIssueEnum;
}

type PLATFORMFEEEXCEEDEDDescriptionEnum = 'Platform fee amount specified exceeds the amount that is available for refund. You can only refund up to the available platform fee amount. This error is also returned when no platform_fee was specified or was zero when the payment was captured.'
type PLATFORMFEEEXCEEDEDIssueEnum = 'PLATFORM_FEE_EXCEEDED'


