import { lang } from "../../../lang/lang";
import { rendAppElem } from "../../../helpers/helper";
import { stageSet } from "../scripts/stageSet";
import birdsData from "../scripts/Data";
import { bird } from "../bird/bird";

import "./answer.scss";
import { getScore } from "../scripts/getScore";
import { sounds } from "../../../Assets/audio/audio";

export class answer {
  constructor(bird) {
    this.bird = bird;
    this.button = document.createElement("div");
    this.button.className = `${this.bird.name} answers__button interactive`;
    this.name = rendAppElem(this.button, "p", "answers__name", this.bird.name);
    this.indicator = rendAppElem(this.button, "div", "indicator");
    document.body.addEventListener("switchLang", () => {
      this.getInfo();
    });
    document.body.addEventListener("stopGame", () => {
      this.button.removeEventListener("click", this.rightAnswer);
      this.button.removeEventListener("click", this.wrongAnswer);
      //this.button.classList.remove("interactive"); пока под вопросом
    });
    if (stageSet.questBird.id === this.bird.id) {
      this.button.addEventListener("click", this.rightAnswer);
    } else {
      this.button.addEventListener("click", this.wrongAnswer);
    }
    this.button.addEventListener("click", this.addBirdInfo);
    this.audioRight = new Audio(sounds.open);
    this.audiowrong = new Audio(sounds.incorrect);
  }
  getInfo() {
    const current = birdsData[lang.Setings][stageSet.stage];
    this.bird = current.find((element) => {
      if (element.id === this.bird.id) {
        return element;
      }
    });
    this.name.textContent = this.bird.name;
  }
  rightAnswer = () => {
    this.audioRight.play();
    this.button.classList.replace("interactive", "right");
    this.button.removeEventListener("click", this.rightAnswer);
    this.stopGame();
    const header = document.querySelector("header");
    getScore(header);
    const pauseEvent = new Event("stopPlay");
    document.body.dispatchEvent(pauseEvent);
  };
  wrongAnswer = () => {
    this.audiowrong.play();
    this.button.classList.replace("interactive", "wrong");
    this.button.removeEventListener("click", this.wrongAnswer);
    stageSet.miss++;
  };
  stopGame() {
    const stopGame = new Event("stopGame");
    document.body.dispatchEvent(stopGame);
  }
  addBirdInfo = async () => {
    const info = document.querySelector(".info");
    const stop = new Event("stop");
    const birdCard = info.querySelector(".bird-card");
    try {
      birdCard.dispatchEvent(stop);
      //const name = info.querySelector(".name");
    } catch {
      false;
    }
    info.innerHTML = "";
    const infoBird = new bird(this.bird, `${this.bird.name} bird-card smal`);
    await infoBird.addBird(info);
    infoBird.getInfo();
  };
}
