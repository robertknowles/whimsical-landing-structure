import { useEffect, useRef } from 'react';
import Player from '@vimeo/player';

interface VimeoPlayerProps {
  videoId: string;
}

const VimeoPlayer = ({ videoId }: VimeoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Vimeo player
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write');
    iframe.src = `https://player.vimeo.com/video/${videoId}?background=1&autopause=0&transparent=0&app_id=58479`;
    
    containerRef.current.appendChild(iframe);

    // Initialize player with options
    playerRef.current = new Player(iframe, {
      background: true,
      muted: true,
      controls: false,
    });

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playerRef.current?.play();
          } else {
            playerRef.current?.pause();
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the video is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      playerRef.current?.destroy();
    };
  }, [videoId]);

  return (
    <div ref={containerRef} style={{ padding: '55.33% 0 0 0', position: 'relative' }} />
  );
};

export default VimeoPlayer;