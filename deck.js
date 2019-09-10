export { nightOwlFull as theme } from "code-surfer";

import { slides as Introduction } from "./pages/introduction.mdx";
import { slides as PitfallOne } from "./pages/pitfall-1/slides.mdx";

export const slides = [...Introduction, ...PitfallOne];
