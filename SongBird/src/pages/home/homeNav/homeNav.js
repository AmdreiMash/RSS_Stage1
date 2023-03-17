import { game } from "../../game/game";
import { nevElement, rendAppElem } from "../../../helpers/helper";
import { nextPage } from "../../../helpers/NextPage";
import { lang } from "../../../lang/lang";
import pages from "../../../lang/pages";
import "./HomeNav.scss";
import { addGameMain } from "../../game/scripts/addGameMain";
import { start } from "../start";
import { gallery } from "../../Gallery/Gallery";
import { stageSet } from "../../game/scripts/stageSet";

export function addHomeNav(head = "header") {
  const nav = nevElement("nav", "nav");
  pages.home.nav = nav;
  const menu = nevElement("ul", "menu");
  for (let i = 0; i < lang[lang.Setings].menu.length; i++) {
    let li = rendAppElem(
      menu,
      "li",
      "menu__link interactive",
      lang[lang.Setings].menu[i]
    );
    if (i == 0) {
      li.classList.add("menu__link_active");
      li.addEventListener("click", () => {
        document.body.innerHTML = "";
        stageSet.score = 0;
        start();
      });
    } else if (i == 1) {
      li.addEventListener("click", () => {
        nextPage(".wrapper", game());
        setTimeout(() => {
          stageSet.score = 0;
          addGameMain();
        }, 10);
      });
    } else {
      li.classList.add("button-popup");
      li.addEventListener("click", (event) => {
        document.querySelector(".gallery").classList.toggle("active");
        event.target.classList.toggle("activ");
        const pauseEvent = new Event("stopPlay");
        document.body.dispatchEvent(pauseEvent);
      });
    }
  }
  nav.append(menu);
  document.querySelector(head).append(nav);
  return nav;
}
