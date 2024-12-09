// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary This sample demonstrates how to list Deidentification jobs and iterate over them.
 */

const createClient = require("@azure-rest/azure-health-deidentification").default,
  { isUnexpected, paginate } = require("@azure-rest/azure-health-deidentification");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

async function main() {
  const credential = new DefaultAzureCredential();
  const serviceEndpoint =
    process.env["DEID_SERVICE_ENDPOINT"] || "https://example.api.cac001.deid.azure.com";
  const client = createClient(serviceEndpoint, credential);

  const response = await client.path("/jobs").get();

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  const items = [];
  const iter = paginate(client, response);
  for await (const item of iter) {
    items.push(item);
  }

  console.log(items); // items will contain all the jobs
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };
