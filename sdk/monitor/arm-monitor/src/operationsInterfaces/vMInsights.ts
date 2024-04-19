/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VMInsightsGetOnboardingStatusOptionalParams,
  VMInsightsGetOnboardingStatusResponse,
} from "../models";

/** Interface representing a VMInsights. */
export interface VMInsights {
  /**
   * Retrieves the VM Insights onboarding status for the specified resource or resource scope.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the resource, or scope,
   *                    whose status to retrieve.
   * @param options The options parameters.
   */
  getOnboardingStatus(
    resourceUri: string,
    options?: VMInsightsGetOnboardingStatusOptionalParams,
  ): Promise<VMInsightsGetOnboardingStatusResponse>;
}
