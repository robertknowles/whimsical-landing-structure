import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

interface VimeoPlayerProps {
  videoId: string;
}

const VimeoPlayer = ({ videoId }: VimeoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    playerRef.current = new Player(containerRef.current, {
      id: videoId,
      background: true,
      muted: true,
      autopause: false,
      controls: false,
      playsinline: true,
      transparent: false,
      loop: true,
      responsive: true
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playerRef.current?.play().catch((error) => {
              console.warn("Autoplay failed:", error);
            });
          } else {
            playerRef.current?.pause().catch((error) => {
              console.warn("Pause failed:", error);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto h-[40vh] min-h-[300px] md:min-h-[400px]">
      <div className="absolute inset-0">
        <div
          ref={containerRef}
          className="w-full h-full rounded-xl overflow-hidden [&>div]:!w-full [&>div]:!h-full [&>iframe]:!w-full [&>iframe]:!h-full"
        />
      </div>
    </div>
  );
};

export default VimeoPlayer;