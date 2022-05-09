/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { VolumeContainers } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorSimple8000SeriesManagementClient } from "../storSimple8000SeriesManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  VolumeContainer,
  VolumeContainersListByDeviceOptionalParams,
  Metrics,
  VolumeContainersListMetricsOptionalParams,
  MetricDefinition,
  VolumeContainersListMetricDefinitionOptionalParams,
  VolumeContainersListByDeviceResponse,
  VolumeContainersGetOptionalParams,
  VolumeContainersGetResponse,
  VolumeContainersCreateOrUpdateOptionalParams,
  VolumeContainersCreateOrUpdateResponse,
  VolumeContainersDeleteOptionalParams,
  VolumeContainersListMetricsResponse,
  VolumeContainersListMetricDefinitionResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing VolumeContainers operations. */
export class VolumeContainersImpl implements VolumeContainers {
  private readonly client: StorSimple8000SeriesManagementClient;

  /**
   * Initialize a new instance of the class VolumeContainers class.
   * @param client Reference to the service client
   */
  constructor(client: StorSimple8000SeriesManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the volume containers in a device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListByDeviceOptionalParams
  ): PagedAsyncIterableIterator<VolumeContainer> {
    const iter = this.listByDevicePagingAll(
      deviceName,
      resourceGroupName,
      managerName,
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
        return this.listByDevicePagingPage(
          deviceName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listByDevicePagingPage(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListByDeviceOptionalParams
  ): AsyncIterableIterator<VolumeContainer[]> {
    let result = await this._listByDevice(
      deviceName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listByDevicePagingAll(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListByDeviceOptionalParams
  ): AsyncIterableIterator<VolumeContainer> {
    for await (const page of this.listByDevicePagingPage(
      deviceName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the metrics for the specified volume container.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param filter OData Filter options
   * @param options The options parameters.
   */
  public listMetrics(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    filter: string,
    options?: VolumeContainersListMetricsOptionalParams
  ): PagedAsyncIterableIterator<Metrics> {
    const iter = this.listMetricsPagingAll(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
      filter,
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
        return this.listMetricsPagingPage(
          deviceName,
          volumeContainerName,
          resourceGroupName,
          managerName,
          filter,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    filter: string,
    options?: VolumeContainersListMetricsOptionalParams
  ): AsyncIterableIterator<Metrics[]> {
    let result = await this._listMetrics(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    filter: string,
    options?: VolumeContainersListMetricsOptionalParams
  ): AsyncIterableIterator<Metrics> {
    for await (const page of this.listMetricsPagingPage(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the metric definitions for the specified volume container.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  public listMetricDefinition(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListMetricDefinitionOptionalParams
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionPagingAll(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
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
        return this.listMetricDefinitionPagingPage(
          deviceName,
          volumeContainerName,
          resourceGroupName,
          managerName,
          options
        );
      }
    };
  }

  private async *listMetricDefinitionPagingPage(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListMetricDefinitionOptionalParams
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result = await this._listMetricDefinition(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionPagingAll(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListMetricDefinitionOptionalParams
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionPagingPage(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the volume containers in a device.
   * @param deviceName The device name
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listByDevice(
    deviceName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListByDeviceOptionalParams
  ): Promise<VolumeContainersListByDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceName, resourceGroupName, managerName, options },
      listByDeviceOperationSpec
    );
  }

  /**
   * Gets the properties of the specified volume container name.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  get(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersGetOptionalParams
  ): Promise<VolumeContainersGetResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The volume container to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: VolumeContainer,
    options?: VolumeContainersCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VolumeContainersCreateOrUpdateResponse>,
      VolumeContainersCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<VolumeContainersCreateOrUpdateResponse> => {
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
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param parameters The volume container to be added or updated.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    parameters: VolumeContainer,
    options?: VolumeContainersCreateOrUpdateOptionalParams
  ): Promise<VolumeContainersCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDelete(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
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
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        options
      },
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
   * Deletes the volume container.
   * @param deviceName The device name
   * @param volumeContainerName The name of the volume container.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      deviceName,
      volumeContainerName,
      resourceGroupName,
      managerName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the metrics for the specified volume container.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param filter OData Filter options
   * @param options The options parameters.
   */
  private _listMetrics(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    filter: string,
    options?: VolumeContainersListMetricsOptionalParams
  ): Promise<VolumeContainersListMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        filter,
        options
      },
      listMetricsOperationSpec
    );
  }

  /**
   * Gets the metric definitions for the specified volume container.
   * @param deviceName The device name
   * @param volumeContainerName The volume container name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The options parameters.
   */
  private _listMetricDefinition(
    deviceName: string,
    volumeContainerName: string,
    resourceGroupName: string,
    managerName: string,
    options?: VolumeContainersListMetricDefinitionOptionalParams
  ): Promise<VolumeContainersListMetricDefinitionResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        volumeContainerName,
        resourceGroupName,
        managerName,
        options
      },
      listMetricDefinitionOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDeviceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeContainerList
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeContainer
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.volumeContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.VolumeContainer
    },
    201: {
      bodyMapper: Mappers.VolumeContainer
    },
    202: {
      bodyMapper: Mappers.VolumeContainer
    },
    204: {
      bodyMapper: Mappers.VolumeContainer
    }
  },
  requestBody: Parameters.parameters20,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.volumeContainerName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {} },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.volumeContainerName
  ],
  serializer
};
const listMetricsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricList
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.volumeContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/volumeContainers/{volumeContainerName}/metricsDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionList
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName,
    Parameters.deviceName,
    Parameters.volumeContainerName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
