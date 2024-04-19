/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Usage, ManagedEnvironmentUsagesListOptionalParams } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedEnvironmentUsages. */
export interface ManagedEnvironmentUsages {
  /**
   * Gets the current usage information as well as the limits for environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Environment.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    environmentName: string,
    options?: ManagedEnvironmentUsagesListOptionalParams,
  ): PagedAsyncIterableIterator<Usage>;
}
