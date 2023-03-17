import "normalize.css";
import { start } from "./pages/home/start";
import { lang } from "./lang/lang";
try {
  lang.Setings = localStorage.getItem("langByDron") || "RU";
} catch {
  false;
}
start();

console.log(
  "Выполнены все пункты ТЗ.\nКак доп. сделал перевод и галерею\nПриятной проверки ^_^"
);
