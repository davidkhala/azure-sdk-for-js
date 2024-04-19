/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RestorableSqlContainerGetResult,
  RestorableSqlContainersListOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RestorableSqlContainers. */
export interface RestorableSqlContainers {
  /**
   * Show the event feed of all mutations done on all the Azure Cosmos DB SQL containers under a specific
   * database.  This helps in scenario where container was accidentally deleted.  This API requires
   * 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  list(
    location: string,
    instanceId: string,
    options?: RestorableSqlContainersListOptionalParams,
  ): PagedAsyncIterableIterator<RestorableSqlContainerGetResult>;
}
