// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Demonstrates how to use tool calls with chat completions.
 *
 * @summary Get chat completions with function call.
 */

import ModelClient, { ChatRequestMessage, isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

// You will need to set these environment variables or edit the following values
const endpoint = process.env["ENDPOINT"] || "<endpoint>";
const key = process.env["KEY"];
const modelName = process.env["MODEL_NAME"];

const getCurrentWeather = {
  name: "get_current_weather",
  description: "Get the current weather in a given location",
  parameters: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "The city and state, e.g. San Francisco, CA",
      },
      unit: {
        type: "string",
        enum: ["celsius", "fahrenheit"],
      },
    },
    required: ["location"],
  },
};

const getWeatherFunc = (location: string, unit: string): string => {
  if (unit != "celsius") {
    unit = "fahrenheit";
  }
  return `The temperature in ${location} is 72 degrees ${unit}`;
}

const updateToolCalls = (toolCallArray: Array<any>, functionArray: Array<any>) => {
  const dummyFunction = { name: "", arguments: "", id: "" };
  while (functionArray.length < toolCallArray.length) {
    functionArray.push(dummyFunction);
  }

  let index = 0;
  for (const toolCall of toolCallArray) {
    if (toolCall.function.name) {
      functionArray[index].name = toolCall.function.name;
    }
    if (toolCall.id) {
      functionArray[index].id = toolCall.id;
    }
    if (toolCall.function.arguments) {
      functionArray[index].arguments += toolCall.function.arguments;
    }
    index++;
  }
}

const handleToolCalls = (functionArray: Array<any>) => {
  const messageArray = [];
  for (const func of functionArray) {
    const funcArgs = JSON.parse(func.arguments);
    let content = "";

    switch (func.name) {

      case "get_current_weather":
        content = getWeatherFunc(funcArgs.location, funcArgs.unit ?? "fahrenheit");
        messageArray.push({
          role: "tool",
          content,
          tool_call_id: func.id,
          name: func.name
        });
        break;

      default:
        console.log(`unknown function ${func.name}`);
        break;
    }
  }
  return messageArray;
}



export async function main() {
  const client = createModelClient();

  const messages: ChatRequestMessage[] = [{ role: "user", content: "What's the weather like in Boston?" }];

  let toolCallAnswer = "";
  let awaitingToolCallAnswer = true;
  while (awaitingToolCallAnswer) {
    const response = await client.path("/chat/completions").post({
      body: {
        messages,
        tools: [
          {
            type: "function",
            function: getCurrentWeather,
          },
        ],
        model: modelName
      }
    });

    if (isUnexpected(response)) {
      throw response.body.error;
    }

    const stream = response.body;
    if (!stream) {
      throw new Error("The response stream is undefined");
    }

    if (response.status !== "200") {
      throw new Error(`Failed to get chat completions.`);
    }

    const functionArray: Array<any> = [];



    for (const choice of response.body.choices) {
      const toolCallArray = choice.message?.tool_calls;

      if (toolCallArray) {
        if (toolCallArray[0].function?.name) {
          // Include original response from assistant requesting tool call in chat history
          choice.message.role = "assistant";
          messages.push(choice.message);
        }
        updateToolCalls(toolCallArray, functionArray);
      }
      if (choice.finish_reason == "tool_calls") {
        const messageArray = handleToolCalls(functionArray);
        messages.push(...messageArray);
      } else {
        if (choice.message?.content && choice.message.content != '') {
          toolCallAnswer += choice.message?.content;
          awaitingToolCallAnswer = false;
        }
      }
    }
  }

  console.log("Model response after tool call:");
  console.log(toolCallAnswer);

}

/*
  * This function creates a model client.
  */
function createModelClient() {
  // auth scope for AOAI resources is currently https://cognitiveservices.azure.com/.default
  // auth scope for MaaS and MaaP is currently https://ml.azure.com
  // (Do not use for Serverless API or Managed Computer Endpoints)
  if (key) {
    return ModelClient(endpoint, new AzureKeyCredential(key));
  } else {
    const scopes: string[] = [];
    if (endpoint.includes(".models.ai.azure.com")) {
      scopes.push("https://ml.azure.com");
    }
    else if (endpoint.includes(".openai.azure.com/openai/deployments/")) {
      scopes.push("https://cognitiveservices.azure.com");
    }

    const clientOptions = { credentials: { scopes } };
    return ModelClient(endpoint, new DefaultAzureCredential(), clientOptions);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
