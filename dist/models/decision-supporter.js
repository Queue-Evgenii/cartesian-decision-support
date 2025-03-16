"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecisionSupporter = void 0;
class DecisionSupporter {
    _alternatives;
    _bestAlternative;
    _worstAlternative;
    constructor(alternatives) {
        this._alternatives = alternatives;
        this._bestAlternative = this._alternatives[0];
        this._worstAlternative = this._alternatives[this._alternatives.length - 1];
    }
    getAlternativesAmount() {
        return this._alternatives.length;
    }
    getBestAlternative() {
        return this._bestAlternative;
    }
    getWorstAlternative() {
        return this._worstAlternative;
    }
}
exports.DecisionSupporter = DecisionSupporter;
