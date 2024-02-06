/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets an extended database's blob auditing policy.
 *
 * @summary Gets an extended database's blob auditing policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ExtendedDatabaseBlobAuditingGet.json
 */
async function getAnExtendedDatabaseBlobAuditingPolicy() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "blobauditingtest-6852";
  const serverName = "blobauditingtest-2080";
  const databaseName = "testdb";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.extendedDatabaseBlobAuditingPolicies.get(
    resourceGroupName,
    serverName,
    databaseName,
  );
  console.log(result);
}

async function main() {
  getAnExtendedDatabaseBlobAuditingPolicy();
}

main().catch(console.error);
