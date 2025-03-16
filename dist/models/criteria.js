"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criteria = void 0;
class Criteria {
    _name;
    _variants;
    constructor(name, variants) {
        this._name = name;
        this._variants = variants;
    }
    get name() {
        return this._name;
    }
    get variants() {
        return this._variants;
    }
}
exports.Criteria = Criteria;
