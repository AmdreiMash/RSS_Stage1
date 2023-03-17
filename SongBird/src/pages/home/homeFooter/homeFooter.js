import { svg } from "../../../Assets/svg/svg";
import { rendAppElem } from "../../../helpers/helper";
import "./homeFooter.scss";

export function addFooter() {
  const footer = document.querySelector(".footer");
  const link = rendAppElem(footer, "a");
  const logo = rendAppElem(link, "div", "footer__logo interactive", "", svg.rs);
  const linkGit = rendAppElem(footer, "a");
  const git = rendAppElem(
    linkGit,
    "div",
    "footer__git interactive",
    "",
    svg.git
  );
  link.href = "https://rs.school/js/";
  link.target = "blank";
  linkGit.href = "https://github.com/AmdreiMash";
  linkGit.target = "blank";
  rendAppElem(footer, "span", "footer__year", "2022");
}
