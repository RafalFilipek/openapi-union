/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SomeGroupingType } from '../models/SomeGroupingType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param requestBody
     * @returns SomeGroupingType OK
     * @throws ApiError
     */
    public static postFoo(
        requestBody: {
            foo?: string;
        },
    ): CancelablePromise<SomeGroupingType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/foo',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
