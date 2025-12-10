import { ComparisonProduct, Product } from "../types";

export type ComparisonAgentResult = {
  a: Product;
  b: ComparisonProduct;
};

const productB: ComparisonProduct = {
  name: "LumaShield Serum B",
  concentration: "12% Vitamin C",
  skin_type: ["Normal", "Dry"],
  key_ingredients: ["Vitamin C", "Niacinamide"],
  benefits: ["Brightening", "Evens tone"],
  usage: "Apply 2 drops in the evening on clean, dry skin.",
  price: "₹849",
};

export const comparisonAgent = {
  name: "comparison-agent",
  run(product: Product): ComparisonAgentResult {
    return {
      a: product,
      b: productB,
    };
  },
};
