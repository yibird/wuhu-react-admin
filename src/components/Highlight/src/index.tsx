import React, { useMemo, useRef } from "react";
import type { HighlightProps } from "./types";
import { styleToString } from "@/utils/dom";

function Highlight({
  queries = "",
  content = "",
  caseSensitive = false,
  diacriticsSensitive = true,
  wholeWordMatch = true,
  highlightStyle = {},
  highlightClass = "",
  highlightTag = "mark",
  onMatch,
}: HighlightProps) {
  const count = useRef(0);
  const keywordArray = Array.isArray(queries) ? queries : Array.of(queries);
  if (keywordArray.length === 0 || content.length === 0) return null;

  const renderTag = (tag: string, str: string) => {
    const tagEl = document.createElement(tag);
    tagEl.innerText = str;
    tagEl.setAttribute("style", styleToString(highlightStyle));
    tagEl.className = highlightClass;
    return tagEl.outerHTML;
  };

  const flags = useMemo(() => {
    let flags = "g";
    if (caseSensitive) {
      flags += "i";
    }
    if (diacriticsSensitive) {
      flags += "u";
    }
    return flags;
  }, [caseSensitive, diacriticsSensitive]);

  const __html = useMemo(() => {
    return keywordArray
      .map((keyword) => {
        if (keyword) {
          const reg = new RegExp(keyword, flags);
          return content.replace(reg, (str, offset) => {
            onMatch && onMatch(str, count.current, offset);
            return renderTag(highlightTag, str);
          });
        }
      })
      .join("");
  }, [
    queries,
    content,
    caseSensitive,
    highlightStyle,
    highlightClass,
    highlightTag,
  ]);

  return <div dangerouslySetInnerHTML={{ __html }} />;
}

export default Highlight;
