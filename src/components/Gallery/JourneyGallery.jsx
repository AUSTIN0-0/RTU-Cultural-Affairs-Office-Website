export default function JourneyGallery({ folder, name, count = 9 }) {
  const photos = Array.from({ length: count }, (_, i) => `/media/${folder}/S${i + 1}.jpg`);

  return (
    <div className="journey-grid">
      {photos.map((src) => (
        <a key={src} className="journey-item" href={src} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={`${name} performance photo`} loading="lazy" />
        </a>
      ))}
    </div>
  );
}
