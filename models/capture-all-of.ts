/*
Payments

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href=\"/docs/api/orders/v2/\">Orders API</a>. For more information, see the <a href=\"/docs/checkout/\">PayPal Checkout Overview</a>.

The version of the OpenAPI document: 2.5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DisbursementMode } from './disbursement-mode';
import { LinkDescription } from './link-description';
import { Money } from './money';
import { NetworkTransactionReference } from './network-transaction-reference';
import { ProcessorResponse } from './processor-response';
import { SellerProtection } from './seller-protection';
import { SellerReceivableBreakdown } from './seller-receivable-breakdown';

/**
 * 
 * @export
 * @interface CaptureAllOf
 */
export interface CaptureAllOf {
    /**
     * The PayPal-generated ID for the captured payment.
     * @type {string}
     * @memberof CaptureAllOf
     */
    'id'?: string;
    /**
     * 
     * @type {Money}
     * @memberof CaptureAllOf
     */
    'amount'?: Money;
    /**
     * The API caller-provided external invoice number for this order. Appears in both the payer\'s transaction history and the emails that the payer receives.
     * @type {string}
     * @memberof CaptureAllOf
     */
    'invoice_id'?: string;
    /**
     * The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.
     * @type {string}
     * @memberof CaptureAllOf
     */
    'custom_id'?: string;
    /**
     * 
     * @type {NetworkTransactionReference}
     * @memberof CaptureAllOf
     */
    'network_transaction_reference'?: NetworkTransactionReference;
    /**
     * 
     * @type {SellerProtection}
     * @memberof CaptureAllOf
     */
    'seller_protection'?: SellerProtection;
    /**
     * Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.
     * @type {boolean}
     * @memberof CaptureAllOf
     */
    'final_capture'?: boolean;
    /**
     * 
     * @type {SellerReceivableBreakdown}
     * @memberof CaptureAllOf
     */
    'seller_receivable_breakdown'?: SellerReceivableBreakdown;
    /**
     * The funds that are held on behalf of the merchant.
     * @type {DisbursementMode}
     * @memberof CaptureAllOf
     */
    'disbursement_mode'?: DisbursementMode;
    /**
     * An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).
     * @type {Array<LinkDescription>}
     * @memberof CaptureAllOf
     */
    'links'?: Array<LinkDescription>;
    /**
     * 
     * @type {ProcessorResponse}
     * @memberof CaptureAllOf
     */
    'processor_response'?: ProcessorResponse;
}

