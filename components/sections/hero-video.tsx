"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Full-bleed background video for the homepage hero.
 * Honors prefers-reduced-motion by pausing and hiding the video.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReducedMotion(media.matches);
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {
          /* Autoplay may be blocked; muted + playsInline covers most cases */
        });
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      {!reducedMotion ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/msg-hero-15s-web.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="h-full w-full bg-[#0B3A6E]" aria-hidden="true" />
      )}
      {/* Keep the metropolitan footage visible while preserving headline contrast. */}
      <div className="absolute inset-0 bg-[#0B1930]/52" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1930]/92 via-[#0B3A6E]/42 to-[#0B1930]/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1930]/68 via-transparent to-[#0B1930]/24" />
    </div>
  );
}
