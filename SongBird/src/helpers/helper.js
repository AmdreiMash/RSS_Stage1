export function rendAppElem(
  paretn,
  element,
  elementClass = "",
  textContent = "",
  background = ""
) {
  const elem = document.createElement(element);
  elem.className = elementClass;
  if (textContent != "") {
    elem.textContent = textContent;
  }
  if (background != "") {
    elem.style.backgroundImage = `url('${background}')`;
  }
  paretn.append(elem);
  return elem;
}

export function nevElement(
  element,
  elementClass,
  textContent = "",
  background = ""
) {
  const elem = document.createElement(element);
  elem.className = elementClass;
  if (textContent != "") {
    elem.textContent = textContent;
  }
  if (background != "") {
    elem.style.bacgraund = `url('${bacgraund}')`;
  }
  return elem;
}
