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
  KeyCreateParameters as KeyCreateParametersMapper,
  KeyImportParameters as KeyImportParametersMapper,
  KeyUpdateParameters as KeyUpdateParametersMapper,
  KeyRestoreParameters as KeyRestoreParametersMapper,
  KeyOperationsParameters as KeyOperationsParametersMapper,
  KeySignParameters as KeySignParametersMapper,
  KeyVerifyParameters as KeyVerifyParametersMapper,
  KeyReleaseParameters as KeyReleaseParametersMapper,
  KeyRotationPolicy as KeyRotationPolicyMapper,
  GetRandomBytesRequest as GetRandomBytesRequestMapper
} from "../models/mappers.js";

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

export const kty: OperationParameter = {
  parameterPath: "kty",
  mapper: KeyCreateParametersMapper
};

export const keySize: OperationParameter = {
  parameterPath: ["options", "keySize"],
  mapper: KeyCreateParametersMapper
};

export const publicExponent: OperationParameter = {
  parameterPath: ["options", "publicExponent"],
  mapper: KeyCreateParametersMapper
};

export const keyOps: OperationParameter = {
  parameterPath: ["options", "keyOps"],
  mapper: KeyCreateParametersMapper
};

export const keyAttributes: OperationParameter = {
  parameterPath: ["options", "keyAttributes"],
  mapper: KeyCreateParametersMapper
};

export const tags: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: KeyCreateParametersMapper
};

export const curve: OperationParameter = {
  parameterPath: ["options", "curve"],
  mapper: KeyCreateParametersMapper
};

export const releasePolicy: OperationParameter = {
  parameterPath: ["options", "releasePolicy"],
  mapper: KeyCreateParametersMapper
};

export const vaultBaseUrl: OperationURLParameter = {
  parameterPath: "vaultBaseUrl",
  mapper: {
    serializedName: "vaultBaseUrl",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const keyName: OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[0-9a-zA-Z-]+$")
    },
    serializedName: "key-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    serializedName: "api-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const hsm: OperationParameter = {
  parameterPath: ["options", "hsm"],
  mapper: KeyImportParametersMapper
};

export const key: OperationParameter = {
  parameterPath: "key",
  mapper: KeyImportParametersMapper
};

export const keyAttributes1: OperationParameter = {
  parameterPath: ["options", "keyAttributes"],
  mapper: KeyImportParametersMapper
};

export const tags1: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: KeyImportParametersMapper
};

export const releasePolicy1: OperationParameter = {
  parameterPath: ["options", "releasePolicy"],
  mapper: KeyImportParametersMapper
};

export const keyName1: OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    serializedName: "key-name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const keyOps1: OperationParameter = {
  parameterPath: ["options", "keyOps"],
  mapper: KeyUpdateParametersMapper
};

export const keyAttributes2: OperationParameter = {
  parameterPath: ["options", "keyAttributes"],
  mapper: KeyUpdateParametersMapper
};

export const tags2: OperationParameter = {
  parameterPath: ["options", "tags"],
  mapper: KeyUpdateParametersMapper
};

export const releasePolicy2: OperationParameter = {
  parameterPath: ["options", "releasePolicy"],
  mapper: KeyUpdateParametersMapper
};

export const keyVersion: OperationURLParameter = {
  parameterPath: "keyVersion",
  mapper: {
    serializedName: "key-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const maxresults: OperationQueryParameter = {
  parameterPath: ["options", "maxresults"],
  mapper: {
    constraints: {
      InclusiveMaximum: 25,
      InclusiveMinimum: 1
    },
    serializedName: "maxresults",
    type: {
      name: "Number"
    }
  }
};

export const keyBundleBackup: OperationParameter = {
  parameterPath: "keyBundleBackup",
  mapper: KeyRestoreParametersMapper
};

export const algorithm: OperationParameter = {
  parameterPath: "algorithm",
  mapper: KeyOperationsParametersMapper
};

export const value: OperationParameter = {
  parameterPath: "value",
  mapper: KeyOperationsParametersMapper
};

export const iv: OperationParameter = {
  parameterPath: ["options", "iv"],
  mapper: KeyOperationsParametersMapper
};

export const additionalAuthenticatedData: OperationParameter = {
  parameterPath: ["options", "additionalAuthenticatedData"],
  mapper: KeyOperationsParametersMapper
};

export const authenticationTag: OperationParameter = {
  parameterPath: ["options", "authenticationTag"],
  mapper: KeyOperationsParametersMapper
};

export const algorithm1: OperationParameter = {
  parameterPath: "algorithm",
  mapper: KeySignParametersMapper
};

export const value1: OperationParameter = {
  parameterPath: "value",
  mapper: KeySignParametersMapper
};

export const algorithm2: OperationParameter = {
  parameterPath: "algorithm",
  mapper: KeyVerifyParametersMapper
};

export const digest: OperationParameter = {
  parameterPath: "digest",
  mapper: KeyVerifyParametersMapper
};

export const signature: OperationParameter = {
  parameterPath: "signature",
  mapper: KeyVerifyParametersMapper
};

export const targetAttestationToken: OperationParameter = {
  parameterPath: "targetAttestationToken",
  mapper: KeyReleaseParametersMapper
};

export const nonce: OperationParameter = {
  parameterPath: ["options", "nonce"],
  mapper: KeyReleaseParametersMapper
};

export const enc: OperationParameter = {
  parameterPath: ["options", "enc"],
  mapper: KeyReleaseParametersMapper
};

export const keyRotationPolicy: OperationParameter = {
  parameterPath: "keyRotationPolicy",
  mapper: KeyRotationPolicyMapper
};

export const count: OperationParameter = {
  parameterPath: "count",
  mapper: GetRandomBytesRequestMapper
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
