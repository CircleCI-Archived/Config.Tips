import OG from "../OG";
import satori from "satori";
import fs from "fs/promises";
import sharp from "sharp";

export async function SVG(component: JSX.Element = OG()) {
  return await satori(component, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Roboto",
        data: await fs.readFile(
          "./public/assets/opengraph/fonts/Roboto-Regular.ttf"
        ),
        weight: 400,
      },
      {
        name: "Roboto",
        data: await fs.readFile(
          "./public/assets/opengraph/fonts/Roboto-Bold.ttf"
        ),
        weight: 800,
      },
    ],
  });
}

export async function PNG(component: JSX.Element = OG()) {
  return await sharp(Buffer.from(await SVG(component)))
    .png()
    .toBuffer();
}
