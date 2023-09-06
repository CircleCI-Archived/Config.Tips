import type { GitHubContributor } from "../../../utils/githubAPI";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tw?: string;
  }
}

export default function OG(
  title: string = "Config.Tips - Developer Config Tips",
  subtitle: string = "Config.Tips",
  author?: GitHubContributor
) {
  const backgroundImageURL = "http://localhost:3001/satori-bg-template.png";
  return (
    <div
      tw="flex w-full h-full text-white"
      style={{ backgroundImage: `url("${backgroundImageURL}")` }}
    >
      <div tw="flex flex-col justify-center items-center w-1/2 m-16 mr-0">
        <h1 tw="text-7xl font-bold text-center">{title}</h1>
        {subtitle && <h2 tw="text-xl font-bold text-center">{subtitle}</h2>}
        {author && <footer tw="flex flex-row items-center">
          <img src={author.avatar_url} tw="w-10 h-10 rounded-full mr-4" />
          <span>{author.login}</span>
        </footer>}
      </div>
    </div>
  );
}
