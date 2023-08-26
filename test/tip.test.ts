import { expect, test } from "vitest";
import fs from "fs";
import path from "path";

const contentPath = "src/content/";

test("Validate Tip File Names", async () => {
  const idPattern = /^[a-z0-9_]*\.md$/;
  const errors: string[] = [];
  console.log(`Attempting to read from: ${path.resolve(contentPath + "tips")}`);
  const filenames = fs.readdirSync(contentPath + "tips");
  filenames.forEach((filename) => {
    if (!idPattern.test(filename)) {
      errors.push(
        `Invalid filename: ${filename} :: Use only lowercase letters, numbers, and underscores.`,
      );
    }
  });
  const errorMsg = errors.join("\n");
  expect(errors, errorMsg).toEqual([]);
});
