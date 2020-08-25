const fs = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "gitmojis.json");

// Download gitmojis.json if it doesn't exist yet
if (!fs.existsSync(filePath)) {
  const url = "https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json";

  const result = require("child_process").execFileSync("curl", ["--silent", "-L", url], {
    encoding: "utf8",
    maxBuffer: Infinity
  });

  fs.writeFileSync(filePath, result);
}

const { gitmojis } = require(filePath);
const allGitmojiCodes = gitmojis.map(gitmoji => gitmoji.code);

module.exports = {
  rules: {
    "type-enum": [2, "always", allGitmojiCodes],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "always", ["sentence-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", ["."]],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"]
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ["type", "scope", "subject", "ticket"]
    }
  }
};
