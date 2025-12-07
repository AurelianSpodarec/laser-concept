'use client'

import { useEffect, useState } from "react";

function useScrollHeaderBorder(headerHeight: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > headerHeight);
          ticking = false;
        });
        ticking = true;
      }
    };

    setScrolled(window.scrollY > headerHeight);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerHeight]);

  return scrolled;
}

export default useScrollHeaderBorder
