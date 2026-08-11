import type * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        aspect?: string;
        "media-id"?: string;
      };
    }
  }
}

export {};
