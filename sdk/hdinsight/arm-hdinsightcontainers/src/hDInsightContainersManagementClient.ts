/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ClusterPoolsImpl,
  ClusterPoolAvailableUpgradesImpl,
  ClustersImpl,
  ClusterAvailableUpgradesImpl,
  ClusterJobsImpl,
  LocationsImpl,
  OperationsImpl,
  AvailableClusterPoolVersionsImpl,
  AvailableClusterVersionsImpl,
} from "./operations";
import {
  ClusterPools,
  ClusterPoolAvailableUpgrades,
  Clusters,
  ClusterAvailableUpgrades,
  ClusterJobs,
  Locations,
  Operations,
  AvailableClusterPoolVersions,
  AvailableClusterVersions,
} from "./operationsInterfaces";
import { HDInsightContainersManagementClientOptionalParams } from "./models";

export class HDInsightContainersManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the HDInsightContainersManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription. The value must be an UUID.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: HDInsightContainersManagementClientOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: HDInsightContainersManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-arm-hdinsightcontainers/1.0.0-beta.3`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2023-11-01-preview";
    this.clusterPools = new ClusterPoolsImpl(this);
    this.clusterPoolAvailableUpgrades = new ClusterPoolAvailableUpgradesImpl(
      this,
    );
    this.clusters = new ClustersImpl(this);
    this.clusterAvailableUpgrades = new ClusterAvailableUpgradesImpl(this);
    this.clusterJobs = new ClusterJobsImpl(this);
    this.locations = new LocationsImpl(this);
    this.operations = new OperationsImpl(this);
    this.availableClusterPoolVersions = new AvailableClusterPoolVersionsImpl(
      this,
    );
    this.availableClusterVersions = new AvailableClusterVersionsImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  clusterPools: ClusterPools;
  clusterPoolAvailableUpgrades: ClusterPoolAvailableUpgrades;
  clusters: Clusters;
  clusterAvailableUpgrades: ClusterAvailableUpgrades;
  clusterJobs: ClusterJobs;
  locations: Locations;
  operations: Operations;
  availableClusterPoolVersions: AvailableClusterPoolVersions;
  availableClusterVersions: AvailableClusterVersions;
}
