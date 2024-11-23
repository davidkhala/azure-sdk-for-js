// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultHttpClient } from "./defaultHttpClient";
import { HttpClient } from "./httpClient";

let cachedHttpClient: HttpClient | undefined;

export function getCachedDefaultHttpClient(): HttpClient {
  if (!cachedHttpClient) {
    cachedHttpClient = new DefaultHttpClient();
  }

  return cachedHttpClient;
}
