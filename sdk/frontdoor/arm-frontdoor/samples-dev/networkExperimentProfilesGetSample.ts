/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FrontDoorManagementClient } from "@azure/arm-frontdoor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets an NetworkExperiment Profile by ProfileName
 *
 * @summary Gets an NetworkExperiment Profile by ProfileName
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2019-11-01/examples/NetworkExperimentGetProfile.json
 */
async function getsAnNetworkExperimentProfileByProfileId() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["FRONTDOOR_RESOURCE_GROUP"] || "MyResourceGroup";
  const profileName = "MyProfile";
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.networkExperimentProfiles.get(
    resourceGroupName,
    profileName,
  );
  console.log(result);
}

async function main() {
  getsAnNetworkExperimentProfileByProfileId();
}

main().catch(console.error);
