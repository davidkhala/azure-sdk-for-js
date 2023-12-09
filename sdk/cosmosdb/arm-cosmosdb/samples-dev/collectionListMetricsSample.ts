/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves the metrics determined by the given filter for the given database account and collection.
 *
 * @summary Retrieves the metrics determined by the given filter for the given database account and collection.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2023-09-15-preview/examples/CosmosDBCollectionGetMetrics.json
 */
async function cosmosDbCollectionGetMetrics() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseRid = "databaseRid";
  const collectionRid = "collectionRid";
  const filter =
    "$filter=(name.value eq 'Total Requests') and timeGrain eq duration'PT5M' and startTime eq '2017-11-19T23:53:55.2780000Z' and endTime eq '2017-11-20T00:13:55.2780000Z";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.collection.listMetrics(
    resourceGroupName,
    accountName,
    databaseRid,
    collectionRid,
    filter
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  cosmosDbCollectionGetMetrics();
}

main().catch(console.error);
