/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AstroManagementClient } from "@azure/arm-astro";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List OrganizationResource resources by subscription ID
 *
 * @summary List OrganizationResource resources by subscription ID
 * x-ms-original-file: specification/liftrastronomer/resource-manager/Astronomer.Astro/stable/2023-08-01/examples/Organizations_ListBySubscription_MaximumSet_Gen.json
 */
async function organizationsListBySubscriptionGeneratedByMaximumSetRule() {
  const subscriptionId =
    process.env["ASTRO_SUBSCRIPTION_ID"] ||
    "43454B17-172A-40FE-80FA-549EA23D12B3";
  const credential = new DefaultAzureCredential();
  const client = new AstroManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.organizations.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  organizationsListBySubscriptionGeneratedByMaximumSetRule();
}

main().catch(console.error);
