declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    tw?: string;
  }
}

export default function OG(title: string) {
  return <div tw="flex h-[24rem] w-[48rem] text-white">{title}</div>;
}
