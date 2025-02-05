/* tslint:disable */
/* eslint-disable */
/*
Payments

Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href=\"/docs/api/orders/v2/\">Orders API</a>. For more information, see the <a href=\"/docs/checkout/\">PayPal Checkout Overview</a>.

The version of the OpenAPI document: 2.5


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Capture2 } from '../models';
// @ts-ignore
import { CapturesRefundPayment401Response } from '../models';
// @ts-ignore
import { CapturesRefundPayment403Response } from '../models';
// @ts-ignore
import { CapturesRefundPayment404Response } from '../models';
// @ts-ignore
import { CapturesRefundPayment409Response } from '../models';
// @ts-ignore
import { CapturesRefundPayment422Response } from '../models';
// @ts-ignore
import { CapturesRefundPaymentResponse } from '../models';
// @ts-ignore
import { CapturesShowDetails404Response } from '../models';
// @ts-ignore
import { CapturesShowDetailsResponse } from '../models';
// @ts-ignore
import { Error401 } from '../models';
// @ts-ignore
import { ErrorDefault } from '../models';
// @ts-ignore
import { Money } from '../models';
// @ts-ignore
import { PaymentInstruction2 } from '../models';
// @ts-ignore
import { Refund } from '../models';
// @ts-ignore
import { RefundRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CapturesApi - axios parameter creator
 * @export
 */
