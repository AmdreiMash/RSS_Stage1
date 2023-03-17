import { lang } from "../lang/lang";

export function addText(c, source) {
  const elements = document.querySelectorAll(c);
  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = lang[lang.Setings][source][i];
  }
}
