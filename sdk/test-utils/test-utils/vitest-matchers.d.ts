// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import type { OperationTracingOptions } from "@azure/core-tracing";

interface AzureMatchers<R> extends Record<string, any> {
  toSupportTracing<
    Options extends { tracingOptions?: OperationTracingOptions },
    Callback extends (options: Options) => Promise<unknown>,
  >(
    expectedSpanNames: string[],
    options?: { tracingOptions?: OperationTracingOptions },
    thisArg?: ThisParameterType<Callback>,
  ): Promise<R>;
}

declare module "vitest" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface Assertion<T = any> extends AzureMatchers<T> {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface AsymmetricMatchersContaining<T = any> extends AzureMatchers<T> {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interface ExpectStatic<T = any> extends AzureMatchers<T> {}
}
