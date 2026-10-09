import Link from "next/link";
import { BallMark } from "./Icons";

export function Wordmark({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="wordmark" aria-label="Árpádföldi Tenisz Club — főoldal" onClick={onClick}>
      <BallMark className="wordmark__ball" />
      <span className="wordmark__text">
        <span className="wordmark__name">Árpádföldi TC</span>
        <span className="wordmark__sub">Tenisz Club · 1985</span>
      </span>
    </Link>
  );
}
