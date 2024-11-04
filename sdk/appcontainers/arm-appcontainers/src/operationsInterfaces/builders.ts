/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  BuilderResource,
  BuildersListBySubscriptionOptionalParams,
  BuildersListByResourceGroupOptionalParams,
  BuildersGetOptionalParams,
  BuildersGetResponse,
  BuildersCreateOrUpdateOptionalParams,
  BuildersCreateOrUpdateResponse,
  BuilderResourceUpdate,
  BuildersUpdateOptionalParams,
  BuildersUpdateResponse,
  BuildersDeleteOptionalParams,
  BuildersDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Builders. */
export interface Builders {
  /**
   * List BuilderResource resources by subscription ID
   * @param options The options parameters.
   */
  listBySubscription(
    options?: BuildersListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<BuilderResource>;
  /**
   * List BuilderResource resources by resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: BuildersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<BuilderResource>;
  /**
   * Get a BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    builderName: string,
    options?: BuildersGetOptionalParams,
  ): Promise<BuildersGetResponse>;
  /**
   * Create or update a BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param builderEnvelope Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    builderName: string,
    builderEnvelope: BuilderResource,
    options?: BuildersCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BuildersCreateOrUpdateResponse>,
      BuildersCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param builderEnvelope Resource create parameters.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    builderName: string,
    builderEnvelope: BuilderResource,
    options?: BuildersCreateOrUpdateOptionalParams,
  ): Promise<BuildersCreateOrUpdateResponse>;
  /**
   * Update a BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param builderEnvelope The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    builderName: string,
    builderEnvelope: BuilderResourceUpdate,
    options?: BuildersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BuildersUpdateResponse>,
      BuildersUpdateResponse
    >
  >;
  /**
   * Update a BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param builderEnvelope The resource properties to be updated.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    builderName: string,
    builderEnvelope: BuilderResourceUpdate,
    options?: BuildersUpdateOptionalParams,
  ): Promise<BuildersUpdateResponse>;
  /**
   * Delete a BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    builderName: string,
    options?: BuildersDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<BuildersDeleteResponse>,
      BuildersDeleteResponse
    >
  >;
  /**
   * Delete a BuilderResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param builderName The name of the builder.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    builderName: string,
    options?: BuildersDeleteOptionalParams,
  ): Promise<BuildersDeleteResponse>;
}
