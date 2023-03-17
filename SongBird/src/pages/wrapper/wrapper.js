import { rendAppElem } from "../../helpers/helper";
import "./wrapper.scss";
import { lang } from "../../lang/lang";
const logo = require("../../Assets/svg/logo.4f82cd73.svg");

export function addwrapper(PageName = "Home") {
  const wrapper = document.createElement("div");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  const hederTop = rendAppElem(header, "div", "header__top");
  rendAppElem(hederTop, "div", "header__logo", "", logo);
  const lan = rendAppElem(hederTop, "div", "lang interactive", lang.Setings);
  lan.addEventListener("click", lang.switchLang);
  wrapper.className = `wrapper ${PageName}`;
  header.className = "header";
  main.className = "main";
  footer.className = "footer";
  wrapper.append(header, main, footer);
  document.body.append(wrapper);
  return wrapper;
}
