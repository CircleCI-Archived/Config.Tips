import type { APIRoute, InferGetStaticPropsType } from "astro";
import OG from "../../components/OpenGraph/OG";
import { PNG } from "../../components/OpenGraph/utils/createImage";
import { getCollection } from "astro:content";

type StaticPath = {
  og: string;
  slug: string;
  title: string;
};

export async function getStaticPaths() {
  const paths: StaticPath[] = [];
  const tips = await getCollection("tips");
  const configs = await getCollection("configKinds");
  const tipPaths = tips.map((tip) => ({
    og: `c/${tip.data.kind.id}/${tip.slug}`,
    slug: tip.slug,
    title: tip.data.title
  }));
  const configPaths = configs.map((config) => ({
    og: `c/${config.id}`,
    slug: config.id,
    title: config.data.name
  }));
  paths.push(...tipPaths, ...configPaths);

  return paths.map(({ title, og }) => {
    return {
      params: {
        og: og,
        slug: title,
      },
      props: {
        title,
      },
    };
  });
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async function get({ props }) {
  const { title } = props as Props;
  return new Response(await PNG(OG(title)), {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
