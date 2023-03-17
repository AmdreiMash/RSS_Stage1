import { addFooter } from "./homeFooter/homeFooter";
import { addHomeMain } from "./homeMain/homeMain";
import { addHomeNav } from "./homeNav/homeNav";
import { addwrapper } from "../wrapper/wrapper";
import { gallery } from "../Gallery/Gallery";

export function start() {
  addwrapper();
  addHomeMain();
  addFooter();
  gallery()
  addHomeNav();
}
