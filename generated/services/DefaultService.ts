/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SomeGroupingType } from '../models/SomeGroupingType';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @returns SomeGroupingType OK
     * @throws ApiError
     */
    public static postFoo({
        group,
        requestBody,
        count,
    }: {
        /**
         * group name
         */
        group: string,
        requestBody: {
            foo?: string;
        },
        /**
         * count
         */
        count?: number,
    }): CancelablePromise<SomeGroupingType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/foo',
            query: {
                'group': group,
                'count': count,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
