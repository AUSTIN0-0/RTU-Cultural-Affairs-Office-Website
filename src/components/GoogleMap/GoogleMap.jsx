import { IconMapPin } from '../Common/Icons';

export default function GoogleMap({
  query = 'Rizal Technological University, Boni Avenue, Mandaluyong City',
  label = 'RTU Boni Campus',
}) {
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const viewHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

  return (
    <div>
      <div className="footer-map-frame">
        <iframe
          src={embedSrc}
          title={`Map showing ${label}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <a className="view-map-btn" href={viewHref} target="_blank" rel="noopener noreferrer">
        <IconMapPin /> View on Google Maps
      </a>
    </div>
  );
}
