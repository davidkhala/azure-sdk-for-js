/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { RedisManagementClient } = require("@azure/arm-rediscache");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 *
 * @summary Gets the detailed information about a linked server of a redis cache (requires Premium SKU).
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2024-03-01/examples/RedisCacheLinkedServer_Get.json
 */
async function linkedServerGet() {
  const subscriptionId = process.env["REDIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["REDIS_RESOURCE_GROUP"] || "rg1";
  const name = "cache1";
  const linkedServerName = "cache2";
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.linkedServer.get(resourceGroupName, name, linkedServerName);
  console.log(result);
}

async function main() {
  linkedServerGet();
}

main().catch(console.error);
