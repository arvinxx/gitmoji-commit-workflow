import { Commit, RuleConfigCondition } from "@commitlint/types";
import emojiRule from "./emoji-rule";

const commit: Commit = {
  type: "chore",
  scope: "scope",
  subject: "test",
  merge: null,
  header: "chore(scope): test",
  body: null,
  footer: null,
  notes: [],
  references: [],
  mentions: [],
  revert: null,
  raw: "chore(scope): test\n",
};

const when: RuleConfigCondition = "always";

/**
 * To pass this to an function, that is obviously not expecting a mock, a type
 * assertion is needed. For this, the as-syntax is needed when a mock is
 * passed as function argument.
 */

it("123", () => {
  const value = emojiRule(commit, when);

  expect(value).toEqual([
    2,
    "Your commit should start with gitmoji message,please check the emoji code on https://gitmoji.dev/",
  ]);
});
