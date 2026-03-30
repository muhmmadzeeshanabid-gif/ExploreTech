import { X } from "lucide-react";

const VideoModalHeader = ({ title, onClose }) => {
  return (
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
  );
};

export default VideoModalHeader;
