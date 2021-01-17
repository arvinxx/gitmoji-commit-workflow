import { Plugin } from "@commitlint/types";
import emojiRule from "./emoji-rule";

const plugin: Plugin = {
  rules: {
    emoji: emojiRule,
  },
};

export = plugin;
