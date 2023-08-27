import { expect, test } from "vitest";
import fs from "fs";
import path from "path";

const contentPath = "src/content/";
// This sets the URL pattern by enforcing filenames.
const tipIdPattern = /^(?!.*--)[a-z0-9](?:[a-z0-9-]{3,}[a-z0-9])+\.md$/;
const configIdPattern = /^(?!.*--)[a-z](?:[a-z0-9-]*?[a-z0-9])*\.yaml$/;
const tipFiles = fs.readdirSync(contentPath + "tips");
const configKindFiles = fs.readdirSync(contentPath + "configKinds");

test("Validate Tip File Names", async () => {
  const errors: string[] = [];
  console.log(`Attempting to read from: ${path.resolve(contentPath + "tips")}`);
  tipFiles.forEach((filename) => {
    if (!tipIdPattern.test(filename)) {
      errors.push(
        `Invalid filename: ${filename} :: Use only lowercase letters, numbers, and dashes.`,
      );
    }
  });
  const errorMsg = errors.join("\n");
  expect(errors, errorMsg).toEqual([]);
});

test("Validate ConfigKind File Names", async () => {
  const errors: string[] = [];
  console.log(
    `Attempting to read from: ${path.resolve(contentPath + "configKinds")}`,
  );
  configKindFiles.forEach((filename) => {
    if (!configIdPattern.test(filename)) {
      errors.push(
        `Invalid filename: ${filename} :: Use only lowercase letters, numbers, and dashes.`,
      );
    }
  });
  const errorMsg = errors.join("\n");
  expect(errors, errorMsg).toEqual([]);
});
