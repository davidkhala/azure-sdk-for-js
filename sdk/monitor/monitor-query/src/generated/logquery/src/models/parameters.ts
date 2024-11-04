/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  QueryBody as QueryBodyMapper,
  BatchRequest as BatchRequestMapper
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const workspaceId: OperationURLParameter = {
  parameterPath: "workspaceId",
  mapper: {
    serializedName: "workspaceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const query: OperationQueryParameter = {
  parameterPath: "query",
  mapper: {
    serializedName: "query",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const timespan: OperationQueryParameter = {
  parameterPath: ["options", "timespan"],
  mapper: {
    serializedName: "timespan",
    type: {
      name: "TimeSpan"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: QueryBodyMapper
};

export const prefer: OperationParameter = {
  parameterPath: ["options", "prefer"],
  mapper: {
    serializedName: "Prefer",
    type: {
      name: "String"
    }
  }
};

export const resourceId: OperationURLParameter = {
  parameterPath: "resourceId",
  mapper: {
    serializedName: "resourceId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: BatchRequestMapper
};
