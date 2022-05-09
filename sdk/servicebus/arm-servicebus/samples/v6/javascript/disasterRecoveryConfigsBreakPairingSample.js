/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ServiceBusManagementClient } = require("@azure/arm-servicebus");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces
 *
 * @summary This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/stable/2021-11-01/examples/disasterRecoveryConfigs/SBEHAliasBreakPairing.json
 */
async function sbehAliasBreakPairing() {
  const subscriptionId = "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName = "ardsouzatestRG";
  const namespaceName = "sdk-Namespace-8860";
  const alias = "sdk-DisasterRecovery-3814";
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const result = await client.disasterRecoveryConfigs.breakPairing(
    resourceGroupName,
    namespaceName,
    alias
  );
  console.log(result);
}

sbehAliasBreakPairing().catch(console.error);
