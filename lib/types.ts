export type Category =
  | "Informational"
  | "Usage"
  | "Safety"
  | "Purchase"
  | "Comparison"
  | "Ingredients"
  | "Results";

export type RawProductInput = {
  name: string;
  concentration: string;
  skinType: string[];
  keyIngredients: string[];
  benefits: string[];
  usage: string;
  sideEffects: string[];
  price: string;
};

export type Product = {
  id: string;
  name: string;
  concentration: string;
  skinType: string[];
  keyIngredients: string[];
  benefits: string[];
  usage: string;
  sideEffects: string[];
  price: string;
};

export type Question = {
  question: string;
  answer: string;
  category: Category;
};

export type TemplateField<T> = {
  key: keyof T;
  description: string;
  required: boolean;
};

export type TemplateDefinition<T> = {
  id: string;
  title: string;
  fields: TemplateField<T>[];
};

export type FAQPage = {
  page_type: "faq";
  title: string;
  items: Question[];
};

export type ProductPage = {
  page_type: "product_page";
  hero: {
    headline: string;
    summary: string;
  };
  highlights: string[];
  benefits: string[];
  usage: string;
  pricing: {
    price: string;
    valueMessage: string;
  };
};

export type ComparisonProduct = {
  name: string;
  concentration: string;
  skin_type: string[];
  key_ingredients: string[];
  benefits: string[];
  usage: string;
  price: string;
};

export type ComparisonPage = {
  page_type: "comparison";
  products: {
    a: ComparisonProduct;
    b: ComparisonProduct;
  };
  ingredient_overlap: string[];
  key_differences: {
    concentration: string;
    price: string;
    benefits: string;
  };
};

export type PipelineOutput = {
  parsedProduct: Product;
  questions: Question[];
  pages: {
    faq: FAQPage;
    product: ProductPage;
    comparison: ComparisonPage;
  };
};
