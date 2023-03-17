import { rendAppElem } from "../../../helpers/helper";
import { lang } from "../../../lang/lang";
import { stageSet } from "./stageSet";

export function getScore() {
  stageSet.score += 5 - stageSet.miss;
  const sc = document.querySelector(".score");
  sc.textContent = lang[lang.Setings].score + stageSet.score;
}
