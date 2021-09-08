/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  AadAuthenticationParameters,
  AddressSpace,
  ApplicationGateway,
  ApplicationGatewayAuthenticationCertificate,
  ApplicationGatewayAutoscaleConfiguration,
  ApplicationGatewayAvailableSslOptions,
  ApplicationGatewayBackendAddress,
  ApplicationGatewayBackendAddressPool,
  ApplicationGatewayBackendHttpSettings,
  ApplicationGatewayClientAuthConfiguration,
  ApplicationGatewayConnectionDraining,
  ApplicationGatewayCustomError,
  ApplicationGatewayFirewallDisabledRuleGroup,
  ApplicationGatewayFirewallExclusion,
  ApplicationGatewayFirewallRule,
  ApplicationGatewayFirewallRuleGroup,
  ApplicationGatewayFirewallRuleSet,
  ApplicationGatewayFrontendIPConfiguration,
  ApplicationGatewayFrontendPort,
  ApplicationGatewayGlobalConfiguration,
  ApplicationGatewayHeaderConfiguration,
  ApplicationGatewayHttpListener,
  ApplicationGatewayIPConfiguration,
  ApplicationGatewayLoadDistributionPolicy,
  ApplicationGatewayLoadDistributionTarget,
  ApplicationGatewayPathRule,
  ApplicationGatewayPrivateEndpointConnection,
  ApplicationGatewayPrivateLinkConfiguration,
  ApplicationGatewayPrivateLinkIpConfiguration,
  ApplicationGatewayPrivateLinkResource,
  ApplicationGatewayProbe,
  ApplicationGatewayProbeHealthResponseMatch,
  ApplicationGatewayRedirectConfiguration,
  ApplicationGatewayRequestRoutingRule,
  ApplicationGatewayRewriteRule,
  ApplicationGatewayRewriteRuleActionSet,
  ApplicationGatewayRewriteRuleCondition,
  ApplicationGatewayRewriteRuleSet,
  ApplicationGatewaySku,
  ApplicationGatewaySslCertificate,
  ApplicationGatewaySslPolicy,
  ApplicationGatewaySslPredefinedPolicy,
  ApplicationGatewaySslProfile,
  ApplicationGatewayTrustedClientCertificate,
  ApplicationGatewayTrustedRootCertificate,
  ApplicationGatewayUrlConfiguration,
  ApplicationGatewayUrlPathMap,
  ApplicationGatewayWebApplicationFirewallConfiguration,
  ApplicationRule,
  ApplicationSecurityGroup,
  AvailableProvidersList,
  AvailableProvidersListCity,
  AvailableProvidersListCountry,
  AvailableProvidersListParameters,
  AvailableProvidersListState,
  AzureFirewall,
  AzureFirewallApplicationRule,
  AzureFirewallApplicationRuleCollection,
  AzureFirewallApplicationRuleProtocol,
  AzureFirewallFqdnTag,
  AzureFirewallIPConfiguration,
  AzureFirewallIpGroups,
  AzureFirewallNatRCAction,
  AzureFirewallNatRule,
  AzureFirewallNatRuleCollection,
  AzureFirewallNetworkRule,
  AzureFirewallNetworkRuleCollection,
  AzureFirewallPublicIPAddress,
  AzureFirewallRCAction,
  AzureFirewallSku,
  AzureReachabilityReport,
  AzureReachabilityReportItem,
  AzureReachabilityReportLatencyInfo,
  AzureReachabilityReportLocation,
  AzureReachabilityReportParameters,
  BackendAddressPool,
  BaseResource,
  BastionHost,
  BastionHostIPConfiguration,
  BGPCommunity,
  BgpConnection,
  BgpServiceCommunity,
  BgpSettings,
  BreakOutCategoryPolicies,
  ConnectionMonitorDestination,
  ConnectionMonitorEndpoint,
  ConnectionMonitorEndpointFilter,
  ConnectionMonitorEndpointFilterItem,
  ConnectionMonitorEndpointScope,
  ConnectionMonitorEndpointScopeItem,
  ConnectionMonitorHttpConfiguration,
  ConnectionMonitorIcmpConfiguration,
  ConnectionMonitorOutput,
  ConnectionMonitorResult,
  ConnectionMonitorSource,
  ConnectionMonitorSuccessThreshold,
  ConnectionMonitorTcpConfiguration,
  ConnectionMonitorTestConfiguration,
  ConnectionMonitorTestGroup,
  ConnectionMonitorWorkspaceSettings,
  ConnectionSharedKey,
  ConnectivityDestination,
  ConnectivityHop,
  ConnectivityInformation,
  ConnectivityIssue,
  ConnectivityParameters,
  ConnectivitySource,
  Container,
  ContainerNetworkInterface,
  ContainerNetworkInterfaceConfiguration,
  ContainerNetworkInterfaceIpConfiguration,
  CustomDnsConfigPropertiesFormat,
  CustomIpPrefix,
  DdosCustomPolicy,
  DdosProtectionPlan,
  DdosSettings,
  Delegation,
  DeviceProperties,
  DhcpOptions,
  DnsSettings,
  DscpConfiguration,
  EffectiveNetworkSecurityRule,
  EndpointServiceResult,
  ErrorDetails,
  ErrorResponse,
  EvaluatedNetworkSecurityGroup,
  ExplicitProxySettings,
  ExpressRouteCircuit,
  ExpressRouteCircuitAuthorization,
  ExpressRouteCircuitConnection,
  ExpressRouteCircuitPeering,
  ExpressRouteCircuitPeeringConfig,
  ExpressRouteCircuitPeeringId,
  ExpressRouteCircuitReference,
  ExpressRouteCircuitServiceProviderProperties,
  ExpressRouteCircuitSku,
  ExpressRouteCircuitStats,
  ExpressRouteConnection,
  ExpressRouteConnectionId,
  ExpressRouteCrossConnection,
  ExpressRouteCrossConnectionPeering,
  ExpressRouteGateway,
  ExpressRouteGatewayPropertiesAutoScaleConfiguration,
  ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds,
  ExpressRouteLink,
  ExpressRouteLinkMacSecConfig,
  ExpressRoutePort,
  ExpressRoutePortsLocation,
  ExpressRoutePortsLocationBandwidths,
  ExpressRouteServiceProvider,
  ExpressRouteServiceProviderBandwidthsOffered,
  ExtendedLocation,
  FirewallPolicy,
  FirewallPolicyCertificateAuthority,
  FirewallPolicyFilterRuleCollection,
  FirewallPolicyFilterRuleCollectionAction,
  FirewallPolicyInsights,
  FirewallPolicyIntrusionDetection,
  FirewallPolicyIntrusionDetectionBypassTrafficSpecifications,
  FirewallPolicyIntrusionDetectionConfiguration,
  FirewallPolicyIntrusionDetectionSignatureSpecification,
  FirewallPolicyLogAnalyticsResources,
  FirewallPolicyLogAnalyticsWorkspace,
  FirewallPolicyNatRuleCollection,
  FirewallPolicyNatRuleCollectionAction,
  FirewallPolicyRule,
  FirewallPolicyRuleApplicationProtocol,
  FirewallPolicyRuleCollection,
  FirewallPolicyRuleCollectionGroup,
  FirewallPolicySku,
  FirewallPolicySNAT,
  FirewallPolicySQL,
  FirewallPolicyThreatIntelWhitelist,
  FirewallPolicyTransportSecurity,
  FlowLog,
  FlowLogFormatParameters,
  FlowLogInformation,
  FlowLogStatusParameters,
  FrontendIPConfiguration,
  GatewayLoadBalancerTunnelInterface,
  HopLink,
  HTTPConfiguration,
  HTTPHeader,
  HubIPAddresses,
  HubIpConfiguration,
  HubPublicIPAddresses,
  HubRoute,
  HubRouteTable,
  HubVirtualNetworkConnection,
  InboundNatPool,
  InboundNatRule,
  InboundSecurityRule,
  InboundSecurityRules,
  IpAllocation,
  IPConfiguration,
  IPConfigurationBgpPeeringAddress,
  IPConfigurationProfile,
  IpGroup,
  IpsecPolicy,
  IpTag,
  Ipv6CircuitConnectionConfig,
  Ipv6ExpressRouteCircuitPeeringConfig,
  LoadBalancer,
  LoadBalancerBackendAddress,
  LoadBalancerSku,
  LoadBalancingRule,
  LocalNetworkGateway,
  ManagedRuleGroupOverride,
  ManagedRuleOverride,
  ManagedRulesDefinition,
  ManagedRuleSet,
  ManagedServiceIdentity,
  ManagedServiceIdentityUserAssignedIdentitiesValue,
  MatchCondition,
  MatchedRule,
  MatchVariable,
  NatGateway,
  NatGatewaySku,
  NatRule,
  NetworkConfigurationDiagnosticParameters,
  NetworkConfigurationDiagnosticProfile,
  NetworkConfigurationDiagnosticResponse,
  NetworkConfigurationDiagnosticResult,
  NetworkIntentPolicy,
  NetworkInterface,
  NetworkInterfaceAssociation,
  NetworkInterfaceDnsSettings,
  NetworkInterfaceIPConfiguration,
  NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties,
  NetworkInterfaceTapConfiguration,
  NetworkProfile,
  NetworkRule,
  NetworkSecurityGroup,
  NetworkSecurityGroupResult,
  NetworkSecurityRulesEvaluationResult,
  NetworkVirtualAppliance,
  NetworkVirtualApplianceSku,
  NetworkVirtualApplianceSkuInstances,
  NetworkWatcher,
  NetworkWatcherListResult,
  NextHopParameters,
  NextHopResult,
  O365BreakOutCategoryPolicies,
  O365PolicyProperties,
  Office365PolicyProperties,
  OutboundRule,
  OwaspCrsExclusionEntry,
  P2SConnectionConfiguration,
  P2SVpnGateway,
  PatchRouteFilter,
  PatchRouteFilterRule,
  PeerExpressRouteCircuitConnection,
  PolicySettings,
  PrivateDnsZoneConfig,
  PrivateDnsZoneGroup,
  PrivateEndpoint,
  PrivateEndpointConnection,
  PrivateEndpointIPConfiguration,
  PrivateLinkService,
  PrivateLinkServiceConnection,
  PrivateLinkServiceConnectionState,
  PrivateLinkServiceIpConfiguration,
  PrivateLinkServicePropertiesAutoApproval,
  PrivateLinkServicePropertiesVisibility,
  Probe,
  PropagatedRouteTable,
  ProtocolConfiguration,
  ProtocolCustomSettingsFormat,
  PublicIPAddress,
  PublicIPAddressDnsSettings,
  PublicIPAddressSku,
  PublicIPPrefix,
  PublicIPPrefixSku,
  QosDefinition,
  QosIpRange,
  QosPortRange,
  QueryTroubleshootingParameters,
  RadiusServer,
  RecordSet,
  ReferencedPublicIpAddress,
  Resource,
  ResourceNavigationLink,
  ResourceSet,
  RetentionPolicyParameters,
  Route,
  RouteFilter,
  RouteFilterRule,
  RouteTable,
  RoutingConfiguration,
  SecurityGroupNetworkInterface,
  SecurityGroupViewParameters,
  SecurityGroupViewResult,
  SecurityPartnerProvider,
  SecurityRule,
  SecurityRuleAssociations,
  ServiceAssociationLink,
  ServiceEndpointPolicy,
  ServiceEndpointPolicyDefinition,
  ServiceEndpointPropertiesFormat,
  Sku,
  StaticRoute,
  Subnet,
  SubnetAssociation,
  SubResource,
  TagsObject,
  Topology,
  TopologyAssociation,
  TopologyParameters,
  TopologyResource,
  TrafficAnalyticsConfigurationProperties,
  TrafficAnalyticsProperties,
  TrafficSelectorPolicy,
  TroubleshootingDetails,
  TroubleshootingParameters,
  TroubleshootingRecommendedActions,
  TroubleshootingResult,
  TunnelConnectionHealth,
  VerificationIPFlowParameters,
  VerificationIPFlowResult,
  VirtualApplianceNicProperties,
  VirtualApplianceSite,
  VirtualApplianceSkuProperties,
  VirtualHub,
  VirtualHubId,
  VirtualHubRoute,
  VirtualHubRouteTable,
  VirtualHubRouteTableV2,
  VirtualHubRouteV2,
  VirtualNetwork,
  VirtualNetworkBgpCommunities,
  VirtualNetworkConnectionGatewayReference,
  VirtualNetworkGateway,
  VirtualNetworkGatewayConnection,
  VirtualNetworkGatewayConnectionListEntity,
  VirtualNetworkGatewayIPConfiguration,
  VirtualNetworkGatewayNatRule,
  VirtualNetworkGatewaySku,
  VirtualNetworkPeering,
  VirtualNetworkTap,
  VirtualRouter,
  VirtualRouterPeering,
  VirtualWAN,
  VM,
  VnetRoute,
  VpnClientConfiguration,
  VpnClientConnectionHealth,
  VpnClientRevokedCertificate,
  VpnClientRootCertificate,
  VpnConnection,
  VpnGateway,
  VpnGatewayIpConfiguration,
  VpnGatewayNatRule,
  VpnLinkBgpSettings,
  VpnLinkProviderProperties,
  VpnNatRuleMapping,
  VpnServerConfigRadiusClientRootCertificate,
  VpnServerConfigRadiusServerRootCertificate,
  VpnServerConfiguration,
  VpnServerConfigVpnClientRevokedCertificate,
  VpnServerConfigVpnClientRootCertificate,
  VpnSite,
  VpnSiteLink,
  VpnSiteLinkConnection,
  WebApplicationFirewallCustomRule,
  WebApplicationFirewallPolicy
} from "../models/mappers";
