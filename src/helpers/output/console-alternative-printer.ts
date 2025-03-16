import { Alternative } from "../../models/alternative";
import { AlternativePrinter } from "./alternative-printer.interface";

export class ConsoleAlternativePrinter implements AlternativePrinter {
  print(data: readonly Alternative[]): void {
    console.table(data)
  }
}