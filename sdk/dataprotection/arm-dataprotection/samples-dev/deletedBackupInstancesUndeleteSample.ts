/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataProtectionClient } from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to
 *
 * @summary
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2023-11-01/examples/DeletedBackupInstanceOperations/UndeleteDeletedBackupInstance.json
 */
async function undeleteDeletedBackupInstance() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "testrg";
  const vaultName = "testvault";
  const backupInstanceName = "testbi";
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.deletedBackupInstances.beginUndeleteAndWait(
    resourceGroupName,
    vaultName,
    backupInstanceName
  );
  console.log(result);
}

async function main() {
  undeleteDeletedBackupInstance();
}

main().catch(console.error);
