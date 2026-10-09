import { CLUB, CONTACTS, PASSES, TIERS, ft } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

/** The four steps from registration to a tidy court. */
export function BookingSteps() {
  return (
    <ol className="steps">
      <li className="step" data-reveal="">
        <span className="step__num">01</span>
        <div>
          <h3>Regisztrálj az e-foglalóban</h3>
          <p>
            <a href={CLUB.booking} target="_blank" rel="noopener">
              {CLUB.bookingLabel}
            </a>{" "}
            — egyszer kell, e-mail címmel.
          </p>
        </div>
      </li>
      <li className="step" data-reveal="">
        <span className="step__num">02</span>
        <div>
          <h3>Vegyél jegyet vagy bérletet</h3>
          <p>
            A „Bérleteim / jegyeim” menüben bankkártyával fizetsz: óradíjas jegyet, 14 000 vagy 30 000 Ft-os bérletet.
            Ugyanitt látod az egyenleged is.
          </p>
        </div>
      </li>
      <li className="step" data-reveal="">
        <span className="step__num">03</span>
        <div>
          <h3>Foglald le az időpontot</h3>
          <p>Egész órakor kezdesz, és egy vagy két órát foglalsz: a játék 55 vagy 115 percig tart.</p>
        </div>
      </li>
      <li className="step" data-reveal="">
        <span className="step__num">04</span>
        <div>
          <h3>Hagyd rendben a pályát</h3>
          <p>Az utolsó öt perc a pályáé: kefével lehúzod, a vonalakat lesöpröd, aztán locsolsz.</p>
        </div>
      </li>
    </ol>
  );
}

/** The booking card: the address of the booking system, the essentials, and who helps. */
export function BookingCard() {
  return (
    <aside className="callcard glass" aria-label="Online foglalás" data-reveal="">
      <p className="callcard__label">Online foglalás</p>
      <a className="callcard__big" href={CLUB.booking} target="_blank" rel="noopener">
        {CLUB.bookingLabel}
      </a>
      <p className="small muted" style={{ margin: 0 }}>
        Az ÁTC saját foglalórendszere. Bármikor elérhető, telefonról is.
      </p>
      <dl>
        <div>
          <dt>Játékidő</dt>
          <dd>minden nap 7–20</dd>
        </div>
        <div>
          <dt>Pályadíj</dt>
          <dd className="num">
            {ft(TIERS[0])} – {ft(TIERS[2])} / óra
          </dd>
        </div>
        <div>
          <dt>Fizetés</dt>
          <dd>bankkártya vagy utalás</dd>
        </div>
      </dl>
      <a className="btn btn--block" href={CLUB.booking} target="_blank" rel="noopener">
        Foglalás most <ArrowUpRight />
      </a>
      <ul className="helpers">
        <li>
          <strong>Elakadtál a regisztrációval?</strong>
          {CONTACTS.booking.name} · <a href={`tel:${CONTACTS.booking.tel}`}>{CONTACTS.booking.phone}</a>
        </li>
        <li>
          <strong>Technikai hiba a rendszerben?</strong>
          {CONTACTS.tech.name} · <a href={`tel:${CONTACTS.tech.tel}`}>{CONTACTS.tech.phone}</a>
        </li>
      </ul>
    </aside>
  );
}

/** The two passes: what they cost, what they are worth, and how many hours they buy per band. */
export function PassCards() {
  return (
    <div className="passes">
      {PASSES.map((p, i) => (
        <article className="pass glass" key={p.id} data-reveal="" style={{ ["--d" as string]: `${i * 0.08}s` }}>
          <div className="pass__head">
            <h3 className="pass__name">„{p.id}” bérlet</h3>
            <span className="pass__bonus">+{ft(p.credit - p.price)} játékra</span>
          </div>
          <p className="pass__price num">
            {ft(p.price)}
            <small>
              {ft(p.credit)} értékben foglalhatsz vele ({p.discount}% kedvezmény)
            </small>
          </p>
          <ul className="pass__hours" aria-label="Ennyi órára elég">
            {TIERS.map((t, k) => (
              <li key={t} className={`t${k}`}>
                <strong>{p.hours[k]} óra</strong>
                <span>
                  <i aria-hidden="true" />
                  {ft(t)}-os sávban
                </span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
