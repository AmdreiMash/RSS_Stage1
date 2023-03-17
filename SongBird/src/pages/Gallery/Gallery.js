import { lang } from "../../lang/lang";
import { bird } from "../game/bird/bird";
import birdsData from "../game/scripts/Data";
import "./Gallery.scss";
import { svg } from "../../Assets/svg/svg";
import { stageSet } from "../game/scripts/stageSet";

export function gallery(container = "main") {
  const gallery = document.createElement("div");
  gallery.className = "gallery";
  const close = document.createElement("div");
  close.style.backgroundImage = `url('${svg.cloose}')`;
  close.className = "close interactive";

  close.addEventListener("click", () => {
    gallery.classList.toggle("active");
    const button = document.querySelector(".button-popup");
    button.classList.remove("activ");
    const pauseEvent = new Event("stopPlay");
    document.body.dispatchEvent(pauseEvent);
  });
  gallery.append(close);
  document.querySelector(container).append(gallery);
  birdsData[lang.Setings].forEach((element, index) => {
    const birds = document.createElement("div");
    birds.classList = "stage-birds";
    const heading = document.createElement("h3");
    heading.textContent = lang[lang.Setings].gameNav[index];
    //gallery.append(heading);
    gallery.append(birds);
    element.forEach((elem) => {
      const info = new bird(elem, "bird-card " + elem.name);
      info.getInfo();
      info.addBird(birds);
    });
    stageSet.stage += 1;
  });
  stageSet.stage = 0;
}
