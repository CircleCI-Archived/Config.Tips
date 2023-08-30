import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import removeMd from "remove-markdown";
import "dotenv/config";
import algoliasearch from "algoliasearch";
import { z } from "astro/zod";

const tipsPath = path.join("./src/content/tips");
const configKindsPath = path.join("./src/content/configKinds");
const siteBaseUrl = "https://config.tips";

const env = z.object({
  ALGOLIA_APP_ID: z.string(),
  ALGOLIA_WRITE_API_KEY: z.string(),
});
const validatedEnv = env.parse(process.env);

const client = algoliasearch(
  validatedEnv.ALGOLIA_APP_ID,
  validatedEnv.ALGOLIA_WRITE_API_KEY
);

type ConfigKindSchema = {
  name: string;
  description: string;
  website: string;
  logo: string;
  body: string;
  snippet: {
    code: string;
    lang: string;
    filePath: string;
  };
};
type TipSchema = {
  kind: string;
  title: string;
  description: string;
  contributor: string;
  snippet: string;
};

export type TipData = {
  title: string;
  description: string;
  snippet: string;
  kind: {
    id: string;
    name: string;
    description: string;
    logo: string;
  };
  contributor: string;
  body: string;
  objectID: string;
};

async function getKindData(kind: string): Promise<ConfigKindSchema> {
  const kindFilePath = path.join(configKindsPath, `${kind}.yaml`);
  const kindFileContent = await fs.readFile(kindFilePath, "utf-8");
  const { data } = matter(kindFileContent);
  return data as ConfigKindSchema;
}

async function processTips() {
  const tips: TipData[] = [];
  const tipsFiles = await fs.readdir(tipsPath);

  for (const file of tipsFiles) {
    const filePath = path.join(tipsPath, file);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const tipData = data as TipSchema;
    const kindData = await getKindData(data.kind);
    tips.push({
      title: tipData.title,
      description: tipData.description,
      snippet: tipData.snippet,
      kind: {
        id: tipData.kind,
        name: kindData.name,
        description: kindData.description,
        logo: new URL(kindData.logo, siteBaseUrl).toString(),
      },
      contributor: tipData.contributor,
      body: removeMd(content),
      objectID: `${tipData.kind}-${file.replace(".md", "")}`,
    });
  }
  return tips;
}

async function processAndIndexTips() {
  try {
    console.log("Processing tips...");
    const tips = await processTips();
    console.log("Indexing tips to Algolia...");
    await fs.writeFile("./.algolia/index.json", JSON.stringify(tips));
    const index = client.initIndex("tips");
    const { objectIDs } = await index.saveObjects(tips);
    console.log(objectIDs);
    console.log("Algolia Index Updated!");
  } catch (error) {
    console.error(error);
  }
}

processAndIndexTips();
