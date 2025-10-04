"use client";

import { ReactNode, useEffect } from "react";

interface ScrollGsapProps {
  children: ReactNode;
  smooth?: number;
}

export default function ScrollGsap({ children, smooth = 1.2 }: ScrollGsapProps) {
  useEffect(() => {
    let smoother: any = null;

    const initSmoothScroll = async () => {
      const { gsap } = await import("gsap");
      const { ScrollSmoother } = await import("gsap/dist/ScrollSmoother");

      gsap.registerPlugin(ScrollSmoother);

      const wrapper = document.querySelector("#scroll-wrapper") as HTMLElement;
      const content = document.querySelector("#scroll-content") as HTMLElement;

      if (!wrapper || !content) return;

      smoother = ScrollSmoother.create({
        wrapper,
        content,
        smooth,
        effects: true,
      });
    };

    initSmoothScroll();

    return () => {
      if (smoother) smoother.kill();
    };
  }, [smooth]);

  return (
    <div id="scroll-wrapper" className="overflow-hidden relative">
      <div id="scroll-content">{children}</div>
    </div>
  );
}
