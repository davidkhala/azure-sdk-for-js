/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureQuotaExtensionAPI } = require("@azure/arm-quota");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates a new GroupQuota for the name passed. A RequestId will be returned by the Service. The status can be polled periodically. The status Async polling is using standards defined at - https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/async-api-reference.md#asynchronous-operations. Use the OperationsStatus URI provided in Azure-AsyncOperation header, the duration will be specified in retry-after header. Once the operation gets to terminal state - Succeeded | Failed, then the URI will change to Get URI and full details can be checked.
 *
 * @summary Creates a new GroupQuota for the name passed. A RequestId will be returned by the Service. The status can be polled periodically. The status Async polling is using standards defined at - https://github.com/Azure/azure-resource-manager-rpc/blob/master/v1.0/async-api-reference.md#asynchronous-operations. Use the OperationsStatus URI provided in Azure-AsyncOperation header, the duration will be specified in retry-after header. Once the operation gets to terminal state - Succeeded | Failed, then the URI will change to Get URI and full details can be checked.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2023-06-01-preview/examples/GroupQuotas/PutGroupQuotas.json
 */
async function groupQuotasPutRequestForCompute() {
  
  // REPLACE THESE VALUES
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";

  const groupQuotaPutRequestBody = {
    "properties": {
      "displayName": "gq-display-name",
      "additionalAttributes": {
        "groupId": {
          "groupingIdType": "BillingId",
          "value": "ad41a99f-9c42-4b3d-9770-e711a24d8542"
        }
      }
    }
  };
  const options = {
    groupQuotaPutRequestBody,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.groupQuotas.beginCreateOrUpdateAndWait(
    managementGroupId,
    groupQuotaName,
    options,
  );
  console.log(result);
}

async function main() {
  groupQuotasPutRequestForCompute();
}

main().catch(console.error);