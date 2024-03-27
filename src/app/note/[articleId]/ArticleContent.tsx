"use client";
import parse from "html-react-parser";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism-dark.css";

type Props = {
  content: string;
};

export default function ArticleContent(props: Props) {
  useEffect(() => {
    Prism.highlightAll();

    // 追加
    const codeElements = document.querySelectorAll("[data-filename]");
    codeElements.forEach((codeElement) => {
      const filename = codeElement.getAttribute("data-filename");
      const spanElement = document.createElement("span");
      spanElement.textContent = filename;
      spanElement.className = "code-block-filename";
      codeElement.prepend(spanElement);
    });
  }, []);
  return parse(props.content);
}
