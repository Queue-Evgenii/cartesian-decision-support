"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variant = void 0;
class Variant {
    _name;
    _weight;
    constructor(name, weight) {
        this._name = name;
        this._weight = weight;
    }
    get name() {
        return this._name;
    }
    get weight() {
        return this._weight;
    }
}
exports.Variant = Variant;
