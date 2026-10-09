"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CLUB, NAV } from "@/lib/site";
import { ArrowRight, ArrowUpRight } from "./Icons";
import { Wordmark } from "./Wordmark";

/** Transparent over the hero, smoky glass once the page scrolls; a full-screen menu on phones. */
export function Header() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(scrollY > 24);
    on();
    addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [path]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", esc);
    return () => removeEventListener("keydown", esc);
  }, [open]);

  const current = (href: string) => (!href.includes("#") && path === href ? "page" : undefined);

  return (
    <>
      <header className={`header${solid || open ? " header--solid" : ""}`}>
        <div className="container header__inner">
          <Wordmark onClick={() => setOpen(false)} />
          <nav className="nav" aria-label="Fő navigáció">
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} aria-current={current(n.href)}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a className="btn btn--sm header__cta" href={CLUB.booking} target="_blank" rel="noopener">
            Pályafoglalás <ArrowUpRight />
          </a>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </header>
      <div id="mobile-menu" className={`mobile-menu${open ? " mobile-menu--open" : ""}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobil navigáció">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)}>
                  {n.label} <ArrowRight className="" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <a className="btn btn--block" href={CLUB.booking} target="_blank" rel="noopener">
            Pályafoglalás <ArrowUpRight />
          </a>
          <a className="btn btn--ghost btn--block" href={`mailto:${CLUB.email}`}>
            {CLUB.email}
          </a>
          <p>{CLUB.address}</p>
        </div>
      </div>
    </>
  );
}
