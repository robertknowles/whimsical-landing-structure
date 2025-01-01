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
      background: true, // Hides all controls
      muted: true, // Ensures video is muted for autoplay
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
      { threshold: 0.3 } // Trigger when 30% of the video is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup function
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
    <div
      ref={containerRef}
      style={{
        padding: "56.25% 0 0 0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default VimeoPlayer;