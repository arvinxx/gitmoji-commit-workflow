import { Commit, RuleConfigCondition } from "@commitlint/types";
import emojiRule from "./emoji-rule";

const when: RuleConfigCondition = "always";

test("should return error message if commit start without gitmoji code", () => {
  const value = emojiRule({ raw: "chore(scope): test" } as Commit, when);

  expect(value).toEqual([
    false,
    "Your commit should start with gitmoji code,please check the emoji code on https://gitmoji.dev/.",
  ]);
});

describe("commit start with gitmoji code", () => {
  it("should return wrong gitmoji code error message if commit start with wrong gitmoji", () => {
    const value = emojiRule({ raw: ":st: chore(scope): test" } as Commit, when);
    expect(value).toEqual([
      false,
      ":st: is not in the correct gitmoji list, please check the emoji code on https://gitmoji.dev/.",
    ]);
  });

  it("should pass when return right commit message code", () => {
    const value = emojiRule({ raw: ":tada: test" } as Commit, when);
    expect(value).toEqual([true, "passed"]);
  });
});
