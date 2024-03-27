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
 * @interface PLATFORMFEENOTENABLED
 */
export interface PLATFORMFEENOTENABLED {
    /**
     * 
     * @type {string}
     * @memberof PLATFORMFEENOTENABLED
     */
    'description'?: PLATFORMFEENOTENABLEDDescriptionEnum;
    /**
     * 
     * @type {string}
     * @memberof PLATFORMFEENOTENABLED
     */
    'issue'?: PLATFORMFEENOTENABLEDIssueEnum;
}

type PLATFORMFEENOTENABLEDDescriptionEnum = 'The API Caller account is not setup to be able to process refunds with \'platform_fees\'. Please contact your Account Manager. This feature is useful when you want to contribute a portion of the \'platform_fees\' you had capture as part of the refund being processed.'
type PLATFORMFEENOTENABLEDIssueEnum = 'PLATFORM_FEE_NOT_ENABLED'


