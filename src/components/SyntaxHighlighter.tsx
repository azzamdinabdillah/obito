import React, { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "../assets/css/syntax-highlighter.css";

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
  theme?:
    | "github"
    | "vs"
    | "vs2015"
    | "xcode"
    | "androidstudio"
    | "atom-one-dark";
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language = "javascript",
  className = "",
  showLineNumbers = false,
  theme = "theme-tokyo-night-dark",
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const getLineNumbers = () => {
    if (!showLineNumbers) return null;

    const lines = code.split("\n");
    return (
      <div className="line-numbers">
        {lines.map((_, index) => (
          <div key={index} className="line-number">
            {index + 1}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={`syntax-highlighter dark ${className}`}>
      {showLineNumbers && (
        <div className="line-numbers-container">{getLineNumbers()}</div>
      )}
      <pre className="code-container">
        <code
          ref={codeRef}
          className={`language-${language}`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default SyntaxHighlighter;
