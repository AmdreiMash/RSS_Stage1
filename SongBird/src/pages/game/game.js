import { addText } from "../../helpers/addNavText";
import { addwrapper } from "../wrapper/wrapper";
import { lang } from "../../lang/lang";
import { rendAppElem } from "../../helpers/helper";
import pages from "../../lang/pages";

import "../game/game.scss";
import nav from "../game/GameNav.html";

export async function game() {
  addwrapper("Game");
  const page = document.querySelector(".Game");
  const header = page.querySelector("header");
  header.innerHTML += nav;
  addText(".nav-game__stage", "gameNav");
  rendAppElem(header, "div", "score", lang[lang.Setings].score + 0);
  pages.page = "Game";
  page.style.transform = `translateX(-150%)`;
}
