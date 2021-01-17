import { Rule } from "@commitlint/types";
import { join } from "path";
import { existsSync, writeFileSync } from "fs";

const filePath = join(__dirname, "gitmojis.json");

// Download gitmojis.json if it doesn't exist yet
if (!existsSync(filePath)) {
  const url =
    "https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json";

  const result = require("child_process").execFileSync(
    "curl",
    ["--silent", "-L", url],
    {
      encoding: "utf8",
      maxBuffer: Infinity,
    }
  );

  writeFileSync(filePath, result);
}

const { gitmojis } = require(filePath);
const allGitmojiCodes = gitmojis.map((gitmoji) => gitmoji.code);

const emoji: Rule = (parsed) => {
  const { raw } = parsed;
  const reg = /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/;
  return [
    false,
    `Your commit should start with gitmoji message,please check the emoji code on https://gitmoji.dev/`,
  ];
};

export = emoji;
