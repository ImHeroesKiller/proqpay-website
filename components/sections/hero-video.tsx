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
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero-workforce.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="h-full w-full bg-[#0B3A6E]" aria-hidden="true" />
      )}
      {/* Navy overlays for text readability */}
      <div className="absolute inset-0 bg-[#0B1930]/72" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1930]/90 via-[#0B3A6E]/55 to-[#0B1930]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1930]/80 via-transparent to-[#0B1930]/35" />
    </div>
  );
}
