import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@/components/Icons";
import { LazyEmbed } from "@/components/LazyEmbed";
import { CLUB, CONTACTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description: "Árpádföldi Tenisz Club, 1162 Budapest, Állás utca 35. E-mail, telefonszámok, térkép és parkolás.",
};

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-reveal="">
            Kapcsolat
          </p>
          <h1 className="h1" data-reveal="">
            Állás utca 35. <em>Árpádföld.</em>
          </h1>
          <p className="lead" data-reveal="">
            Pályafoglaláshoz nem kell telefonálnod: az e-foglalóban minden szabad időpont látszik. Ha mégis kérdésed van,
            itt találsz minket.
          </p>
        </div>
      </section>
      <section className="section section--tight">
        <div className="container contact" style={{ marginTop: 0 }}>
          <dl data-reveal="">
            <div>
              <dt>Cím</dt>
              <dd>
                {CLUB.address}
                <small>Árpádföld, Budapest XVI. kerület</small>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
              </dd>
            </div>
            <div>
              <dt>Online foglalás</dt>
              <dd>
                <a href={CLUB.booking} target="_blank" rel="noopener">
                  {CLUB.bookingLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt>Foglalás, parkoló</dt>
              <dd>
                <a href={`tel:${CONTACTS.booking.tel}`}>{CONTACTS.booking.phone}</a>
                <small>{CONTACTS.booking.name}</small>
              </dd>
            </div>
            <div>
              <dt>Foglalórendszer</dt>
              <dd>
                <a href={`tel:${CONTACTS.tech.tel}`}>{CONTACTS.tech.phone}</a>
                <small>{CONTACTS.tech.name} · technikai segítség</small>
              </dd>
            </div>
            <div>
              <dt>Egyesületi elnök</dt>
              <dd>
                <a href={`tel:${CONTACTS.president.tel}`}>{CONTACTS.president.phone}</a>
                <small>{CONTACTS.president.name}</small>
              </dd>
            </div>
            <div>
              <dt>Edzések</dt>
              <dd>
                <Link href="/edzesek/">Az edzők elérhetősége</Link>
              </dd>
            </div>
            <div>
              <dt>Facebook</dt>
              <dd>
                <a href={CLUB.facebook} target="_blank" rel="noopener">
                  facebook.com/arpadfolditc
                </a>
              </dd>
            </div>
          </dl>
          <div style={{ display: "grid", gap: 14, alignContent: "start" }} data-reveal="">
            <LazyEmbed
              src={CLUB.mapEmbed}
              title="Az Árpádföldi Tenisz Club a térképen"
              label="Térkép betöltése"
              note="A térképet a Google Maps tölti be, csak ha kéred."
              poster="/img/salakon-760.webp"
              className="embed--tall"
            />
            <a className="link-arrow" href={CLUB.maps} target="_blank" rel="noopener">
              Útvonaltervezés a Google Térképen <ArrowUpRight className="" />
            </a>
            <div className="notice glass">
              <p>
                <strong>Parkolás</strong>
              </p>
              <p>
                Saját parkoló: a kapu napközben nyitva van, egyébként a Shelly alkalmazással nyílik.{" "}
                <Link href="/palyafoglalas/#parkolas">Hogyan kapok hozzáférést?</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
