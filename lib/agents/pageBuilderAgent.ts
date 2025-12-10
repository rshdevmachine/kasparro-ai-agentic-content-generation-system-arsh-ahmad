import { Question } from "../types";
import { ComparisonAgentResult } from "./comparisonAgent";
import { renderComparison } from "../templates/comparisonTemplate";
import { renderFaq } from "../templates/faqTemplate";
import { renderProduct } from "../templates/productTemplate";
import { buildFaqItems } from "./contentBlocks";

export const pageBuilderAgent = {
  name: "page-builder-agent",
  run(comparison: ComparisonAgentResult, questions: Question[]) {
    const faqItems = buildFaqItems(questions);
    return {
      faq: renderFaq("GlowBoost Vitamin C Serum FAQs", faqItems),
      product: renderProduct(comparison.a),
      comparison: renderComparison(
        {
          name: comparison.a.name,
          concentration: comparison.a.concentration,
          skin_type: comparison.a.skinType,
          key_ingredients: comparison.a.keyIngredients,
          benefits: comparison.a.benefits,
          usage: comparison.a.usage,
          price: comparison.a.price,
        },
        comparison.b
      ),
    };
  },
};
