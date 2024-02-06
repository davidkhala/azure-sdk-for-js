/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a Volume Snapshot.
 *
 * @summary Get a Volume Snapshot.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/stable/2023-01-01/examples/VolumeSnapshots_Get_MaximumSet_Gen.json
 */
async function volumeSnapshotsGetMaximumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const snapshotName = "snapshotname";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumeSnapshots.get(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    snapshotName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Get a Volume Snapshot.
 *
 * @summary Get a Volume Snapshot.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/stable/2023-01-01/examples/VolumeSnapshots_Get_MinimumSet_Gen.json
 */
async function volumeSnapshotsGetMinimumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const volumeGroupName = "volumegroupname";
  const snapshotName = "snapshotname";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.volumeSnapshots.get(
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    snapshotName,
  );
  console.log(result);
}

async function main() {
  volumeSnapshotsGetMaximumSetGen();
  volumeSnapshotsGetMinimumSetGen();
}

main().catch(console.error);
