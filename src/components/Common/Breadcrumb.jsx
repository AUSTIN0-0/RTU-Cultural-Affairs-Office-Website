import { Link } from 'react-router-dom';

export default function Breadcrumb({ trail }) {
  // trail: [{ label, to }] — the last item renders as plain text (current page)
  return (
    <p className="breadcrumb">
      {trail.map((item, i) => {
        const isLast = i === trail.length - 1;
        return (
          <span key={item.label} style={{ display: 'contents' }}>
            {isLast || !item.to ? <span>{item.label}</span> : <Link to={item.to}>{item.label}</Link>}
            {!isLast && <span aria-hidden="true">/</span>}
          </span>
        );
      })}
    </p>
  );
}
