import Link from "next/link";
import { CLUB } from "@/lib/site";
import { ArrowUpRight } from "./Icons";

/** Phones: the two things people come for, always one tap away. */
export function ActionBar() {
  return (
    <div className="actionbar">
      <a className="btn" href={CLUB.booking} target="_blank" rel="noopener">
        Pályafoglalás <ArrowUpRight />
      </a>
      <Link className="btn btn--ghost" href="/edzesek/">
        Gyerekedzés
      </Link>
    </div>
  );
}
