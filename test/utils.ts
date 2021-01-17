import { default as commitlint } from "@commitlint/lint";
import config from "../src";

export const lint = (input) =>
  commitlint(input, config.rules, config.parserPreset);
