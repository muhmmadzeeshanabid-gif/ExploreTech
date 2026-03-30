import { useMemo } from "react";
import { getYouTubeId, getYouTubeEmbedUrl } from "../../utils/youtubeUtils.js";
import { useModalScrollLock } from "../../hooks/useModalScrollLock.js";
import VideoModalHeader from "./VideoModalHeader.jsx";
import VideoContent from "./VideoContent.jsx";

const VideoModal = ({ open, onClose, youtubeUrl, title = "Video" }) => {
  const videoId = useMemo(() => getYouTubeId(youtubeUrl), [youtubeUrl]);
  const embedUrl = useMemo(() => getYouTubeEmbedUrl(videoId), [videoId]);

  useModalScrollLock(open, onClose);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.();
      }}
    >
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <VideoModalHeader title={title} onClose={onClose} />
        <VideoContent embedUrl={embedUrl} title={title} />
      </div>
    </div>
  );
};

export default VideoModal;
