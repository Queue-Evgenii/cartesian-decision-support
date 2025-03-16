import { Alternative } from "./alternative";

export interface DecisionSupport {
  getAlternativesAmount(): number;

  getBestAlternative(): Alternative;
  
  getWorstAlternative(): Alternative;
}