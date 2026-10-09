// ÁTC's dot-space choreography: what the dots form as you scroll the homepage.
// starfield → the court (beside the courts and prices) → a racket (between the booking steps and
// the booking card) → 1985, the year the members built the club, beside the history heading →
// the big spinning ball behind the youth section → a black hole at the closing call to action.
import { at, type SpaceStep } from "@/kits/dot-space/engine";

const phone = at(0.5, 0.3, 0.34, 0.2);

export const HOME_STEPS: SpaceStep[] = [
  // the court stands on the right; globals.css keeps the courts and prices text in the left 70%
  { anchor: "#palyak", shape: "courtLines", wide: at(0.84, 0.6, 0.12, 0.3), narrow: phone },
  // in the gap between the booking steps and the booking card
  { anchor: "#foglalas", shape: "racket", wide: at(0.585, 0.62, 0.1, 0.28), narrow: phone },
  // the founding year beside its heading, complete when the heading is mid-screen
  { anchor: "#tortenet-title", done: 0.5, shape: { word: "1985" }, wide: at(0.71, 0.5, 0.2, 0.3), narrow: at(0.5, 0.36, 0.34, 0.2) },
  // large, centred, faint, slowly spinning, behind the content
  { anchor: "#utanpotlas", shape: "ball", wide: at(0.5, 0.5, 0.24, 0.42), narrow: at(0.5, 0.45, 0.42, 0.3), alpha: 0.85 },
  // the ending: the ball's dots spiral into the middle and vanish; the stars stay
  { anchor: ".final", shape: "blackhole", wide: at(0.5, 0.5, 0.1, 0.1), narrow: at(0.5, 0.5, 0.1, 0.1) },
];

// accent (strings, ball), light (lines, letters), warm (clay, grip), secondary (felt)
export const PALETTE = ["#e4e27e", "#f5efe6", "#e8845a", "#cfd65e"];
export const FONT = 'italic 380 230px "Fraunces Variable", Georgia, serif';
