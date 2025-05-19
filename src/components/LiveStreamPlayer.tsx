import React from 'react';
import VideoPlayer from './VideoPlayer';

interface LiveStreamPlayerProps {
  streamUrl: string;
  title?: string;
  description?: string;
  poster?: string;
}

const LiveStreamPlayer: React.FC<LiveStreamPlayerProps> = ({
  streamUrl,
  title = 'Live Stream',
  description,
  poster
}) => {
  return (
    <div className="video-container">
      {title && <h2 className="text-2xl md:text-3xl font-bold mb-3 text-bolada-gold">{title}</h2>}
      {description && (
        <p className="mb-4 text-sm md:text-base text-gray-300">{description}</p>
      )}
      
      <div className="video-wrapper mb-6">
        <VideoPlayer
          src={streamUrl}
          poster={poster}
          autoplay={true}
          controls={true}
          className="shadow-xl"
        />
      </div>
    </div>
  );
};

export default LiveStreamPlayer; 