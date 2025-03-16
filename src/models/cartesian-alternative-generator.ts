import { CartesianFactory } from "../helpers/math/dekartes-factory";
import { Alternative } from "./alternative";
import { AlternativeGenerator } from "./alternative-generator.interface";
import { Criteria } from "./criteria";

export class CartesianAlternativeGenerator implements AlternativeGenerator {
  public generateAlternatives(criterias: Criteria[]): ReadonlyArray<Alternative> {
    const factory = new CartesianFactory();
    const variantsArrays = criterias.map(c => 
      c.variants
        .sort((a, b) => b.weight - a.weight)
        .map(v => v.name)
    );

    const combinations = factory.getCartesianProduct(variantsArrays);
    return combinations.map(combination => {
      const combinationObject: Alternative = {};
      criterias.forEach((criteria, index) => {
        combinationObject[criteria.name] = combination[index];
      });
      return combinationObject;
    });
  }
}