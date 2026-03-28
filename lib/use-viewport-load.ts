"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Hook to lazy-load content when it enters the viewport.
 * Returns [callbackRef, isVisible] — attach ref to a wrapper div,
 * render content only when isVisible is true.
 */
export function useViewportLoad(
  rootMargin = "200px",
  delay = 1000
): [(node: HTMLDivElement | null) => void, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const [hasEngaged, setHasEngaged] = useState(false);
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  const callbackRef = useCallback((el: HTMLDivElement | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEngaged(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, rootMargin, isVisible]);

  useEffect(() => {
    if (hasEngaged && !isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [hasEngaged, isVisible, delay]);

  return [callbackRef, isVisible];
}
