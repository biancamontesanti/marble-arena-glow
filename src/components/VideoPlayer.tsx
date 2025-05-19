import React, { useEffect, useRef, useState, useCallback } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/http-streaming';
import Hls from 'hls.js';
import './videojs-theme.css';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  controls?: boolean;
  className?: string;
  width?: string | number;
  height?: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoplay = false,
  controls = true,
  className = '',
  width = '100%',
  height = 'auto'
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<any>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  const initializePlayer = useCallback(() => {
    if (!videoRef.current) return;
    
    const videoElement = videoRef.current;
    
    // Check if the browser supports HLS natively
    const isHlsNativelySupported = videoElement.canPlayType('application/vnd.apple.mpegurl') !== '';
    
    // Primary approach: use videojs
    try {
      // Dispose of any existing player
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
      
      playerRef.current = videojs(videoElement, {
        sources: [{
          src,
          type: 'application/x-mpegURL' // M3U8 MIME type
        }],
        controls,
        autoplay,
        // Setting muted true allows autoplay to work in most browsers
        muted: autoplay,
        preload: 'auto',
        fluid: true,
        poster,
        responsive: true,
        playbackRates: [0.5, 1, 1.5, 2],
        liveui: true,
        html5: {
          hls: {
            overrideNative: !isHlsNativelySupported,
            enableLowInitialPlaylist: true,
            handleManifestRedirects: true
          },
          nativeVideoTracks: !isHlsNativelySupported,
          nativeAudioTracks: !isHlsNativelySupported,
          nativeTextTracks: !isHlsNativelySupported
        }
      });

      // Add custom classes
      if (className) {
        playerRef.current.addClass(className);
      }
      
      // Handle errors
      playerRef.current.on('error', () => {
        const error = playerRef.current.error();
        console.error('Video.js error:', error);
        
        if (retryCount < maxRetries) {
          setRetryCount(prev => prev + 1);
          console.log(`Retrying playback (${retryCount + 1}/${maxRetries})...`);
          
          // Wait a bit and try again
          setTimeout(() => {
            initializePlayer();
          }, 2000);
        } else {
          setError('Could not play the video after multiple attempts. Please try again later.');
        }
      });

    } catch (e) {
      console.error('Video.js initialization error:', e);
      
      // Fallback: If videojs fails, try direct HLS.js implementation
      if (Hls.isSupported()) {
        if (hlsRef.current) {
          hlsRef.current.destroy();
        }
        
        hlsRef.current = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          fragLoadingMaxRetry: 5,
          manifestLoadingMaxRetry: 5,
          levelLoadingMaxRetry: 5
        });
        
        hlsRef.current.loadSource(src);
        hlsRef.current.attachMedia(videoElement);
        
        hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
          if (autoplay) {
            videoElement.muted = true; // Muted autoplay is more likely to succeed
            videoElement.play().catch(e => {
              console.warn('Autoplay prevented:', e);
            });
          }
        });
        
        hlsRef.current.on(Hls.Events.ERROR, (event, data) => {
          console.error('HLS.js error:', data);
          if (data.fatal) {
            if (retryCount < maxRetries) {
              setRetryCount(prev => prev + 1);
              
              switch(data.type) {
                case Hls.ErrorTypes.NETWORK_ERROR:
                  console.log('Fatal network error, trying to recover...');
                  hlsRef.current?.startLoad();
                  break;
                case Hls.ErrorTypes.MEDIA_ERROR:
                  console.log('Fatal media error, trying to recover...');
                  hlsRef.current?.recoverMediaError();
                  break;
                default:
                  console.log('Fatal error, restarting player...');
                  // Cannot recover, restart the player
                  setTimeout(() => {
                    if (hlsRef.current) {
                      hlsRef.current.destroy();
                      hlsRef.current = null;
                      initializePlayer();
                    }
                  }, 2000);
                  break;
              }
            } else {
              setError('Could not play the video after multiple attempts. Please try again later.');
              if (hlsRef.current) {
                hlsRef.current.destroy();
                hlsRef.current = null;
              }
            }
          }
        });
      } else if (isHlsNativelySupported) {
        // For Safari which supports HLS natively
        videoElement.src = src;
        if (autoplay) {
          videoElement.muted = true; // Muted autoplay is more likely to succeed
        }
        videoElement.addEventListener('loadedmetadata', () => {
          if (autoplay) {
            videoElement.play().catch(e => {
              console.warn('Autoplay prevented:', e);
              setError('Could not autoplay the video. Please click the play button to start.');
            });
          }
        });
        
        videoElement.addEventListener('error', () => {
          console.error('Video element error:', videoElement.error);
          if (retryCount < maxRetries) {
            setRetryCount(prev => prev + 1);
            // Wait a bit and try again
            setTimeout(() => {
              videoElement.load();
              videoElement.play().catch(console.error);
            }, 2000);
          } else {
            setError('Could not play the video after multiple attempts. Please try again later.');
          }
        });
      }
    }
  }, [src, autoplay, controls, poster, className, retryCount, maxRetries]);

  useEffect(() => {
    initializePlayer();
    
    // Clean up
    return () => {
      setError(null);
      setRetryCount(0);
      
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
      
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [src, initializePlayer]);

  return (
    <div data-vjs-player className="video-player-container">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered vjs-theme-bolada"
        width={width}
        height={height}
        poster={poster}
        controls={controls}
        playsInline
      />
      {error && (
        <div className="video-error-overlay">
          <p>{error}</p>
          <button 
            className="retry-button"
            onClick={() => {
              setError(null);
              setRetryCount(0);
              initializePlayer();
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 