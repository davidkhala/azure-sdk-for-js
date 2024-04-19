/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ChatTranscriptDetails,
  ChatTranscriptsNoSubscriptionListOptionalParams,
  ChatTranscriptsNoSubscriptionGetOptionalParams,
  ChatTranscriptsNoSubscriptionGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ChatTranscriptsNoSubscription. */
export interface ChatTranscriptsNoSubscription {
  /**
   * Lists all chat transcripts for a support ticket
   * @param supportTicketName Support ticket name.
   * @param options The options parameters.
   */
  list(
    supportTicketName: string,
    options?: ChatTranscriptsNoSubscriptionListOptionalParams,
  ): PagedAsyncIterableIterator<ChatTranscriptDetails>;
  /**
   * Returns chatTranscript details for a no subscription support ticket.
   * @param supportTicketName Support ticket name.
   * @param chatTranscriptName ChatTranscript name.
   * @param options The options parameters.
   */
  get(
    supportTicketName: string,
    chatTranscriptName: string,
    options?: ChatTranscriptsNoSubscriptionGetOptionalParams,
  ): Promise<ChatTranscriptsNoSubscriptionGetResponse>;
}
