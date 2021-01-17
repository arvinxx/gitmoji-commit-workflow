"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var fs_1 = require("fs");
var filePath = path_1.join(__dirname, "gitmojis.json");
// Download gitmojis.json if it doesn't exist yet
if (!fs_1.existsSync(filePath)) {
    var url = "https://raw.githubusercontent.com/carloscuesta/gitmoji/master/src/data/gitmojis.json";
    var result = require("child_process").execFileSync("curl", ["--silent", "-L", url], {
        encoding: "utf8",
        maxBuffer: Infinity,
    });
    fs_1.writeFileSync(filePath, result);
}
var gitmojis = require(filePath).gitmojis;
var allGitmojiCodes = gitmojis.map(function (gitmoji) { return gitmoji.code; });
var rules = {
    "type-enum": [2, "always", allGitmojiCodes],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
};
var parserPreset = {
    parserOpts: {
        headerPattern: /^(:\w*:)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
        headerCorrespondence: ["type", "scope", "subject", "ticket"],
    },
};
exports.default = {
    rules: rules,
    parserPreset: parserPreset,
};
//# sourceMappingURL=index.js.map