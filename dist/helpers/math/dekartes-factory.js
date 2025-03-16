"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartesianFactory = void 0;
class CartesianFactory {
    /**
    * Gets the Cartesian product of arrays.
    * Each array in the array must be an array of elements of the same type.
    *
    * @param arrays - An array of arrays to get the Cartesian product for.
    * @returns An array of all possible combinations.
    */
    getCartesianProduct(arrays) {
        return arrays.reduce((acc, curr) => acc.flatMap(a => curr.map(b => [...a, b])), [[]]);
    }
}
exports.CartesianFactory = CartesianFactory;
