import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypewriterOptions = {
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function useRotatingTypewriter(blocks: string[], options?: TypewriterOptions) {
  const shouldReduceMotion = useReducedMotion();
  const typingSpeed = options?.typingSpeed ?? 28;
  const deletingSpeed = options?.deletingSpeed ?? 16;
  const pauseDuration = options?.pauseDuration ?? 2400;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(shouldReduceMotion ? blocks[0] ?? "" : "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!blocks.length) {
      return;
    }

    if (shouldReduceMotion) {
      const timeout = window.setTimeout(() => {
        const nextIndex = (currentIndex + 1) % blocks.length;
        setCurrentIndex(nextIndex);
        setDisplayText(blocks[nextIndex] ?? "");
      }, pauseDuration + 1200);

      return () => window.clearTimeout(timeout);
    }

    const activeBlock = blocks[currentIndex] ?? "";
    const isComplete = displayText === activeBlock;
    const isEmpty = displayText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && !isComplete) {
          setDisplayText(activeBlock.slice(0, displayText.length + 1));
          return;
        }

        if (!isDeleting && isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && !isEmpty) {
          setDisplayText(activeBlock.slice(0, displayText.length - 1));
          return;
        }

        setIsDeleting(false);
        setCurrentIndex((value) => (value + 1) % blocks.length);
      },
      !isDeleting && isComplete ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [
    blocks,
    currentIndex,
    deletingSpeed,
    displayText,
    isDeleting,
    pauseDuration,
    shouldReduceMotion,
    typingSpeed,
  ]);

  return displayText;
}
