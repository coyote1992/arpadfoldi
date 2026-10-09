"use client";

import { useState } from "react";

/**
 * A third-party frame (map, webcam) that loads only when asked: no cookies or traffic to the
 * provider until the visitor clicks, and no cost on page load.
 */
export function LazyEmbed({
  src,
  title,
  label,
  note,
  poster,
  className = "",
}: {
  src: string;
  title: string;
  label: string;
  note?: string;
  poster?: string;
  className?: string;
}) {
  const [on, setOn] = useState(false);
  return (
    <div className={`embed glass ${className}`}>
      {on ? (
        <iframe src={src} title={title} loading="lazy" allow="autoplay; fullscreen" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <>
          {poster && <img className="embed__poster" src={poster} alt="" aria-hidden="true" loading="lazy" />}
          <div className="embed__inner">
            <button type="button" className="btn btn--sm" onClick={() => setOn(true)}>
              {label}
            </button>
            {note && <p>{note}</p>}
          </div>
        </>
      )}
    </div>
  );
}
