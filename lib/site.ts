// Every fact on the site lives here. Sources: arpadfolditc.hu (pages and the 2026 price list),
// the club chronicle (Történet), and the XVI. Kerületi Újság interview of 27 October 2020.

export const CLUB = {
  name: "Árpádföldi Tenisz Club",
  short: "ÁTC",
  founded: "1985",
  foundedFull: "1985. március 14.",
  address: "1162 Budapest, Állás utca 35.",
  district: "Budapest XVI. · Árpádföld",
  email: "info@arpadfolditc.hu",
  booking: "https://atc.e-foglalo.hu",
  bookingLabel: "atc.e-foglalo.hu",
  facebook: "https://www.facebook.com/arpadfolditc/",
  maps: "https://www.google.com/maps/dir/?api=1&destination=47.531231,19.200104",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427.288926953485!2d19.200231342785678!3d47.5308289265604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c4e162f1af6f%3A0x9f3037c5559a9aa2!2zw4FycMOhZGbDtmxkaSBUZW5pc3ogQ2x1Yg!5e1!3m2!1shu!2shu!4v1559304857995!5m2!1shu!2shu",
  bank: "65100235-11041245-00000000",
  taxId: "19405465-1-42",
};

export type Person = { name: string; role: string; phone?: string; tel?: string; email?: string };

export const CONTACTS: Record<"booking" | "tech" | "president", Person> = {
  booking: { name: "Pászti Nagy András", role: "Pályafoglalás, regisztráció, parkolókapu", phone: "06 30 231 0432", tel: "+36302310432" },
  tech: { name: "Greguss Tamás", role: "Technikai segítség a foglalórendszerhez", phone: "06 20 824 5625", tel: "+36208245625" },
  president: { name: "Amberger Árpád", role: "Egyesületi elnök", phone: "+36 30 948 0746", tel: "+36309480746" },
};

export type Coach = Person & { kind: "group" | "solo"; note?: string };

export const COACHES: Coach[] = [
  {
    name: "Dobó Csilla",
    role: "Csoportos edzések",
    kind: "group",
    note: "Volt válogatott, WTA-világranglistás, többszörös magyar bajnok.",
    phone: "06 20 384 8947",
    tel: "+36203848947",
    email: "dobocsilla76@gmail.com",
  },
  { name: "Szemes Bálint", role: "Csoportos edzések", kind: "group", phone: "06 30 920 0511", tel: "+36309200511", email: "balint.szemes@gmail.com" },
  { name: "Szénási Ágnes", role: "Csoportos edzések", kind: "group", phone: "06 20 941 6610", tel: "+36209416610", email: "bencebab@gmail.com" },
  {
    name: "Dobó János",
    role: "Egyéni edzések versenyzőknek",
    kind: "solo",
    note: "Több magyar bajnokot nevelt. Egyéni edzéseket tart, a versenyzővé nevelés céljával.",
    phone: "06 20 802 5992",
    tel: "+36208025992",
  },
];

/** 2026 hourly court fees (Ft / óra). Weekdays are identical, and so are Saturday and Sunday. */
export type Band = { from: number; to: number; price: number };
export const PRICES: { weekday: Band[]; weekend: Band[] } = {
  weekday: [
    { from: 7, to: 10, price: 2700 },
    { from: 10, to: 13, price: 2200 },
    { from: 13, to: 15, price: 2700 },
    { from: 15, to: 20, price: 3200 },
  ],
  weekend: [
    { from: 7, to: 8, price: 2700 },
    { from: 8, to: 12, price: 3200 },
    { from: 12, to: 20, price: 2700 },
  ],
};
export const TIERS = [2200, 2700, 3200] as const;

export const PASSES = [
  { id: "A", price: 14000, credit: 16000, discount: "12,5", hours: [7, 6, 5] },
  { id: "B", price: 30000, credit: 35000, discount: "14,3", hours: [16, 13, 11] },
];

export const TIMELINE = [
  { year: "1954", text: "Létrejön a VASAS IKARUS, és az autóbuszgyár NB I-es teniszcsapatot alakít. Innen indul az ÁTC előtörténete." },
  { year: "1985", text: "Március 14-én megalakul az Árpádföldi Tenisz Club. Május elejére kész a pálya." },
  { year: "1986", text: "Az első csapat megnyeri a budapesti III. osztályt, 12 meccsből 11 győzelemmel." },
  { year: "1995", text: "Március 23-án elkezdődik a harmadik pálya építése." },
  { year: "2016", text: "Mindkét felnőttcsapat csoportelső: feljutás az OB III-ba." },
  { year: "2019", text: "Újabb lépcső: feljutás az OB II-be." },
  { year: "2020", text: "Csoportelsőség és megnyert rájátszás — az ÁTC csapata az OB I-ben." },
];

export const BOARD = {
  presidency: [
    { name: "Amberger Árpád", role: "elnök" },
    { name: "Baumholczer Tamás" },
    { name: "dr. Kincses Attila" },
    { name: "dr. Pászti-Nagy András" },
    { name: "Mészáros Gyula" },
  ],
  supervisory: [{ name: "Fülöp László", role: "elnök" }, { name: "Boda Csaba" }, { name: "Horváth Gábor" }],
};

export const FOUNDERS = [
  "Barna Ferenc", "Csertán Kálmán", "Dóra István", "Fabók Szilárd", "Farkas János",
  "Fülöp László", "Gyepes László", "Gyulai Tibor", "Homolya György", "Horváth Gábor",
  "Juhász Ferenc", "Kapitány Balázs", "Koronthály László", "Molnár Mihály", "Popik János",
  "Privitzer Vilmos", "Rátonyi László", "Szeiler László", "dr. Záborszky Ferenc", "Edelényi Éva",
];

export const NAV = [
  { href: "/#palyak", label: "Pályák" },
  { href: "/palyafoglalas/", label: "Árak és foglalás" },
  { href: "/edzesek/", label: "Edzések" },
  { href: "/klub/", label: "Klubélet" },
  { href: "/tortenet/", label: "Történet" },
  { href: "/kapcsolat/", label: "Kapcsolat" },
];

export const ft = (n: number) => n.toLocaleString("hu-HU").replace(/\s/g, " ") + " Ft";
