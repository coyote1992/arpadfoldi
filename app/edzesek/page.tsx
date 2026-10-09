import type { Metadata } from "next";
import { Mail, Phone } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { COACHES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Edzések és utánpótlás",
  description:
    "Teniszedzés gyerekeknek 6 éves kortól Árpádföldön. Csoportos edzések Dobó Csillával, Szemes Bálinttal és Szénási Ágnessel, egyéni versenyzői edzés Dobó Jánossal.",
};

export default function Training() {
  return (
    <>
      <section className="page-hero">
        <div className="container two-col" style={{ alignItems: "end" }}>
          <div>
            <p className="eyebrow" data-reveal="">
              Edzések és utánpótlás
            </p>
            <h1 className="h1" data-reveal="">
              Az első ütéstől <em>a versenyekig.</em>
            </h1>
            <p className="lead" data-reveal="">
              Gyerekeknek 6 éves kortól, csoportban vagy egyénileg. Az ÁTC-ben több mint tíz éve működik versenytenisz-képzés,
              és új gyerekek az év bármely szakaszában csatlakozhatnak.
            </p>
          </div>
          <Photo
            name="junior"
            widths={[960]}
            ratio={960 / 613}
            alt="Fiatal játékos nyújtózkodó tenyeressel éri el a labdát"
            sizes="(min-width: 900px) 45vw, 100vw"
            priority
          />
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="kezdes-title">
        <div className="container two-col">
          <div>
            <h2 className="h2" id="kezdes-title" data-reveal="">
              Hogyan <em>kezdjünk?</em>
            </h2>
            <p className="lead" data-reveal="" style={{ marginTop: 24 }}>
              Nincs fix beiratkozási időszak. Hogy ki, mikor és melyik csoporthoz csatlakozik, az a gyerek életkorától, a
              tenisz iránti elszántságától és a kitűzött céloktól függ — ezt mindig először az edzővel kell megbeszélni.
            </p>
          </div>
          <ol className="join" data-reveal="">
            <li>
              <span className="step__num">01</span>
              <div>
                <h3>Hívd fel az egyik edzőt</h3>
                <p>Csoportos edzést Dobó Csilla, Szemes Bálint és Szénási Ágnes tart.</p>
              </div>
            </li>
            <li>
              <span className="step__num">02</span>
              <div>
                <h3>Beszéljétek meg, mi a cél</h3>
                <p>Hobbiból teniszezne, vagy versenyezni szeretne? Ettől függ, melyik csoport illik hozzá.</p>
              </div>
            </li>
            <li>
              <span className="step__num">03</span>
              <div>
                <h3>Kezdés a megfelelő csoportban</h3>
                <p>Akár év közben is. A legkisebbeknek külön „Play & Stay” gyerekpálya van.</p>
              </div>
            </li>
            <li>
              <span className="step__num">04</span>
              <div>
                <h3>Versenyzőknek: egyéni edzés</h3>
                <p>Dobó János csak egyéni edzéseket tart, a versenyzővé nevelés céljával.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="edzok-title">
        <div className="container">
          <div className="head">
            <p className="eyebrow">Edzők</p>
            <h2 className="h2" id="edzok-title">
              Közvetlenül <em>az edzőknél.</em>
            </h2>
            <p className="lead">Hívd vagy írj annak, akinél kezdenétek. Egy rövid beszélgetés után tudni fogjátok, hol a helye.</p>
          </div>
          <div className="coaches">
            {COACHES.map((c, i) => (
              <article
                key={c.name}
                className={`coach glass${c.kind === "solo" ? " coach--solo" : ""}`}
                data-reveal=""
                style={{ ["--d" as string]: `${i * 0.06}s` }}
              >
                <p className="coach__role">{c.role}</p>
                <h3>{c.name}</h3>
                {c.note && <p className="coach__note">{c.note}</p>}
                <ul className="coach__links">
                  <li>
                    <a href={`tel:${c.tel}`}>
                      <Phone /> {c.phone}
                    </a>
                  </li>
                  {c.email && (
                    <li>
                      <a href={`mailto:${c.email}`}>
                        <Mail /> {c.email}
                      </a>
                    </li>
                  )}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="eredmenyek-title">
        <div className="container two-col">
          <Photo
            name="serleg"
            widths={[760, 1364]}
            ratio={1364 / 611}
            alt="Fiatal győztes serleggel a salakpályán"
            caption="Házibajnokság, 2017"
            sizes="(min-width: 900px) 45vw, 100vw"
          />
          <div className="prose" data-reveal="">
            <h2 id="eredmenyek-title">A fiataloké a jövő</h2>
            <p>
              Az ÁTC versenyzői a felnőtt csapatban is helyet kapnak. 2020-ban, amikor a klub csapata feljutott az OB I-be,
              a keretben játszott a 17 éves <strong>Kincses Kristóf</strong>, aki évek óta válogatott és a felnőtt
              ranglistán a legjobb 50 között állt, és a 13 éves <strong>Kincses Kolos</strong>, akkor már 13-szoros magyar
              bajnok, korosztálya ranglistavezetője.
            </p>
            <blockquote>Nemhiába, a fiataloké a jövő!</blockquote>
            <p className="small muted">Amberger Árpád, az ÁTC elnöke · XVI. Kerületi Újság, 2020</p>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="tabor-title">
        <div className="container">
          <div className="notice glass" data-reveal="" style={{ maxWidth: 720 }}>
            <p>
              <strong id="tabor-title">Nyári napközis tenisztábor</strong>
            </p>
            <p>Hétfőtől péntekig, napközis rendszerben. Hogy idén mikor indul, és van-e még hely, az edzőktől tudod meg.</p>
          </div>
        </div>
      </section>
    </>
  );
}
