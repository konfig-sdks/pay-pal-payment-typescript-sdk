/*
Payments

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href=\"/docs/api/orders/v2/\">Orders API</a>. For more information, see the <a href=\"/docs/checkout/\">PayPal Checkout Overview</a>.

The version of the OpenAPI document: 2.5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ErrorLinkDescription } from './error-link-description';

/**
 * The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.
 * @export
 * @interface Error503
 */
export interface Error503 {
    /**
     * 
     * @type {string}
     * @memberof Error503
     */
    'name'?: Error503NameEnum;
    /**
     * 
     * @type {string}
     * @memberof Error503
     */
    'message'?: Error503MessageEnum;
    /**
     * The PayPal internal ID. Used for correlation purposes.
     * @type {string}
     * @memberof Error503
     */
    'debug_id'?: string;
    /**
     * An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).
     * @type {Array<ErrorLinkDescription>}
     * @memberof Error503
     */
    'links'?: Array<ErrorLinkDescription>;
}

type Error503NameEnum = 'SERVICE_UNAVAILABLE'
type Error503MessageEnum = 'Service Unavailable.'


