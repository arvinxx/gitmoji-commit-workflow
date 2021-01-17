import { default as commitlint } from "@commitlint/lint";
import config from "./index";

export const lint = (input) =>
  commitlint(input, config.rules, config.parserPreset);
