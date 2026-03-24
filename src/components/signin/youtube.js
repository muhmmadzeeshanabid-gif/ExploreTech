export const getYouTubeId = (input) => {
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

export const getYouTubeEmbedUrl = (youtubeUrl) => {
  const videoId = getYouTubeId(youtubeUrl);
  if (!videoId) return null;

  const url = new URL(`https://www.youtube.com/embed/${videoId}`);
  url.searchParams.set("rel", "0");
  return url.toString();
};
