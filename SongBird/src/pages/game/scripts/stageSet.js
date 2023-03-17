import { nevElement } from "../../../helpers/helper";
import { lang } from "../../../lang/lang";
import { answer } from "../answer/answer";
import data from "./Data";
export const stageSet = {
  miss: 0,
  score: 0,
  stage: 0,
  getBird: function () {
    this.birds = data[lang.Setings][this.stage];
    this.questBird = this.birds[Math.floor(Math.random() * this.birds.length)];

    this.lang = lang.Setings;
  },
  getAnswers: function () {
    const answers = nevElement("div", "answers");
    this.birds.forEach((element) => {
      const button = new answer(element);
      answers.append(button.button);
    });
    return answers;
  },
};
