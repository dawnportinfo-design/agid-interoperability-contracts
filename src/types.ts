export type ResolutionState =
  | 'verified'
  | 'partial'
  | 'ambiguous'
  | 'unresolved'
  | 'rejected'
  | 'deprecated'
  | 'disputed'
  | 'manual_review';

export type QualityState = 'verified' | 'partial' | 'manual_required';

export type PredicateName =
  | 'region_membership'
  | 'quality_threshold'
  | 'consent_scope'
  | 'freshness'
  | 'not_revoked'
  | 'delivery_zone_eligibility'
  | 'anonymous_rate_limit'
  | 'postal_equivalent_membership';

export type InteropDecision = 'allow' | 'allow_with_warning' | 'manual_review' | 'block' | 'policy_dependent';

export type AMTEnvelope = {
  schemaVersion: 'amt-envelope-v0.1';
  referentCommitment: string;
  pidCommitment: string;
  resolutionState: ResolutionState;
  qualityState: QualityState;
  sourceSetVersion: string;
  lineageRoot: string;
  freshnessRoot: string;
  revocationRoot?: string;
  allowedPredicates: PredicateName[];
};

export type ZKProofRequest = {
  schemaVersion: 'zk-proof-request-v0.1';
  policyId: string;
  predicate: PredicateName;
  purpose: 'delivery' | 'identity' | 'hotel_checkin' | 'locker_pickup' | 'field_handoff' | 'audit' | 'research';
  requestedAt: string;
};

export type PostalZone = {
  schemaVersion: 'postal-zone-v0.1';
  zoneId: string;
  countryCode: string;
  zoneState: 'official' | 'postal_equivalent' | 'redesign_overlay' | 'virtual_town' | 'emergency' | 'deprecated';
  generationMode: 'keep_existing' | 'redesign_overlay' | 'generate_postal_equivalent' | 'virtual_town_overlay' | 'emergency_repartition';
  sourcePolicy: string;
};

export type AddressAIOutput = {
  schemaVersion: 'address-ai-output-v0.1';
  task:
    | 'address-parsing'
    | 'normalization'
    | 'translation'
    | 'completion'
    | 'validation'
    | 'geocoding'
    | 'delivery-optimization'
    | 'llm-assistant';
  decision: 'allow' | 'allow_with_warning' | 'manual_review' | 'block';
  sourceBacked: boolean;
  amtState: 'verified' | 'partial' | 'ambiguous' | 'unresolved' | 'manual_review' | 'rejected';
};

export type InteropVector = {
  id: string;
  amt: AMTEnvelope;
  zk: ZKProofRequest;
  postal: PostalZone;
  ai: AddressAIOutput;
  expectedDecision: InteropDecision;
};

