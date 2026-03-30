const VideoContent = ({ embedUrl, title }) => {
  return (
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
  );
};

export default VideoContent;
