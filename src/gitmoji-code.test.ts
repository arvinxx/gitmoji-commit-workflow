import { existsSync, unlinkSync, copyFileSync } from "fs";
import { join } from "path";

const filePath = join(__dirname, "gitmojis.json");

describe("without gitmoji json", () => {
  it("just return result", async () => {
    if (!existsSync(filePath))
      copyFileSync(join(__dirname, "gitmojis-for-test.json"), filePath);

    const gitmojiCodes = await import("./gitmoji-code");

    expect(gitmojiCodes.default).toBeInstanceOf(Array);
  });

  it("will download gitmoji json and write to file", async () => {
    // 如果存在 gitmoji 直接删除
    if (existsSync(filePath)) unlinkSync(filePath);
    const gitmojiCodes = await import("./gitmoji-code");
    expect(gitmojiCodes.default).toBeInstanceOf(Array);
  });
});
