export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = false, id }) {
  return (
    <div className={`section-heading${light ? ' light' : ''}`} style={center ? { marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' } : undefined}>
      {eyebrow && <p className="eyebrow" style={center ? { justifyContent: 'center' } : undefined}>{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {subtitle && <p className="section-sub" style={center ? { margin: '0 auto' } : undefined}>{subtitle}</p>}
    </div>
  );
}
