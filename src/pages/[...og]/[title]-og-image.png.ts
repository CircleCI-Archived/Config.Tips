import type { APIRoute, InferGetStaticPropsType } from "astro";
import OG from "../../components/OpenGraph/OG";
import { PNG } from "../../components/OpenGraph/utils/createImage";
import { getCollection } from "astro:content";

type StaticPath = {
  og: string;
  title: string;
};

export async function getStaticPaths() {
  const paths: StaticPath[] = [];
  const tips = await getCollection("tips");
  const configs = await getCollection("configKinds");
  const tipPaths = tips.map((tip) => ({
    og: `/c/${tip.data.kind.id}/${tip.slug}`,
    title: tip.slug,
  }));
  const configPaths = configs.map((config) => ({
    og: `/c/${config.id}`,
    title: config.id,
  }));
  paths.push(...tipPaths, ...configPaths);

  return paths.map(({ title, og }) => {
    return {
      params: {
        og: og,
        title: title,
      },
      props: {
        title,
      },
    };
  });
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const get: APIRoute = async function get({ props }) {
  const { title } = props as Props;
  return new Response(await PNG(OG(title)), {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
