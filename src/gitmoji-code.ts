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
const gitmojiCodes: string[] = gitmojis.map((gitmoji) => gitmoji.code);

export default gitmojiCodes;
