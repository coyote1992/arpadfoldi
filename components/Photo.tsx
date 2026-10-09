/** A photo card. `name` is a file family in /public/img, exported by scripts/images.py. */
export function Photo({
  name,
  widths,
  ratio,
  alt,
  caption,
  sizes = "(min-width: 900px) 50vw, 100vw",
  className = "",
  priority = false,
  reveal = true,
  position,
}: {
  name: string;
  widths: number[];
  ratio: number;
  alt: string;
  caption?: React.ReactNode;
  sizes?: string;
  className?: string;
  priority?: boolean;
  reveal?: boolean;
  position?: string;
}) {
  const largest = widths[widths.length - 1];
  return (
    <figure className={`photo ${className}`} data-reveal={reveal ? "" : undefined}>
      <img
        src={`/img/${name}-${largest}.webp`}
        srcSet={widths.map((w) => `/img/${name}-${w}.webp ${w}w`).join(", ")}
        sizes={sizes}
        width={largest}
        height={Math.round(largest / ratio)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        style={position ? { objectPosition: position } : undefined}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
