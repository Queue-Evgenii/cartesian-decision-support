"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const criteria_1 = require("./models/criteria");
const decision_supporter_1 = require("./models/decision-supporter");
const variant_1 = require("./models/variant");
const console_alternative_printer_1 = require("./helpers/output/console-alternative-printer");
const cartesian_alternative_generator_1 = require("./models/cartesian-alternative-generator");
(async () => {
    const data = await Promise.resolve().then(() => __importStar(require("./data/criterias.json")));
    const criterias = data.default.map(criteria => new criteria_1.Criteria(criteria.name, criteria.variants.map(variant => new variant_1.Variant(variant.name, variant.weight))));
    const alternativeGenerator = new cartesian_alternative_generator_1.CartesianAlternativeGenerator();
    const alternatives = alternativeGenerator.generateAlternatives(criterias);
    const decisionSupporter = new decision_supporter_1.DecisionSupporter(alternatives);
    const printer = new console_alternative_printer_1.ConsoleAlternativePrinter();
    printer.print(alternatives);
})();
