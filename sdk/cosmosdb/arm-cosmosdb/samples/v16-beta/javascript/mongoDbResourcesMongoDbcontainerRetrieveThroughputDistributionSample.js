/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Retrieve throughput distribution for an Azure Cosmos DB MongoDB container
 *
 * @summary Retrieve throughput distribution for an Azure Cosmos DB MongoDB container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-02-15-preview/examples/CosmosDBMongoDBCollectionRetrieveThroughputDistribution.json
 */
async function cosmosDbMongoDbcollectionRetrieveThroughputDistribution() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const collectionName = "collectionName";
  const retrieveThroughputParameters = {
    resource: { physicalPartitionIds: [{ id: "0" }, { id: "1" }] },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.mongoDBResources.beginMongoDBContainerRetrieveThroughputDistributionAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      collectionName,
      retrieveThroughputParameters,
    );
  console.log(result);
}

async function main() {
  cosmosDbMongoDbcollectionRetrieveThroughputDistribution();
}

main().catch(console.error);
