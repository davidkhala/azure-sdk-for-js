/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ApplicationPackageOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClient } from "../batchManagementClient";
import {
  ApplicationPackage,
  ApplicationPackageListNextOptionalParams,
  ApplicationPackageListOptionalParams,
  ApplicationPackageListResponse,
  ActivateApplicationPackageParameters,
  ApplicationPackageActivateOptionalParams,
  ApplicationPackageActivateResponse,
  ApplicationPackageCreateOptionalParams,
  ApplicationPackageCreateResponse,
  ApplicationPackageDeleteOptionalParams,
  ApplicationPackageGetOptionalParams,
  ApplicationPackageGetResponse,
  ApplicationPackageListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplicationPackageOperations operations. */
export class ApplicationPackageOperationsImpl
  implements ApplicationPackageOperations
{
  private readonly client: BatchManagementClient;

  /**
   * Initialize a new instance of the class ApplicationPackageOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BatchManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the application packages in the specified application.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationPackageListOptionalParams,
  ): PagedAsyncIterableIterator<ApplicationPackage> {
    const iter = this.listPagingAll(
      resourceGroupName,
      accountName,
      applicationName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          accountName,
          applicationName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationPackageListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApplicationPackage[]> {
    let result: ApplicationPackageListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        accountName,
        applicationName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        accountName,
        applicationName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationPackageListOptionalParams,
  ): AsyncIterableIterator<ApplicationPackage> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      applicationName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Activates the specified application package. This should be done after the `ApplicationPackage` was
   * created and uploaded. This needs to be done before an `ApplicationPackage` can be used on Pools or
   * Tasks.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param parameters The parameters for the request.
   * @param options The options parameters.
   */
  activate(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    parameters: ActivateApplicationPackageParameters,
    options?: ApplicationPackageActivateOptionalParams,
  ): Promise<ApplicationPackageActivateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        applicationName,
        versionName,
        parameters,
        options,
      },
      activateOperationSpec,
    );
  }

  /**
   * Creates an application package record. The record contains a storageUrl where the package should be
   * uploaded to.  Once it is uploaded the `ApplicationPackage` needs to be activated using
   * `ApplicationPackageActive` before it can be used. If the auto storage account was configured to use
   * storage keys, the URL returned will contain a SAS.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    options?: ApplicationPackageCreateOptionalParams,
  ): Promise<ApplicationPackageCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, applicationName, versionName, options },
      createOperationSpec,
    );
  }

  /**
   * Deletes an application package record and its associated binary file.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    options?: ApplicationPackageDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, applicationName, versionName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets information about the specified application package.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param versionName The version of the application.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    versionName: string,
    options?: ApplicationPackageGetOptionalParams,
  ): Promise<ApplicationPackageGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, applicationName, versionName, options },
      getOperationSpec,
    );
  }

  /**
   * Lists all of the application packages in the specified application.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    options?: ApplicationPackageListOptionalParams,
  ): Promise<ApplicationPackageListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, applicationName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param applicationName The name of the application. This must be unique within the account.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    accountName: string,
    applicationName: string,
    nextLink: string,
    options?: ApplicationPackageListNextOptionalParams,
  ): Promise<ApplicationPackageListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, applicationName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const activateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}/activate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationPackage,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationPackage,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions/{versionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationPackage,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.applicationName,
    Parameters.versionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListApplicationPackagesResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.maxresults],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListApplicationPackagesResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.nextLink,
    Parameters.applicationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
