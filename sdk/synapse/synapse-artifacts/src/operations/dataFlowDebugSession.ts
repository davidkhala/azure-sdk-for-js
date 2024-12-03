/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { DataFlowDebugSession } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { ArtifactsClient } from "../artifactsClient.js";
import type { SimplePollerLike, OperationState } from "@azure/core-lro";
import { createHttpPoller } from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import type {
  DataFlowDebugSessionInfo,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceNextOptionalParams,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceOptionalParams,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceResponse,
  CreateDataFlowDebugSessionRequest,
  DataFlowDebugSessionCreateDataFlowDebugSessionOptionalParams,
  DataFlowDebugSessionCreateDataFlowDebugSessionResponse,
  DataFlowDebugPackage,
  DataFlowDebugSessionAddDataFlowOptionalParams,
  DataFlowDebugSessionAddDataFlowResponse,
  DeleteDataFlowDebugSessionRequest,
  DataFlowDebugSessionDeleteDataFlowDebugSessionOptionalParams,
  DataFlowDebugCommandRequest,
  DataFlowDebugSessionExecuteCommandOptionalParams,
  DataFlowDebugSessionExecuteCommandResponse,
  DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceNextResponse,
  DataFlowDebugCommandResponse,
} from "../models/index.js";
import type { RawHttpHeaders } from "@azure/core-rest-pipeline";

// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createDataFlowDebugSessionOperationSpec: coreClient.OperationSpec = {
  path: "/createDataFlowDebugSession",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse,
    },
    201: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse,
    },
    202: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse,
    },
    204: {
      bodyMapper: Mappers.CreateDataFlowDebugSessionResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.request1,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const queryDataFlowDebugSessionsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/queryDataFlowDebugSessions",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QueryDataFlowDebugSessionsResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer,
};
const addDataFlowOperationSpec: coreClient.OperationSpec = {
  path: "/addDataFlowToDebugSession",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.AddDataFlowToDebugSessionResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.request2,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteDataFlowDebugSessionOperationSpec: coreClient.OperationSpec = {
  path: "/deleteDataFlowDebugSession",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.request3,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const executeCommandOperationSpec: coreClient.OperationSpec = {
  path: "/executeDataFlowDebugCommand",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse,
    },
    201: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse,
    },
    202: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse,
    },
    204: {
      bodyMapper: Mappers.DataFlowDebugCommandResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.request4,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const queryDataFlowDebugSessionsByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.QueryDataFlowDebugSessionsResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};

