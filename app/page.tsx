import Link from "next/link";
import { BookingCard, BookingSteps, PassCards } from "@/components/Booking";
import { LazyEmbed } from "@/components/LazyEmbed";
import { Photo } from "@/components/Photo";
import { PriceRibbon } from "@/components/PriceRibbon";
import { ArrowRight, ArrowUpRight, Calendar, Camera, Car, Drop, Mail, Phone } from "@/components/Icons";
import { CLUB, COACHES, CONTACTS, TIERS, TIMELINE, ft } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow" data-reveal="">
              Teniszklub · Budapest XVI.
            </p>
            <h1 className="h1" id="hero-title" data-reveal="" style={{ ["--d" as string]: ".08s" }}>
              <span className="line">Salakon,</span> <span className="line">a kertvárosban.</span>{" "}
              <em className="line">1985 óta.</em>
            </h1>
            <p className="lead" data-reveal="" style={{ ["--d" as string]: ".16s" }}>
              Három salakpálya és egy gyerekpálya Árpádföldön, az Állás utcában. Pályát bárki foglalhat online —
              klubtagság nélkül is, óradíjjal vagy bérlettel.
            </p>
            <div className="actions" data-reveal="" style={{ ["--d" as string]: ".24s" }}>
              <a className="btn" href={CLUB.booking} target="_blank" rel="noopener">
                Pályafoglalás <ArrowUpRight />
              </a>
              <Link className="btn btn--ghost" href="#arak">
                Árak és bérletek
              </Link>
            </div>
            <ul className="hero__meta" data-reveal="" style={{ ["--d" as string]: ".32s" }}>
              <li>
                <strong>7–20</strong> óra között foglalható
              </li>
              <li>
                <strong>{ft(TIERS[0])}</strong>-tól óránként
              </li>
              <li>
                Gyerekedzés <strong>6 éves kortól</strong>
              </li>
            </ul>
          </div>
          <div className="hero__media">
            <Photo
              name="kristof"
              widths={[640, 920]}
              ratio={920 / 744}
              alt="Kincses Kristóf futás közben, a levegőben üti meg a tenyerest egy fedett pályás versenyen"
              sizes="(min-width: 900px) 46vw, 100vw"
              priority
            />
            <p className="hero__badge glass" data-reveal="" style={{ ["--d" as string]: ".5s" }}>
              <span>
                <strong>Kincses Kristóf itt, Árpádföldön fogott először ütőt.</strong> Korosztályos válogatott lett,
                2022 óta egyetemi ösztöndíjjal az USA-ban játszik.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ courts */}
      <section className="section" id="palyak" aria-labelledby="palyak-title">
        <div className="container courts">
          <div className="head">
            <p className="eyebrow" data-reveal="">
              A pályák
            </p>
            <h2 className="h2" id="palyak-title" data-reveal="">
              Három salakpálya, <em>egy gyerekpálya.</em>
            </h2>
            <p className="lead" data-reveal="">
              Csendes kertvárosi utca, fák és sövények, zöld szélfogó háló. A pályákat a klubtagok építették társadalmi
              munkában, és ma is ők tartják karban: gyomlálnak, gereblyéznek, locsolnak.
            </p>
          </div>

          <ul className="facts" data-reveal="">
            <li className="fact">
              <span className="fact__num">3</span>
              <p className="fact__label">salakpálya, automata öntözőrendszerrel</p>
            </li>
            <li className="fact">
              <span className="fact__num">
                <small>+</small>1
              </span>
              <p className="fact__label">„Play & Stay” gyerekpálya a legkisebbeknek</p>
            </li>
            <li className="fact">
              <span className="fact__num">1985</span>
              <p className="fact__label">óta játszanak itt — az első pálya egy hónap alatt készült el</p>
            </li>
            <li className="fact">
              <span className="fact__num">
                <small>kb.</small>100
              </span>
              <p className="fact__label">rendszeres játékos, gyerekektől a 70+ szeniorokig</p>
            </li>
          </ul>

          <div className="courts__body">
            <Photo
              name="salakon"
              widths={[760, 1328]}
              ratio={1328 / 587}
              alt="Páros játék a salakpályán egy nyári délelőttön, háttérben fák és a zöld szélfogó"
              className="courts__photo"
              caption="Nyári páros a salakon"
              sizes="(min-width: 900px) 66vw, 100vw"
              position="45% 50%"
            />
            <ul className="rows rows--2" data-reveal="">
              <li className="row">
                <Calendar className="row__icon" />
                <div>
                  <h3>Online foglalás</h3>
                  <p>A szabad időpontokat az e-foglalóban látod, és ott is foglalsz — napra, órára pontosan.</p>
                </div>
              </li>
              <li className="row">
                <Camera className="row__icon" />
                <div>
                  <h3>Webkamera a pályán</h3>
                  <p>
                    Indulás előtt megnézheted, mi a helyzet a pályákon. <Link href="/webkamera/">Élő kép →</Link>
                  </p>
                </div>
              </li>
              <li className="row">
                <Drop className="row__icon" />
                <div>
                  <h3>Gondozott salak</h3>
                  <p>Automata öntözés, és a közös szabály: játék után mindenki lehúzza, lesöpri és meglocsolja a pályát.</p>
                </div>
              </li>
              <li className="row">
                <Car className="row__icon" />
                <div>
                  <h3>Saját parkoló</h3>
                  <p>A kapu napközben nyitva van, egyébként a Shelly alkalmazással nyílik.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ prices */}
      <section className="section" id="arak" aria-labelledby="arak-title">
        <div className="container">
          <div className="head">
            <p className="eyebrow" data-reveal="">
              Árak · 2026
            </p>
            <h2 className="h2" id="arak-title" data-reveal="">
              Óradíj, <em>napszak szerint.</em>
            </h2>
            <p className="lead" data-reveal="">
              Hétköznap délelőtt a legolcsóbb, hétköznap délután és hétvége délelőtt a legkeresettebb. Bérlettel minden
              óra olcsóbb: a vásárolt összegnél többet játszhatsz el.
            </p>
          </div>
          <div className="prices">
            <div data-reveal="">
              <PriceRibbon />
            </div>
            <PassCards />
            <p className="small muted" data-reveal="">
              A klubtagsági edzésidőpontokra csak klubtagok foglalhatnak, minden más időpont nyitott.{" "}
              <Link className="link-arrow" href="/palyafoglalas/">
                Részletek, fizetés átutalással <ArrowRight className="" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ booking */}
      <section className="section" id="foglalas" aria-labelledby="foglalas-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <p className="eyebrow" data-reveal="">
                Pályafoglalás
              </p>
              <h2 className="h2" id="foglalas-title" data-reveal="">
                Regisztrálsz, feltöltesz, <em>játszol.</em>
              </h2>
            </div>
            <p className="lead" data-reveal="">
              Nem kell klubtagnak lenned. A rendszer a bérleted vagy jegyed egyenlegéből vonja le a pályadíjat, így a
              pályán már nincs fizetnivaló.
            </p>
          </div>
          <div className="booking">
            <BookingSteps />
            <BookingCard />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ history */}
      <section className="section" id="tortenet" aria-labelledby="tortenet-title">
        <div className="container history">
          <div className="history__spacer" aria-hidden="true" />
          <div>
            <p className="eyebrow" data-reveal="">
              Történet
            </p>
            <h2 className="h2" id="tortenet-title" data-reveal="">
              Búcsúestnek indult. <em>Klub lett belőle.</em>
            </h2>
          </div>
          <div className="history__story" data-reveal="">
            <p>
              1984 végén megszűnt az IKARUS teniszszakosztálya. A csapat egy utolsó, nagy búcsúestre gyűlt össze — és ott
              derült ki, hogy Árpádföldön a helyiek félig felépítettek egy teniszpályát, aztán elfogyott a lendület.
            </p>
            <p>
              A döntés percek alatt megszületett: új egyesület kell, és be kell fejezni a pályát.{" "}
              <strong>1985. március 14-én megalakult az Árpádföldi Tenisz Club.</strong> Május elejére kész volt a pálya
              — egy hónap alatt, társadalmi munkában. A salakot egy Moszkvics furgonnal hordták át a közeli bányából.
            </p>
          </div>
          <ol className="timeline" data-reveal="">
            {TIMELINE.map((t) => (
              <li key={t.year}>
                <time>{t.year}</time>
                <p>{t.text}</p>
              </li>
            ))}
          </ol>
          <p data-reveal="">
            <Link className="link-arrow" href="/tortenet/">
              A teljes történet és az alapító tagok <ArrowRight className="" />
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ youth and coaches */}
      <section className="section" id="utanpotlas" aria-labelledby="utanpotlas-title">
        <div className="container youth">
          <div className="youth__top">
            <div>
              <p className="eyebrow" data-reveal="">
                Utánpótlás és edzések
              </p>
              <h2 className="h2" id="utanpotlas-title" data-reveal="">
                Gyerekeknek <em>6 éves kortól.</em>
              </h2>
              <p className="lead" data-reveal="" style={{ marginTop: 24 }}>
                Az ÁTC-ben több mint tíz éve működik versenytenisz-képzés. Új gyerekek bármikor bekapcsolódhatnak — nem
                kell a szezon kezdetére várni.
              </p>
            </div>
            <div className="youth__media">
              <Photo
                name="junior"
                widths={[960]}
                ratio={960 / 613}
                alt="Fiatal játékos nyújtózkodó tenyeressel éri el a labdát"
                sizes="(min-width: 900px) 26vw, 55vw"
                position="40% 50%"
              />
              <Photo
                name="serleg"
                widths={[760, 1364]}
                ratio={1364 / 611}
                alt="Fiatal győztes serleggel a salakpályán"
                caption="Házibajnokság, 2017"
                sizes="(min-width: 900px) 22vw, 45vw"
                position="45% 50%"
              />
            </div>
          </div>

          <div className="two-col">
            <div>
              <h3 className="h3" data-reveal="" style={{ marginBottom: 20 }}>
                Így kezdődik
              </h3>
              <ol className="join" data-reveal="">
                <li>
                  <span className="step__num">01</span>
                  <div>
                    <h3>Hívd fel az egyik edzőt</h3>
                    <p>Csoportos edzést Csilla, Bálint és Ági tart. Elérhetőségük lent.</p>
                  </div>
                </li>
                <li>
                  <span className="step__num">02</span>
                  <div>
                    <h3>Beszéljétek meg a célokat</h3>
                    <p>Hogy ki melyik csoportba kerül, az életkortól, az elszántságtól és a kitűzött céloktól függ.</p>
                  </div>
                </li>
                <li>
                  <span className="step__num">03</span>
                  <div>
                    <h3>Irány a pálya</h3>
                    <p>A megfelelő csoportban, év közben is. Versenyzőknek egyéni edzés: Dobó János.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="notice glass" data-reveal="" style={{ alignSelf: "start" }}>
              <p>
                <strong>Nyári napközis tenisztábor</strong>
              </p>
              <p>Hétfőtől péntekig, napközis rendszerben. Hogy idén mikor indul, az edzőktől tudod meg.</p>
            </div>
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

      {/* ------------------------------------------------------------ club life */}
      <section className="section" id="klub" aria-labelledby="klub-title">
        <div className="container">
          <div className="head head--split">
            <div>
              <p className="eyebrow" data-reveal="">
                Klubélet
              </p>
              <h2 className="h2" id="klub-title" data-reveal="">
                Itt nem csak pályát bérelsz. <em>Csapatod lesz.</em>
              </h2>
            </div>
            <p className="lead" data-reveal="">
              Minden évben házibajnokság, a csapatok a budapesti és az országos csapatbajnokságban játszanak, a
              legfiatalabbaktól a 70 felettiekig.
            </p>
          </div>

          <div className="mosaic">
            <Photo
              name="bajnokcsapat"
              widths={[800, 1600]}
              ratio={1600 / 762}
              alt="Az ÁTC csapata klubmelegítőben a háló előtt"
              className="photo--wide"
              caption="Az OB I-be jutott csapat, 2020"
              sizes="(min-width: 900px) 66vw, 100vw"
            />
            <Photo
              name="csapat-hatulrol"
              widths={[720]}
              ratio={1}
              alt="Csapattagok háttal, egymást átkarolva; a melegítőkön az Árpádföldi Tenisz Club felirat"
              sizes="(min-width: 900px) 33vw, 50vw"
            />
            <Photo
              name="ebed"
              widths={[720]}
              ratio={1}
              alt="Közös ebéd a faház előtti hosszú asztalnál"
              sizes="(min-width: 900px) 33vw, 50vw"
            />
          </div>

          <div className="club-cols">
            <div className="club-col" data-reveal="">
              <h3 className="h3">Házibajnokság</h3>
              <p>
                Minden évben. Csoportkörök, aztán egyenes kiesés A és B ágon. 2019-ben a legfiatalabb indulók 12–15
                évesek voltak, a legidősebbek 70 felettiek.
              </p>
            </div>
            <div className="club-col" data-reveal="" style={{ ["--d" as string]: ".06s" }}>
              <h3 className="h3">Csapatbajnokság</h3>
              <p>
                Feljutás 2016-ban az OB III-ba, 2019-ben az OB II-be, 2020-ban az OB I-be. 2023-ban három csapat
                indult, köztük egy szenior (70+) együttes.
              </p>
            </div>
            <figure className="quote club-col" data-reveal="" style={{ ["--d" as string]: ".12s" }}>
              <blockquote>Mindent a klubtagok saját maguk hoztak létre, családias légkörben.</blockquote>
              <figcaption>
                <strong>dr. Kincses Attila</strong>, csapatkapitány · XVI. Kerületi Újság, 2020
              </figcaption>
            </figure>
          </div>
          <p style={{ marginTop: 40 }} data-reveal="">
            <Link className="link-arrow" href="/klub/">
              Klubtagság, vezetőség, dokumentumok <ArrowRight className="" />
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ final + contact */}
      <section className="final" aria-labelledby="final-title">
        <div className="container">
          <h2 className="h2" id="final-title" data-reveal="">
            Találkozunk <em>a salakon.</em>
          </h2>
          <p className="lead" data-reveal="">
            Foglalj pályát online, vagy hívd az edzőket, ha a gyereked kezdené. A többit a pályán megbeszéljük.
          </p>
          <div className="actions" data-reveal="">
            <a className="btn" href={CLUB.booking} target="_blank" rel="noopener">
              Pályafoglalás <ArrowUpRight />
            </a>
            <Link className="btn btn--ghost" href="/edzesek/">
              Edzők elérhetősége
            </Link>
          </div>

          <div className="contact" id="kapcsolat">
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
                <dt>Foglalás, parkoló</dt>
                <dd>
                  <a href={`tel:${CONTACTS.booking.tel}`}>{CONTACTS.booking.phone}</a>
                  <small>{CONTACTS.booking.name}</small>
                </dd>
              </div>
              <div>
                <dt>Elnök</dt>
                <dd>
                  <a href={`tel:${CONTACTS.president.tel}`}>{CONTACTS.president.phone}</a>
                  <small>{CONTACTS.president.name}</small>
                </dd>
              </div>
            </dl>
            <div data-reveal="" style={{ display: "grid", gap: 14 }}>
              <LazyEmbed
                src={CLUB.mapEmbed}
                title="Az Árpádföldi Tenisz Club a térképen"
                label="Térkép betöltése"
                note="A térképet a Google Maps tölti be, csak ha kéred."
                poster="/img/salakon-760.webp"
              />
              <a className="link-arrow" href={CLUB.maps} target="_blank" rel="noopener">
                Útvonaltervezés a Google Térképen <ArrowUpRight className="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
