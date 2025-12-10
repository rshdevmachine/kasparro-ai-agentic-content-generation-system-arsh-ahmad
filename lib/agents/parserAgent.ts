import { Product, RawProductInput } from "../types";

export type ParserAgentResult = Product;

export const parserAgent = {
  name: "parser-agent",
  run(input: RawProductInput): ParserAgentResult {
    return {
      id: input.name.toLowerCase().replace(/\s+/g, "-"),
      name: input.name,
      concentration: input.concentration,
      skinType: input.skinType,
      keyIngredients: input.keyIngredients,
      benefits: input.benefits,
      usage: input.usage,
      sideEffects: input.sideEffects,
      price: input.price,
    };
  },
};
