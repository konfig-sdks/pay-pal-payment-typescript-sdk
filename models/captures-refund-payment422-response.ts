/*
Payments

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href=\"/docs/api/orders/v2/\">Orders API</a>. For more information, see the <a href=\"/docs/checkout/\">PayPal Checkout Overview</a>.

The version of the OpenAPI document: 2.5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CapturesRefund422 } from './captures-refund422';
import { CapturesRefund422DetailsInner } from './captures-refund422-details-inner';
import { Error422 } from './error422';
import { ErrorLinkDescription } from './error-link-description';

/**
 * @type CapturesRefundPayment422Response
 * @export
 */
export type CapturesRefundPayment422Response = CapturesRefund422 & Error422;


