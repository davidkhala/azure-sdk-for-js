/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CommunicationServiceManagementClient } = require("@azure/arm-communication");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a SuppressionListAddress.
 *
 * @summary Create or update a SuppressionListAddress.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/preview/2023-06-01-preview/examples/suppressionLists/createOrUpdateAddress.json
 */
async function createOrUpdateSuppressionListAddressResource() {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] || "11112222-3333-4444-5555-666677778888";
  const resourceGroupName = process.env["COMMUNICATION_RESOURCE_GROUP"] || "contosoResourceGroup";
  const emailServiceName = "contosoEmailService";
  const domainName = "contoso.com";
  const suppressionListName = "aaaa1111-bbbb-2222-3333-aaaa11112222";
  const addressId = "11112222-3333-4444-5555-aaaabbbbcccc";
  const parameters = {
    email: "newuser1@fabrikam.com",
    firstName: "updatedFirstName",
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(credential, subscriptionId);
  const result = await client.suppressionListAddresses.createOrUpdate(
    resourceGroupName,
    emailServiceName,
    domainName,
    suppressionListName,
    addressId,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateSuppressionListAddressResource();
}

main().catch(console.error);
