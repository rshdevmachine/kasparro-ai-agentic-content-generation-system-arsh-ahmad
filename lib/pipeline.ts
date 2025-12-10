import { rawProductInput } from "@/data/product";
import { comparisonAgent } from "./agents/comparisonAgent";
import { pageBuilderAgent } from "./agents/pageBuilderAgent";
import { parserAgent } from "./agents/parserAgent";
import { questionAgent } from "./agents/questionAgent";
import { PipelineOutput } from "./types";

export const runPipeline = (): PipelineOutput => {
  const parsedProduct = parserAgent.run(rawProductInput);
  const questions = questionAgent.run(parsedProduct);
  const comparison = comparisonAgent.run(parsedProduct);
  const pages = pageBuilderAgent.run(comparison, questions);

  return {
    parsedProduct,
    questions,
    pages,
  };
};
