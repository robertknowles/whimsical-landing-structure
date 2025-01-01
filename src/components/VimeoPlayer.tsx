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

    // Initialize Vimeo player with specific options
    playerRef.current = new Player(containerRef.current, {
      id: videoId,
      background: true,
      muted: true,
      autopause: false,
      controls: false,
      playsinline: true,
      transparent: false,
      loop: true
    });

    // Set up Intersection Observer for viewport-based playback
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
    <div className="relative w-full max-w-[800px] mx-auto">
      <div className="aspect-video relative">
        <div
          ref={containerRef}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default VimeoPlayer;