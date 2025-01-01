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
      autopause: false,
      background: false,
      controls: true,
      dnt: true,
      playsinline: true,
      transparent: false,
    });

    return () => {
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