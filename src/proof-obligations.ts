import type { InteropDecision } from './types.ts';

export type ProofObligationLayer = 'amt' | 'zk' | 'postal' | 'ai' | 'ethereum';

export type ProofObligationStatus = 'tested' | 'documented' | 'planned';

export type ProofObligation = {
  id: string;
  layer: ProofObligationLayer;
  claim: string;
  requiredInputs: string[];
  allowedOutcome: InteropDecision;
  blockedWhen: string[];
  verificationStatus: ProofObligationStatus;
};

export function obligationsForLayer(obligations: ProofObligation[], layer: ProofObligationLayer): ProofObligation[] {
  return obligations.filter((obligation) => obligation.layer === layer);
}

export function hasTestedGuard(obligations: ProofObligation[], id: string): boolean {
  return obligations.some((obligation) => obligation.id === id && obligation.verificationStatus === 'tested');
}

export function plannedObligations(obligations: ProofObligation[]): ProofObligation[] {
  return obligations.filter((obligation) => obligation.verificationStatus === 'planned');
}

