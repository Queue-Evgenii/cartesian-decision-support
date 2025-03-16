import { Alternative } from "../../models/alternative";
import { DecisionSupportPrinter } from "./printer.interface";

export class ConsoleDecisionSupportPrinter implements DecisionSupportPrinter {
  print(data: readonly Alternative[]): void {
    console.table(data)
  }
}