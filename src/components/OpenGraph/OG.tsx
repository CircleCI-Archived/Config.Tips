declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tw?: string;
  }
}

export default function OG(title: string = "Config.Tips - Developer Config Tips", subtitle?: string) {
  const backgroundImageURL = "http://localhost:3001/satori-bg-template.png";
  return (
    <div
      tw="flex w-full h-full text-white"
      style={{ backgroundImage: `url("${backgroundImageURL}")` }}
    >
      <div tw="flex flex-col justify-center items-center w-1/2 m-16 mr-0">
        <h1 tw="text-7xl font-bold text-center">{title}</h1>
        {subtitle && <h2 tw="text-xl font-bold text-center">{subtitle}</h2>}
      </div>
    </div>
  );
}
