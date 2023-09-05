import { useEffect, useRef, createElement, Fragment } from "react";
import { createRoot } from "react-dom/client";
import { autocomplete, getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch/lite";

import type { AutocompleteComponents } from "@algolia/autocomplete-js";
import type { Hit } from "@algolia/client-search";
import type { Root } from "react-dom/client";

import "@algolia/autocomplete-theme-classic";

import type { TipData } from "../../../../utils/algoliaIndexer";

const searchClient = algoliasearch(
  "1D3683KYJH",
  "0c7233f111bb2a483645a400433ecb4d",
);

type TipHit = Hit<TipData>;

export default function AutoComplete() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelRootRef = useRef<Root | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    const search = autocomplete<TipHit>({
      container: containerRef.current,
      placeholder: "Search for tips...",
      insights: true,
      getSources({ query }) {
        return [
          {
            sourceId: "tips-search",
            getItems() {
              return getAlgoliaResults<TipHit>({
                searchClient,
                queries: [
                  {
                    indexName: "tips",
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <TipHitItem hit={item} components={components} />;
              },
              noResults() {
                return "Nothing found 😢, try submitting your own!";
              },
            },
          },
        ];
      },
      renderer: { createElement, Fragment, render: () => {} },
      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root;

          panelRootRef.current?.unmount();
          panelRootRef.current = createRoot(root);
        }

        panelRootRef.current.render(children);
      },
    });

    return () => {
      search.destroy();
    };
  }, []);

  return <div ref={containerRef} />;
}

type TipHitItemProps = {
  hit: TipHit;
  components: AutocompleteComponents;
};

function TipHitItem({ hit, components }: TipHitItemProps) {
  return (
    <a
      href={`https://config.tips/c/${hit.kind.id}/${hit.id}`}
      className="w-full font-bold"
    >
      <div className="aa-ItemContent">
        <div className='text-sm font-normal lowercase'>
          {hit.kind.name}
        </div>
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle capitalize">
            <components.Highlight hit={hit} attribute="title" />
          </div>
        </div>
      </div>
    </a>
  );
}
