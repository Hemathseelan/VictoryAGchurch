// Extracts a YouTube video ID from any common URL format.
// The media team only needs to paste the full YouTube URL; everything
// else (embed player, thumbnail) is derived automatically from this.
export function getYouTubeId(url = "") {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/
  );

  return match ? match[1] : null;
}

export function getYouTubeThumbnail(url = "") {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : null;
}

export function getYouTubeEmbedUrl(url = "") {
  const id = getYouTubeId(url);
  return id ? `https://www.youtube.com/embed/${id}` : null;
}