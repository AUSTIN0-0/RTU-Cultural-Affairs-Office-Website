import { Link } from 'react-router-dom';
import { IconBookmark } from '../Common/Icons';

export default function TroupeCard({ troupe, hidden, bookmarked, onToggleBookmark }) {
  return (
    <article className="troupe-card" data-cat={troupe.category} hidden={hidden}>
      <div className="image-container">
        <img src={troupe.cardImage} alt={troupe.name} loading="lazy" />
        <span className="card-badge">{troupe.craft}</span>
        <button
          className={`like-btn${bookmarked ? ' active' : ''}`}
          type="button"
          aria-label={`Bookmark ${troupe.name}`}
          onClick={() => onToggleBookmark(troupe.slug)}
        >
          <IconBookmark />
        </button>
      </div>
      <div className="card-content">
        <h3>{troupe.name}</h3>
        <p>{troupe.cardBlurb}</p>
        <div className="card-footer">
          <span className="members">{troupe.craft}</span>
          <Link to={`/troupes/${troupe.slug}`} className="join-btn">Visit troupe →</Link>
        </div>
      </div>
    </article>
  );
}
