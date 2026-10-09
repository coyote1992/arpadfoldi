import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { FOUNDERS, TIMELINE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Történet",
  description:
    "Hogyan lett egy búcsúestből teniszklub: az Árpádföldi Tenisz Club 1985-ös megalakulása, a pálya, amit a tagok egy hónap alatt építettek fel, és ami azóta történt.",
};

export default function History() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow" data-reveal="">
            Történet · 1954–2020
          </p>
          <h1 className="h1" data-reveal="">
            Emlékek magunkról — <em>magunknak.</em>
          </h1>
          <p className="lead" data-reveal="">
            Az ÁTC krónikáját a tagok írták: forgácsok, jegyzetek, a szájhagyomány egyre halkuló hangja. Ez a rövidített
            változata — a klub alapítóinak és mindenkinek, aki azóta a salakon játszott.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container two-col two-col--wide-left">
          <article className="prose" data-reveal="">
            <h2>Előzmények</h2>
            <p>
              Az ÁTC története furcsa módon 1954-ben kezdődik, a VASAS IKARUS létrejöttével — sőt talán még korábban, a
              Mátyásföldi Lawn Tennis Club megszűnésével. Az MLTC a világháború előtt és utána, 1949-ig a magyar tenisz egyik
              fellegvára volt: itt játszott és edzősködött <strong>Asbóth József</strong>, és itt kezdte budapesti pályafutását
              a későbbi örökös bajnok, <strong>Gulyás István</strong>.
            </p>
            <p>
              Az autóbuszgyár mellé magas szintű sportélet járt: NB I-es teniszcsapat, hat salakpályával. Három év múlva a
              csapatnak nyoma sem volt — a tenisz „úri sportnak” számított. 1972-től aztán új generáció jött, házibajnoksággal,
              gyerekoktatással, egyre jobb eredményekkel.
            </p>
            <p>
              1984 végén az IKARUS SE elnöksége úgy döntött, hogy a teniszszakosztályt megszünteti. Az ügy minden fórumot
              megjárt, a döntés mégis végleges maradt.
            </p>

            <h2>A búcsúest, ami nem lett búcsú</h2>
            <p>
              A tagság az IKARUS Club étteremben gyűlt össze, a játék utáni törzshelyén. Az estet búcsúnak szánták — utoljára,
              emlékezetesen, aztán mindenki megy a maga útján. Ám kiderült, hogy Árpádföldön a helyiek teniszpályát kezdtek
              építeni: a pálya félig elkészült, de a lelkesedés elfogyott.
            </p>
            <p>
              A döntés szinte percek alatt megszületett: új egyesületet kell alakítani, a pályát megszerezni és befejezni. Ott,
              a búcsú helyett egy új korszak kezdődött.
            </p>
            <blockquote>„A tagok nem ettek, nem ittak, csak egyesületet akartak alapítani.”</blockquote>
            <p>
              <strong>1985. március 14-én</strong> megalakult az Árpádföldi Tenisz Club. Az alakuló ülés Horváth Gábor
              lakásán volt; cipőlevétellel kezdődött, és mivel nem volt elég szék, a társaság széken, kanapén és padlón ült. A
              kor ideológiája még közbeszólt — tenisz club nem lehetett, csak torna club —, de ez az apróság már senkit nem
              zavart. A klub első elnöke Horváth Gábor lett.
            </p>

            <h2>Egy hónap alatt</h2>
            <p>
              A csapatbajnokság kezdetére, május elejére a pálya elkészült. Mosdó még nem volt, de lehetett játszani. Épp akkor
              raktak le a közeli bányában bontott salakot, amit egy Moszkvics furgonnal hordtak át — a kormányának akkora
              holtjátéka volt, hogy a pilóták sűrűn váltották egymást.
            </p>
            <p>
              A munkát Csertán Kálmán dirigálta, fő-fő pályamesterként. Éles szemmel vette észre a legkisebb hibát is, és még
              élesebb nyelvvel ösztökélte a lankadókat. A munkák végeztével ő volt az egyetlen sérült: mindkét kezében
              ínhüvelygyulladással. A szomszédok — a Biber, a Lajos és a Kardos család — soha egy rossz szót nem szóltak a
              labdapufogásra. Köszönet érte ma is.
            </p>
            <p>
              Hosszú évekig ez állt a hűtőszekrény ajtaján: import sör 12 Ft, Kőbányai 10 Ft, üdítő 6 Ft. A kiszolgálás
              becsületkasszával működött — és működött, mert hiány soha nem volt.
            </p>

            <h2>Bajnokság, harmadik pálya, új nemzedék</h2>
            <p>
              1986-ban az első csapat tizenkét meccsből tizenegyet megnyert, és bajnok lett a budapesti III. osztályban.
              Ugyanebben az évben elkészült a zuhanyzó és a WC is. 1991-től egy német teniszcsapattal alakult ki hosszú
              barátság, 1995. március 23-án pedig elkezdődött a harmadik pálya építése.
            </p>
            <p>
              Azóta a pályák szélesebbek lettek, és a legkisebbeknek elkészült egy „Play & Stay” gyerekpálya. Jött az automata
              öntözés, az online foglalás és a webkamera — és a pályát ma is a tagok tartják karban. 2016 és 2020 között a
              csapat az OB III-tól az OB I-ig jutott.
            </p>
          </article>

          <aside style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <Photo
              name="csapat-hatulrol"
              widths={[720]}
              ratio={1}
              alt="Csapattagok háttal, egymást átkarolva; a melegítőkön az Árpádföldi Tenisz Club felirat"
              sizes="(min-width: 900px) 30vw, 100vw"
            />
            <ol className="timeline glass" style={{ padding: "26px 22px 6px" }} data-reveal="">
              {TIMELINE.map((t) => (
                <li key={t.year}>
                  <time>{t.year}</time>
                  <p>{t.text}</p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      <section className="section" aria-labelledby="alapitok-title">
        <div className="container">
          <div className="head">
            <p className="eyebrow">1985. március 14.</p>
            <h2 className="h2" id="alapitok-title">
              Az alapító <em>tagok.</em>
            </h2>
            <p className="lead">Kerüljön megörökítésre — ahogy a krónika fogalmaz — az ÁTC húsz alapító tagjának névsora.</p>
          </div>
          <ol className="names" data-reveal="">
            {FOUNDERS.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
