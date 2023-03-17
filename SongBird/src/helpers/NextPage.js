import { lang } from "../lang/lang";

export function nextPage(PageName, addPage) {
  addPage;
  const Pages = document.querySelectorAll(PageName);
  setTimeout(() => {
    Pages[0].style.transform = `translateX(150%)`;
    Pages[1].style.transform = `translateX(0%)`;
  }, 0);
  setTimeout(() => Pages[0].remove(), 500);
  setTimeout(() => {
    const lan = document.querySelector(".lang");
    lan.addEventListener("click", lang.switchLang);
  }, 550);
}
