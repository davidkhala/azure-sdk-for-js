// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Displays the critical results of the Radiology Insights request.
 */

const dotenv = require("dotenv");
const AzureHealthInsightsClient = require("@azure-rest/health-insights-radiologyinsights").default,
  { getLongRunningPoller, isUnexpected } = require("@azure-rest/health-insights-radiologyinsights");
const { AzureKeyCredential } = require("@azure/core-auth");

dotenv.config();

// You will need to set this environment variables or edit the following values
const apiKey = process.env["AZURE_HEALTH_INSIGHTS_KEY"] || "";
const endpoint = process.env["AZURE_HEALTH_INSIGHTS_ENDPOINT"] || "";

/**
    * Print the critical result inference
 */

function printResults(radiologyInsightsResult) {
  if (radiologyInsightsResult.status === "succeeded") {
    const results = radiologyInsightsResult.result;
    if (results !== undefined) {
      results.patientResults.forEach((patientResult) => {
        if (patientResult.inferences) {
          patientResult.inferences.forEach((inference) => {
            if (inference.kind === "criticalResult") {
              if ("result" in inference) {
                console.log("Critical Result Inference found: " + inference.result.description);
              }
            }
          });
        }
      });
    }
  } else {
    const errors = radiologyInsightsResult.errors;
    if (errors) {
      for (const error of errors) {
        console.log(error.code, ":", error.message);
      }
    }
  }
}

// Create request body for radiology insights
function createRequestBody() {

  const codingData = {
    system: "Http://hl7.org/fhir/ValueSet/cpt-all",
    code: "USPELVIS",
    display: "US PELVIS COMPLETE"
  };

  const code = {
    coding: [codingData]
  };

  const patientInfo = {
    sex: "female",
    birthDate: new Date("1959-11-11T19:00:00+00:00"),
  };

  const encounterData = {
    id: "encounterid1",
    period: {
      "start": "2021-8-28T00:00:00",
      "end": "2021-8-28T00:00:00"
    },
    class: "inpatient"
  };

  const authorData = {
    "id": "authorid1",
    "name": "authorname1"
  };

  const orderedProceduresData = {
    code: code,
    description: "US PELVIS COMPLETE"
  };

  const administrativeMetadata = {
    orderedProcedures: [orderedProceduresData],
    encounterId: "encounterid1"
  };

  const content = {
    sourceType: "inline",
    value: "CLINICAL HISTORY:   "
      + "\r\n20-year-old female presenting with abdominal pain. Surgical history significant for appendectomy."
      + "\r\n "
      + "\r\nCOMPARISON:   "
      + "\r\nRight upper quadrant sonographic performed 1 day prior."
      + "\r\n "
      + "\r\nTECHNIQUE:   "
      + "\r\nTransabdominal grayscale pelvic sonography with duplex color Doppler "
      + "\r\nand spectral waveform analysis of the ovaries."
      + "\r\n "
      + "\r\nFINDINGS:   "
      + "\r\nThe uterus is unremarkable given the transabdominal technique with "
      + "\r\nendometrial echo complex within physiologic normal limits. The "
      + "\r\novaries are symmetric in size, measuring 2.5 x 1.2 x 3.0 cm and the "
      + "\r\nleft measuring 2.8 x 1.5 x 1.9 cm.\n \r\nOn duplex imaging, Doppler signal is symmetric."
      + "\r\n "
      + "\r\nIMPRESSION:   "
      + "\r\n1. Normal pelvic sonography. Findings of testicular torsion."
      + "\r\n\nA new US pelvis within the next 6 months is recommended."
      + "\n\nThese results have been discussed with Dr. Jones at 3 PM on November 5 2020.\n "
      + "\r\n"
  };

  const patientDocumentData = {
    type: "note",
    clinicalType: "radiologyReport",
    id: "docid1",
    language: "en",
    authors: [authorData],
    specialtyType: "radiology",
    administrativeMetadata: administrativeMetadata,
    content: content,
    createdDateTime: new Date("2021-06-01T00:00:00.000"),
    orderedProceduresAsCsv: "US PELVIS COMPLETE"
  };


  const patientData = {
    id: "Samantha Jones",
    info: patientInfo,
    encounters: [encounterData],
    patientDocuments: [patientDocumentData]
  };

  const inferenceTypes = [
    "finding",
    "ageMismatch",
    "lateralityDiscrepancy",
    "sexMismatch",
    "completeOrderDiscrepancy",
    "limitedOrderDiscrepancy",
    "criticalResult",
    "criticalRecommendation",
    "followupRecommendation",
    "followupCommunication",
    "radiologyProcedure"];

  const followupRecommendationOptions = {
    includeRecommendationsWithNoSpecifiedModality: true,
    includeRecommendationsInReferences: true,
    provideFocusedSentenceEvidence: true
  };

  const findingOptions = {
    provideFocusedSentenceEvidence: true
  };

  const inferenceOptions = {
    followupRecommendationOptions: followupRecommendationOptions,
    findingOptions: findingOptions
  };

  // Create RI Configuration
  const configuration = {
    inferenceOptions: inferenceOptions,
    inferenceTypes: inferenceTypes,
    locale: "en-US",
    verbose: false,
    includeEvidence: true
  };

  // create RI Data
  const radiologyInsightsData = {
    patients: [patientData],
    configuration: configuration
  };

  const radiologyInsightsParameter = {
    body: radiologyInsightsData
  };

  return {
    body: radiologyInsightsData
  } 

}  

async function main() {
  const credential = new AzureKeyCredential(apiKey);
  const client = new AzureHealthInsightsClient(endpoint, credential);

  // Create request body
  const radiologyInsightsParameter = createRequestBody();

  // Initiate radiology insights job and retrieve results
  const initialResponse = await client.path("/radiology-insights/jobs").post(radiologyInsightsParameter);
  if (isUnexpected(initialResponse)) {
    throw initialResponse;
  }
  const poller = await getLongRunningPoller(client, initialResponse);
  const RadiologyInsightsResult = await poller.pollUntilDone();
  if (isUnexpected(RadiologyInsightsResult)) {
    throw RadiologyInsightsResult;
  }  
  const resultBody = RadiologyInsightsResult.body;
  printResults(resultBody);
}

main().catch((err) => {
  console.error("The critical result encountered an error:", err);
});

module.exports = { main };
