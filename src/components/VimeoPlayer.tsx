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
    
    containerRef.current.innerHTML = ''; // Clear any existing content
    containerRef.current.appendChild(iframe);

    // Initialize player with options
    const player = new Player(iframe, {
      id: videoId,
      background: true,
      muted: true,
      controls: false,
      autoplay: false,
    });

    playerRef.current = player;

    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            player.play().catch(error => {
              console.warn('Autoplay failed:', error);
            });
          } else {
            player.pause().catch(error => {
              console.warn('Pause failed:', error);
            });
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
      if (playerRef.current) {
        playerRef.current.destroy().catch(error => {
          console.warn('Player destruction failed:', error);
        });
      }
    };
  }, [videoId]);

  return (
    <div ref={containerRef} style={{ padding: '56.25% 0 0 0', position: 'relative' }} />
  );
};

export default VimeoPlayer;