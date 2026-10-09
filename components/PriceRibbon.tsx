"use client";

import { useEffect, useState } from "react";
import { PASSES, PRICES, TIERS, ft, type Band } from "@/lib/site";

type Day = "weekday" | "weekend";
const DAY_LABEL: Record<Day, string> = { weekday: "Hétfő–péntek", weekend: "Szombat–vasárnap" };
const HOURS = Array.from({ length: 14 }, (_, i) => 7 + i);
const tier = (price: number) => TIERS.indexOf(price as (typeof TIERS)[number]);
const hh = (h: number) => `${h}:00`;

type Now = { day: Day; dayName: string; time: string; hour: number };

function budapestNow(): Now {
  const parts = new Intl.DateTimeFormat("hu-HU", {
    timeZone: "Europe/Budapest",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const dayName = get("weekday");
  const hour = Number(get("hour"));
  return { day: /szombat|vasárnap/.test(dayName) ? "weekend" : "weekday", dayName, time: `${hour}:${get("minute")}`, hour };
}

function passLine(price: number) {
  const t = tier(price);
  return PASSES.map((p) => `„${p.id}” bérlettel ${p.hours[t]} óra`).join(", ");
}

/**
 * The 2026 court fees as two ribbons through the day (weekdays, weekends), coloured by price.
 * Hovering or tapping a band explains it; the band for the current Budapest hour is marked.
 */
export function PriceRibbon() {
  const [now, setNow] = useState<Now | null>(null);
  const [active, setActive] = useState<{ day: Day; band: Band } | null>(null);

  useEffect(() => {
    const tick = () => setNow(budapestNow());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const nowBand = now && now.hour >= 7 && now.hour < 20 ? PRICES[now.day].find((b) => now.hour >= b.from && now.hour < b.to) : undefined;

  let readout: React.ReactNode = "Válassz egy sávot: megmutatjuk, mennyi és mire elég a bérlet.";
  if (active) {
    readout = (
      <>
        {DAY_LABEL[active.day]}, {hh(active.band.from)}–{hh(active.band.to)}: <strong>{ft(active.band.price)} / óra</strong> · {passLine(active.band.price)}
      </>
    );
  } else if (now && nowBand) {
    readout = (
      <>
        <span className="dot" aria-hidden="true" />
        Most ({now.dayName}, {now.time}) <strong>{ft(nowBand.price)} / óra</strong> a pályadíj.
      </>
    );
  } else if (now) {
    readout = (
      <>
        <span className="dot" aria-hidden="true" />
        Most nincs játékidő — a pályák minden nap 7 és 20 óra között foglalhatók.
      </>
    );
  }

  return (
    <div className="ribbon glass">
      <div className="ribbon__top">
        <p className="ribbon__now" aria-live="polite">
          {readout}
        </p>
        <ul className="legend" aria-label="Jelmagyarázat">
          {TIERS.map((p, i) => (
            <li key={p} className={`t${i}`}>
              <i aria-hidden="true" />
              {ft(p)}
            </li>
          ))}
        </ul>
      </div>
      <div className="ribbon__rows">
        {(Object.keys(PRICES) as Day[]).map((day) => (
          <div className="ribbon__row" key={day}>
            <span className="ribbon__label" id={`ribbon-${day}`}>
              <span className="ribbon__label-long">{DAY_LABEL[day]}</span>
            </span>
            <div className="ribbon__track" role="group" aria-labelledby={`ribbon-${day}`}>
              {PRICES[day].map((b) => {
                const isNow = now?.day === day && nowBand === b;
                const on = active?.day === day && active.band === b;
                return (
                  <button
                    key={b.from}
                    type="button"
                    className={`seg t${tier(b.price)}${b.to - b.from === 1 ? " seg--1" : ""}${on ? " seg--on" : ""}${isNow ? " seg--now" : ""}`}
                    style={{ ["--span" as string]: b.to - b.from }}
                    aria-label={`${DAY_LABEL[day]} ${hh(b.from)}–${hh(b.to)}: ${ft(b.price)} óránként`}
                    aria-pressed={on}
                    onMouseEnter={() => setActive({ day, band: b })}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive({ day, band: b })}
                    onBlur={() => setActive(null)}
                    onClick={() => setActive({ day, band: b })}
                  >
                    <span>{ft(b.price)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        <div className="ribbon__axis" aria-hidden="true">
          {HOURS.slice(0, 13).map((h) => (
            <span key={h}>
              {h}
              {h === 19 && <b>20</b>}
            </span>
          ))}
        </div>
      </div>
      <p className="ribbon__note">
        Óradíjak 2026-ban, pályánként. A játék egész órakor kezdődik, és 55 vagy 115 percig tart.
      </p>
    </div>
  );
}
