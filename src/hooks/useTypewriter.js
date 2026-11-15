import { useEffect, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Types each word, pauses, deletes it, then moves to the next one (loops). */
export function useTypewriter(words, { typeMs = 85, deleteMs = 45, pauseMs = 1400 } = {}) {
  const [text, setText] = useState(prefersReducedMotion() ? words[0] : '');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const word = words[wordIndex % words.length];

    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = pauseMs;

    const id = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, pauseMs]);

  return text;
}
