import { nextPage } from "../../helpers/NextPage";
import { lang } from "../../lang/lang";
import pages from "../../lang/pages";
import { game } from "../game/game";
import { addGameMain } from "../game/scripts/addGameMain";
import { stageSet } from "../game/scripts/stageSet";
import "./endGame.scss";
import con from "./endGame.html";
import { gallery } from "../Gallery/Gallery";
import { addHomeNav } from "../home/homeNav/homeNav";

export async function endPage() {
  const wrapper = document.querySelector(".end-game");
  const main = wrapper.querySelector("main");
  const header = wrapper.querySelector("header");
  header.classList.add("end-header");
  main.innerHTML = con;
  const score = wrapper.querySelector(".message__score");
  const mes = wrapper.querySelector(".message__text");
  const button = document.querySelector(".start-button");
  wrapper.style.transform = `translateX(-150%)`;
  button.textContent = lang[lang.Setings].start;
  let ev = new Event("switchLang");
  document.body.addEventListener("switchLang", () => {
    button.textContent = lang[lang.Setings].start;
    if (stageSet.score >= 30) {
      mes.textContent = lang[lang.Setings].message[1];
      button.remove();
    } else {
      mes.textContent = lang[lang.Setings].message[0];
    }
    const menu = document.querySelectorAll(".menu__link");
    for (let i = 0; i < menu.length; i++) {
      menu[i].textContent = lang[lang.Setings].menu[i];
    }
  });
  button.addEventListener("click", () => {
    nextPage(".wrapper", game());
    stageSet.score = 0;
    stageSet.stage = 0;
    setTimeout(() => {
      addGameMain();
    }, 10);
  });
  score.textContent = `${stageSet.score}/30`;
  if (stageSet.score >= 30) {
    mes.textContent = lang[lang.Setings].message[1];
    button.remove();
  } else {
    mes.textContent = lang[lang.Setings].message[0];
  }
  pages.page = "end";
}
