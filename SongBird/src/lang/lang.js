import { stageSet } from "../pages/game/scripts/stageSet";
import { addHomeNav } from "../pages/home/homeNav/homeNav";
import { addText } from "../helpers/addNavText";
import pages from "./pages";

export const lang = {
  Setings: "Eng",
  RU: {
    menu: ["Главая", "Викторина", "Галерея"],
    heading: "Добро пожаловать и приятной игры!",
    start: "Старт!",
    gameNav: [
      "Разминка",
      "Воробьиные",
      "Лесные птицы",
      "Певчие птицы",
      "Хищные птицы",
      "Морские птицы",
    ],
    info: "Послушайте плеер.\n Выберите птицу из списка.",
    score: "Счет: ",
    next: "Дальше",
    message: ["Попробуйте еще : )", "Игра закончена, ты победил!"],
  },
  Eng: {
    menu: ["Home", "Quiz", "Gallery"],
    heading: "Welcome welcome and have a nice game!",
    start: "Start!",
    gameNav: [
      "Warm-up",
      "Sparrows",
      "Forest birds",
      "Songbirds",
      "Birds of prey",
      "Seabirds",
    ],
    info: "Listen to the player.\n Select a bird from the list.",
    score: "Score: ",
    next: "Next",
    message: ["Try again :)", "Game over you you've won!"],
  },
  switchLang: function (event) {
    lang.Setings == "RU" ? (lang.Setings = "Eng") : (lang.Setings = "RU");
    //button = document.querySelector(".lang");
    event.target.textContent = lang.Setings;
    if (pages.page === "Home") {
      pages.home.heading.textContent = lang[lang.Setings].heading;
      pages.home.button.textContent = lang[lang.Setings].start;
      //pages.home.nav.remove();
      const menu = document.querySelectorAll(".menu__link");
      for (let i = 0; i < menu.length; i++) {
        menu[i].textContent = lang[lang.Setings].menu[i];
      }
    } else if (pages.page === "Game") {
      addText(".nav-game__stage", "gameNav");
      const info = document.querySelector(".info");
      if (
        info.firstChild.textContent == lang.Eng.info ||
        info.firstChild.textContent == lang.RU.info
      ) {
        console.log(info.firstChild);
        document.querySelector(".info").textContent = lang[lang.Setings].info;
      }
      const score = document.querySelector(".score");
      score.textContent = lang[lang.Setings].score + stageSet.score;
      const button = document.querySelector(".button-next-page");
      button.textContent = lang[lang.Setings].next;
    }
    let ev = new Event("switchLang");
    document.body.dispatchEvent(ev);
    localStorage.setItem("langByDron", lang.Setings);
  },
};
