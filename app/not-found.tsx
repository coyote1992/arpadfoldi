import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "70svh" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="h1">
          Ez a labda <em>kiment.</em>
        </h1>
        <p className="lead">A keresett oldal nem létezik, vagy elköltözött. A főoldalról mindent elérsz.</p>
        <div className="actions">
          <Link className="btn" href="/">
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </section>
  );
}
