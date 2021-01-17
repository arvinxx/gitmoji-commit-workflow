import config from "../src";
import { default as commitlint } from "@commitlint/lint";

export const lint = (input) =>
  new Promise((resolve, reject) => {
    commitlint(input, config.rules, config.parserPreset)
      .then(resolve)
      .catch(reject);
  });
