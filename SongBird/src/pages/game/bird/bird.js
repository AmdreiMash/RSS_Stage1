import birdHtml from "./bird.html";
import "./bird.scss";
import { svg } from "../../../Assets/svg/svg.js";
import { lang } from "../../../lang/lang";
import { stageSet } from "../scripts/stageSet";
import birdsData from "../scripts/Data";

export class bird {
  constructor(bird, conClass) {
    for (let key in bird) {
      this[key] = bird[key];
      this.stage = stageSet.stage;
    }
    this.rew = false; //идет ли перемотка
    this.container = document.createElement("section"); // контейет
    this.container.className = conClass; // закинул класс
    this.container.innerHTML = birdHtml; // закинул верстку
    this.progress = this.container.querySelector(".conrtroll__bar");
    this.img = this.container.querySelector(".audio__img");
    this.img.style.backgroundImage = `url('${this.image}')`;
    this.playButt = this.container.querySelector(".controll__button");
    this.playButt.style.backgroundImage = `url('${svg.play}')`;
    this.blocAaudio = new Audio(this.audio);
    this.volume = this.container.querySelector(".volume__bar");
    this.getTime();
    this.container.addEventListener("stop", () => {
      this.blocAaudio.pause();
    });
    document.body.addEventListener("stopPlay", () => {
      this.blocAaudio.pause();
      this.playButt.style.backgroundImage = `url('${svg.play}')`;
    });
    this.playButt.addEventListener("click", () => this.play());
    this.volume.addEventListener("input", () => {
      this.changeVolume();
    });
    document.body.addEventListener("switchLang", () => {
      this.getInfo();
    });

    this.blocAaudio.addEventListener("timeupdate", () => {
      this.getTime();
    });
    this.blocAaudio.addEventListener("loadedmetadata", () => {
      this.getTime();
    });
    this.progress.addEventListener("change", () => {
      this.rewind();
    });
    this.progress.addEventListener("mousedown", () => {
      this.rew = true;
    });
    this.progress.addEventListener("click", () => {
      this.rew = false;
    });
    if (this.container.classList.contains("question")) {
      document.body.addEventListener("stopGame", () => {
        this.birdName = this.container.querySelector(".name");
        this.birdName.textContent = this.name;
        this.img.style.backgroundImage = `url('${this.image}')`;
        document.body.addEventListener("switchLang", () => {
          this.birdName = this.container.querySelector(".name");
          this.getInfo();
          this.birdName.textContent = this.name;
        });
      });
    }
  }
  addBird(parent) {
    parent.append(this.container);
    setTimeout(
      () => this.container.classList.replace("smal", "bird-card_description"),
      0
    );
  }
  play() {
    if (!this.blocAaudio.paused) {
      this.blocAaudio.pause();
      this.playButt.style.backgroundImage = `url('${svg.play}')`;
    } else {
      const pauseEvent = new Event("stopPlay");
      document.body.dispatchEvent(pauseEvent);
      this.blocAaudio.play();
      this.playButt.style.backgroundImage = `url('${svg.pause}')`;
    }
  }
  async getTime() {
    const time = this.container.querySelector(".time-total");
    const min = String(Math.floor(this.blocAaudio.duration / 60));
    const sec = String(Math.floor(this.blocAaudio.duration % 60));
    time.textContent = `${min.padStart(1 + 1, "0")}:${sec.padStart(
      1 + 1,
      "0"
    )}`;
    const currTime = this.container.querySelector(".time-curretn");
    currTime.textContent = `${String(
      Math.floor(this.blocAaudio.currentTime / 60)
    ).padStart(1 + 1, "0")}:${String(
      Math.floor(this.blocAaudio.currentTime % 60)
    ).padStart(1 + 1, "0")}`;
    if (this.rew === false) {
      this.progress.value =
        this.blocAaudio.currentTime / (this.blocAaudio.duration / 100);
    }
  }
  rewind() {
    this.blocAaudio.currentTime =
      this.progress.value * (this.blocAaudio.duration / 100);
  }
  getInfo() {
    const current = birdsData[lang.Setings][this.stage];
    const bird = current.find((element) => {
      if (element.id === this.id) {
        return element;
      }
    });
    for (let key in bird) {
      this[key] = bird[key];
    }
    if (!this.container.classList.contains("question")) {
      this.birdName = this.container.querySelector(".name");
      this.birdName.textContent = this.name;
      this.birdDisc = this.container.querySelector(".description");
      this.birdDisc.textContent = this.description;
      this.biedSpecies = this.container.querySelector(".species");
      this.biedSpecies.textContent = this.species;
    }
  }
  changeVolume() {
    this.blocAaudio.volume = this.volume.value;
  }
}
