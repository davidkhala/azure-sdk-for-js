/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CheckNameAvailability,
  ServiceBusManagementClient
} from "@azure/arm-servicebus";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Check the give namespace name availability.
 *
 * @summary Check the give namespace name availability.
 * x-ms-original-file: specification/servicebus/resource-manager/Microsoft.ServiceBus/stable/2021-11-01/examples/disasterRecoveryConfigs/SBAliasCheckNameAvailability.json
 */
async function aliasNameAvailability() {
  const subscriptionId = "exampleSubscriptionId";
  const resourceGroupName = "exampleResourceGroup";
  const namespaceName = "sdk-Namespace-9080";
  const parameters: CheckNameAvailability = {
    name: "sdk-DisasterRecovery-9474"
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceBusManagementClient(credential, subscriptionId);
  const result = await client.disasterRecoveryConfigs.checkNameAvailability(
    resourceGroupName,
    namespaceName,
    parameters
  );
  console.log(result);
}

aliasNameAvailability().catch(console.error);
