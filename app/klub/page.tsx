import type { Metadata } from "next";
import { Download } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { BOARD, CLUB } from "@/lib/site";

export const metadata: Metadata = {
  title: "Klubélet",
  description:
    "Házibajnokság, csapatbajnokság, klubtagság, vezetőség és dokumentumok. Támogasd adód 1%-ával az Árpádföldi Tenisz Clubot.",
};

export default function Club() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-reveal="">
            Klubélet
          </p>
          <h1 className="h1" data-reveal="">
            Egy klub, amit <em>a tagjai építettek.</em>
          </h1>
          <p className="lead" data-reveal="">
            Az ÁTC nyitott egyesület: főleg kerületiek játszanak itt, de a vendégeket is szívesen látjuk. A házibajnokság, a
            csapatmeccsek és a közös munka tartja össze a társaságot — gyerekektől a 70 felettiekig.
          </p>
        </div>
      </section>

      <section className="section section--tight" aria-label="Képek a klubéletből">
        <div className="container">
          <div className="mosaic">
            <Photo
              name="csapat-napfeny"
              widths={[800, 1500]}
              ratio={1500 / 887}
              alt="Az ÁTC csapata ütőkkel a háló előtt, napsütésben"
              className="photo--wide"
              sizes="(min-width: 900px) 66vw, 100vw"
            />
            <Photo name="szeniorok" widths={[720]} ratio={1} alt="Két szenior játékos klubmelegítőben a háló előtt" sizes="(min-width: 900px) 33vw, 50vw" />
            <Photo name="ebed-2" widths={[720]} ratio={1} alt="Közös ebéd a pálya melletti hosszú asztalnál" sizes="(min-width: 900px) 33vw, 50vw" />
          </div>
        </div>
      </section>

      <section className="section section--tight" id="hazibajnoksag" aria-labelledby="hb-title">
        <div className="container two-col">
          <div className="prose" data-reveal="">
            <h2 id="hb-title">Házibajnokság</h2>
            <p>
              Minden évben megrendezzük. A játékosok csoportokban körmérkőzést játszanak, utána egyenes kieséssel folytatódik
              a bajnokság: a csoportok első két helyezettje az A ágon, a következő kettő a B ágon. Két nyert hatos szett dönt,
              egy-egy után 10 pontos rövidítés.
            </p>
            <p>
              2019-ben három kategóriában — A, B és 60+ — játszottunk. A legfiatalabb indulók 12–15 évesek voltak, a
              legidősebbek 70 felettiek.
            </p>
          </div>
          <Photo
            name="hazibajnokok"
            widths={[800, 1500]}
            ratio={1500 / 1020}
            alt="Négy klubtag serleggel és érmekkel a faház előtt"
            caption="Díjátadó a faháznál, 2016 augusztusa"
            sizes="(min-width: 900px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="section section--tight" id="csapatbajnoksag" aria-labelledby="csb-title">
        <div className="container two-col">
          <Photo
            name="bajnokcsapat"
            widths={[800, 1600]}
            ratio={1600 / 762}
            alt="Az ÁTC csapata klubmelegítőben a háló előtt"
            caption="Az OB I-be jutott csapat, 2020"
            sizes="(min-width: 900px) 45vw, 100vw"
          />
          <div className="prose" data-reveal="">
            <h2 id="csb-title">Csapatbajnokság</h2>
            <p>
              2016-ban mindkét felnőttcsapatunk megnyerte a csoportját, és feljutott az OB III-ba. 2019-ben jött az OB II,
              2020-ban csoportelsőség és megnyert rájátszás után az OB I.
            </p>
            <p>
              2023-ban három csapattal indultunk: a 2-es csapat a budapesti I., a 3-as a budapesti III. osztályban játszott,
              és szenior (70+) csapatunk is volt.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="tagsag" aria-labelledby="tagsag-title">
        <div className="container two-col">
          <div className="prose" data-reveal="">
            <h2 id="tagsag-title">Klubtagság</h2>
            <p>
              A pályákat bárki foglalhatja, a klubtagsági edzésidőpontokra viszont csak klubtagok. Az egyesületi tagdíjat is a
              foglalórendszer „Bérleteim / jegyeim” menüjében lehet kártyával befizetni.
            </p>
            <p>
              Klubtag lennél? Írj az <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a> címre.
            </p>
          </div>
          <div className="board" data-reveal="">
            <div className="glass">
              <p className="coach__role">Elnökség</p>
              <ul>
                {BOARD.presidency.map((p) => (
                  <li key={p.name}>
                    {p.name} {p.role && <span>{p.role}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass">
              <p className="coach__role">Felügyelőbizottság</p>
              <ul>
                {BOARD.supervisory.map((p) => (
                  <li key={p.name}>
                    {p.name} {p.role && <span>{p.role}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="tamogatas" aria-labelledby="tamogatas-title">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Támogatás</p>
            <h2 className="h2" id="tamogatas-title">
              Adód 1%-a <em>a salakon.</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Ha szereted ezt a helyet, ajánld fel adód 1%-át az Árpádföldi Tenisz Clubnak. Köszönjük!
            </p>
          </div>
          <div className="contact" style={{ marginTop: 0 }}>
            <dl data-reveal="" style={{ gridColumn: "1 / -1" }}>
              <div>
                <dt>Adószám</dt>
                <dd className="num">{CLUB.taxId}</dd>
              </div>
              <div>
                <dt>Bankszámla</dt>
                <dd className="num">{CLUB.bank}</dd>
              </div>
              <div>
                <dt>Kedvezményezett</dt>
                <dd>Árpádföldi Tenisz Club</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="dokumentumok" aria-labelledby="docs-title">
        <div className="container two-col">
          <div className="prose">
            <h2 id="docs-title">Dokumentumok</h2>
            <p>Az egyesület alapszabályát a Közgyűlés 2015. november 30-án hagyta jóvá.</p>
          </div>
          <ul className="docs" data-reveal="">
            <li>
              <a className="glass" href="/docs/aszf.docx">
                <span>
                  Általános szerződési feltételek
                  <small>A pályabérlés feltételei · DOCX</small>
                </span>
                <Download />
              </a>
            </li>
            <li>
              <a className="glass" href="/docs/adatvedelem.docx">
                <span>
                  Adatvédelmi szabályzat
                  <small>GDPR · DOCX</small>
                </span>
                <Download />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
