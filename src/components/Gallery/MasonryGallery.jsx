import { useMemo } from 'react';
import AchievementCard from '../Cards/AchievementCard';
import { useLocalStorage } from '../Common/useLocalStorage';

export default function MasonryGallery({ items, searchQuery = '' }) {
  const [likes, setLikes] = useLocalStorage('cau-likes', {});

  const toggleLike = (id) => setLikes((prev) => ({ ...prev, [id]: !prev[id] }));

  const query = searchQuery.trim().toLowerCase();
  const visibleCount = useMemo(
    () => items.filter((item) => !query || item.title.toLowerCase().includes(query)).length,
    [items, query]
  );

  return (
    <>
      <div className="masonry-grid">
        {items.map((item) => {
          const hidden = query !== '' && !item.title.toLowerCase().includes(query);
          return (
            <AchievementCard
              key={item.id}
              item={item}
              hidden={hidden}
              liked={!!likes[item.id]}
              onToggleLike={toggleLike}
            />
          );
        })}
      </div>
      {query !== '' && visibleCount === 0 && (
        <p className="no-results">No stories match your search. Try a different word.</p>
      )}
    </>
  );
}
