import { game } from "../../game/game";
import { rendAppElem } from "../../../helpers/helper";
import { nextPage } from "../../../helpers/NextPage";
import { lang } from "../../../lang/lang";
import "./homeMain.scss";
import pages from "../../../lang/pages";
import { addGameMain } from "../../game/scripts/addGameMain";
import { stageSet } from "../../game/scripts/stageSet";

export function addHomeMain() {
  const main = document.querySelector("main");
  const conteinet = rendAppElem(main, "div", "container");
  const heading = rendAppElem(
    conteinet,
    "h1",
    "container__heading",
    lang[lang.Setings].heading
  );
  pages.home.heading = heading;
  const button = rendAppElem(
    conteinet,
    "button",
    "start-button interactive",
    lang[lang.Setings].start
  );
  button.addEventListener("click", () => {
    nextPage(".wrapper", game());
    //stageSet.score = 0;
    //stageSet.stage = 0;
    setTimeout(() => {
      addGameMain();
    }, 10);
  });
  pages.home.button = button;
}
