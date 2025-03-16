"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartesianAlternativeGenerator = void 0;
const dekartes_factory_1 = require("../helpers/math/dekartes-factory");
class CartesianAlternativeGenerator {
    generateAlternatives(criterias) {
        const factory = new dekartes_factory_1.CartesianFactory();
        const variantsArrays = criterias.map(c => c.variants
            .sort((a, b) => b.weight - a.weight)
            .map(v => v.name));
        const combinations = factory.getCartesianProduct(variantsArrays);
        return combinations.map(combination => {
            const combinationObject = {};
            criterias.forEach((criteria, index) => {
                combinationObject[criteria.name] = combination[index];
            });
            return combinationObject;
        });
    }
}
exports.CartesianAlternativeGenerator = CartesianAlternativeGenerator;
