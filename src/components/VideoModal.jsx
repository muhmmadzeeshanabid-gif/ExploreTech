import { X } from "lucide-react";
import { useEffect, useMemo } from "react";

const getYouTubeId = (input) => {
  if (!input) return null;
  try {
    const url = new URL(input);
    if (url.hostname === "youtu.be") {
      return url.pathname.replace("/", "") || null;
    }
    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      if (videoId) return videoId;
      const embedMatch = url.pathname.match(/\/embed\/([^/]+)/);
      if (embedMatch?.[1]) return embedMatch[1];
    }
    return null;
  } catch {
    return null;
  }
};

const VideoModal = ({ open, onClose, youtubeUrl, title = "Video" }) => {
  const videoId = useMemo(() => getYouTubeId(youtubeUrl), [youtubeUrl]);
  const embedUrl = useMemo(() => {
    if (!videoId) return null;
    const url = new URL(`https://www.youtube.com/embed/${videoId}`);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("mute", "1");
    url.searchParams.set("rel", "0");
    return url.toString();
  }, [videoId]);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

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
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <div className="text-sm font-semibold text-slate-800">{title}</div>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            onClick={onClose}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="bg-black">
          {embedUrl ? (
            <iframe
              className="h-full w-full aspect-video"
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex aspect-video items-center justify-center bg-slate-950 px-6 text-center text-sm text-slate-200">
              Invalid YouTube link.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;

