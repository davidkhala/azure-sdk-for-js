/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RegisteredServers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftStorageSync } from "../microsoftStorageSync";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  RegisteredServer,
  RegisteredServersListByStorageSyncServiceOptionalParams,
  RegisteredServersListByStorageSyncServiceResponse,
  RegisteredServersGetOptionalParams,
  RegisteredServersGetResponse,
  RegisteredServerCreateParameters,
  RegisteredServersCreateOptionalParams,
  RegisteredServersCreateResponse,
  RegisteredServersDeleteOptionalParams,
  RegisteredServersDeleteResponse,
  TriggerRolloverRequest,
  RegisteredServersTriggerRolloverOptionalParams,
  RegisteredServersTriggerRolloverResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RegisteredServers operations. */
export class RegisteredServersImpl implements RegisteredServers {
  private readonly client: MicrosoftStorageSync;

  /**
   * Initialize a new instance of the class RegisteredServers class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftStorageSync) {
    this.client = client;
  }

  /**
   * Get a given registered server list.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  public listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: RegisteredServersListByStorageSyncServiceOptionalParams
  ): PagedAsyncIterableIterator<RegisteredServer> {
    const iter = this.listByStorageSyncServicePagingAll(
      resourceGroupName,
      storageSyncServiceName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByStorageSyncServicePagingPage(
          resourceGroupName,
          storageSyncServiceName,
          options
        );
      }
    };
  }

  private async *listByStorageSyncServicePagingPage(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: RegisteredServersListByStorageSyncServiceOptionalParams
  ): AsyncIterableIterator<RegisteredServer[]> {
    let result = await this._listByStorageSyncService(
      resourceGroupName,
      storageSyncServiceName,
      options
    );
    yield result.value || [];
  }

  private async *listByStorageSyncServicePagingAll(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: RegisteredServersListByStorageSyncServiceOptionalParams
  ): AsyncIterableIterator<RegisteredServer> {
    for await (const page of this.listByStorageSyncServicePagingPage(
      resourceGroupName,
      storageSyncServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a given registered server list.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param options The options parameters.
   */
  private _listByStorageSyncService(
    resourceGroupName: string,
    storageSyncServiceName: string,
    options?: RegisteredServersListByStorageSyncServiceOptionalParams
  ): Promise<RegisteredServersListByStorageSyncServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageSyncServiceName, options },
      listByStorageSyncServiceOperationSpec
    );
  }

  /**
   * Get a given registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    storageSyncServiceName: string,
    serverId: string,
    options?: RegisteredServersGetOptionalParams
  ): Promise<RegisteredServersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, storageSyncServiceName, serverId, options },
      getOperationSpec
    );
  }

  /**
   * Add a new registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param parameters Body of Registered Server object.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    storageSyncServiceName: string,
    serverId: string,
    parameters: RegisteredServerCreateParameters,
    options?: RegisteredServersCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegisteredServersCreateResponse>,
      RegisteredServersCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RegisteredServersCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        storageSyncServiceName,
        serverId,
        parameters,
        options
      },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Add a new registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param parameters Body of Registered Server object.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    serverId: string,
    parameters: RegisteredServerCreateParameters,
    options?: RegisteredServersCreateOptionalParams
  ): Promise<RegisteredServersCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      storageSyncServiceName,
      serverId,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the given registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    storageSyncServiceName: string,
    serverId: string,
    options?: RegisteredServersDeleteOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegisteredServersDeleteResponse>,
      RegisteredServersDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RegisteredServersDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, storageSyncServiceName, serverId, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the given registered server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId GUID identifying the on-premises server.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    serverId: string,
    options?: RegisteredServersDeleteOptionalParams
  ): Promise<RegisteredServersDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      storageSyncServiceName,
      serverId,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Triggers Server certificate rollover.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId Server Id
   * @param parameters Body of Trigger Rollover request.
   * @param options The options parameters.
   */
  async beginTriggerRollover(
    resourceGroupName: string,
    storageSyncServiceName: string,
    serverId: string,
    parameters: TriggerRolloverRequest,
    options?: RegisteredServersTriggerRolloverOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<RegisteredServersTriggerRolloverResponse>,
      RegisteredServersTriggerRolloverResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<RegisteredServersTriggerRolloverResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        storageSyncServiceName,
        serverId,
        parameters,
        options
      },
      triggerRolloverOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Triggers Server certificate rollover.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param storageSyncServiceName Name of Storage Sync Service resource.
   * @param serverId Server Id
   * @param parameters Body of Trigger Rollover request.
   * @param options The options parameters.
   */
  async beginTriggerRolloverAndWait(
    resourceGroupName: string,
    storageSyncServiceName: string,
    serverId: string,
    parameters: TriggerRolloverRequest,
    options?: RegisteredServersTriggerRolloverOptionalParams
  ): Promise<RegisteredServersTriggerRolloverResponse> {
    const poller = await this.beginTriggerRollover(
      resourceGroupName,
      storageSyncServiceName,
      serverId,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByStorageSyncServiceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegisteredServerArray,
      headersMapper: Mappers.RegisteredServersListByStorageSyncServiceHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RegisteredServer,
      headersMapper: Mappers.RegisteredServersGetHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RegisteredServer,
      headersMapper: Mappers.RegisteredServersCreateHeaders
    },
    201: {
      bodyMapper: Mappers.RegisteredServer,
      headersMapper: Mappers.RegisteredServersCreateHeaders
    },
    202: {
      bodyMapper: Mappers.RegisteredServer,
      headersMapper: Mappers.RegisteredServersCreateHeaders
    },
    204: {
      bodyMapper: Mappers.RegisteredServer,
      headersMapper: Mappers.RegisteredServersCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    },
    201: {
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    },
    202: {
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    },
    204: {
      headersMapper: Mappers.RegisteredServersDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const triggerRolloverOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorageSync/storageSyncServices/{storageSyncServiceName}/registeredServers/{serverId}/triggerRollover",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.RegisteredServersTriggerRolloverHeaders
    },
    201: {
      headersMapper: Mappers.RegisteredServersTriggerRolloverHeaders
    },
    202: {
      headersMapper: Mappers.RegisteredServersTriggerRolloverHeaders
    },
    204: {
      headersMapper: Mappers.RegisteredServersTriggerRolloverHeaders
    },
    default: {
      bodyMapper: Mappers.StorageSyncError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.storageSyncServiceName,
    Parameters.serverId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
