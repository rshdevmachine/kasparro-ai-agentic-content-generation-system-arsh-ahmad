import {
  ComparisonPage,
  ComparisonProduct,
  TemplateDefinition,
} from "../types";
import { buildComparison } from "../agents/contentBlocks";

export const comparisonTemplate: TemplateDefinition<ComparisonPage> = {
  id: "comparison-template",
  title: "Comparison Page",
  fields: [
    { key: "page_type", description: "Page discriminator", required: true },
    { key: "products", description: "Products to compare", required: true },
    {
      key: "ingredient_overlap",
      description: "Shared ingredients",
      required: true,
    },
    {
      key: "key_differences",
      description: "Differences across dimensions",
      required: true,
    },
  ],
};

export const renderComparison = (
  a: ComparisonProduct,
  b: ComparisonProduct
): ComparisonPage => ({
  page_type: "comparison",
  products: { a, b },
  ...buildComparison(
    {
      id: "product-a",
      name: a.name,
      concentration: a.concentration,
      skinType: a.skin_type,
      keyIngredients: a.key_ingredients,
      benefits: a.benefits,
      usage: a.usage,
      sideEffects: [],
      price: a.price,
    },
    b
  ),
});
