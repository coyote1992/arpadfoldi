import Link from "next/link";
import { CLUB, CONTACTS, NAV } from "@/lib/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__about">
            <Wordmark />
            <p>
              Salakpályák és teniszklub Árpádföldön, 1985 óta. A pályát a tagok építették, és ma is ők gondozzák.
            </p>
          </div>
          <div>
            <h2>Oldalak</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/webkamera/">Webkamera</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Elérhetőség</h2>
            <ul>
              <li>{CLUB.address}</li>
              <li>
                <a href={`mailto:${CLUB.email}`}>{CLUB.email}</a>
              </li>
              <li>
                Foglalás: <a href={`tel:${CONTACTS.booking.tel}`}>{CONTACTS.booking.phone}</a>
              </li>
              <li>
                <a href={CLUB.facebook} target="_blank" rel="noopener">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Dokumentumok</h2>
            <ul>
              <li>
                <a href="/docs/aszf.docx">Általános szerződési feltételek</a>
              </li>
              <li>
                <a href="/docs/adatvedelem.docx">Adatvédelmi szabályzat</a>
              </li>
              <li>
                <Link href="/palyafoglalas/#rend">Pályahasználati rend</Link>
              </li>
              <li>
                <Link href="/klub/#tamogatas">Adó 1% · {CLUB.taxId}</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Árpádföldi Tenisz Club</span>
          <span>Alapítva: {CLUB.foundedFull}</span>
        </div>
      </div>
    </footer>
  );
}
