import type { Metadata } from "next";
import { LazyEmbed } from "@/components/LazyEmbed";

export const metadata: Metadata = {
  title: "Webkamera",
  description: "Élő kép az Árpádföldi Tenisz Club pályáiról.",
};

export default function Webcam() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-reveal="">
            Webkamera
          </p>
          <h1 className="h1" data-reveal="">
            Élő kép <em>a pályákról.</em>
          </h1>
          <p className="lead" data-reveal="">
            Indulás előtt nézd meg, mi a helyzet a salakon. A szabad időpontokat a foglalórendszer mutatja; a kamerák a
            pályák állapotát.
          </p>
        </div>
      </section>
      <section className="section section--tight" aria-label="Kameraképek">
        <div className="container">
          <div className="cams">
            <LazyEmbed
              src="https://rtsp.me/embed/rQtKFHnh"
              title="Webkamera 1 — Árpádföldi Tenisz Club"
              label="1-es kamera indítása"
              note="Az élő képet az rtsp.me szolgáltatás közvetíti."
              poster="/img/salakon-760.webp"
            />
            <LazyEmbed
              src="https://rtsp.me/embed/zftEZ37A/"
              title="Webkamera 2 — Árpádföldi Tenisz Club"
              label="2-es kamera indítása"
              note="Az élő képet az rtsp.me szolgáltatás közvetíti."
              poster="/img/locsolas-720.webp"
            />
          </div>
          <p className="small muted" style={{ marginTop: 20 }}>
            A pályán megfigyelő kamera működik a jogosulatlan pályahasználat ellenőrzésére. A felvételeket 24 órán belül
            töröljük.
          </p>
        </div>
      </section>
    </>
  );
}
