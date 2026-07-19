import { IconHeart } from '../Common/Icons';
import { useRevealRef } from '../Common/useRevealRef';

export default function AchievementCard({ item, hidden, liked, onToggleLike }) {
  const ref = useRevealRef();

  return (
    <figure ref={ref} className="gallery-item fade-in" style={hidden ? { display: 'none' } : undefined}>
      <img src={item.img} alt="" loading="lazy" />
      <button
        className={`like-btn${liked ? ' active' : ''}`}
        type="button"
        aria-label="Like this achievement"
        onClick={() => onToggleLike(item.id)}
      >
        <IconHeart />
      </button>
      <figcaption>
        <span className="tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <p>{item.event}</p>
      </figcaption>
    </figure>
  );
}
