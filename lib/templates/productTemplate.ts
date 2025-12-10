import { Product, ProductPage, TemplateDefinition } from "../types";
import { buildHero, buildHighlights, buildValueMessage } from "../agents/contentBlocks";

export const productTemplate: TemplateDefinition<ProductPage> = {
  id: "product-template",
  title: "Product Description Page",
  fields: [
    { key: "page_type", description: "Page discriminator", required: true },
    { key: "hero", description: "Hero headline and summary", required: true },
    { key: "highlights", description: "Key facts list", required: true },
    { key: "benefits", description: "Benefits list", required: true },
    { key: "usage", description: "Usage instructions", required: true },
    { key: "pricing", description: "Price and value message", required: true }
  ]
};

export const renderProduct = (product: Product): ProductPage => ({
  page_type: "product_page",
  hero: buildHero(product),
  highlights: buildHighlights(product),
  benefits: product.benefits,
  usage: product.usage,
  pricing: {
    price: product.price,
    valueMessage: buildValueMessage(product.price, product.concentration)
  }
});

