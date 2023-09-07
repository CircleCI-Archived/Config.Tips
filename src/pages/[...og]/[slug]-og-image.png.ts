import type { APIRoute, InferGetStaticPropsType } from "astro";
import OG from "../../components/OpenGraph/OG";
import { PNG } from "../../components/OpenGraph/utils/createImage";
import { getCollection } from "astro:content";
import { getContributor } from "../../../utils/githubAPI";

type StaticPath = {
  og: string;
  slug: string;
  title: string;
  subtitle?: string;
  author?: string | undefined;
};

export async function getStaticPaths() {
  const paths: StaticPath[] = [];

  // Add all pages under /c/*
  const tips = await getCollection("tips");
  const configs = await getCollection("configKinds");
  const tipPaths = tips.map((tip) => ({
    og: `c/${tip.data.kind.id}/${tip.slug}`,
    slug: tip.slug,
    title: tip.data.title,
    subtitle:
      configs.find((config) => config.id === tip.data.kind.id)?.data.name || "",
    author: tip.data.contributor,
  }));
  const configPaths = configs.map((config) => ({
    og: `c/${config.id}`,
    slug: config.id,
    title: config.data.name,
  }));
  paths.push(...tipPaths, ...configPaths);

  // Add standalone pages
  const aboutPage = {
    og: "/about",
    slug: "about",
    title: "Open-Source Developer Config Tips",
    subtitle: "Config.Tips",
  };
  const explorePage = {
    og: "/c",
    slug: "c",
    title: "Explore Developer Config Tips",
    subtitle: "Config.Tips",
  };
  paths.push(aboutPage, explorePage);

  // Return all paths
  return paths.map(({ title, og, slug, subtitle, author }) => {
    return {
      params: {
        og: og,
        slug: slug,
      },
      props: {
        title,
        subtitle,
        author,
      },
    };
  });
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async function get({ props }) {
  const { title, subtitle, author } = props as Props;
  const contributor = author ? getContributor(author) : undefined;
  const png = await PNG(OG(title, subtitle, contributor));
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
