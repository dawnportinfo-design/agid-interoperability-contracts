import type { InteropDecision, InteropVector, PredicateName, ResolutionState } from './types.ts';

const statePredicateAllowList: Record<ResolutionState, PredicateName[]> = {
  verified: [
    'region_membership',
    'quality_threshold',
    'consent_scope',
    'freshness',
    'not_revoked',
    'delivery_zone_eligibility',
    'anonymous_rate_limit',
    'postal_equivalent_membership',
  ],
  partial: ['quality_threshold', 'freshness', 'not_revoked', 'anonymous_rate_limit'],
  ambiguous: ['freshness', 'not_revoked'],
  unresolved: [],
  rejected: [],
  deprecated: ['freshness', 'not_revoked'],
  disputed: ['freshness', 'not_revoked', 'anonymous_rate_limit'],
  manual_review: ['freshness', 'not_revoked'],
};

export function decideInterop(vector: InteropVector): InteropDecision {
  if (vector.ai.decision === 'block') {
    return 'block';
  }

  if (vector.ai.decision === 'manual_review') {
    return 'manual_review';
  }

  if (vector.amt.resolutionState === 'disputed') {
    return 'policy_dependent';
  }

  if (vector.amt.resolutionState === 'unresolved' || vector.amt.resolutionState === 'rejected') {
    return 'block';
  }

  const allowedByState = statePredicateAllowList[vector.amt.resolutionState].includes(vector.zk.predicate);
  const allowedByEnvelope = vector.amt.allowedPredicates.includes(vector.zk.predicate);
  if (!allowedByState || !allowedByEnvelope) {
    return vector.ai.decision === 'allow_with_warning' ? 'manual_review' : 'block';
  }

  if (vector.postal.zoneState === 'deprecated') {
    return 'block';
  }

  if (vector.postal.zoneState === 'virtual_town' || vector.postal.zoneState === 'emergency') {
    return vector.ai.sourceBacked ? 'allow_with_warning' : 'manual_review';
  }

  if (vector.ai.decision === 'allow_with_warning' || vector.amt.resolutionState === 'partial') {
    return 'allow_with_warning';
  }

  return 'allow';
}

