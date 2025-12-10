import { Product, Question } from "../types";

const questionBank = (product: Product): Question[] => [
  {
    question: `What is ${product.name}?`,
    answer: `${product.name} is a ${
      product.concentration
    } serum built for ${product.skinType.join(", ")} skin.`,
    category: "Informational",
  },
  {
    question: `Who should use ${product.name}?`,
    answer: `Best for ${product.skinType.join(
      ", "
    )} skin looking for brightening and to fade dark spots.`,
    category: "Informational",
  },
  {
    question: "How do I apply it?",
    answer: product.usage,
    category: "Usage",
  },
  {
    question: "When should I apply it?",
    answer: "Use in the morning before sunscreen for steady daily brightening.",
    category: "Usage",
  },
  {
    question: "Can I layer it with moisturizer?",
    answer:
      "Yes, apply after cleansing and before sunscreen; follow with moisturizer if desired.",
    category: "Usage",
  },
  {
    question: "What are the key ingredients?",
    answer: product.keyIngredients.join(", "),
    category: "Ingredients",
  },
  {
    question: "What benefits should I expect?",
    answer: product.benefits.join("; "),
    category: "Informational",
  },
  {
    question: "How long until I see results?",
    answer:
      "Expect early radiance in 2–3 weeks with daily use; dark spot fading follows steady use.",
    category: "Results",
  },
  {
    question: "Is it okay for sensitive skin?",
    answer: `Potential side effects: ${product.sideEffects.join(
      ", "
    )}. Patch test if skin is reactive.`,
    category: "Safety",
  },
  {
    question: "Does it sting?",
    answer:
      "A mild tingling is normal on sensitive skin; discontinue if burning persists.",
    category: "Safety",
  },
  {
    question: "Can I use it with retinol at night?",
    answer:
      "Yes—keep Vitamin C in the morning and retinol at night to avoid layered irritation.",
    category: "Safety",
  },
  {
    question: "Should I use sunscreen with it?",
    answer: "Yes, pair with daily SPF to protect brightening gains.",
    category: "Safety",
  },
  {
    question: "What is the price?",
    answer: `The serum is priced at ${product.price}.`,
    category: "Purchase",
  },
  {
    question: "How does it compare to stronger Vitamin C serums?",
    answer:
      "Its 10% strength is balanced for daily use; stronger serums may suit tolerant skin but can irritate.",
    category: "Comparison",
  },
  {
    question: "Can oily skin use it without feeling greasy?",
    answer:
      "Yes, the formula is lightweight and designed for oily and combination skin.",
    category: "Informational",
  },
];

export const questionAgent = {
  name: "question-agent",
  run(product: Product): Question[] {
    return questionBank(product);
  },
};
