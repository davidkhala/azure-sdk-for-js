/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a shared gallery image by subscription id or tenant id.
 *
 * @summary Get a shared gallery image by subscription id or tenant id.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2023-07-03/examples/sharedGalleryExamples/SharedGalleryImage_Get.json
 */
async function getASharedGalleryImage() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const location = "myLocation";
  const galleryUniqueName = "galleryUniqueName";
  const galleryImageName = "myGalleryImageName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.sharedGalleryImages.get(
    location,
    galleryUniqueName,
    galleryImageName,
  );
  console.log(result);
}

async function main() {
  getASharedGalleryImage();
}

main().catch(console.error);