export const CapturesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.
         * @summary Refund captured payment
         * @param {string} captureId The PayPal-generated ID for the captured payment to refund.
         * @param {string} [payPalRequestId] The server stores keys for 45 days.
         * @param {string} [prefer] The preferred server response upon successful completion of the request. Value is:&lt;ul&gt;&lt;li&gt;&lt;code&gt;return&#x3D;minimal&lt;/code&gt;. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the &lt;code&gt;id&lt;/code&gt;, &lt;code&gt;status&lt;/code&gt; and HATEOAS links.&lt;/li&gt;&lt;li&gt;&lt;code&gt;return&#x3D;representation&lt;/code&gt;. The server returns a complete resource representation, including the current state of the resource.&lt;/li&gt;&lt;/ul&gt;
         * @param {string} [payPalAuthAssertion] An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).&lt;blockquote&gt;&lt;strong&gt;Note:&lt;/strong&gt;For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.&lt;/blockquote&gt;
         * @param {RefundRequest} [refundRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refundPayment: async (captureId: string, payPalRequestId?: string, prefer?: string, payPalAuthAssertion?: string, refundRequest?: RefundRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'captureId' is not null or undefined
            assertParamExists('refundPayment', 'captureId', captureId)
            const localVarPath = `/v2/payments/captures/{capture_id}/refund`
                .replace(`{${"capture_id"}}`, encodeURIComponent(String(captureId !== undefined ? captureId : `-capture_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Oauth2", ["https://uri.paypal.com/services/payments/refund"], configuration)
            if (payPalRequestId != null) {
                localVarHeaderParameter['PayPal-Request-Id'] = String(payPalRequestId);
            }

            if (prefer != null) {
                localVarHeaderParameter['Prefer'] = String(prefer);
            }

            if (payPalAuthAssertion != null) {
                localVarHeaderParameter['PayPal-Auth-Assertion'] = String(payPalAuthAssertion);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: refundRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/payments/captures/{capture_id}/refund',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(refundRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Shows details for a captured payment, by ID.
         * @summary Show captured payment details
         * @param {string} captureId The PayPal-generated ID for the captured payment to refund.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDetails: async (captureId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'captureId' is not null or undefined
            assertParamExists('showDetails', 'captureId', captureId)
            const localVarPath = `/v2/payments/captures/{capture_id}`
                .replace(`{${"capture_id"}}`, encodeURIComponent(String(captureId !== undefined ? captureId : `-capture_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "Oauth2", ["https://uri.paypal.com/services/payments/payment/authcapture"], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v2/payments/captures/{capture_id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CapturesApi - functional programming interface
 * @export
 */
export const CapturesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CapturesApiAxiosParamCreator(configuration)
    return {
        /**
         * Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.
         * @summary Refund captured payment
         * @param {CapturesApiRefundPaymentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async refundPayment(requestParameters: CapturesApiRefundPaymentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Refund>> {
            const refundRequest: RefundRequest = {
                amount: requestParameters.amount,
                custom_id: requestParameters.custom_id,
                invoice_id: requestParameters.invoice_id,
                note_to_payer: requestParameters.note_to_payer,
                payment_instruction: requestParameters.payment_instruction
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.refundPayment(requestParameters.captureId, requestParameters.payPalRequestId, requestParameters.prefer, requestParameters.payPalAuthAssertion, refundRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Shows details for a captured payment, by ID.
         * @summary Show captured payment details
         * @param {CapturesApiShowDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showDetails(requestParameters: CapturesApiShowDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Capture2>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showDetails(requestParameters.captureId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CapturesApi - factory interface
 * @export
 */
export const CapturesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CapturesApiFp(configuration)
    return {
        /**
         * Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.
         * @summary Refund captured payment
         * @param {CapturesApiRefundPaymentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        refundPayment(requestParameters: CapturesApiRefundPaymentRequest, options?: AxiosRequestConfig): AxiosPromise<Refund> {
            return localVarFp.refundPayment(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Shows details for a captured payment, by ID.
         * @summary Show captured payment details
         * @param {CapturesApiShowDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showDetails(requestParameters: CapturesApiShowDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<Capture2> {
            return localVarFp.showDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for refundPayment operation in CapturesApi.
 * @export
 * @interface CapturesApiRefundPaymentRequest
 */
export type CapturesApiRefundPaymentRequest = {
    
    /**
    * The PayPal-generated ID for the captured payment to refund.
    * @type {string}
    * @memberof CapturesApiRefundPayment
    */
    readonly captureId: string
    
    /**
    * The server stores keys for 45 days.
    * @type {string}
    * @memberof CapturesApiRefundPayment
    */
    readonly payPalRequestId?: string
    
    /**
    * The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>
    * @type {string}
    * @memberof CapturesApiRefundPayment
    */
    readonly prefer?: string
    
    /**
    * An API-caller-provided JSON Web Token (JWT) assertion that identifies the merchant. For details, see [PayPal-Auth-Assertion](/docs/api/reference/api-requests/#paypal-auth-assertion).<blockquote><strong>Note:</strong>For three party transactions in which a partner is managing the API calls on behalf of a merchant, the partner must identify the merchant using either a PayPal-Auth-Assertion header or an access token with target_subject.</blockquote>
    * @type {string}
    * @memberof CapturesApiRefundPayment
    */
    readonly payPalAuthAssertion?: string
    
} & RefundRequest

/**
 * Request parameters for showDetails operation in CapturesApi.
 * @export
 * @interface CapturesApiShowDetailsRequest
 */
export type CapturesApiShowDetailsRequest = {
    
    /**
    * The PayPal-generated ID for the captured payment to refund.
    * @type {string}
    * @memberof CapturesApiShowDetails
    */
    readonly captureId: string
    
}

/**
 * CapturesApiGenerated - object-oriented interface
 * @export
 * @class CapturesApiGenerated
 * @extends {BaseAPI}
 */
export class CapturesApiGenerated extends BaseAPI {
    /**
     * Refunds a captured payment, by ID. For a full refund, include an empty payload in the JSON request body. For a partial refund, include an <code>amount</code> object in the JSON request body.
     * @summary Refund captured payment
     * @param {CapturesApiRefundPaymentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CapturesApiGenerated
     */
    public refundPayment(requestParameters: CapturesApiRefundPaymentRequest, options?: AxiosRequestConfig) {
        return CapturesApiFp(this.configuration).refundPayment(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Shows details for a captured payment, by ID.
     * @summary Show captured payment details
     * @param {CapturesApiShowDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CapturesApiGenerated
     */
    public showDetails(requestParameters: CapturesApiShowDetailsRequest, options?: AxiosRequestConfig) {
        return CapturesApiFp(this.configuration).showDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