/** Class containing DataFlowDebugSession operations. */
export class DataFlowDebugSessionImpl implements DataFlowDebugSession {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class DataFlowDebugSession class.
   * @param client - Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * Query all active data flow debug sessions.
   * @param options - The options parameters.
   */
  public listQueryDataFlowDebugSessionsByWorkspace(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<DataFlowDebugSessionInfo> {
    const iter = this.queryDataFlowDebugSessionsByWorkspacePagingAll(options);
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
        return this.queryDataFlowDebugSessionsByWorkspacePagingPage(options, settings);
      },
    };
  }

  private async *queryDataFlowDebugSessionsByWorkspacePagingPage(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DataFlowDebugSessionInfo[]> {
    let result: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._queryDataFlowDebugSessionsByWorkspace(options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._queryDataFlowDebugSessionsByWorkspaceNext(continuationToken, options);
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *queryDataFlowDebugSessionsByWorkspacePagingAll(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceOptionalParams,
  ): AsyncIterableIterator<DataFlowDebugSessionInfo> {
    for await (const page of this.queryDataFlowDebugSessionsByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Creates a data flow debug session.
   * @param request - Data flow debug session definition
   * @param options - The options parameters.
   */
  async beginCreateDataFlowDebugSession(
    request: CreateDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionCreateDataFlowDebugSessionOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DataFlowDebugSessionCreateDataFlowDebugSessionResponse>,
      DataFlowDebugSessionCreateDataFlowDebugSessionResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DataFlowDebugSessionCreateDataFlowDebugSessionResponse> => {
      return tracingClient.withSpan(
        "ArtifactsClient.beginCreateDataFlowDebugSession",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(
            args,
            spec,
          ) as Promise<DataFlowDebugSessionCreateDataFlowDebugSessionResponse>;
        },
      );
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { request, options },
      spec: createDataFlowDebugSessionOperationSpec,
    });
    const poller = await createHttpPoller<
      DataFlowDebugSessionCreateDataFlowDebugSessionResponse,
      OperationState<DataFlowDebugSessionCreateDataFlowDebugSessionResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a data flow debug session.
   * @param request - Data flow debug session definition
   * @param options - The options parameters.
   */
  async beginCreateDataFlowDebugSessionAndWait(
    request: CreateDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionCreateDataFlowDebugSessionOptionalParams,
  ): Promise<DataFlowDebugSessionCreateDataFlowDebugSessionResponse> {
    const poller = await this.beginCreateDataFlowDebugSession(request, options);
    return poller.pollUntilDone();
  }

  /**
   * Query all active data flow debug sessions.
   * @param options - The options parameters.
   */
  private async _queryDataFlowDebugSessionsByWorkspace(
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceOptionalParams,
  ): Promise<DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient._queryDataFlowDebugSessionsByWorkspace",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { updatedOptions },
          queryDataFlowDebugSessionsByWorkspaceOperationSpec,
        ) as Promise<DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceResponse>;
      },
    );
  }

  /**
   * Add a data flow into debug session.
   * @param request - Data flow debug session definition with debug content.
   * @param options - The options parameters.
   */
  async addDataFlow(
    request: DataFlowDebugPackage,
    options?: DataFlowDebugSessionAddDataFlowOptionalParams,
  ): Promise<DataFlowDebugSessionAddDataFlowResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.addDataFlow",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { request, updatedOptions },
          addDataFlowOperationSpec,
        ) as Promise<DataFlowDebugSessionAddDataFlowResponse>;
      },
    );
  }

  /**
   * Deletes a data flow debug session.
   * @param request - Data flow debug session definition for deletion
   * @param options - The options parameters.
   */
  async deleteDataFlowDebugSession(
    request: DeleteDataFlowDebugSessionRequest,
    options?: DataFlowDebugSessionDeleteDataFlowDebugSessionOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.deleteDataFlowDebugSession",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { request, updatedOptions },
          deleteDataFlowDebugSessionOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Execute a data flow debug command.
   * @param request - Data flow debug command definition.
   * @param options - The options parameters.
   */
  async beginExecuteCommand(
    request: DataFlowDebugCommandRequest,
    options?: DataFlowDebugSessionExecuteCommandOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DataFlowDebugSessionExecuteCommandResponse>,
      DataFlowDebugSessionExecuteCommandResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DataFlowDebugSessionExecuteCommandResponse> => {
      return tracingClient.withSpan(
        "ArtifactsClient.beginExecuteCommand",
        options ?? {},
        async () => {
          return this.client.sendOperationRequest(
            args,
            spec,
          ) as Promise<DataFlowDebugSessionExecuteCommandResponse>;
        },
      );
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<{
      flatResponse: DataFlowDebugCommandResponse;
      rawResponse: {
        statusCode: number;
        body: any;
        headers: RawHttpHeaders;
      };
    }> => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { request, options },
      spec: executeCommandOperationSpec,
    });
    const poller = await createHttpPoller<
      DataFlowDebugSessionExecuteCommandResponse,
      OperationState<DataFlowDebugSessionExecuteCommandResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Execute a data flow debug command.
   * @param request - Data flow debug command definition.
   * @param options - The options parameters.
   */
  async beginExecuteCommandAndWait(
    request: DataFlowDebugCommandRequest,
    options?: DataFlowDebugSessionExecuteCommandOptionalParams,
  ): Promise<DataFlowDebugSessionExecuteCommandResponse> {
    const poller = await this.beginExecuteCommand(request, options);
    return poller.pollUntilDone();
  }

  /**
   * QueryDataFlowDebugSessionsByWorkspaceNext
   * @param nextLink - The nextLink from the previous successful call to the
   *                 QueryDataFlowDebugSessionsByWorkspace method.
   * @param options - The options parameters.
   */
  private async _queryDataFlowDebugSessionsByWorkspaceNext(
    nextLink: string,
    options?: DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceNextOptionalParams,
  ): Promise<DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceNextResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient._queryDataFlowDebugSessionsByWorkspaceNext",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { nextLink, updatedOptions },
          queryDataFlowDebugSessionsByWorkspaceNextOperationSpec,
        ) as Promise<DataFlowDebugSessionQueryDataFlowDebugSessionsByWorkspaceNextResponse>;
      },
    );
  }
}
