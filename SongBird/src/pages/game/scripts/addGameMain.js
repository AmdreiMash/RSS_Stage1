import { bird } from "../bird/bird";
import { lang } from "../../../lang/lang";
import { rendAppElem } from "../../../helpers/helper";
import { stageSet } from "./stageSet";

import img from "../../../Assets/img/bird.06a46938.jpg";
import { nextPage } from "../../../helpers/NextPage";
import { endPage } from "../../endGame/addEndPage";
import { addwrapper } from "../../wrapper/wrapper";
import { addHomeNav } from "../../home/homeNav/homeNav";
import { gallery } from "../../Gallery/Gallery";

export function addGameMain() {
  const page = document.querySelector(".Game");
  const container = page.querySelector("main");
  container.innerHTML = "";
  //container.classList.add(lang.Eng.gameNav[stageSet.stage].replace(" ", "_"));
  container.classList.add("main-game");
  stageSet.getBird();
  const quest = new bird(stageSet.questBird, "question bird-card");
  quest.addBird(container);
  quest.img.style.backgroundImage = `url('${img}')`;
  quest.time = quest.blocAaudio.duration;
  container.append(stageSet.getAnswers());
  const info = rendAppElem(container, "div", "info");
  rendAppElem(info, "p", "info__content", lang[lang.Setings].info);
  const button = rendAppElem(
    container,
    "button",
    "button-next-page",
    lang[lang.Setings].next
  );
  document.body.addEventListener("stopGame", () => {
    button.classList.add("redy");
    button.classList.add("interactive");
    button.addEventListener("click", () => {
      stageSet.stage++;
      stageSet.miss = 0;
      if (stageSet.stage < 6) {
        addGameMain();
        const stages = document.querySelectorAll(".nav-game__stage");
        stages[stageSet.stage - 1].classList.remove("nav-game__stage_active");
        stages[stageSet.stage].classList.add("nav-game__stage_active");
        const pauseEvent = new Event("stopPlay");
        document.body.dispatchEvent(pauseEvent);
      } else {
        nextPage(".wrapper", addwrapper("end-game"));
        stageSet.stage = 0;
        endPage();
        addHomeNav(".end-header");
        gallery(".end-header");
      }
    });
  });
}
