"use client";

import { useEffect, useState } from "react";

export function TypingText({ words }: { words: readonly string[] }) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, text.length + 1);
          setText(nextText);
          if (nextText === currentWord) {
            setIsDeleting(true);
          }
        } else {
          const nextText = currentWord.slice(0, Math.max(0, text.length - 1));
          setText(nextText);
          if (nextText.length === 0) {
            setIsDeleting(false);
            setWordIndex((value) => value + 1);
          }
        }
      },
      isDeleting ? 45 : text === currentWord ? 1200 : 90
    );

    return () => clearTimeout(timeout);
  }, [isDeleting, text, wordIndex, words]);

  return (
    <span className="inline-flex min-h-8 items-center text-cyan-300">
      {text}
      <span className="ml-1 h-6 w-px animate-pulse bg-cyan-300" />
    </span>
  );
}
