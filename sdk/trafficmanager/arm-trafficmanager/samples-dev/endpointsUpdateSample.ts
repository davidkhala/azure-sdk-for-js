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
  Endpoint,
  TrafficManagerManagementClient
} from "@azure/arm-trafficmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update a Traffic Manager endpoint.
 *
 * @summary Update a Traffic Manager endpoint.
 * x-ms-original-file: specification/trafficmanager/resource-manager/Microsoft.Network/stable/2018-08-01/examples/Endpoint-PATCH-External-Target.json
 */
async function endpointPatchExternalTarget() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "azuresdkfornetautoresttrafficmanager1421";
  const profileName = "azsmnet6386";
  const endpointType = "ExternalEndpoints";
  const endpointName = "azsmnet7187";
  const parameters: Endpoint = {
    name: "azsmnet7187",
    type: "Microsoft.Network/trafficManagerProfiles/externalEndpoints",
    id:
      "/subscriptions/{subscription-id}/resourceGroups/azuresdkfornetautoresttrafficmanager1421/providers/Microsoft.Network/trafficManagerProfiles/azsmnet6386/externalEndpoints/azsmnet7187",
    target: "another.foobar.contoso.com"
  };
  const credential = new DefaultAzureCredential();
  const client = new TrafficManagerManagementClient(credential, subscriptionId);
  const result = await client.endpoints.update(
    resourceGroupName,
    profileName,
    endpointType,
    endpointName,
    parameters
  );
  console.log(result);
}

endpointPatchExternalTarget().catch(console.error);
