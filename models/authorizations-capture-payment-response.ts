/*
Payments

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href=\"/docs/api/orders/v2/\">Orders API</a>. For more information, see the <a href=\"/docs/checkout/\">PayPal Checkout Overview</a>.

The version of the OpenAPI document: 2.5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Error400 } from './error400';
import { ErrorLinkDescription } from './error-link-description';
import { Model400 } from './model400';
import { Model400DetailsInner } from './model400-details-inner';

/**
 * @type AuthorizationsCapturePaymentResponse
 * @export
 */
export type AuthorizationsCapturePaymentResponse = Error400 & Model400;


