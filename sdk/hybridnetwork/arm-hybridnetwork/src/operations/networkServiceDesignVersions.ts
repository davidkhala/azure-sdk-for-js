/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NetworkServiceDesignVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridNetworkManagementClient } from "../hybridNetworkManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NetworkServiceDesignVersion,
  NetworkServiceDesignVersionsListByNetworkServiceDesignGroupNextOptionalParams,
  NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams,
  NetworkServiceDesignVersionsListByNetworkServiceDesignGroupResponse,
  NetworkServiceDesignVersionsDeleteOptionalParams,
  NetworkServiceDesignVersionsDeleteResponse,
  NetworkServiceDesignVersionsCreateOrUpdateOptionalParams,
  NetworkServiceDesignVersionsCreateOrUpdateResponse,
  NetworkServiceDesignVersionsGetOptionalParams,
  NetworkServiceDesignVersionsGetResponse,
  TagsObject,
  NetworkServiceDesignVersionsUpdateOptionalParams,
  NetworkServiceDesignVersionsUpdateResponse,
  NetworkServiceDesignVersionUpdateState,
  NetworkServiceDesignVersionsUpdateStateOptionalParams,
  NetworkServiceDesignVersionsUpdateStateResponse,
  NetworkServiceDesignVersionsListByNetworkServiceDesignGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkServiceDesignVersions operations. */
