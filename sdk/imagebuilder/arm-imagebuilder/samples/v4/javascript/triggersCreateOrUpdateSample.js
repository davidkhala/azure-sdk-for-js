/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ImageBuilderClient } = require("@azure/arm-imagebuilder");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a trigger for the specified virtual machine image template
 *
 * @summary Create or update a trigger for the specified virtual machine image template
 * x-ms-original-file: specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/stable/2023-07-01/examples/CreateSourceImageTrigger.json
 */
async function createOrUpdateASourceImageTypeTrigger() {
  const subscriptionId = process.env["IMAGEBUILDER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["IMAGEBUILDER_RESOURCE_GROUP"] || "myResourceGroup";
  const imageTemplateName = "myImageTemplate";
  const triggerName = "source";
  const parameters = { kind: "SourceImage" };
  const credential = new DefaultAzureCredential();
  const client = new ImageBuilderClient(credential, subscriptionId);
  const result = await client.triggers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    imageTemplateName,
    triggerName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createOrUpdateASourceImageTypeTrigger();
}

main().catch(console.error);
