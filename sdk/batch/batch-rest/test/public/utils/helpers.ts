// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const _SUFFIX = Math.random().toString(16).slice(2, 4);

const RESOURCE_PREFIX = "JSSDKTest";

export function getResourceName(type: string): string {
  return `${RESOURCE_PREFIX}-${type}-${_SUFFIX}`;
}

export const POLLING_INTERVAL = 10000;
export const LONG_TEST_TIMEOUT = 1000000;
