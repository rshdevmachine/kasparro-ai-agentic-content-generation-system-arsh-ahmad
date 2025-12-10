import { FAQPage, Question, TemplateDefinition } from "../types";

export const faqTemplate: TemplateDefinition<FAQPage> = {
  id: "faq-template",
  title: "FAQ Page",
  fields: [
    { key: "page_type", description: "Page discriminator", required: true },
    { key: "title", description: "FAQ headline", required: true },
    {
      key: "items",
      description: "List of questions and answers",
      required: true,
    },
  ],
};

export const renderFaq = (title: string, items: Question[]): FAQPage => ({
  page_type: "faq",
  title,
  items,
});
