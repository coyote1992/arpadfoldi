# Árpádföldi Tenisz Club — website

A rebuild of [arpadfolditc.hu](https://arpadfolditc.hu/) for the Árpádföldi Tenisz Club (ÁTC), a
volunteer-built clay-court club in Budapest XVI., founded on 14 March 1985.

Next.js (App Router, static export) + TypeScript, with the **dot-space** background from the
100web tennis vertical package (`kits/dot-space/`): one WebGL dot field behind every page that
gathers into shapes as you scroll the homepage.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static site in ./out — upload that folder to any host
npm start            # serves ./out on :3000
npm run check:space  # with the site running: screenshots every dot stage, measures text overlap
```

## What is where

| Path | What |
|---|---|
| `lib/site.ts` | **Every fact on the site**: contacts, coaches, 2026 prices and passes, timeline, board, founders. Update prices here. |
| `app/page.tsx` | Homepage: hero → courts → prices → booking → history → youth & coaches → club life → contact |
| `app/{palyafoglalas,edzesek,klub,tortenet,webkamera,kapcsolat}/` | Subpages |
| `app/globals.css` | Design system (tokens, type, components) and the dark "space" theme |
| `components/space/config.ts` | The dot choreography (see below) |
| `components/PriceRibbon.tsx` | Interactive 2026 price ribbon; marks the current Budapest hour |
| `kits/dot-space/` | The template kit: engine, base theme, checker, and its docs (`SKILL.md`, `reference/`) |
| `scripts/images.py` | Crops/exports the club photos to `public/img` as WebP |
| `public/docs/` | ÁSZF and privacy policy (DOCX), taken over from the old site |

## The dot choreography (homepage)

| Step | Anchor | Shape | Where |
|---|---|---|---|
| 1 | `#palyak` | court lines | right; courts and prices text kept in the left 70% |
| 2 | `#foglalas` | racket | in the gap between the booking steps and the booking card |
| 3 | `#tortenet-title` | **1985**, the founding year | beside the history heading, complete at mid-screen |
| 4 | `#utanpotlas` | spinning ball | large, centred, behind the youth section |
| 5 | `.final` | black hole | the closing "Találkozunk a salakon." |

Subpages show the quiet starfield. The look and motion values are the kit's approved defaults and
are unchanged. Checker result (1440×900): every shape `clear`, all fully formed. On phones the court
and the racket cross the section headings while they stand (expected by the kit's recipe).

## Content sources

Only facts from these sources are used:

- the club's current site (all pages, the 2026 price list image, booking instructions, court rules, coaches, officers)
- the club chronicle on the Történet page (1954–1995)
- the president's e-mail of 2 October 2026 (kids can join any time; group coaches Csilla, Bálint, Ági; János individual only)
- the XVI. Kerületi Újság interview, 27 October 2020 (courts, Play & Stay court, ~100 regular players, team promotions 2016/2019/2020, quotes, two photos)

Photos are the club's own (old site, Facebook collage) plus two from the district paper's 2020 article. No stock images.
