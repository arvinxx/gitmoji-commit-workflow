import { join } from "path";
import { writeFileSync, existsSync } from "fs";
import type {
  LintOptions,
  LintOutcome,
  QualifiedRules,
} from "@commitlint/types";

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

const rules: QualifiedRules = {
  "type-enum": [2, "always", allGitmojiCodes], // emoji 必须来源为 gitmoji
  "body-leading-blank": [2, "always"], // 内容以空行开始
  "footer-leading-blank": [2, "always"], // 结尾以空行开始
  "header-max-length": [2, "always", 72], // 标题最大长度 72 个字符
  "scope-case": [2, "always", "lower-case"], // Scope 永远小写
  "subject-empty": [2, "never"], // 不允许标题空着
  "subject-full-stop": [2, "never"], // 不允许使用句号
  "type-case": [2, "always", "lower-case"], // type 必须小写
  "type-empty": [2, "never"], // type 不能为空
};

const parserPreset: LintOptions = {
  parserOpts: {
    headerPattern: /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
    headerCorrespondence: ["type", "scope", "subject", "ticket"],
  },
};

// 按 module.exports 方式输出
export = {
  rules,
  parserPreset,
};
