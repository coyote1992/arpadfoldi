import type { Metadata } from "next";
import Link from "next/link";
import { BookingCard, BookingSteps, PassCards } from "@/components/Booking";
import { ArrowRight, ArrowUpRight } from "@/components/Icons";
import { PriceRibbon } from "@/components/PriceRibbon";
import { CLUB, CONTACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Árak és pályafoglalás",
  description:
    "Óradíjak 2026-ban, bérletek, online foglalás az ÁTC e-foglalójában, fizetés kártyával vagy utalással, pályahasználati rend és parkolás.",
};

export default function Booking() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-reveal="">
            Árak és foglalás
          </p>
          <h1 className="h1" data-reveal="">
            Foglalj pályát, <em>klubtagság nélkül is.</em>
          </h1>
          <p className="lead" data-reveal="">
            Az ÁTC pályái nyitottak: bárki foglalhat, akinek van a foglalást fedező jegye vagy bérlete. Csak a
            klubtagsági edzésidőpontok vannak fenntartva a klubtagoknak.
          </p>
          <div className="actions" data-reveal="">
            <a className="btn" href={CLUB.booking} target="_blank" rel="noopener">
              Tovább az e-foglalóba <ArrowUpRight />
            </a>
            <Link className="btn btn--ghost" href="#arak">
              Óradíjak
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="lepesek">
        <div className="container">
          <h2 className="sr-only" id="lepesek">
            A foglalás lépései
          </h2>
          <div className="booking">
            <BookingSteps />
            <BookingCard />
          </div>
        </div>
      </section>

      <section className="section" id="arak" aria-labelledby="arak-title">
        <div className="container">
          <div className="head">
            <p className="eyebrow">Óradíjak · 2026</p>
            <h2 className="h2" id="arak-title">
              Mennyibe kerül <em>egy óra?</em>
            </h2>
            <p className="lead">
              A pályadíj napszaktól függ: hétköznap 10 és 13 óra között a legolcsóbb, hétköznap 15 órától és hétvégén
              délelőtt a legdrágább. Érintsd meg a sávokat a részletekért.
            </p>
          </div>
          <div className="prices">
            <div data-reveal="">
              <PriceRibbon />
            </div>
            <PassCards />
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="fizetes-title">
        <div className="container two-col">
          <div className="prose" data-reveal="">
            <h2 id="fizetes-title">Fizetés</h2>
            <p>
              Belépés után a <strong>„Bérleteim / jegyeim”</strong> menüpontban fizethetsz bankkártyával: itt veheted meg
              a bérleteket, az egyedi óradíjas jegyeket, az egyedi összegű szezonbérletet és az egyesületi tagdíjat is.
              Ugyanitt látod a bérleteid aktuális egyenlegét.
            </p>
            <p>
              Ha a bérleten maradt még összeg, de egy foglalásra már nem elég, vegyél új bérletet: a rendszer a régi
              maradékát automatikusan hozzáadja az új egyenlegéhez.
            </p>
          </div>
          <div className="notice glass" data-reveal="" style={{ alignSelf: "start" }}>
            <p>
              <strong>Nem tudsz kártyával fizetni?</strong>
            </p>
            <p>
              Utalhatsz az egyesület számlájára: <strong className="num">{CLUB.bank}</strong>. A közleménybe feltétlenül
              írd be azt az e-mail címet, amellyel a foglalórendszerben regisztráltál — a bérletet vagy jegyet ennek a
              fióknak osztjuk ki.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight" id="rend" aria-labelledby="rend-title">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Házirend</p>
            <h2 className="h2" id="rend-title">
              Pályahasználati <em>rend</em>
            </h2>
            <p className="lead" style={{ marginTop: 24 }}>
              Salakon a pálya állapota mindenkin múlik. Ezért a karbantartás a játékidő része.
            </p>
          </div>
          <ol className="rules" data-reveal="">
            <li>A pályák csak előzetes foglalással és a pályadíj megfizetése után használhatók.</li>
            <li>A játék egész órakor kezdődik, és 55 vagy 115 percig tart. Egy foglalás legfeljebb két óra.</li>
            <li>
              Játék után a pályát kefével át kell húzni, a vonalakat lesöpörni, majd a pályát átlocsolni. Ha indokolt, a
              lehúzóvassal is.
            </li>
            <li>A pályát rendben kell átadni a következő játékosoknak.</li>
            <li>A másik pályáról átgurult labdát lábbal vagy ütővel passzold vissza.</li>
            <li>A pályán megfigyelő kamera működik a jogosulatlan pályahasználat ellenőrzésére. A felvételeket 24 órán belül töröljük.</li>
          </ol>
        </div>
      </section>

      <section className="section section--tight" id="parkolas" aria-labelledby="parkolas-title">
        <div className="container two-col">
          <div className="prose" data-reveal="">
            <h2 id="parkolas-title">Parkolás és bejutás</h2>
            <p>
              A parkoló kapuja napközben nyitva van. Egyébként a <strong>Shelly</strong> mobilalkalmazással nyílik: töltsd
              le, regisztrálj, és e-mailben elküldjük a hozzáférést.
            </p>
            <p>Ha ez nem sikerülne, a focipálya felőli kiskapun is be tudsz jönni.</p>
          </div>
          <div className="prose" data-reveal="">
            <h2>Segítség</h2>
            <p>
              <strong>Regisztráció, parkolókapu:</strong> {CONTACTS.booking.name},{" "}
              <a href={`tel:${CONTACTS.booking.tel}`}>{CONTACTS.booking.phone}</a>
            </p>
            <p>
              <strong>Technikai gond a foglalórendszerrel:</strong> {CONTACTS.tech.name},{" "}
              <a href={`tel:${CONTACTS.tech.tel}`}>{CONTACTS.tech.phone}</a>
            </p>
            <p>
              <a className="link-arrow" href="/docs/aszf.docx">
                Általános szerződési feltételek (DOCX) <ArrowRight className="" />
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
