import { ComparisonProduct, Product, Question } from "../types";

export const buildHero = (product: Product) => ({
  headline: `${product.name}: daily brightening serum`,
  summary: `${product.concentration} formula with ${product.keyIngredients.join(
    ", "
  )} tailored for ${product.skinType.join(", ")} skin.`,
});

export const buildHighlights = (product: Product) => {
  const highlights = [
    `Skin type: ${product.skinType.join(", ")}`,
    `Key ingredients: ${product.keyIngredients.join(", ")}`,
    `How to use: ${product.usage}`,
    `Side effects: ${product.sideEffects.join("; ")}`,
  ];
  return highlights;
};

export const buildValueMessage = (price: string, concentration: string) =>
  `${concentration} active care at ${price}—positioned for daily use.`;

export const buildFaqItems = (questions: Question[]) => questions.slice(0, 8);

export const buildComparison = (a: Product, b: ComparisonProduct) => {
  const overlap = a.keyIngredients.filter((item) =>
    b.key_ingredients
      .map((ing) => ing.toLowerCase())
      .includes(item.toLowerCase())
  );

  return {
    ingredient_overlap: overlap,
    key_differences: {
      concentration: `${a.name}: ${a.concentration} vs ${b.name}: ${b.concentration}`,
      price: `${a.price} vs ${b.price}`,
      benefits: `${a.benefits.join("; ")} vs ${b.benefits.join("; ")}`,
    },
  };
};
