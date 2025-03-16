import { Criteria } from "./models/criteria";
import { DecisionSupporter } from "./models/decision-supporter";
import { DecisionSupport } from "./models/decision-support.interface";
import { Variant } from "./models/variant";
import { ConsoleAlternativePrinter } from "./helpers/output/console-alternative-printer";
import { AlternativeGenerator } from "./models/alternative-generator.interface";
import { CartesianAlternativeGenerator } from "./models/cartesian-alternative-generator";

(async () => {
  const data = await import("./data/criterias.json");
  const criterias: Criteria[] = data.default.map(
    criteria => new Criteria(
      criteria.name, 
      criteria.variants.map(variant => new Variant(variant.name, variant.weight))
    )
  )

  const alternativeGenerator: AlternativeGenerator = new CartesianAlternativeGenerator();
  const alternatives = alternativeGenerator.generateAlternatives(criterias);
  const decisionSupporter: DecisionSupport = new DecisionSupporter(alternatives);
  
  const printer = new ConsoleAlternativePrinter();

  printer.print(alternatives);
})();