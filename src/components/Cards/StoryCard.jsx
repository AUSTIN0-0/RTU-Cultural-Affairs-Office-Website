import { useToast } from '../Common/ToastContext';

export default function StoryCard({ story }) {
  const showToast = useToast();

  const handleShare = async () => {
    const shareData = { title: 'Kultura Rizalia', text: story.title, url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        /* user cancelled — fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(`${story.title} — ${window.location.href}`);
      showToast('Link copied to clipboard');
    } catch {
      showToast('Could not copy link');
    }
  };

  return (
    <article className={`story-card${story.featured ? ' featured' : ''}`}>
      <div className="story-media">
        <img src={story.img} alt="" loading="lazy" />
        {story.featured && <span className="tag trending">Trending</span>}
      </div>
      <div className="story-body">
        <p className="story-meta">
          <span>{story.meta}</span>
          <span aria-hidden="true">·</span>
          <span>{story.readTime}</span>
        </p>
        <h3>{story.title}</h3>
        <p>{story.excerpt}</p>
        <div className="story-footer">
          <a href={story.link} className="read-more" target="_blank" rel="noopener noreferrer">Read the full story →</a>
          <button className="share-btn" type="button" aria-label="Share this story" onClick={handleShare}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0-3 3l.04.38-6.2 3.62a3 3 0 1 0 0 4l6.2 3.62L12 19a3 3 0 1 0 3-3l-.83.03 6.2-3.62A3 3 0 0 0 21 11a3 3 0 0 0-3-3Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