export class NetworkServiceDesignVersionsImpl
  implements NetworkServiceDesignVersions {
  private readonly client: HybridNetworkManagementClient;

  /**
   * Initialize a new instance of the class NetworkServiceDesignVersions class.
   * @param client Reference to the service client
   */
  constructor(client: HybridNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets information about a list of network service design versions under a network service design
   * group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param options The options parameters.
   */
  public listByNetworkServiceDesignGroup(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkServiceDesignVersion> {
    const iter = this.listByNetworkServiceDesignGroupPagingAll(
      resourceGroupName,
      publisherName,
      networkServiceDesignGroupName,
      options
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
        return this.listByNetworkServiceDesignGroupPagingPage(
          resourceGroupName,
          publisherName,
          networkServiceDesignGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByNetworkServiceDesignGroupPagingPage(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<NetworkServiceDesignVersion[]> {
    let result: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNetworkServiceDesignGroup(
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNetworkServiceDesignGroupNext(
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNetworkServiceDesignGroupPagingAll(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams
  ): AsyncIterableIterator<NetworkServiceDesignVersion> {
    for await (const page of this.listByNetworkServiceDesignGroupPagingPage(
      resourceGroupName,
      publisherName,
      networkServiceDesignGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified network service design version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    options?: NetworkServiceDesignVersionsDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkServiceDesignVersionsDeleteResponse>,
      NetworkServiceDesignVersionsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkServiceDesignVersionsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkServiceDesignVersionsDeleteResponse,
      OperationState<NetworkServiceDesignVersionsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified network service design version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    options?: NetworkServiceDesignVersionsDeleteOptionalParams
  ): Promise<NetworkServiceDesignVersionsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      publisherName,
      networkServiceDesignGroupName,
      networkServiceDesignVersionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates or updates a network service design version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param parameters Parameters supplied to the create or update network service design version
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersion,
    options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkServiceDesignVersionsCreateOrUpdateResponse>,
      NetworkServiceDesignVersionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkServiceDesignVersionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkServiceDesignVersionsCreateOrUpdateResponse,
      OperationState<NetworkServiceDesignVersionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a network service design version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param parameters Parameters supplied to the create or update network service design version
   *                   operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersion,
    options?: NetworkServiceDesignVersionsCreateOrUpdateOptionalParams
  ): Promise<NetworkServiceDesignVersionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      publisherName,
      networkServiceDesignGroupName,
      networkServiceDesignVersionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about a network service design version.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    options?: NetworkServiceDesignVersionsGetOptionalParams
  ): Promise<NetworkServiceDesignVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Updates a network service design version resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param parameters Parameters supplied to the create or update network service design version
   *                   operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: TagsObject,
    options?: NetworkServiceDesignVersionsUpdateOptionalParams
  ): Promise<NetworkServiceDesignVersionsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * Gets information about a list of network service design versions under a network service design
   * group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param options The options parameters.
   */
  private _listByNetworkServiceDesignGroup(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    options?: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupOptionalParams
  ): Promise<
    NetworkServiceDesignVersionsListByNetworkServiceDesignGroupResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        options
      },
      listByNetworkServiceDesignGroupOperationSpec
    );
  }

  /**
   * Update network service design version state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param parameters Parameters supplied to update the state of network service design version.
   * @param options The options parameters.
   */
  async beginUpdateState(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersionUpdateState,
    options?: NetworkServiceDesignVersionsUpdateStateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkServiceDesignVersionsUpdateStateResponse>,
      NetworkServiceDesignVersionsUpdateStateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<NetworkServiceDesignVersionsUpdateStateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
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

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        networkServiceDesignVersionName,
        parameters,
        options
      },
      spec: updateStateOperationSpec
    });
    const poller = await createHttpPoller<
      NetworkServiceDesignVersionsUpdateStateResponse,
      OperationState<NetworkServiceDesignVersionsUpdateStateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update network service design version state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param networkServiceDesignVersionName The name of the network service design version. The name
   *                                        should conform to the SemVer 2.0.0 specification: https://semver.org/spec/v2.0.0.html.
   * @param parameters Parameters supplied to update the state of network service design version.
   * @param options The options parameters.
   */
  async beginUpdateStateAndWait(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    networkServiceDesignVersionName: string,
    parameters: NetworkServiceDesignVersionUpdateState,
    options?: NetworkServiceDesignVersionsUpdateStateOptionalParams
  ): Promise<NetworkServiceDesignVersionsUpdateStateResponse> {
    const poller = await this.beginUpdateState(
      resourceGroupName,
      publisherName,
      networkServiceDesignGroupName,
      networkServiceDesignVersionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByNetworkServiceDesignGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param publisherName The name of the publisher.
   * @param networkServiceDesignGroupName The name of the network service design group.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListByNetworkServiceDesignGroup method.
   * @param options The options parameters.
   */
  private _listByNetworkServiceDesignGroupNext(
    resourceGroupName: string,
    publisherName: string,
    networkServiceDesignGroupName: string,
    nextLink: string,
    options?: NetworkServiceDesignVersionsListByNetworkServiceDesignGroupNextOptionalParams
  ): Promise<
    NetworkServiceDesignVersionsListByNetworkServiceDesignGroupNextResponse
  > {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        publisherName,
        networkServiceDesignGroupName,
        nextLink,
        options
      },
      listByNetworkServiceDesignGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.NetworkServiceDesignVersionsDeleteHeaders
    },
    201: {
      headersMapper: Mappers.NetworkServiceDesignVersionsDeleteHeaders
    },
    202: {
      headersMapper: Mappers.NetworkServiceDesignVersionsDeleteHeaders
    },
    204: {
      headersMapper: Mappers.NetworkServiceDesignVersionsDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName,
    Parameters.networkServiceDesignVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignVersion
    },
    201: {
      bodyMapper: Mappers.NetworkServiceDesignVersion
    },
    202: {
      bodyMapper: Mappers.NetworkServiceDesignVersion
    },
    204: {
      bodyMapper: Mappers.NetworkServiceDesignVersion
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName,
    Parameters.networkServiceDesignVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignVersion
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName,
    Parameters.networkServiceDesignVersionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignVersion
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName,
    Parameters.networkServiceDesignVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByNetworkServiceDesignGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignVersionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridNetwork/publishers/{publisherName}/networkServiceDesignGroups/{networkServiceDesignGroupName}/networkServiceDesignVersions/{networkServiceDesignVersionName}/updateState",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignVersionUpdateState
    },
    201: {
      bodyMapper: Mappers.NetworkServiceDesignVersionUpdateState
    },
    202: {
      bodyMapper: Mappers.NetworkServiceDesignVersionUpdateState
    },
    204: {
      bodyMapper: Mappers.NetworkServiceDesignVersionUpdateState
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters11,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.networkServiceDesignGroupName,
    Parameters.networkServiceDesignVersionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByNetworkServiceDesignGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkServiceDesignVersionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.publisherName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.networkServiceDesignGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
