import { Alternative } from "./alternative";
import { Criteria } from "./criteria";

export interface AlternativeGenerator {
  generateAlternatives(criterias: Criteria[]): ReadonlyArray<Alternative>;
}