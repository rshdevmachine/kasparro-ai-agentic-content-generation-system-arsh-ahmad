import { mkdirSync, writeFileSync } from "fs";
import { runPipeline } from "../lib/pipeline";

const OUTPUT_DIR = "./output";

const writeJson = (filename: string, data: unknown) => {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(`${OUTPUT_DIR}/${filename}`, JSON.stringify(data, null, 2));
  console.log(`wrote ${filename}`);
};

const main = () => {
  const { pages, questions } = runPipeline();

  writeJson("faq.json", pages.faq);
  writeJson("product_page.json", pages.product);
  writeJson("comparison_page.json", pages.comparison);
  writeJson("questions.json", questions);
};

main();
