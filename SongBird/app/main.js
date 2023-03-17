/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Assets/audio/audio.js":
/*!***********************************!*\
  !*** ./src/Assets/audio/audio.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sounds": () => (/* binding */ sounds)
/* harmony export */ });
const sounds = {
  open: __webpack_require__(/*! ./open.mp3 */ "./src/Assets/audio/open.mp3"),
  incorrect: __webpack_require__(/*! ./incorrect-25.mp3 */ "./src/Assets/audio/incorrect-25.mp3")
};

/***/ }),

/***/ "./src/Assets/svg/svg.js":
/*!*******************************!*\
  !*** ./src/Assets/svg/svg.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svg": () => (/* binding */ svg)
/* harmony export */ });
const play = __webpack_require__(/*! ./play_blue_button_icon_227848.svg */ "./src/Assets/svg/play_blue_button_icon_227848.svg");

const pause = __webpack_require__(/*! ./pause_blue_button_icon_227842.svg */ "./src/Assets/svg/pause_blue_button_icon_227842.svg");

const value = __webpack_require__(/*! ./v1.svg */ "./src/Assets/svg/v1.svg");

const cloose = __webpack_require__(/*! ./crossflat.svg */ "./src/Assets/svg/crossflat.svg");

const rs = __webpack_require__(/*! ./rs_school_js.svg */ "./src/Assets/svg/rs_school_js.svg");

const git = __webpack_require__(/*! ./github.svg */ "./src/Assets/svg/github.svg");

const svg = {
  play: play,
  pause: pause,
  value: value,
  cloose: cloose,
  rs: rs,
  git: git
};

/***/ }),

/***/ "./src/helpers/NextPage.js":
/*!*********************************!*\
  !*** ./src/helpers/NextPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nextPage": () => (/* binding */ nextPage)
/* harmony export */ });
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/lang */ "./src/lang/lang.js");

function nextPage(PageName, addPage) {
  addPage;
  const Pages = document.querySelectorAll(PageName);
  setTimeout(() => {
    Pages[0].style.transform = `translateX(150%)`;
    Pages[1].style.transform = `translateX(0%)`;
  }, 0);
  setTimeout(() => Pages[0].remove(), 500);
  setTimeout(() => {
    const lan = document.querySelector(".lang");
    lan.addEventListener("click", _lang_lang__WEBPACK_IMPORTED_MODULE_0__.lang.switchLang);
  }, 550);
}

/***/ }),

/***/ "./src/helpers/addNavText.js":
/*!***********************************!*\
  !*** ./src/helpers/addNavText.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addText": () => (/* binding */ addText)
/* harmony export */ });
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang/lang */ "./src/lang/lang.js");

function addText(c, source) {
  const elements = document.querySelectorAll(c);

  for (let i = 0; i < elements.length; i++) {
    elements[i].textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_0__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_0__.lang.Setings][source][i];
  }
}

/***/ }),

/***/ "./src/helpers/helper.js":
/*!*******************************!*\
  !*** ./src/helpers/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nevElement": () => (/* binding */ nevElement),
/* harmony export */   "rendAppElem": () => (/* binding */ rendAppElem)
/* harmony export */ });
function rendAppElem(paretn, element, elementClass = "", textContent = "", background = "") {
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
function nevElement(element, elementClass, textContent = "", background = "") {
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var _pages_home_start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/start */ "./src/pages/home/start.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lang/lang */ "./src/lang/lang.js");




try {
  _lang_lang__WEBPACK_IMPORTED_MODULE_2__.lang.Setings = localStorage.getItem("langByDron") || "RU";
} catch {
  false;
}

(0,_pages_home_start__WEBPACK_IMPORTED_MODULE_1__.start)();
console.log("Выполнены все пункты ТЗ.\nКак доп. сделал перевод и галерею\nПриятной проверки ^_^");

/***/ }),

/***/ "./src/lang/lang.js":
/*!**************************!*\
  !*** ./src/lang/lang.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lang": () => (/* binding */ lang)
/* harmony export */ });
/* harmony import */ var _pages_game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/game/scripts/stageSet */ "./src/pages/game/scripts/stageSet.js");
/* harmony import */ var _pages_home_homeNav_homeNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/home/homeNav/homeNav */ "./src/pages/home/homeNav/homeNav.js");
/* harmony import */ var _helpers_addNavText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/addNavText */ "./src/helpers/addNavText.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ "./src/lang/pages.js");




const lang = {
  Setings: "Eng",
  RU: {
    menu: ["Главая", "Викторина", "Галерея"],
    heading: "Добро пожаловать и приятной игры!",
    start: "Старт!",
    gameNav: ["Разминка", "Воробьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы"],
    info: "Послушайте плеер.\n Выберите птицу из списка.",
    score: "Счет: ",
    next: "Дальше",
    message: ["Попробуйте еще : )", "Игра закончена, ты победил!"]
  },
  Eng: {
    menu: ["Home", "Quiz", "Gallery"],
    heading: "Welcome welcome and have a nice game!",
    start: "Start!",
    gameNav: ["Warm-up", "Sparrows", "Forest birds", "Songbirds", "Birds of prey", "Seabirds"],
    info: "Listen to the player.\n Select a bird from the list.",
    score: "Score: ",
    next: "Next",
    message: ["Try again :)", "Game over you you've won!"]
  },
  switchLang: function (event) {
    lang.Setings == "RU" ? lang.Setings = "Eng" : lang.Setings = "RU"; //button = document.querySelector(".lang");

    event.target.textContent = lang.Setings;

    if (_pages__WEBPACK_IMPORTED_MODULE_3__["default"].page === "Home") {
      _pages__WEBPACK_IMPORTED_MODULE_3__["default"].home.heading.textContent = lang[lang.Setings].heading;
      _pages__WEBPACK_IMPORTED_MODULE_3__["default"].home.button.textContent = lang[lang.Setings].start; //pages.home.nav.remove();

      const menu = document.querySelectorAll(".menu__link");

      for (let i = 0; i < menu.length; i++) {
        menu[i].textContent = lang[lang.Setings].menu[i];
      }
    } else if (_pages__WEBPACK_IMPORTED_MODULE_3__["default"].page === "Game") {
      (0,_helpers_addNavText__WEBPACK_IMPORTED_MODULE_2__.addText)(".nav-game__stage", "gameNav");
      const info = document.querySelector(".info");

      if (info.firstChild.textContent == lang.Eng.info || info.firstChild.textContent == lang.RU.info) {
        console.log(info.firstChild);
        document.querySelector(".info").textContent = lang[lang.Setings].info;
      }

      const score = document.querySelector(".score");
      score.textContent = lang[lang.Setings].score + _pages_game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_0__.stageSet.score;
      const button = document.querySelector(".button-next-page");
      button.textContent = lang[lang.Setings].next;
    }

    let ev = new Event("switchLang");
    document.body.dispatchEvent(ev);
    localStorage.setItem("langByDron", lang.Setings);
  }
};

/***/ }),

/***/ "./src/lang/pages.js":
/*!***************************!*\
  !*** ./src/lang/pages.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  page: "Home",
  home: {},
  game: {},
  end: {}
});

/***/ }),

/***/ "./src/pages/Gallery/Gallery.js":
/*!**************************************!*\
  !*** ./src/pages/Gallery/Gallery.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gallery": () => (/* binding */ gallery)
/* harmony export */ });
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _game_bird_bird__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/bird/bird */ "./src/pages/game/bird/bird.js");
/* harmony import */ var _game_scripts_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/scripts/Data */ "./src/pages/game/scripts/Data.js");
/* harmony import */ var _Gallery_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery.scss */ "./src/pages/Gallery/Gallery.scss");
/* harmony import */ var _Assets_svg_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/svg/svg */ "./src/Assets/svg/svg.js");
/* harmony import */ var _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/scripts/stageSet */ "./src/pages/game/scripts/stageSet.js");






function gallery(container = "main") {
  const gallery = document.createElement("div");
  gallery.className = "gallery";
  const close = document.createElement("div");
  close.style.backgroundImage = `url('${_Assets_svg_svg__WEBPACK_IMPORTED_MODULE_4__.svg.cloose}')`;
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
  _game_scripts_Data__WEBPACK_IMPORTED_MODULE_2__["default"][_lang_lang__WEBPACK_IMPORTED_MODULE_0__.lang.Setings].forEach((element, index) => {
    const birds = document.createElement("div");
    birds.classList = "stage-birds";
    const heading = document.createElement("h3");
    heading.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_0__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_0__.lang.Setings].gameNav[index]; //gallery.append(heading);

    gallery.append(birds);
    element.forEach(elem => {
      const info = new _game_bird_bird__WEBPACK_IMPORTED_MODULE_1__.bird(elem, "bird-card " + elem.name);
      info.getInfo();
      info.addBird(birds);
    });
    _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__.stageSet.stage += 1;
  });
  _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__.stageSet.stage = 0;
}

/***/ }),

/***/ "./src/pages/endGame/addEndPage.js":
/*!*****************************************!*\
  !*** ./src/pages/endGame/addEndPage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endPage": () => (/* binding */ endPage)
/* harmony export */ });
/* harmony import */ var _helpers_NextPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/NextPage */ "./src/helpers/NextPage.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _lang_pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lang/pages */ "./src/lang/pages.js");
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/game */ "./src/pages/game/game.js");
/* harmony import */ var _game_scripts_addGameMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/scripts/addGameMain */ "./src/pages/game/scripts/addGameMain.js");
/* harmony import */ var _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/scripts/stageSet */ "./src/pages/game/scripts/stageSet.js");
/* harmony import */ var _endGame_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./endGame.scss */ "./src/pages/endGame/endGame.scss");
/* harmony import */ var _endGame_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./endGame.html */ "./src/pages/endGame/endGame.html");
/* harmony import */ var _Gallery_Gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Gallery/Gallery */ "./src/pages/Gallery/Gallery.js");
/* harmony import */ var _home_homeNav_homeNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/homeNav/homeNav */ "./src/pages/home/homeNav/homeNav.js");










async function endPage() {
  const wrapper = document.querySelector(".end-game");
  const main = wrapper.querySelector("main");
  const header = wrapper.querySelector("header");
  header.classList.add("end-header");
  main.innerHTML = _endGame_html__WEBPACK_IMPORTED_MODULE_7__["default"];
  const score = wrapper.querySelector(".message__score");
  const mes = wrapper.querySelector(".message__text");
  const button = document.querySelector(".start-button");
  wrapper.style.transform = `translateX(-150%)`;
  button.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].start;
  let ev = new Event("switchLang");
  document.body.addEventListener("switchLang", () => {
    button.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].start;

    if (_game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__.stageSet.score >= 30) {
      mes.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].message[1];
      button.remove();
    } else {
      mes.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].message[0];
    }

    const menu = document.querySelectorAll(".menu__link");

    for (let i = 0; i < menu.length; i++) {
      menu[i].textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].menu[i];
    }
  });
  button.addEventListener("click", () => {
    (0,_helpers_NextPage__WEBPACK_IMPORTED_MODULE_0__.nextPage)(".wrapper", (0,_game_game__WEBPACK_IMPORTED_MODULE_3__.game)());
    _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__.stageSet.score = 0;
    _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__.stageSet.stage = 0;
    setTimeout(() => {
      (0,_game_scripts_addGameMain__WEBPACK_IMPORTED_MODULE_4__.addGameMain)();
    }, 10);
  });
  score.textContent = `${_game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__.stageSet.score}/30`;

  if (_game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_5__.stageSet.score >= 30) {
    mes.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].message[1];
    button.remove();
  } else {
    mes.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].message[0];
  }

  _lang_pages__WEBPACK_IMPORTED_MODULE_2__["default"].page = "end";
}

/***/ }),

/***/ "./src/pages/game/answer/answer.js":
/*!*****************************************!*\
  !*** ./src/pages/game/answer/answer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "answer": () => (/* binding */ answer)
/* harmony export */ });
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _scripts_stageSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/stageSet */ "./src/pages/game/scripts/stageSet.js");
/* harmony import */ var _scripts_Data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scripts/Data */ "./src/pages/game/scripts/Data.js");
/* harmony import */ var _bird_bird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bird/bird */ "./src/pages/game/bird/bird.js");
/* harmony import */ var _answer_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer.scss */ "./src/pages/game/answer/answer.scss");
/* harmony import */ var _scripts_getScore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../scripts/getScore */ "./src/pages/game/scripts/getScore.js");
/* harmony import */ var _Assets_audio_audio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Assets/audio/audio */ "./src/Assets/audio/audio.js");








class answer {
  constructor(bird) {
    this.bird = bird;
    this.button = document.createElement("div");
    this.button.className = `${this.bird.name} answers__button interactive`;
    this.name = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(this.button, "p", "answers__name", this.bird.name);
    this.indicator = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(this.button, "div", "indicator");
    document.body.addEventListener("switchLang", () => {
      this.getInfo();
    });
    document.body.addEventListener("stopGame", () => {
      this.button.removeEventListener("click", this.rightAnswer);
      this.button.removeEventListener("click", this.wrongAnswer); //this.button.classList.remove("interactive"); пока под вопросом
    });

    if (_scripts_stageSet__WEBPACK_IMPORTED_MODULE_2__.stageSet.questBird.id === this.bird.id) {
      this.button.addEventListener("click", this.rightAnswer);
    } else {
      this.button.addEventListener("click", this.wrongAnswer);
    }

    this.button.addEventListener("click", this.addBirdInfo);
    this.audioRight = new Audio(_Assets_audio_audio__WEBPACK_IMPORTED_MODULE_7__.sounds.open);
    this.audiowrong = new Audio(_Assets_audio_audio__WEBPACK_IMPORTED_MODULE_7__.sounds.incorrect);
  }

  getInfo() {
    const current = _scripts_Data__WEBPACK_IMPORTED_MODULE_3__["default"][_lang_lang__WEBPACK_IMPORTED_MODULE_0__.lang.Setings][_scripts_stageSet__WEBPACK_IMPORTED_MODULE_2__.stageSet.stage];
    this.bird = current.find(element => {
      if (element.id === this.bird.id) {
        return element;
      }
    });
    this.name.textContent = this.bird.name;
  }

  rightAnswer = () => {
    this.audioRight.play();
    this.button.classList.replace("interactive", "right");
    this.button.removeEventListener("click", this.rightAnswer);
    this.stopGame();
    const header = document.querySelector("header");
    (0,_scripts_getScore__WEBPACK_IMPORTED_MODULE_6__.getScore)(header);
    const pauseEvent = new Event("stopPlay");
    document.body.dispatchEvent(pauseEvent);
  };
  wrongAnswer = () => {
    this.audiowrong.play();
    this.button.classList.replace("interactive", "wrong");
    this.button.removeEventListener("click", this.wrongAnswer);
    _scripts_stageSet__WEBPACK_IMPORTED_MODULE_2__.stageSet.miss++;
  };

  stopGame() {
    const stopGame = new Event("stopGame");
    document.body.dispatchEvent(stopGame);
  }

  addBirdInfo = async () => {
    const info = document.querySelector(".info");
    const stop = new Event("stop");
    const birdCard = info.querySelector(".bird-card");

    try {
      birdCard.dispatchEvent(stop); //const name = info.querySelector(".name");
    } catch {
      false;
    }

    info.innerHTML = "";
    const infoBird = new _bird_bird__WEBPACK_IMPORTED_MODULE_4__.bird(this.bird, `${this.bird.name} bird-card smal`);
    await infoBird.addBird(info);
    infoBird.getInfo();
  };
}

/***/ }),

/***/ "./src/pages/game/bird/bird.js":
/*!*************************************!*\
  !*** ./src/pages/game/bird/bird.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bird": () => (/* binding */ bird)
/* harmony export */ });
/* harmony import */ var _bird_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bird.html */ "./src/pages/game/bird/bird.html");
/* harmony import */ var _bird_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bird.scss */ "./src/pages/game/bird/bird.scss");
/* harmony import */ var _Assets_svg_svg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Assets/svg/svg.js */ "./src/Assets/svg/svg.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _scripts_stageSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scripts/stageSet */ "./src/pages/game/scripts/stageSet.js");
/* harmony import */ var _scripts_Data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../scripts/Data */ "./src/pages/game/scripts/Data.js");






class bird {
  constructor(bird, conClass) {
    for (let key in bird) {
      this[key] = bird[key];
      this.stage = _scripts_stageSet__WEBPACK_IMPORTED_MODULE_4__.stageSet.stage;
    }

    this.rew = false; //идет ли перемотка

    this.container = document.createElement("section"); // контейет

    this.container.className = conClass; // закинул класс

    this.container.innerHTML = _bird_html__WEBPACK_IMPORTED_MODULE_0__["default"]; // закинул верстку

    this.progress = this.container.querySelector(".conrtroll__bar");
    this.img = this.container.querySelector(".audio__img");
    this.img.style.backgroundImage = `url('${this.image}')`;
    this.playButt = this.container.querySelector(".controll__button");
    this.playButt.style.backgroundImage = `url('${_Assets_svg_svg_js__WEBPACK_IMPORTED_MODULE_2__.svg.play}')`;
    this.blocAaudio = new Audio(this.audio);
    this.volume = this.container.querySelector(".volume__bar");
    this.getTime();
    this.container.addEventListener("stop", () => {
      this.blocAaudio.pause();
    });
    document.body.addEventListener("stopPlay", () => {
      this.blocAaudio.pause();
      this.playButt.style.backgroundImage = `url('${_Assets_svg_svg_js__WEBPACK_IMPORTED_MODULE_2__.svg.play}')`;
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
    setTimeout(() => this.container.classList.replace("smal", "bird-card_description"), 0);
  }

  play() {
    if (!this.blocAaudio.paused) {
      this.blocAaudio.pause();
      this.playButt.style.backgroundImage = `url('${_Assets_svg_svg_js__WEBPACK_IMPORTED_MODULE_2__.svg.play}')`;
    } else {
      const pauseEvent = new Event("stopPlay");
      document.body.dispatchEvent(pauseEvent);
      this.blocAaudio.play();
      this.playButt.style.backgroundImage = `url('${_Assets_svg_svg_js__WEBPACK_IMPORTED_MODULE_2__.svg.pause}')`;
    }
  }

  async getTime() {
    const time = this.container.querySelector(".time-total");
    const min = String(Math.floor(this.blocAaudio.duration / 60));
    const sec = String(Math.floor(this.blocAaudio.duration % 60));
    time.textContent = `${min.padStart(1 + 1, "0")}:${sec.padStart(1 + 1, "0")}`;
    const currTime = this.container.querySelector(".time-curretn");
    currTime.textContent = `${String(Math.floor(this.blocAaudio.currentTime / 60)).padStart(1 + 1, "0")}:${String(Math.floor(this.blocAaudio.currentTime % 60)).padStart(1 + 1, "0")}`;

    if (this.rew === false) {
      this.progress.value = this.blocAaudio.currentTime / (this.blocAaudio.duration / 100);
    }
  }

  rewind() {
    this.blocAaudio.currentTime = this.progress.value * (this.blocAaudio.duration / 100);
  }

  getInfo() {
    const current = _scripts_Data__WEBPACK_IMPORTED_MODULE_5__["default"][_lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang.Setings][this.stage];
    const bird = current.find(element => {
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

/***/ }),

/***/ "./src/pages/game/game.js":
/*!********************************!*\
  !*** ./src/pages/game/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _helpers_addNavText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/addNavText */ "./src/helpers/addNavText.js");
/* harmony import */ var _wrapper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrapper/wrapper */ "./src/pages/wrapper/wrapper.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _lang_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lang/pages */ "./src/lang/pages.js");
/* harmony import */ var _game_game_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../game/game.scss */ "./src/pages/game/game.scss");
/* harmony import */ var _game_GameNav_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game/GameNav.html */ "./src/pages/game/GameNav.html");







async function game() {
  (0,_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_1__.addwrapper)("Game");
  const page = document.querySelector(".Game");
  const header = page.querySelector("header");
  header.innerHTML += _game_GameNav_html__WEBPACK_IMPORTED_MODULE_6__["default"];
  (0,_helpers_addNavText__WEBPACK_IMPORTED_MODULE_0__.addText)(".nav-game__stage", "gameNav");
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_3__.rendAppElem)(header, "div", "score", _lang_lang__WEBPACK_IMPORTED_MODULE_2__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_2__.lang.Setings].score + 0);
  _lang_pages__WEBPACK_IMPORTED_MODULE_4__["default"].page = "Game";
  page.style.transform = `translateX(-150%)`;
}

/***/ }),

/***/ "./src/pages/game/scripts/Data.js":
/*!****************************************!*\
  !*** ./src/pages/game/scripts/Data.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const birdsData = {
  RU: [[{
    id: 1,
    name: "Ворон",
    species: "Corvus corax",
    description: "Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",
    image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
  }, {
    id: 2,
    name: "Журавль",
    species: "Grus grus",
    description: "Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».",
    image: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"
  }, {
    id: 3,
    name: "Ласточка",
    species: "Delichon urbicum",
    description: "Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.",
    image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"
  }, {
    id: 4,
    name: "Козодой",
    species: "Caprimulgus europaeus",
    description: "Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ",
    image: "https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"
  }, {
    id: 5,
    name: "Кукушка",
    species: "Cuculus canorus",
    description: "Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.",
    image: "https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"
  }, {
    id: 6,
    name: "Синица",
    species: "Parus major",
    description: "В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.",
    image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"
  }], [{
    id: 1,
    name: "Воробей",
    species: "Passer domesticus",
    description: "Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",
    image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"
  }, {
    id: 2,
    name: "Грач",
    species: "Corvus frugilegus",
    description: "Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.",
    image: "https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"
  }, {
    id: 3,
    name: "Галка",
    species: "Coloeus monedula",
    description: "Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.",
    image: "https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"
  }, {
    id: 4,
    name: "Певчий дрозд",
    species: "Turdus philomelos",
    description: "Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.",
    image: "https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"
  }, {
    id: 5,
    name: "Сорока",
    species: "Pica pica",
    description: "Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.",
    image: "https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"
  }, {
    id: 6,
    name: "Сойка",
    species: "Garrulus glandarius",
    description: "Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.",
    image: "https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"
  }], [{
    id: 1,
    name: "Зяблик",
    species: "Fringilla coelebs",
    description: "В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.",
    image: "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"
  }, {
    id: 2,
    name: "Клёст",
    species: "Loxia curvirostra",
    description: "Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.",
    image: "https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"
  }, {
    id: 3,
    name: "Горлица",
    species: "Streptopelia turtur",
    description: "Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.",
    image: "https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"
  }, {
    id: 4,
    name: "Дятел",
    species: "Dendrocopos major",
    description: "Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.",
    image: "https://live.staticflickr.com/65535/49339376578_e933426455.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"
  }, {
    id: 5,
    name: "Удод",
    species: "Upupa epops",
    description: "Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.",
    image: "https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"
  }, {
    id: 6,
    name: "Стриж",
    species: "Apus apus",
    description: "Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.",
    image: "https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"
  }], [{
    id: 1,
    name: "Жаворонок",
    species: "Alauda arvensis",
    description: "Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",
    image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"
  }, {
    id: 2,
    name: "Соловей",
    species: "Luscinia luscinia",
    description: "Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.",
    image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"
  }, {
    id: 3,
    name: "Скворец",
    species: "Sturnus vulgaris",
    description: "Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",
    image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"
  }, {
    id: 4,
    name: "Иволга",
    species: "Oriolus oriolus",
    description: "Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.",
    image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"
  }, {
    id: 5,
    name: "Свиристель",
    species: "Bombycilla garrulus",
    description: "У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",
    image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"
  }, {
    id: 6,
    name: "Щегол",
    species: "Carduelis carduelis",
    description: "Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю",
    image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"
  }], [{
    id: 1,
    name: "Орёл",
    species: "Aquila nipalensis",
    description: "В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров",
    image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"
  }, {
    id: 2,
    name: "Коршун",
    species: "Milvus migrans",
    description: "Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.",
    image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"
  }, {
    id: 3,
    name: "Лунь",
    species: "Circus cyaneus",
    description: "Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».",
    image: "https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"
  }, {
    id: 4,
    name: "Сокол",
    species: "Falco peregrinus",
    description: "Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.",
    image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"
  }, {
    id: 5,
    name: "Ястреб",
    species: "Accipiter gentilis",
    description: "Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",
    image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"
  }, {
    id: 6,
    name: "Филин",
    species: "Bubo bubo",
    description: "Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.",
    image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"
  }], [{
    id: 1,
    name: "Альбатрос",
    species: "Diomedea exulans",
    description: "Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния",
    image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"
  }, {
    id: 2,
    name: "Олуша",
    species: "Sula nebouxii",
    description: "Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок",
    image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"
  }, {
    id: 3,
    name: "Буревестник",
    species: "Puffinus griseus",
    description: "Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.",
    image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"
  }, {
    id: 4,
    name: "Пеликан",
    species: "Pelecanus",
    description: "Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.",
    image: "//live.staticflickr.com/65535/50507340216_feed259135_z.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"
  }, {
    id: 5,
    name: "Пингвин",
    species: "Aptenodytes forsteri",
    description: "Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.",
    image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"
  }, {
    id: 6,
    name: "Чайка",
    species: "Larus argentatus",
    description: "Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.",
    image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"
  }]],
  Eng: [[{
    id: 1,
    name: "Raven",
    species: "Corvus corax",
    description: "Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.",
    image: "https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
  }, {
    id: 2,
    name: "Shadoof",
    species: "Grus grus",
    description: "The sounds made by the shadoof are similar to the voiced «kur-ly - kur-ly». Cranes most often sing in a duet - one bird begins the song with the syllable «kur», and the second picks up «ly». If a bird sings alone, then it makes only the sound of «chickens».",
    image: "https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"
  }, {
    id: 3,
    name: "Swallow",
    species: "Delichon urbicum",
    description: "Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.",
    image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"
  }, {
    id: 4,
    name: "Nightjar",
    species: "Caprimulgus europaeus",
    description: "Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.",
    image: "https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"
  }, {
    id: 5,
    name: "Cuckoo",
    species: "Cuculus canorus",
    description: "The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.",
    image: "https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"
  }, {
    id: 6,
    name: "Tit",
    species: "Parus major",
    description: "More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.",
    image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"
  }], [{
    id: 1,
    name: "Sparrow",
    species: "Passer domesticus",
    description: "Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.",
    image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"
  }, {
    id: 2,
    name: "Rook",
    species: "Corvus frugilegus",
    description: "Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing “rattling”, they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.",
    image: "https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"
  }, {
    id: 3,
    name: "Jackdaw",
    species: "Coloeus monedula",
    description: "The word “jackdaw” comes from word “jack” is translated as “black”. This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw “monedula” is associated with the words coin for the bird's love for shiny and bright things.",
    image: "https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"
  }, {
    id: 4,
    name: "Songthrush",
    species: "Turdus philomelos",
    description: "Songthrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.",
    image: "https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"
  }, {
    id: 5,
    name: "Magpie",
    species: "Pica pica",
    description: "Magpie is a very hardworking bird. She builds up to eight nests, and then chooses the best of them. The entrance to the nest of magpies is always facing south, so that it is warmer in the dwelling. Magpies are the only birds that recognize themselves in a mirror.",
    image: "https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"
  }, {
    id: 6,
    name: "Jay",
    species: "Garrulus glandarius",
    description: "When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.",
    image: "https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"
  }], [{
    id: 1,
    name: "Finch",
    species: "Fringilla coelebs",
    description: "There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is a gushing multi-minute roulades.",
    image: "https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"
  }, {
    id: 2,
    name: "Crossbill",
    species: "Loxia curvirostra",
    description: "Crossbills are called “Christmas” birds. Under exceptional conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.",
    image: "https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"
  }, {
    id: 3,
    name: "Turtledove",
    species: "Streptopelia turtur",
    description: "Turtledoves live in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.",
    image: "https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"
  }, {
    id: 4,
    name: "Woodpecker",
    species: "Dendrocopos major",
    description: "The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the “drum roll” of woodpeckers - a trill from the vibration of branches under the quick beats of the bird's beak. In good weather, the shot can be heard within a radius of 1.5 km.",
    image: "https://live.staticflickr.com/65535/49339376578_e933426455.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"
  }, {
    id: 5,
    name: "Hoopoe",
    species: "Upupa epops",
    description: "Hoopoes prefer to live in open landscapes with selected trees or groves. The most typical for birds are forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.",
    image: "https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"
  }, {
    id: 6,
    name: "Swift",
    species: "Apus apus",
    description: "Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.",
    image: "https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"
  }], [{
    id: 1,
    name: "Lark",
    species: "Alauda arvensis",
    description: "Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.",
    image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"
  }, {
    id: 2,
    name: "Nightingale",
    species: "Luscinia luscinia",
    description: "Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.",
    image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"
  }, {
    id: 3,
    name: "Starling",
    species: "Sturnus vulgaris",
    description: "Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.",
    image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"
  }, {
    id: 4,
    name: "Oriole",
    species: "Oriolus oriolus",
    description: "The melody of the oriole's voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.",
    image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"
  }, {
    id: 5,
    name: "Waxwing",
    species: "Bombycilla garrulus",
    description: "The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.",
    image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"
  }, {
    id: 6,
    name: "Goldfinch",
    species: "Carduelis carduelis",
    description: "Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.",
    image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"
  }], [{
    id: 1,
    name: "Eagle",
    species: "Aquila nipalensis",
    description: "In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km/h. The illusion of slow movement is due to the flight altitude - more than 700 meters",
    image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"
  }, {
    id: 2,
    name: "Kite",
    species: "Milvus migrans",
    description: "Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.",
    image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"
  }, {
    id: 3,
    name: "Harrier",
    species: "Circus cyaneus",
    description: "Harrier is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison “gray-haired like a harrier” is associated with such a bird.",
    image: "https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"
  }, {
    id: 4,
    name: "Falcon",
    species: "Falco peregrinus",
    description: "The Latin name of the falcon Falco comes from the word “sickle” because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.",
    image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"
  }, {
    id: 5,
    name: "Hawk",
    species: "Accipiter gentilis",
    description: "All hawks are characterized by wide and short wings. Another distinguishing feature is the white “eyebrows” above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.",
    image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"
  }, {
    id: 6,
    name: "Eagle owl",
    species: "Bubo bubo",
    description: "The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.",
    image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"
  }], [{
    id: 1,
    name: "Albatross",
    species: "Diomedea exulans",
    description: "Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.",
    image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"
  }, {
    id: 2,
    name: "Gannet",
    species: "Sula nebouxii",
    description: "A feature of the blue-footed gannet is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.",
    image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"
  }, {
    id: 3,
    name: "Petrel",
    species: "Puffinus griseus",
    description: "The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.",
    image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"
  }, {
    id: 4,
    name: "Pelican",
    species: "Pelecanus",
    description: "Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.",
    image: "https://live.staticflickr.com/65535/50507340216_feed259135_z.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"
  }, {
    id: 5,
    name: "Penguin",
    species: "Aptenodytes forsteri",
    description: "The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin's diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.",
    image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"
  }, {
    id: 6,
    name: "Seagull",
    species: "Larus argentatus",
    description: "Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.",
    image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
    audio: "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"
  }]]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (birdsData);

/***/ }),

/***/ "./src/pages/game/scripts/addGameMain.js":
/*!***********************************************!*\
  !*** ./src/pages/game/scripts/addGameMain.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addGameMain": () => (/* binding */ addGameMain)
/* harmony export */ });
/* harmony import */ var _bird_bird__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bird/bird */ "./src/pages/game/bird/bird.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _stageSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stageSet */ "./src/pages/game/scripts/stageSet.js");
/* harmony import */ var _Assets_img_bird_06a46938_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Assets/img/bird.06a46938.jpg */ "./src/Assets/img/bird.06a46938.jpg");
/* harmony import */ var _helpers_NextPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../helpers/NextPage */ "./src/helpers/NextPage.js");
/* harmony import */ var _endGame_addEndPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../endGame/addEndPage */ "./src/pages/endGame/addEndPage.js");
/* harmony import */ var _wrapper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../wrapper/wrapper */ "./src/pages/wrapper/wrapper.js");
/* harmony import */ var _home_homeNav_homeNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../home/homeNav/homeNav */ "./src/pages/home/homeNav/homeNav.js");
/* harmony import */ var _Gallery_Gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Gallery/Gallery */ "./src/pages/Gallery/Gallery.js");










function addGameMain() {
  const page = document.querySelector(".Game");
  const container = page.querySelector("main");
  container.innerHTML = ""; //container.classList.add(lang.Eng.gameNav[stageSet.stage].replace(" ", "_"));

  container.classList.add("main-game");
  _stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.getBird();
  const quest = new _bird_bird__WEBPACK_IMPORTED_MODULE_0__.bird(_stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.questBird, "question bird-card");
  quest.addBird(container);
  quest.img.style.backgroundImage = `url('${_Assets_img_bird_06a46938_jpg__WEBPACK_IMPORTED_MODULE_4__}')`;
  quest.time = quest.blocAaudio.duration;
  container.append(_stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.getAnswers());
  const info = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_2__.rendAppElem)(container, "div", "info");
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_2__.rendAppElem)(info, "p", "info__content", _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].info);
  const button = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_2__.rendAppElem)(container, "button", "button-next-page", _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].next);
  document.body.addEventListener("stopGame", () => {
    button.classList.add("redy");
    button.classList.add("interactive");
    button.addEventListener("click", () => {
      _stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.stage++;
      _stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.miss = 0;

      if (_stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.stage < 6) {
        addGameMain();
        const stages = document.querySelectorAll(".nav-game__stage");
        stages[_stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.stage - 1].classList.remove("nav-game__stage_active");
        stages[_stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.stage].classList.add("nav-game__stage_active");
        const pauseEvent = new Event("stopPlay");
        document.body.dispatchEvent(pauseEvent);
      } else {
        (0,_helpers_NextPage__WEBPACK_IMPORTED_MODULE_5__.nextPage)(".wrapper", (0,_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_7__.addwrapper)("end-game"));
        _stageSet__WEBPACK_IMPORTED_MODULE_3__.stageSet.stage = 0;
        (0,_endGame_addEndPage__WEBPACK_IMPORTED_MODULE_6__.endPage)();
        (0,_home_homeNav_homeNav__WEBPACK_IMPORTED_MODULE_8__.addHomeNav)(".end-header");
        (0,_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_9__.gallery)(".end-header");
      }
    });
  });
}

/***/ }),

/***/ "./src/pages/game/scripts/getScore.js":
/*!********************************************!*\
  !*** ./src/pages/game/scripts/getScore.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScore": () => (/* binding */ getScore)
/* harmony export */ });
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _stageSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stageSet */ "./src/pages/game/scripts/stageSet.js");



function getScore() {
  _stageSet__WEBPACK_IMPORTED_MODULE_2__.stageSet.score += 5 - _stageSet__WEBPACK_IMPORTED_MODULE_2__.stageSet.miss;
  const sc = document.querySelector(".score");
  sc.textContent = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings].score + _stageSet__WEBPACK_IMPORTED_MODULE_2__.stageSet.score;
}

/***/ }),

/***/ "./src/pages/game/scripts/stageSet.js":
/*!********************************************!*\
  !*** ./src/pages/game/scripts/stageSet.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stageSet": () => (/* binding */ stageSet)
/* harmony export */ });
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _answer_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../answer/answer */ "./src/pages/game/answer/answer.js");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Data */ "./src/pages/game/scripts/Data.js");




const stageSet = {
  miss: 0,
  score: 0,
  stage: 0,
  getBird: function () {
    this.birds = _Data__WEBPACK_IMPORTED_MODULE_3__["default"][_lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings][this.stage];
    this.questBird = this.birds[Math.floor(Math.random() * this.birds.length)];
    this.lang = _lang_lang__WEBPACK_IMPORTED_MODULE_1__.lang.Setings;
  },
  getAnswers: function () {
    const answers = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.nevElement)("div", "answers");
    this.birds.forEach(element => {
      const button = new _answer_answer__WEBPACK_IMPORTED_MODULE_2__.answer(element);
      answers.append(button.button);
    });
    return answers;
  }
};

/***/ }),

/***/ "./src/pages/home/homeFooter/homeFooter.js":
/*!*************************************************!*\
  !*** ./src/pages/home/homeFooter/homeFooter.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addFooter": () => (/* binding */ addFooter)
/* harmony export */ });
/* harmony import */ var _Assets_svg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Assets/svg/svg */ "./src/Assets/svg/svg.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _homeFooter_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeFooter.scss */ "./src/pages/home/homeFooter/homeFooter.scss");



function addFooter() {
  const footer = document.querySelector(".footer");
  const link = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(footer, "a");
  const logo = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(link, "div", "footer__logo interactive", "", _Assets_svg_svg__WEBPACK_IMPORTED_MODULE_0__.svg.rs);
  const linkGit = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(footer, "a");
  const git = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(linkGit, "div", "footer__git interactive", "", _Assets_svg_svg__WEBPACK_IMPORTED_MODULE_0__.svg.git);
  link.href = "https://rs.school/js/";
  link.target = "blank";
  linkGit.href = "https://github.com/AmdreiMash";
  linkGit.target = "blank";
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(footer, "span", "footer__year", "2022");
}

/***/ }),

/***/ "./src/pages/home/homeMain/homeMain.js":
/*!*********************************************!*\
  !*** ./src/pages/home/homeMain/homeMain.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHomeMain": () => (/* binding */ addHomeMain)
/* harmony export */ });
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game/game */ "./src/pages/game/game.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _helpers_NextPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/NextPage */ "./src/helpers/NextPage.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _homeMain_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeMain.scss */ "./src/pages/home/homeMain/homeMain.scss");
/* harmony import */ var _lang_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lang/pages */ "./src/lang/pages.js");
/* harmony import */ var _game_scripts_addGameMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../game/scripts/addGameMain */ "./src/pages/game/scripts/addGameMain.js");
/* harmony import */ var _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../game/scripts/stageSet */ "./src/pages/game/scripts/stageSet.js");








function addHomeMain() {
  const main = document.querySelector("main");
  const conteinet = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(main, "div", "container");
  const heading = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(conteinet, "h1", "container__heading", _lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang.Setings].heading);
  _lang_pages__WEBPACK_IMPORTED_MODULE_5__["default"].home.heading = heading;
  const button = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(conteinet, "button", "start-button interactive", _lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang.Setings].start);
  button.addEventListener("click", () => {
    (0,_helpers_NextPage__WEBPACK_IMPORTED_MODULE_2__.nextPage)(".wrapper", (0,_game_game__WEBPACK_IMPORTED_MODULE_0__.game)()); //stageSet.score = 0;
    //stageSet.stage = 0;

    setTimeout(() => {
      (0,_game_scripts_addGameMain__WEBPACK_IMPORTED_MODULE_6__.addGameMain)();
    }, 10);
  });
  _lang_pages__WEBPACK_IMPORTED_MODULE_5__["default"].home.button = button;
}

/***/ }),

/***/ "./src/pages/home/homeNav/homeNav.js":
/*!*******************************************!*\
  !*** ./src/pages/home/homeNav/homeNav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addHomeNav": () => (/* binding */ addHomeNav)
/* harmony export */ });
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../game/game */ "./src/pages/game/game.js");
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _helpers_NextPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/NextPage */ "./src/helpers/NextPage.js");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lang/lang */ "./src/lang/lang.js");
/* harmony import */ var _lang_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../lang/pages */ "./src/lang/pages.js");
/* harmony import */ var _HomeNav_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomeNav.scss */ "./src/pages/home/homeNav/HomeNav.scss");
/* harmony import */ var _game_scripts_addGameMain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../game/scripts/addGameMain */ "./src/pages/game/scripts/addGameMain.js");
/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../start */ "./src/pages/home/start.js");
/* harmony import */ var _Gallery_Gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Gallery/Gallery */ "./src/pages/Gallery/Gallery.js");
/* harmony import */ var _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../game/scripts/stageSet */ "./src/pages/game/scripts/stageSet.js");










function addHomeNav(head = "header") {
  const nav = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.nevElement)("nav", "nav");
  _lang_pages__WEBPACK_IMPORTED_MODULE_4__["default"].home.nav = nav;
  const menu = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.nevElement)("ul", "menu");

  for (let i = 0; i < _lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang.Setings].menu.length; i++) {
    let li = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_1__.rendAppElem)(menu, "li", "menu__link interactive", _lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang[_lang_lang__WEBPACK_IMPORTED_MODULE_3__.lang.Setings].menu[i]);

    if (i == 0) {
      li.classList.add("menu__link_active");
      li.addEventListener("click", () => {
        document.body.innerHTML = "";
        _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_9__.stageSet.score = 0;
        (0,_start__WEBPACK_IMPORTED_MODULE_7__.start)();
      });
    } else if (i == 1) {
      li.addEventListener("click", () => {
        (0,_helpers_NextPage__WEBPACK_IMPORTED_MODULE_2__.nextPage)(".wrapper", (0,_game_game__WEBPACK_IMPORTED_MODULE_0__.game)());
        setTimeout(() => {
          _game_scripts_stageSet__WEBPACK_IMPORTED_MODULE_9__.stageSet.score = 0;
          (0,_game_scripts_addGameMain__WEBPACK_IMPORTED_MODULE_6__.addGameMain)();
        }, 10);
      });
    } else {
      li.classList.add("button-popup");
      li.addEventListener("click", event => {
        document.querySelector(".gallery").classList.toggle("active");
        event.target.classList.toggle("activ");
        const pauseEvent = new Event("stopPlay");
        document.body.dispatchEvent(pauseEvent);
      });
    }
  }

  nav.append(menu);
  document.querySelector(head).append(nav);
  return nav;
}

/***/ }),

/***/ "./src/pages/home/start.js":
/*!*********************************!*\
  !*** ./src/pages/home/start.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _homeFooter_homeFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeFooter/homeFooter */ "./src/pages/home/homeFooter/homeFooter.js");
/* harmony import */ var _homeMain_homeMain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeMain/homeMain */ "./src/pages/home/homeMain/homeMain.js");
/* harmony import */ var _homeNav_homeNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeNav/homeNav */ "./src/pages/home/homeNav/homeNav.js");
/* harmony import */ var _wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wrapper/wrapper */ "./src/pages/wrapper/wrapper.js");
/* harmony import */ var _Gallery_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Gallery/Gallery */ "./src/pages/Gallery/Gallery.js");





function start() {
  (0,_wrapper_wrapper__WEBPACK_IMPORTED_MODULE_3__.addwrapper)();
  (0,_homeMain_homeMain__WEBPACK_IMPORTED_MODULE_1__.addHomeMain)();
  (0,_homeFooter_homeFooter__WEBPACK_IMPORTED_MODULE_0__.addFooter)();
  (0,_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_4__.gallery)();
  (0,_homeNav_homeNav__WEBPACK_IMPORTED_MODULE_2__.addHomeNav)();
}

/***/ }),

/***/ "./src/pages/wrapper/wrapper.js":
/*!**************************************!*\
  !*** ./src/pages/wrapper/wrapper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addwrapper": () => (/* binding */ addwrapper)
/* harmony export */ });
/* harmony import */ var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/helper */ "./src/helpers/helper.js");
/* harmony import */ var _wrapper_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper.scss */ "./src/pages/wrapper/wrapper.scss");
/* harmony import */ var _lang_lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lang/lang */ "./src/lang/lang.js");




const logo = __webpack_require__(/*! ../../Assets/svg/logo.4f82cd73.svg */ "./src/Assets/svg/logo.4f82cd73.svg");

function addwrapper(PageName = "Home") {
  const wrapper = document.createElement("div");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");
  const hederTop = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.rendAppElem)(header, "div", "header__top");
  (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.rendAppElem)(hederTop, "div", "header__logo", "", logo);
  const lan = (0,_helpers_helper__WEBPACK_IMPORTED_MODULE_0__.rendAppElem)(hederTop, "div", "lang interactive", _lang_lang__WEBPACK_IMPORTED_MODULE_2__.lang.Setings);
  lan.addEventListener("click", _lang_lang__WEBPACK_IMPORTED_MODULE_2__.lang.switchLang);
  wrapper.className = `wrapper ${PageName}`;
  header.className = "header";
  main.className = "main";
  footer.className = "footer";
  wrapper.append(header, main, footer);
  document.body.append(wrapper);
  return wrapper;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css ***!
  \*************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAAA;AAEA;+EAAA;AAGA;;;EAAA;AAKA;EACE,iBAAA,EAAA,MAAA;EACA,8BAAA,EAAA,MAAA;AAFF;;AAKA;+EAAA;AAGA;;EAAA;AAIA;EACE,SAAA;AAJF;;AAOA;;EAAA;AAIA;EACE,cAAA;AALF;;AAQA;;;EAAA;AAKA;EACE,cAAA;EACA,gBAAA;AANF;;AASA;+EAAA;AAGA;;;EAAA;AAKA;EACE,+BAAA;UAAA,uBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;AARF;;AAWA;;;EAAA;AAKA;EACE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AATF;;AAYA;+EAAA;AAGA;;EAAA;AAIA;EACE,6BAAA;AAXF;;AAcA;;;EAAA;AAKA;EACE,mBAAA,EAAA,MAAA;EACA,0BAAA,EAAA,MAAA;EACA,0BAAA;EAAA,sDAAA;UAAA,8CAAA,EAAA,MAAA;AAZF;;AAeA;;EAAA;AAIA;;EAEE,mBAAA;AAbF;;AAgBA;;;EAAA;AAKA;;;EAGE,iCAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;AAdF;;AAiBA;;EAAA;AAIA;EACE,cAAA;AAfF;;AAkBA;;;EAAA;AAKA;;EAEE,cAAA;EACA,cAAA;EACA,kBAAA;EACA,wBAAA;AAhBF;;AAmBA;EACE,eAAA;AAhBF;;AAmBA;EACE,WAAA;AAhBF;;AAmBA;+EAAA;AAGA;;EAAA;AAIA;EACE,kBAAA;AAlBF;;AAqBA;+EAAA;AAGA;;;EAAA;AAKA;;;;;EAKE,oBAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,iBAAA,EAAA,MAAA;EACA,SAAA,EAAA,MAAA;AApBF;;AAuBA;;;EAAA;AAKA;QACQ,MAAA;EACN,iBAAA;AArBF;;AAwBA;;;EAAA;AAKA;SACS,MAAA;EACP,oBAAA;AAtBF;;AAyBA;;EAAA;AAIA;;;;EAIE,0BAAA;AAvBF;;AA0BA;;EAAA;AAIA;;;;EAIE,kBAAA;EACA,UAAA;AAxBF;;AA2BA;;EAAA;AAIA;;;;EAIE,8BAAA;AAzBF;;AA4BA;;EAAA;AAIA;EACE,8BAAA;AA1BF;;AA6BA;;;;;EAAA;AAOA;EACE,8BAAA;UAAA,sBAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,cAAA,EAAA,MAAA;EACA,eAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;EACA,mBAAA,EAAA,MAAA;AA3BF;;AA8BA;;EAAA;AAIA;EACE,wBAAA;AA5BF;;AA+BA;;EAAA;AAIA;EACE,cAAA;AA7BF;;AAgCA;;;EAAA;AAKA;;EAEE,8BAAA;UAAA,sBAAA,EAAA,MAAA;EACA,UAAA,EAAA,MAAA;AA9BF;;AAiCA;;EAAA;AAIA;;EAEE,YAAA;AA/BF;;AAkCA;;;EAAA;AAKA;EACE,6BAAA,EAAA,MAAA;EACA,oBAAA,EAAA,MAAA;AAhCF;;AAmCA;;EAAA;AAIA;EACE,wBAAA;AAjCF;;AAoCA;;;EAAA;AAKA;EACE,0BAAA,EAAA,MAAA;EACA,aAAA,EAAA,MAAA;AAlCF;;AAqCA;+EAAA;AAGA;;EAAA;AAIA;EACE,cAAA;AApCF;;AAuCA;;EAAA;AAIA;EACE,kBAAA;AArCF;;AAwCA;+EAAA;AAGA;;EAAA;AAIA;EACE,aAAA;AAvCF;;AA0CA;;EAAA;AAIA;EACE,aAAA;AAxCF","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Gallery/Gallery.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Gallery/Gallery.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gallery {\n  width: 90%;\n  height: 80vh;\n  position: fixed;\n  top: 100px;\n  background-color: rgb(78, 79, 79);\n  -webkit-transform: translateY(-150%);\n          transform: translateY(-150%);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: scroll;\n  z-index: 100;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n@media (max-width: 449px) {\n  .gallery {\n    top: 155px;\n  }\n}\n\n.close {\n  height: 30px;\n  width: 30px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 110;\n}\n\n.active {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}", "",{"version":3,"sources":["webpack://./src/pages/Gallery/Gallery.scss"],"names":[],"mappings":"AAAA;EACE,UAAA;EACA,YAAA;EACA,eAAA;EACA,UAAA;EACA,iCAAA;EACA,oCAAA;UAAA,4BAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,gBAAA;EACA,YAAA;EACA,0BAAA;EAAA,kBAAA;AACF;AACE;EAbF;IAcI,UAAA;EAEF;AACF;;AAAA;EACE,YAAA;EACA,WAAA;EACA,sBAAA;EACA,4BAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;AAGF;;AADA;EACE,gCAAA;UAAA,wBAAA;AAIF","sourcesContent":[".gallery {\n  width: 90%;\n  height: 80vh;\n  position: fixed;\n  top: 100px;\n  background-color: rgb(78, 79, 79);\n  transform: translateY(-150%);\n  display: flex;\n  flex-direction: column;\n  overflow: scroll;\n  z-index: 100;\n  transition: all 1s;\n\n  @media (width < 450px) {\n    top: 155px;\n  }\n}\n.close {\n  height: 30px;\n  width: 30px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 110;\n}\n.active {\n  transform: translateY(0);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/endGame/endGame.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/endGame/endGame.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".end-game .message {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 30px;\n}", "",{"version":3,"sources":["webpack://./src/pages/endGame/endGame.scss"],"names":[],"mappings":"AACE;EAEE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,SAAA;AADJ","sourcesContent":[".end-game {\n  .message {\n    //margin: 100px auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 30px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/answer/answer.scss":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/answer/answer.scss ***!
  \******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "p {\n  margin: 0;\n}\n\n.answers {\n  font-size: 19px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  gap: 3px;\n}\n.answers .answers__button {\n  height: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 5px 10px;\n  border: 1px #fff solid;\n  border-radius: 1%;\n  background-color: #6b6969;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 19%;\n          flex: 1 1 19%;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.answers .answers__button .indicator {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #424242;\n  border: 1px #333232 solid;\n}\n.answers .wrong {\n  background-color: rgba(247, 27, 27, 0.757);\n}\n.answers .wrong .indicator {\n  background-color: red;\n  border: 1px #a90000 solid;\n}\n.answers .right {\n  background-color: rgb(67, 135, 40);\n}\n.answers .right .indicator {\n  background-color: #04f831;\n  border: 1px #03a900 solid;\n}\n\n.interactive {\n  cursor: pointer;\n  opacity: 0.8;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.interactive:hover {\n  scale: 1.05;\n  opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/pages/game/answer/answer.scss"],"names":[],"mappings":"AAAA;EACE,SAAA;AACF;;AACA;EACE,eAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,QAAA;AAEF;AAAE;EACE,YAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,iBAAA;EACA,sBAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;MAAA,iBAAA;UAAA,aAAA;EACA,4BAAA;EAAA,oBAAA;AAEJ;AAAI;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,yBAAA;AAEN;AACE;EACE,0CAAA;AACJ;AAAI;EACE,qBAAA;EACA,yBAAA;AAEN;AACE;EACE,kCAAA;AACJ;AAAI;EACE,yBAAA;EACA,yBAAA;AAEN;;AAGA;EACE,eAAA;EACA,YAAA;EACA,4BAAA;EAAA,oBAAA;AAAF;;AAGA;EACE,WAAA;EACA,UAAA;AAAF","sourcesContent":["p {\n  margin: 0;\n}\n.answers {\n  font-size: 19px;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n\n  .answers__button {\n    height: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px 10px;\n    border: 1px #fff solid;\n    border-radius: 1%;\n    background-color: #6b6969;\n    flex: 1 1 19%;\n    transition: all 0.5s;\n\n    .indicator {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background-color: #424242;\n      border: 1px #333232 solid;\n    }\n  }\n  .wrong {\n    background-color: rgba(247, 27, 27, 0.757);\n    .indicator {\n      background-color: red;\n      border: 1px #a90000 solid;\n    }\n  }\n  .right {\n    background-color: rgb(67, 135, 40);\n    .indicator {\n      background-color: #04f831;\n      border: 1px #03a900 solid;\n    }\n  }\n}\n\n.interactive {\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.5s;\n}\n\n.interactive:hover {\n  scale: 1.05;\n  opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/bird/bird.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/bird/bird.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../Assets/svg/v1.svg */ "./src/Assets/svg/v1.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".audio {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  padding: 5px 0 15px 5px;\n  gap: 15px;\n}\n@media (max-width: 500px) {\n  .audio {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: initial;\n        -ms-flex-align: initial;\n            align-items: initial;\n  }\n}\n.audio .audio__img {\n  height: 155px;\n  width: 199px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 5%;\n}\n@media (max-width: 700px) {\n  .audio .audio__img {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n  }\n}\n@media (max-width: 500px) {\n  .audio .audio__img {\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n}\n.audio .volume {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.audio .volume .volume__icon {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  width: 30px;\n  height: 30px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n}\n.audio .volume .volume__bar {\n  width: 0px;\n  height: 5px;\n  position: relative;\n  cursor: pointer;\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  opacity: 0;\n}\n.audio .volume:hover .volume__bar {\n  width: 15vw;\n  -webkit-transition: width 0.3s ease;\n  transition: width 0.3s ease;\n  opacity: 1;\n}\n.audio .audio__player {\n  -webkit-box-flex: 4;\n      -ms-flex: 4 1 70%;\n          flex: 4 1 70%;\n  gap: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (max-width: 500px) {\n  .audio .audio__player .name,\n.audio .audio__player .species {\n    -ms-flex-item-align: center;\n        align-self: center;\n  }\n}\n.audio .audio__player .name,\n.audio .audio__player .species {\n  font-size: 19px;\n}\n.audio .audio__player .conrtroll {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 0 10px;\n}\n.audio .audio__player .conrtroll .controll__button {\n  height: 40px;\n  width: 40px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  cursor: pointer;\n  opacity: 0.6;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n@media (max-width: 500px) {\n  .audio .audio__player .conrtroll .controll__button {\n    height: 30px;\n    width: 30px;\n  }\n}\n.audio .audio__player .conrtroll .controll__button:hover {\n  opacity: 1;\n}\n.audio .audio__player .conrtroll .conrtroll__timeBar {\n  width: 85%;\n}\n.audio .audio__player .conrtroll .conrtroll__timeBar .conrtroll__time {\n  margin: 0 auto;\n  width: 99%;\n  font-size: 9px;\n  color: rgba(255, 251, 251, 0.474);\n}\n.audio .audio__player .conrtroll .conrtroll__timeBar .conrtroll__bar {\n  width: 100%;\n  height: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.audio .audio__player .conrtroll .conrtroll__timeBar .conrtroll__time {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.bird-card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 5px;\n  border-radius: 5px;\n  -webkit-transition: scale 0.3s;\n  transition: scale 0.3s;\n}\n\n.smal {\n  scale: 0.01;\n}\n\n.bird-card_description .audio .audio__player {\n  scale: 1;\n  -webkit-transition: scale 0.4s;\n  transition: scale 0.4s;\n}\n.bird-card_description .audio .audio__player .conrtroll .controll__button {\n  height: 30px;\n  width: 30px;\n}\n.bird-card_description .audio .audio__player .conrtroll .conrtroll__bar {\n  width: 100%;\n  height: 3px;\n}", "",{"version":3,"sources":["webpack://./src/pages/game/bird/bird.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,8BAAA;MAAA,2BAAA;UAAA,6BAAA;EACA,uBAAA;EACA,SAAA;AACF;AACE;EARF;IASI,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;IACA,0BAAA;QAAA,uBAAA;YAAA,oBAAA;EAEF;AACF;AAAE;EAEE,aAAA;EACA,YAAA;EAEA,sBAAA;EACA,2BAAA;EACA,4BAAA;EACA,iBAAA;AAAJ;AACI;EATF;IAUI,0BAAA;QAAA,sBAAA;EAEJ;AACF;AADI;EAZF;IAaI,2BAAA;QAAA,kBAAA;EAIJ;AACF;AAFE;EACE,0BAAA;EAAA,uBAAA;EAAA,kBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;AAIJ;AAFI;EACE,yDAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,sBAAA;EACA,eAAA;AAIN;AADI;EAEE,UAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;EACA,mCAAA;EAAA,2BAAA;EACA,UAAA;AAEN;AAEI;EAEE,WAAA;EACA,mCAAA;EAAA,2BAAA;EACA,UAAA;AADN;AAIE;EACE,mBAAA;MAAA,iBAAA;UAAA,aAAA;EACA,QAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;AAFJ;AAII;EACE;;IAEE,2BAAA;QAAA,kBAAA;EAFN;AACF;AAII;;EAEE,eAAA;AAFN;AAKI;EACE,WAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EAEA,WAAA;AAJN;AAMM;EACE,YAAA;EACA,WAAA;EACA,sBAAA;EACA,4BAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;MAAA,kBAAA;UAAA,cAAA;AAJR;AAMQ;EAVF;IAWI,YAAA;IACA,WAAA;EAHR;AACF;AAKM;EACE,UAAA;AAHR;AAKM;EACE,UAAA;AAHR;AAKQ;EACE,cAAA;EACA,UAAA;EACA,cAAA;EACA,iCAAA;AAHV;AAMQ;EACE,WAAA;EACA,WAAA;EACA,kBAAA;EACA,eAAA;AAJV;AAOQ;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;AALV;;AAWA;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,YAAA;EACA,kBAAA;EACA,8BAAA;EAAA,sBAAA;AARF;;AAUA;EACE,WAAA;AAPF;;AAWI;EAWE,QAAA;EACA,8BAAA;EAAA,sBAAA;AAlBN;AAQQ;EACE,YAAA;EACA,WAAA;AANV;AAQQ;EACE,WAAA;EACA,WAAA;AANV","sourcesContent":[".audio {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px 0 15px 5px;\n  gap: 15px;\n\n  @media (width < 501px) {\n    flex-direction: column;\n    align-items: unset;\n  }\n\n  .audio__img {\n    //height: 15vw;\n    height: 155px;\n    width: 199px;\n    //width: 20vw;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 5%;\n    @media (width < 701px) {\n      align-self: flex-start;\n    }\n    @media (width < 501px) {\n      align-self: center;\n    }\n  }\n  .volume {\n    width: fit-content;\n    display: flex;\n    align-items: center;\n\n    .volume__icon {\n      background-image: url(\"../../../Assets/svg/v1.svg\");\n      width: 30px;\n      height: 30px;\n      background-repeat: no-repeat;\n      background-size: cover;\n      cursor: pointer;\n    }\n\n    .volume__bar {\n      //display: none;\n      width: 0px;\n      height: 5px;\n      position: relative;\n      cursor: pointer;\n      transition: width 0.3s ease;\n      opacity: 0;\n    }\n  }\n  .volume:hover {\n    .volume__bar {\n      //display: block;\n      width: 15vw;\n      transition: width 0.3s ease;\n      opacity: 1;\n    }\n  }\n  .audio__player {\n    flex: 4 1 70%;\n    gap: 5px;\n    display: flex;\n    flex-direction: column;\n\n    @media (width < 501px) {\n      .name,\n      .species {\n        align-self: center;\n      }\n    }\n    .name,\n    .species {\n      font-size: 19px;\n    }\n\n    .conrtroll {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      //justify-content: space-;\n      gap: 0 10px;\n\n      .controll__button {\n        height: 40px;\n        width: 40px;\n        background-size: cover;\n        background-repeat: no-repeat;\n        border-radius: 50%;\n        cursor: pointer;\n        opacity: 0.6;\n        flex: 0 0 auto;\n\n        @media (width < 501px) {\n          height: 30px;\n          width: 30px;\n        }\n      }\n      .controll__button:hover {\n        opacity: 1;\n      }\n      .conrtroll__timeBar {\n        width: 85%;\n\n        .conrtroll__time {\n          margin: 0 auto;\n          width: 99%;\n          font-size: 9px;\n          color: rgba(255, 251, 251, 0.474);\n        }\n\n        .conrtroll__bar {\n          width: 100%;\n          height: 5px;\n          position: relative;\n          cursor: pointer;\n        }\n        \n        .conrtroll__time {\n          display: flex;\n          justify-content: space-between;\n        }\n      }\n    }\n  }\n}\n.bird-card {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  border-radius: 5px;\n  transition: scale 0.3s;\n}\n.smal {\n  scale: 0.01;\n}\n.bird-card_description {\n  .audio {\n    .audio__player {\n      .conrtroll {\n        .controll__button {\n          height: 30px;\n          width: 30px;\n        }\n        .conrtroll__bar {\n          width: 100%;\n          height: 3px;\n        }\n      }\n      scale: 1;\n      transition: scale 0.4s;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/game.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/game.scss ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Game {\n  height: auto;\n}\n@media (max-width: 550px) {\n  .Game .header .header__top {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n  }\n}\n.Game .footer {\n  border: none;\n}\n\n.score {\n  position: absolute;\n  top: 40px;\n  right: 50px;\n}\n@media (max-width: 550px) {\n  .score {\n    right: 41px;\n  }\n}\n\n.nav-game {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.nav-game .nav-game__stage {\n  white-space: nowrap;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 100px;\n          flex: 1 1 100px;\n  background-color: gray;\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n.nav-game .nav-game__stage_active {\n  background-color: #6b6969;\n  scale: 0.95;\n}\n\n.main-game {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column-gap: 3vw;\n  grid-row-gap: 1.5vw;\n  height: auto;\n}\n@media (max-width: 500px) {\n  .main-game {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.main-game > * {\n  background-color: #6b6969;\n}\n.main-game .question {\n  grid-area: 1/1/2/3;\n}\n.main-game .answers {\n  grid-area: 2/1/3/2;\n  max-height: 222px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.main-game .info {\n  grid-area: 2/2/3/3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.main-game .button-next-page {\n  height: 30px;\n  border-radius: 7px;\n  grid-area: 3/1/4/4;\n  background-color: rgb(250, 6, 6);\n  opacity: 0.5;\n}\n.main-game .redy {\n  background-color: rgb(43, 250, 6);\n  opacity: 1;\n  scale: 1.1;\n}\n.main-game .question {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}", "",{"version":3,"sources":["webpack://./src/pages/game/game.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;AACF;AAEM;EADF;IAEI,0BAAA;QAAA,sBAAA;EACN;AACF;AAGE;EACE,YAAA;AADJ;;AAKA;EACE,kBAAA;EACA,SAAA;EACA,WAAA;AAFF;AAGE;EAJF;IAKI,WAAA;EAAF;AACF;;AAEA;EACE,WAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;MAAA,eAAA;EAEA,mBAAA;EACA,gBAAA;AAAF;AAEE;EACE,mBAAA;EACA,mBAAA;MAAA,mBAAA;UAAA,eAAA;EACA,sBAAA;EACA,YAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,+BAAA;UAAA,uBAAA;AAAJ;AAEE;EACE,yBAAA;EACA,WAAA;AAAJ;;AAGA;EACE,aAAA;EACA,qCAAA;EACA,kCAAA;EACA,oBAAA;EACA,mBAAA;EACA,YAAA;AAAF;AACE;EAPF;IAQI,oBAAA;IAAA,oBAAA;IAAA,aAAA;IACA,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;EAEF;AACF;AADE;EACE,yBAAA;AAGJ;AAAE;EACE,kBAAA;AAEJ;AACE;EACE,kBAAA;EACA,iBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;AACJ;AAEE;EACE,kBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;AAAJ;AAEE;EACE,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,gCAAA;EACA,YAAA;AAAJ;AAEE;EACE,iCAAA;EACA,UAAA;EACA,UAAA;AAAJ;AAGE;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;AADJ","sourcesContent":[".Game {\n  height: auto;\n  .header {\n    .header__top {\n      @media (max-width: 550px) {\n        align-self: flex-start;\n        //scale: 0.9;\n      }\n    }\n  }\n  .footer {\n    border: none;\n  }\n}\n\n.score {\n  position: absolute;\n  top: 40px;\n  right: 50px;\n  @media (max-width: 550px) {\n    right: 41px;\n  }\n}\n.nav-game {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  border-radius: 10px;\n  overflow: hidden;\n\n  .nav-game__stage {\n    white-space: nowrap;\n    flex: 1 1 100px;\n    background-color: gray;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    box-sizing: content-box;\n  }\n  .nav-game__stage_active {\n    background-color: #6b6969;\n    scale: 0.95;\n  }\n}\n.main-game {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  grid-column-gap: 3vw;\n  grid-row-gap: 1.5vw;\n  height: auto;\n  @media (width < 501px) {\n    display: flex;\n    flex-direction: column;\n  }\n  > * {\n    background-color: #6b6969;\n  }\n\n  .question {\n    grid-area: 1 / 1 / 2 / 3;\n  }\n\n  .answers {\n    grid-area: 2 / 1 / 3 / 2;\n    max-height: 222px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .info {\n    grid-area: 2 / 2 / 3 / 3;\n    display: flex;\n  }\n  .button-next-page {\n    height: 30px;\n    border-radius: 7px;\n    grid-area: 3 / 1 / 4 / 4;\n    background-color: rgb(250, 6, 6);\n    opacity: 0.5;\n  }\n  .redy {\n    background-color: rgb(43, 250, 6);\n    opacity: 1;\n    scale: 1.1;\n  }\n\n  .question {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeFooter/homeFooter.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeFooter/homeFooter.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  border-top: 3px gray solid;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n\n.footer__logo {\n  margin-top: 10px;\n  height: 50px;\n  width: 199px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.footer__git {\n  margin-top: 10px;\n  height: 50px;\n  width: 50px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}", "",{"version":3,"sources":["webpack://./src/pages/home/homeFooter/homeFooter.scss"],"names":[],"mappings":"AAAA;EACE,0BAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;AACF;;AACA;EACE,gBAAA;EACA,YAAA;EACA,YAAA;EACA,4BAAA;EACA,wBAAA;AAEF;;AAAA;EACE,gBAAA;EACA,YAAA;EACA,WAAA;EACA,4BAAA;EACA,wBAAA;AAGF","sourcesContent":[".footer {\n  border-top: 3px gray solid;\n  justify-content: space-between;\n}\n.footer__logo {\n  margin-top: 10px;\n  height: 50px;\n  width: 199px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.footer__git {\n  margin-top: 10px;\n  height: 50px;\n  width: 50px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeMain/homeMain.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeMain/homeMain.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".container {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 50px;\n}\n.container .container__heading {\n  text-align: center;\n}\n\n.start-button {\n  color: rgb(104, 107, 107);\n  height: 150px;\n  width: 150px;\n  background-color: rgb(26, 255, 0);\n  border-radius: 50%;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  font-size: 30px;\n}\n\n.start-button:hover {\n  color: white;\n  background-color: red;\n}", "",{"version":3,"sources":["webpack://./src/pages/home/homeMain/homeMain.scss"],"names":[],"mappings":"AAAA;EAEE,WAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,SAAA;AAAF;AAEE;EACE,kBAAA;AAAJ;;AAGA;EACE,yBAAA;EACA,aAAA;EACA,YAAA;EACA,iCAAA;EACA,kBAAA;EACA,4BAAA;EAAA,oBAAA;EACA,eAAA;AAAF;;AAEA;EACE,YAAA;EACA,qBAAA;AACF","sourcesContent":[".container {\n  //margin-top: 10%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n\n  .container__heading {\n    text-align: center;\n  }\n}\n.start-button {\n  color: rgb(104, 107, 107);\n  height: 150px;\n  width: 150px;\n  background-color: rgb(26, 255, 0);\n  border-radius: 50%;\n  transition: all 0.5s;\n  font-size: 30px;\n}\n.start-button:hover {\n  color: #ffff;\n  background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeNav/HomeNav.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeNav/HomeNav.scss ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav {\n  display: block;\n  padding: 15px;\n  border-radius: 5px;\n  padding: 5px;\n}\n.nav .menu {\n  width: 100%;\n  height: 70px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  gap: 15px;\n}\n.nav .menu .menu__link_active {\n  color: darkseagreen;\n}\n.nav .menu .menu__link {\n  padding: 0 3px;\n}\n.nav .menu * {\n  text-align: center;\n}\n.nav .menu .activ::after {\n  content: \"[X]\";\n  color: red;\n}", "",{"version":3,"sources":["webpack://./src/pages/home/homeNav/HomeNav.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,aAAA;EACA,kBAAA;EACA,YAAA;AACF;AACE;EACE,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,gBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;MAAA,eAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,uBAAA;MAAA,oBAAA;UAAA,2BAAA;EACA,SAAA;AACJ;AACI;EACE,mBAAA;AACN;AAEI;EACE,cAAA;AAAN;AAGI;EACE,kBAAA;AADN;AAGI;EACE,cAAA;EACA,UAAA;AADN","sourcesContent":[".nav {\n  display: block;\n  padding: 15px;\n  border-radius: 5px;\n  padding: 5px;\n\n  .menu {\n    width: 100%;\n    height: 70px;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 15px;\n\n    .menu__link_active {\n      color: darkseagreen;\n    }\n\n    .menu__link {\n      padding: 0 3px;\n    }\n\n    * {\n      text-align: center;\n    }\n    .activ::after {\n      content: \"[X]\";\n      color: red;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/wrapper/wrapper.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/wrapper/wrapper.scss ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "li {\n  list-style: none;\n}\n\nul {\n  padding: 0;\n}\n\nhtml * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  overflow-x: hidden;\n  background-color: rgb(64, 60, 60);\n}\n\n.interactive {\n  cursor: pointer;\n  opacity: 0.8;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n\n.interactive:hover {\n  scale: 1.1;\n  opacity: 1;\n}\n\n.Home .main {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  justify-items: center;\n}\n\n.wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(64, 60, 60);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  -webkit-transition: -webkit-transform 1s ease;\n  transition: -webkit-transform 1s ease;\n  transition: transform 1s ease;\n  transition: transform 1s ease, -webkit-transform 1s ease;\n}\n.wrapper * {\n  color: white;\n}\n.wrapper > * {\n  width: 90%;\n  margin: 1vw auto;\n}\n.wrapper .header {\n  position: relative;\n  font-size: 19px;\n  padding: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 15px;\n  border-bottom: 3px gray solid;\n}\n@media (max-width: 550px) {\n  .wrapper .header {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 0;\n  }\n}\n.wrapper .header .header__logo {\n  width: 199px;\n  height: 55px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.wrapper .header .lang {\n  position: absolute;\n  right: 10px;\n  top: 40px;\n}\n@media (max-width: 550px) {\n  .wrapper .header .lang {\n    right: 5px;\n  }\n}\n.wrapper .main {\n  height: 70vh;\n}\n.wrapper .footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}", "",{"version":3,"sources":["webpack://./src/pages/wrapper/wrapper.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;AACF;;AACA;EACE,UAAA;AAEF;;AAAA;EACE,8BAAA;UAAA,sBAAA;AAGF;;AADA;EACE,kBAAA;EACA,iCAAA;AAIF;;AADA;EACE,eAAA;EACA,YAAA;EACA,4BAAA;EAAA,oBAAA;AAIF;;AADA;EACE,UAAA;EACA,UAAA;AAIF;;AADE;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,qBAAA;AAIJ;;AADA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,iCAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,uBAAA;MAAA,oBAAA;UAAA,2BAAA;EACA,gCAAA;UAAA,wBAAA;EACA,6CAAA;EAAA,qCAAA;EAAA,6BAAA;EAAA,wDAAA;AAIF;AAFE;EACE,YAAA;AAIJ;AADE;EACE,UAAA;EACA,gBAAA;AAGJ;AAAE;EACE,kBAAA;EACA,eAAA;EACA,aAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,mBAAA;MAAA,eAAA;EACA,uBAAA;MAAA,oBAAA;UAAA,2BAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,SAAA;EACA,6BAAA;AAEJ;AAAI;EAXF;IAYI,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;IACA,MAAA;EAGJ;AACF;AADI;EACE,YAAA;EACA,YAAA;EAEA,sBAAA;EACA,4BAAA;AAEN;AACI;EACE,kBAAA;EACA,WAAA;EACA,SAAA;AACN;AACM;EALF;IAMI,UAAA;EAEN;AACF;AAEE;EAEE,YAAA;AADJ;AAGE;EACE,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;MAAA,2BAAA;UAAA,6BAAA;EACA,sBAAA;MAAA,mBAAA;UAAA,qBAAA;AADJ","sourcesContent":["li {\n  list-style: none;\n}\nul {\n  padding: 0;\n}\nhtml * {\n  box-sizing: border-box;\n}\nbody {\n  overflow-x: hidden;\n  background-color: rgb(64, 60, 60);\n}\n\n.interactive {\n  cursor: pointer;\n  opacity: 0.8;\n  transition: all 0.5s;\n}\n\n.interactive:hover {\n  scale: 1.1;\n  opacity: 1;\n}\n.Home {\n  .main {\n    display: flex;\n    align-items: center;\n    justify-items: center;\n  }\n}\n.wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgb(64, 60, 60);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  transform: translateX(0);\n  transition: transform 1s ease;\n\n  * {\n    color: #ffff;\n  }\n\n  > * {\n    width: 90%;\n    margin: 1vw auto;\n  }\n\n  .header {\n    position: relative;\n    font-size: 19px;\n    padding: 15px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 15px;\n    border-bottom: 3px gray solid;\n\n    @media (max-width: 550px) {\n      flex-direction: column;\n      gap: 0;\n    }\n\n    .header__logo {\n      width: 199px;\n      height: 55px;\n      //background-image: url('../../Assets/svg/logo.4f82cd73.svg');\n      background-size: cover;\n      background-repeat: no-repeat;\n    }\n\n    .lang {\n      position: absolute;\n      right: 10px;\n      top: 40px;\n\n      @media (max-width: 550px) {\n        right: 5px;\n      }\n    }\n  }\n\n  .main {\n    //flex: 0 1 70%;\n    height: 70vh;\n  }\n  .footer {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: flex-end;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/endGame/endGame.html":
/*!****************************************!*\
  !*** ./src/pages/endGame/endGame.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<main class=\"main end-game\">\n  <section class=\"message\">\n    <h1 class=\"message__score\"></h1>\n    <p class=\"message__text\"></p>\n    <button class=\"start-button interactive\"></button>\n  </section>\n</main>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/pages/game/GameNav.html":
/*!*************************************!*\
  !*** ./src/pages/game/GameNav.html ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<ul class=\"nav-game\">\n  <li class=\"nav-game__stage nav-game__stage_active\"></li>\n  <li class=\"nav-game__stage\"></li>\n  <li class=\"nav-game__stage\"></li>\n  <li class=\"nav-game__stage\"></li>\n  <li class=\"nav-game__stage\"></li>\n  <li class=\"nav-game__stage\"></li>\n</ul>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/pages/game/bird/bird.html":
/*!***************************************!*\
  !*** ./src/pages/game/bird/bird.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "\n<div class=\"audio\">\n  <div class=\"audio__img\"></div>\n  <div class=\"audio__player\">\n    <div class=\"name\">*****</div>\n    <div class=\"species\"></div>\n    <div class=\"conrtroll\">\n      <div class=\"controll__button\"></div>\n      <div class ='conrtroll__timeBar'>\n        <input type=\"range\" mim=\"0\" max=\"100\" value=\"0\" class=\"conrtroll__bar\">\n        <div class=\"conrtroll__time\"><span class=\"time-curretn\"></span><span class=\"time-total\"></span></div>\n      </div>\n    </div>\n    <div class=\"volume\">\n      <div class=\"volume__icon\"></div>\n        <input type=\"range\" mim=\"0\" max=\"1\" value=\"1\" step=\"0.01\" class=\"volume__bar\">\n    </div>\n  </div>\n</div>\n<div class=\"description\"></div>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!../postcss-loader/dist/cjs.js!../sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../css-loader/dist/cjs.js!../postcss-loader/dist/cjs.js!../sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!../postcss-loader/dist/cjs.js!../sass-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/normalize.css/normalize.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ : _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_postcss_loader_dist_cjs_js_sass_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/Gallery/Gallery.scss":
/*!****************************************!*\
  !*** ./src/pages/Gallery/Gallery.scss ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Gallery.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Gallery/Gallery.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Gallery.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Gallery/Gallery.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Gallery.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/Gallery/Gallery.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Gallery_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/endGame/endGame.scss":
/*!****************************************!*\
  !*** ./src/pages/endGame/endGame.scss ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./endGame.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/endGame/endGame.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./endGame.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/endGame/endGame.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./endGame.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/endGame/endGame.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_endGame_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/game/answer/answer.scss":
/*!*******************************************!*\
  !*** ./src/pages/game/answer/answer.scss ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./answer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/answer/answer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./answer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/answer/answer.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./answer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/answer/answer.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_answer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/game/bird/bird.scss":
/*!***************************************!*\
  !*** ./src/pages/game/bird/bird.scss ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./bird.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/bird/bird.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./bird.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/bird/bird.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./bird.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/bird/bird.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_bird_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/game/game.scss":
/*!**********************************!*\
  !*** ./src/pages/game/game.scss ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./game.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/game.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./game.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/game.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./game.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/game/game.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_game_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/home/homeFooter/homeFooter.scss":
/*!***************************************************!*\
  !*** ./src/pages/home/homeFooter/homeFooter.scss ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./homeFooter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeFooter/homeFooter.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./homeFooter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeFooter/homeFooter.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./homeFooter.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeFooter/homeFooter.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeFooter_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/home/homeMain/homeMain.scss":
/*!***********************************************!*\
  !*** ./src/pages/home/homeMain/homeMain.scss ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./homeMain.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeMain/homeMain.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./homeMain.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeMain/homeMain.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./homeMain.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeMain/homeMain.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_homeMain_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/home/homeNav/HomeNav.scss":
/*!*********************************************!*\
  !*** ./src/pages/home/homeNav/HomeNav.scss ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./HomeNav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeNav/HomeNav.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./HomeNav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeNav/HomeNav.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./HomeNav.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/home/homeNav/HomeNav.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_HomeNav_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/pages/wrapper/wrapper.scss":
/*!****************************************!*\
  !*** ./src/pages/wrapper/wrapper.scss ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./wrapper.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/wrapper/wrapper.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./wrapper.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/wrapper/wrapper.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./wrapper.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/wrapper/wrapper.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_wrapper_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Assets/audio/incorrect-25.mp3":
/*!*******************************************!*\
  !*** ./src/Assets/audio/incorrect-25.mp3 ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "data:audio/mpeg;base64,SUQzAwAAAABBElRZRVIAAAAGAAAAMjAxNgBUREFUAAAABgAAADE0MDYAVElNRQAAAAYAAAAxMjIzAFRQRTQAAAAZAAAAVmlvbGV0IChKZWZmZXJ5J3MgaU1hYykAUFJJVgAAGDUAAFhNUAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcERNPSJodHRwOi8vbnMuYWRvYmUuY29tL3htcC8xLjAvRHluYW1pY01lZGlhLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOmJleHQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20vYndmL2JleHQvMS4wLyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplNjBmYmYyMi1lZjVmLTQ1NmUtYWNkNy1hYTNmZjJmMjlmNjUiCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImFjOWJkMzVhLTI5YTctOTE2Mi0zODk3LTFiMmYwMDAwMDA3OSIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjM2NzgyN2ZhLTc5MDgtNDA3OS04MTc3LTJiNzhjN2E3NDY2MiIKICAgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxNi0wNi0xNFQxMjoyMzowNy0wNDowMCIKICAgeG1wOk1vZGlmeURhdGU9IjIwMTYtMDYtMTRUMTI6MjM6MDctMDQ6MDAiCiAgIHhtcDpDcmVhdGVEYXRlPSIyMDE2LTA2LTE0VDEyOjIzOjE1LTA0OjAwIgogICB4bXA6Q3JlYXRvclRvb2w9IlNvdW5kIEZvcmdlIFBybyAxLjAuMjIgKEJ1aWxkIDIpIgogICB4bXBETTplbmdpbmVlcj0iVmlvbGV0IChKZWZmZXJ5J3MgaU1hYykiCiAgIHhtcERNOmF1ZGlvU2FtcGxlUmF0ZT0iLTEiCiAgIHhtcERNOmF1ZGlvU2FtcGxlVHlwZT0iMTZJbnQiCiAgIHhtcERNOmF1ZGlvQ2hhbm5lbFR5cGU9IlN0ZXJlbyIKICAgeG1wRE06c3RhcnRUaW1lU2NhbGU9IjMwMDAwIgogICB4bXBETTpzdGFydFRpbWVTYW1wbGVTaXplPSIxMDAxIgogICBkYzpmb3JtYXQ9Ik1QMyIKICAgYmV4dDpvcmlnaW5hdG9yPSJBZG9iZSBBZG9iZSBNZWRpYSBFbmNvZGVyIENDIChNYSIKICAgYmV4dDpvcmlnaW5hdGlvbkRhdGU9IjIwMTYtMDYtMDkiCiAgIGJleHQ6b3JpZ2luYXRpb25UaW1lPSIxNjoxOTowNyIKICAgYmV4dDp0aW1lUmVmZXJlbmNlPSIwIgogICBiZXh0OnZlcnNpb249IjEiPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0iYWFlZjY1MTEtZTdlNi03Y2ZkLTE5MzMtYzQwNjAwMDAwMGE2IgogICAgICBzdEV2dDp3aGVuPSIyMDE2LTA2LTE0VDEyOjIzOjA3LTA0OjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZG9iZSBNZWRpYSBFbmNvZGVyIENDIChNYWNpbnRvc2gpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJkZWMyYmJkNi05YzI3LTlhY2ItNzYwYi1kZDk4MDAwMDAwOGEiCiAgICAgIHN0RXZ0OndoZW49IjIwMTYtMDYtMDlUMTY6MTk6MDctMDQ6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFkb2JlIE1lZGlhIEVuY29kZXIgQ0MgKE1hY2ludG9zaCkiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9ImI3MmVhOWI5LTg1MjYtZTBkOS1iZWIzLTgwMjEwMDAwMDA4YSIKICAgICAgc3RFdnQ6d2hlbj0iMjAxNi0wNi0wOVQxNTozOTo1Ny0wNDowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWRvYmUgTWVkaWEgRW5jb2RlciBDQyAoTWFjaW50b3NoKSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDViYThmMS01N2IzLTRmYjgtYTFhNy1mYTAyYTY4YTYyMTEiCiAgICAgIHN0RXZ0OndoZW49IjIwMTYtMDYtMDlUMTY6MTk6MDctMDQ6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFkb2JlIE1lZGlhIEVuY29kZXIgQ0MgKE1hY2ludG9zaCkiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzNkMWVmN2MtNTc0YS00YjViLWFkM2YtYjkzZjZkNDI2MjBkIgogICAgICBzdEV2dDp3aGVuPSIyMDE2LTA2LTA5VDE2OjE5OjA3LTA0OjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZG9iZSBNZWRpYSBFbmNvZGVyIENDIChNYWNpbnRvc2gpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvbWV0YWRhdGEiLz4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ibW9kaWZpZWQiCiAgICAgIHN0RXZ0OnBhcmFtZXRlcnM9InVua25vd24gbW9kaWZpY2F0aW9ucyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0iMzYzZjA1YjktYmRjNi03MTA5LTlkMjItMzM4YzAwMDAwMGE2IgogICAgICBzdEV2dDp3aGVuPSIyMDE2LTA2LTE0VDExOjUzOjU4LTA0OjAwIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBBZG9iZSBNZWRpYSBFbmNvZGVyIENDIChNYWNpbnRvc2gpIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIi8+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ0ZTEwMjQxLThjNmQtNDA2Yy04OWVlLTliZmM1MzJiM2U3MyIKICAgICAgc3RFdnQ6d2hlbj0iMjAxNi0wNi0xNFQxMjoyMzowNy0wNDowMCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgQWRvYmUgTWVkaWEgRW5jb2RlciBDQyAoTWFjaW50b3NoKSIKICAgICAgc3RFdnQ6Y2hhbmdlZD0iLyIvPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJzYXZlZCIKICAgICAgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplNjBmYmYyMi1lZjVmLTQ1NmUtYWNkNy1hYTNmZjJmMjlmNjUiCiAgICAgIHN0RXZ0OndoZW49IjIwMTYtMDYtMTRUMTI6MjM6MDctMDQ6MDAiCiAgICAgIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIEFkb2JlIE1lZGlhIEVuY29kZXIgQ0MgKE1hY2ludG9zaCkiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii9tZXRhZGF0YSIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDx4bXBNTTpEZXJpdmVkRnJvbQogICAgc3RSZWY6aW5zdGFuY2VJRD0iMzYzZjA1YjktYmRjNi03MTA5LTlkMjItMzM4YzAwMDAwMGE2IgogICAgc3RSZWY6ZG9jdW1lbnRJRD0iMWYyYzY5MTAtMjE0Yi1lYjhkLTQ3ZWQtYWY5ZDAwMDAwMDc5IgogICAgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmU0OTQzOGFmLWE3ZGQtNDI0My05ZWMzLTk0OWUxZjVjZmU1ZiIvPgogICA8eG1wRE06ZHVyYXRpb24KICAgIHhtcERNOnZhbHVlPSIzNiIKICAgIHhtcERNOnNjYWxlPSIxMDAxLzMwMDAwIi8+CiAgIDx4bXBETTpzdGFydFRpbWVjb2RlCiAgICB4bXBETTp0aW1lRm9ybWF0PSIyOTk3RHJvcFRpbWVjb2RlIgogICAgeG1wRE06dGltZVZhbHVlPSIwMDswMDswMDswMCIvPgogICA8eG1wRE06YWx0VGltZWNvZGUKICAgIHhtcERNOnRpbWVWYWx1ZT0iMDA7MDA7MDA7MDAiCiAgICB4bXBETTp0aW1lRm9ybWF0PSIyOTk3RHJvcFRpbWVjb2RlIi8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+3hAAAAAAABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAAT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hAxgAIyABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAAT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hA/4AMYABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAAT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hA/4AMYABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAAT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hA/4AMYABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAAT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hA/4AMYABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAATxAIQ6HgqFQKBQIBAoANcNjrWO/DyNWncNsBy/zb9TzPQgDHUTTMkg/8dAV4jQ90T7Oc8VATuBsrRWBgEJpzB4GGwBwGA8BIBgQvoYGFwFAAwfAMCoBQbMf/kBEdBYoBICAZbKX//lUrlwZA3NCoX///9zdZu603Z////8+xu9Ir/32icmkmHEoawwhAuhQKEOh4KhUCgUCAQKADXDY61jvw8jVp3DbAcv829U8z0IAx1E0zJIP/HQFeI0PdE+znPFUJ3A2VorAwDE06DwMNQDgMB4CwCAhfbAwtAoACD4BgTAKDZj/8ckR0DYgCQEAy2Zf/+VSuXBkDdAqGf//+58BnzYD//mjYo8ilv+TWh4Rz5xwhGhMCA4SP/kppuMGJiBgn0Y4ImdWpvqEZghHWtxlYEYkQmURBj4mYYRNKMSATCiAHRhh5AZcFGCAruN7NMKgHD4GNpRl1TIhUsLiOCOYAJJIg0Ck8W5BREIHogBAR1gEATfW8XgacjOmekIvlWtoKJ7DgcTU0ZXBCz/+3hA/4ADnABLhQAACAAACXCgAAERqSM1udsiEiwbZrc7YkJAuDU2aS09Q0tcAlCm8pdAGgU7Gixh7FtJYsiXowCUF4J9TeOwM2V/mfwNuRxVv4q/7D5GXfh50FoL8T0TMkboKaU6w8Sa5BsBQ7ImUPxMtfplllt3nZGv+cYA0y4ziC5VOUMqhpglSo/ld/KSHIbpo7Lnpct5mSP2/cschucBPHJ3QcVq0LilVY8ARO5MPRAsWkMrk7uQ3qYcClrWMKks+nzzr93lzDvcafOnt6r2MLF7KxpVVWQU03IGNGI1RtAcZtKGZhRpdQhQn6CQsxBDYYTVoiBoWKkg0ymCkpEQAgVgY1QSd8x8YAAydYCBQRNPBlHSYIHABoSGyhDXbYFBtK4ghr8wUEKfrnjIEx4QAkKZXZIgmAUwm6KXKOJZza4VysWKgBeCpJIBxy+QQ0TWUaeZ26qacVQ53GdvgsO0WVNVpU/aq8ZG3H0eq7Qo+/0FkTpiDk9nMSLc17pcRKki7Ly9WiqMNjn4bhKSmVJBKDjZWJNlh1WbTPm8blTJpe+dR/aje6kFbk/Cohz/+3hg/4AJOGtVP29ADAAACXDgAAEjsa1XTe8NsAAAJcAAAAR2bqxPceZXE9UVbLg3SFQPOs6wdmhiGb31ZC2Kiid54rbfV86jy6kFrlHed/4ExfKZgSS0sFyJsFik63TOmoZfJJ2gwj3QZVVkbu8dUx0DAe4bj6DyiBa92VVk+TZwoVFjBAdD550ERRZJIqYYoEhRSXZwAwIWSGmTjhFL5P8oIEIKuQlYqsrwYB02Hq/myEQFNtqUPsWSGex7bSTeisA0RICSIxwWxxJSTqZ2EbZKIgUL9vWqJWSRPDC2I0aEyu6U2rFALFGwz7PZEqpIoI9TGlZJHZC+LNmEQl94FFByNnFVVkrVzUvQat1orzwzxl9FEbkM1XMjt+PfTyGb7BPJBrtzeqLfaHtvlzKJ/GMKlBbkvwZ8p7Efublt21hzt6O95yi3lc5u9N/V+d+n1zU7d1d7TXqftfk7vtzur3alWqKlu/4LymL35swqZ3Ujy4alNILIuiMCNAChgCBTmplGEEY9pAx0apjQdtDuD1vAK2XWIsSi5MMSXJjCTz2IAUm27y0AgI2mFH34WxD/+3hgowAHvmrWS3rDbAAACXAAAAEcoaFXTentqAAAJcAAAATKjbQ1twOVQdK1q8ySSLHh9atZLNubUF5SBYsjOaQJC1q5ffEY2djMZ2yD6MVtRlBqnql3jkSJUHfQuTcmZVQkYgyHTDgcjSddHOCV8JKQVl6m2qIobq6RbalCmYFopszKTcKzPtbxjDjBjwbtubUpiW7jh3L4WvuFiD7S0k+dQN3x/NibOq7k+9WxfGpdU1Lqm9/fntqcpEqpXbf/gCGTeVzsRzVEUdDFhmBpWiEMBgruInGOEmOZzY1CZLBroF0QascrxMeXZQaCAmir1VtTBcWAETk6obTlLww+qVrth2gbyfHpQlXQ1CrUNdF+MpzTxOjiN0W0XFDAvhYmUuwuSvLi4wkOaS/I5OqGKpjKbzRjq1WwDSaTlQmAfp0rxpR06hrgSpCW5DmaGrYiuhvrZVrpTKrLCrn6tdMTNGYVDK9rqFuDoJJJWPhRXBXjeigrhUFyCn6hYvFDeoSQ2KiNhY//zDb7a20oSzYvi16HYs5LhAqMjAjJD5KsqsCdD1DBQQIGCYD/////////+3hgeoAGZ0NV01l62gAACXAAAAEF0DsojCRm4AAAJcAAAAT/////T60ASIAAABRBoQSkZ//////////////+x6vpQpf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////I7dJJPpRAwixNTIrMxNB1Mk1IVHzOrMxMosckxtQRTDCDcMDoJsxrh/jKkJSMdoVgwdgNAYAKYB4A6mRgBACLNMBgMQtgYCAJCfC+y2ZdtmjpqBqDuPTRiMRiNxt/4fl+UofyWWpRGJZyvT28ygIHAfDwPnwQBAuD6gQgg5reF4+z///6kfN2I60kUiSUUzIZDstndbsHDJ7N/MOApwxMloTVyKiMgJeYxyTmDF0BSMF4EsxcyszJR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kgAGBFBVO3l66gAACXAAAAEaJV1VTenrqAAAJcAAAAQB8monzwMliJ6difPRBsiOLcpSVMbYry8qcsL2EYKAPVofaLdzRgTtiFQDiYZTeW0U0uMc6YrE/iNrj3r7VdXeR5NS0fTQ9VvElxnT3erbgR86xmFm26U34V4Wf32o2vmkPXxBg+JDe2/T86fssFVVvTjaKQDUiwhJhDwIoAOBChoA/hCmMsMW8oKz5v0wUbiUyD6kF/IosiddTVG5bCz1crSZmzQdQhIixICKHpMJDxei5ExMBCCxE9ORBGiUR5lhL6eiHn0ZRyrzPE1///rGrQYEeKrm1siOTC8cmGA7ZW2BHcX0oZCZmP80wCkQkgWQFUi+/iwFPAURmWqJBxLTIsVFdqAo8VdLaW2oAL///////////////+2qkuEQAAAChDNgJJgrAF////////////////fqb2IAiAAAAABEctO///////////////9LV00f////////////////////////////////////////////////////////////////////////////////+3hgjwAE8DBRUfh6XBBgCPEAAAABWAsYjCQgKESAI8QAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5AAAAAVAL///////////////Sn1rc5uQQAC///////////////rov6FbmK//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg74AKmwFH2eAAAAAACXAAAAEAnAEagAAAKE2AI4QAAAD//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC///////////////pti+lT2mpCsAv///////////////b7vdNgF///////////////oUtq6vNlKAC///////////////p12JULNS1KV///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AKmABHCAAAABSACOEAAAACHAEeIAAAAE6AI4QAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////gF///////////////aq7ZbU7EIBf//////////////+8fVs60m///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4ALMwDHCAAAABMACOEAAAAAAAEuAAAAIEqAI4QAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Av//////////////9G6zaxCAC////////////////76EP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4ALVABLgAAACBHAGOEAAAAB9AEeIAAAAAAAJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Av//////////////9e9f15gBP/////////////3YrUAC///////////////1dKYu1P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4ALYABLgAAACBFAGPEAAAAAAAEuAAAAIDmAY4QAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4Bf///////////////Lrm6ApHnUgC///////////////+u/MXI////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4ALvwDHiAAAAAAACXAAAAECgAEcIAAAAAAAJcAAAAT////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC///////////////s31UpkgkYWbAL//////////////+v/R7EAC///////////////9tdLaKS6//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4ALNABHiAAAABTACOEAAAACFAEeIAAAAAAAJcAAAAT/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC////////////////7baAC///////////////yzoautHIHAF///////////////6SHcqtwtUAC////////////////W1TOj////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AKqgBHiAAAAA/ACPEAAAACbAMcIAAAAE0AI4QAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC///////////////jO56xaZclbhEP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4ALsgDHiAAAAAAACXAAAAECrAMcIAAAAAAAJcAAAAT///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AL///////////////2e5rG1v//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AL1ABLgAAACAAACXAAAAEAAAEuAAAAIEWAI8QAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Av//////////////70b7HV0XIAL////////////////yrKQC///////////////97+QdSogn/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4ALSABLgAAACAAACXAAAAECYAMcIAAAAEAAY8QAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC///////////////+p9blMcY0AF///////////////fq0TT5mwcAX///////////////1Lb30AC///////////////msvmVbWISv////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AKpABHCAAAABNgCOEAAAACaAMcIAAAAEMAY8QAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Av///////////////tK29WbAL///////////////tfha2AnRYAv//////////////+5XFqcvSP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AKpgDHCAAAABGACPEAAAACaAEcIAAAAEiAY4QAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AL///////////////lE676qgC///////////////36OaWAX//////////////9+U712v1gC///////////////2dlC9Rj///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AKwABLgAAACBGACPEAAAACBAEeIAAAAEkAY4QAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AL//////////////9fYnZ2KAC///////////////+rcpLlPLNX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AL1ADHiAAAAAAACXAAAAECKAMeIAAAAAAAJcAAAAT//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AX///////////////dxXhUiP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AL0wBHCAAAAAAACXAAAAEAAAEuAAAAIEUAY8QAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wC///////////////ob39rX51IBf//////////////+js7UUgF///////////////Wv/rSAC///////////////8n3Mzmj///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AKvABLgAAACBLgCOEAAAACIAEcIAAAAEEAI8QAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Av///////////////75JABf//////////////6P9dqFAN/////////////9ej/+P7EP//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AK0ABHiAAAAA+gGPEAAAACIAEeIAAAAEUAY8QAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+3hg/4AMYABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAAT//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/+3hA/4AMYABLgAAACAAACXAAAAEAAAEuAAAAIAAAJcAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUQUcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyMDE2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";

/***/ }),

/***/ "./src/Assets/audio/open.mp3":
/*!***********************************!*\
  !*** ./src/Assets/audio/open.mp3 ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:audio/mpeg;base64,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iyqwqYTInxqeab6Pc5003hmj0kY75D5Ka0iONn3Q1kMrlfJemjlUhbHCOJJZtcslPzYlYjOdKzvDMzLP++0Oqn/jDu3UBWWxHjHA6kPoRpyVJUUWFCmlFHHMFUWWOWpJZpZrnEm2WMYUWLLMcaaVYbSokuU8xxv+a9xRtFjlCmtc440qiRY7xklmlP/7kgTtAALULs9qIBgKZexpnUwjAU1IyUOmGGfppTLodJMMfZfY0qywlyxm/Upppzm20WIA3/uWy23BY2EsVYaSoosKFNKKOOYbRZY5TSSzSzGlSTbKJLCxmlmONJFWO9RJcpxRxtvNOJFEuWspb/o59yrCLX9/KaU35TSpMklyxmt+7mv/+otJiCmopmXHJvVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45N1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5IE4g/yrwVKEewwGlSASYokwgFAAAGkAAAAIAAANIAAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";

/***/ }),

/***/ "./src/Assets/img/bird.06a46938.jpg":
/*!******************************************!*\
  !*** ./src/Assets/img/bird.06a46938.jpg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "data:image/jpeg;base64,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";

/***/ }),

/***/ "./src/Assets/svg/crossflat.svg":
/*!**************************************!*\
  !*** ./src/Assets/svg/crossflat.svg ***!
  \**************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYNiAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2ZXJzaW9uPSIxLjEiIHN0eWxlPSJzaGFwZS1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyB0ZXh0LXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IGltYWdlLXJlbmRlcmluZzpvcHRpbWl6ZVF1YWxpdHk7IGZpbGwtcnVsZTpldmVub2RkOyBjbGlwLXJ1bGU6ZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA1MDAgNTAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZGVmcz4NCiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCiAgIDwhW0NEQVRBWw0KICAgIC5maWwwIHtmaWxsOiNEQjJDMDB9DQogICAgLmZpbDEge2ZpbGw6I0ZGMzMwMH0NCiAgIF1dPg0KICA8L3N0eWxlPg0KIDwvZGVmcz4NCiA8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxwb2x5Z29uIGNsYXNzPSJmaWwwIiBwb2ludHM9IjQ4MCwzODMgMzgzLDQ4MCAyNTAsMzQ3IDI1MCwxNTMgMzgzLDIwIDQ4MCwxMTcgMzQ3LDI1MCAiLz4NCiAgPHBvbHlnb24gY2xhc3M9ImZpbDEiIHBvaW50cz0iMjAsMzgzIDExNyw0ODAgMjUwLDM0NyAyNTAsMTUzIDExNywyMCAyMCwxMTcgMTUzLDI1MCAiLz4NCiA8L2c+DQo8L3N2Zz4NCg==";

/***/ }),

/***/ "./src/Assets/svg/github.svg":
/*!***********************************!*\
  !*** ./src/Assets/svg/github.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IkdpdGh1YiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgZmlsbD0iI0ZGRkZGRiIgcj0iMTQuNSIvPjxwYXRoIGQ9Ik0zMC41LDE2YzAtMS4zMzktMC4xOTYtMi42MzEtMC41MzYtMy44NjJDMjcuODMsNi43ODcsMjIuNjEyLDMsMTYuNSwzQzguNDkyLDMsMiw5LjQ5MiwyLDE3LjUgICBjMCwxLjMzOSwwLjE5NiwyLjYzMSwwLjUzNiwzLjg2MkM0LjY3LDI2LjcxMyw5Ljg4OCwzMC41LDE2LDMwLjVDMjQuMDA4LDMwLjUsMzAuNSwyNC4wMDgsMzAuNSwxNnoiIGZpbGw9IiM4MEQ4RkYiLz48Zz48cGF0aCBkPSJNMjAuOTUsMjkuNjE0Yy0wLjY1NCwwLjIzNy0xLjM0OS0wLjI1LTEuMzQ3LTAuOTQ2YzAuMDA1LTEuMjI3LDAuMDEtMi42NzcsMC4wMS0zLjY5ICAgIGMwLTEuMzU4LTAuNDY0LTIuMjQ2LTAuOTg0LTIuNjk2YzMuMjMtMC4zNiw2LjYyLTEuNTkxLDYuNjItNy4xODNjMC0xLjU5LTAuNTYxLTIuODg5LTEuNDkxLTMuOTA3ICAgIGMwLjE1LTAuMzY5LDAuNjQ3LTEuODQ4LTAuMTQ0LTMuODUzYzAsMC0xLjIxNS0wLjM5MS0zLjk4MywxLjQ5MmMtMS4xNTgtMC4zMjMtMi4zOTktMC40ODQtMy42My0wLjQ5ICAgIGMtMS4yMzMsMC4wMDYtMi40NzMsMC4xNjctMy42MywwLjQ5QzkuNjAxLDYuOTQ5LDguMzgzLDcuMzQsOC4zODMsNy4zNGMtMC43ODgsMi4wMDQtMC4yOTEsMy40ODQtMC4xNDEsMy44NTMgICAgYy0wLjkyOCwxLjAxOC0xLjQ5MywyLjMxNy0xLjQ5MywzLjkwN2MwLDUuNTc4LDMuMzg1LDYuODI3LDYuNjA1LDcuMTk0Yy0wLjQxNSwwLjM2NC0wLjc5LDEuMDA2LTAuOTIxLDEuOTQ2ICAgIGMtMC44MjcsMC4zNzMtMi45MjYsMS4wMTYtNC4yMjEtMS4yMDljMCwwLTAuNzY2LTEuMzk3LTIuMjItMS41YzAsMC0xLjQxNy0wLjAxOC0wLjEsMC44ODVjMCwwLDAuOTUxLDAuNDQ4LDEuNjA5LDIuMTI5ICAgIGMwLDAsMC44NTEsMi44MzIsNC44ODUsMS45NTJjMC4wMDMsMC41MjIsMC4wMDcsMS4zNTgsMC4wMTEsMi4xNjljMC4wMDMsMC42OTQtMC42ODgsMS4xODktMS4zNCwwLjk1MiAgICBjLTEuNDM1LTAuNTIxLTIuNzY1LTEuMjYxLTMuOTQ5LTIuMThDOS41NjUsMjkuMzUsMTIuNjQ2LDMwLjUsMTYsMzAuNWMzLjI3OSwwLDYuMjk0LTEuMTAyLDguNzI0LTIuOTM4ICAgIEMyMy41ODQsMjguNDIxLDIyLjMxNiwyOS4xMTgsMjAuOTUsMjkuNjE0eiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48cGF0aCBkPSJNMTEuMzkzLDMwLjE3NmMtMC4xNzEsMC0wLjM0Mi0wLjAyOS0wLjUwNi0wLjA4OUM0LjY5NSwyNy44NDEsMC43MjgsMjEuOTExLDEuMDE1LDE1LjMzICAgYzAuMDEyLTAuMjc1LDAuMjMyLTAuNDg1LDAuNTIxLTAuNDc4YzAuMjc2LDAuMDEyLDAuNDksMC4yNDYsMC40NzgsMC41MjFjLTAuMjY4LDYuMTQyLDMuNDM1LDExLjY3Nyw5LjIxNCwxMy43NzIgICBjMC4xNTEsMC4wNTYsMC4zMTgsMC4wMzMsMC40NTMtMC4wNjNjMC4xMzktMC4wOTgsMC4yMTgtMC4yNSwwLjIxNy0wLjQxN2wtMC4wMDgtMS41NzNjLTMuOTI3LDAuNTYxLTQuODU3LTIuMzc1LTQuODY3LTIuNDA2ICAgYy0wLjU1Mi0xLjQwNS0xLjM0Mi0xLjgyLTEuMzUtMS44MjRjLTAuMzQyLTAuMjI5LTAuOTk2LTAuNjc2LTAuODEtMS4yNjJjMC4xNjctMC41MjgsMC44NTItMC41NjMsMS4xMzYtMC41NzIgICBjMS43MzYsMC4xMjIsMi42MTYsMS42OTMsMi42NTIsMS43NmMwLjk1NiwxLjY0MywyLjQxNCwxLjQ0NiwzLjMzNSwxLjA5NGMwLjA5LTAuNDUyLDAuMjM5LTAuODYzLDAuNDM5LTEuMjE2ICAgYy0yLjg3Mi0wLjQ4Ni02LjE3Ni0xLjk3My02LjE3Ni03LjU2OGMwLTEuNTMxLDAuNDc5LTIuODgsMS40MjQtNC4wMTZDNy40NjUsMTAuNDA4LDcuMjA1LDguOTcsNy45MTcsNy4xNTcgICBDNy45NzIsNy4wMTcsOC4wODcsNi45MSw4LjIzLDYuODY0QzguMzc0LDYuODE3LDkuNzAzLDYuNDcsMTIuNDYsOC4yOWMxLjExOS0wLjI5MSwyLjMwOS0wLjQ0MiwzLjUzOS0wLjQ0OCAgIGMxLjIzNCwwLjAwNiwyLjQyMywwLjE1NywzLjU0MywwLjQ0OGMyLjc1Ni0xLjgyLDQuMDgtMS40NzMsNC4yMjYtMS40MjZjMC4xNDMsMC4wNDYsMC4yNTcsMC4xNTMsMC4zMTIsMC4yOTIgICBjMC43MTUsMS44MTMsMC40NTYsMy4yNTEsMC4yNDcsMy45MjdjMC45NDQsMS4xMzMsMS40MjIsMi40ODIsMS40MjIsNC4wMTZjMCw1LjU5NS0zLjMwOCw3LjA3OC02LjE4NSw3LjU1OSAgIGMwLjM1NCwwLjYyMywwLjU0OSwxLjQyNiwwLjU0OSwyLjMyYzAsMS4wMTMtMC4wMDUsMi40NjUtMC4wMSwzLjY5MmMwLDAuMTY2LDAuMDc3LDAuMzE1LDAuMjE0LDAuNDEyICAgYzAuMTM3LDAuMDk2LDAuMzA2LDAuMTE5LDAuNDYzLDAuMDYzQzI2LjI5NSwyNy4xNDEsMzAsMjEuODU4LDMwLDE2YzAtMy44NjMtMS41NC03LjQ2LTQuMzM1LTEwLjEyOSAgIGMtMi43OTQtMi42NjctNi40NjItNC4wMzctMTAuMzM2LTMuODU1Yy0wLjI3NSwwLjAyMS0wLjUwOS0wLjIwMS0wLjUyMy0wLjQ3NmMtMC4wMTMtMC4yNzYsMC4yLTAuNTEsMC40NzYtMC41MjMgICBjNC4xNTItMC4xOSw4LjA4LDEuMjc0LDExLjA3Myw0LjEzMUMyOS4zNTEsOC4wMDcsMzEsMTEuODYxLDMxLDE2YzAsNi4yNzctMy45NywxMS45MzctOS44NzgsMTQuMDg0ICAgYy0wLjQ2MywwLjE2Ny0wLjk3OCwwLjA5OS0xLjM4LTAuMTg1Yy0wLjQwMS0wLjI4My0wLjY0LTAuNzQ0LTAuNjM4LTEuMjMzYzAuMDA1LTEuMjI2LDAuMDEtMi42NzYsMC4wMS0zLjY4OCAgIGMwLTEuNDU5LTAuNTY3LTIuMTA3LTAuODExLTIuMzE3Yy0wLjE1LTAuMTMtMC4yMS0wLjMzNy0wLjE1MS0wLjUyNmMwLjA1OS0wLjE5LDAuMjI1LTAuMzI3LDAuNDIyLTAuMzQ5ICAgYzMuMDU0LTAuMzQsNi4xNzYtMS40MDEsNi4xNzYtNi42ODZjMC0xLjM4LTAuNDU4LTIuNTgyLTEuMzYtMy41NjljLTAuMTMtMC4xNDMtMC4xNjctMC4zNDctMC4wOTQtMC41MjYgICBjMC4xMzktMC4zNCwwLjUyNC0xLjUzNy0wLjA0Mi0zLjE5OGMtMC40MjMsMC4wMTItMS41MDMsMC4xODktMy4zNCwxLjQ0Yy0wLjEyMiwwLjA4My0wLjI3NCwwLjEwOS0wLjQxNiwwLjA2OCAgIGMtMS4wODQtMC4zMDItMi4yOTMtMC40NjUtMy40OTktMC40NzJjLTEuMjE4LDAuMDA2LTIuMzk1LDAuMTY1LTMuNDk0LDAuNDcyYy0wLjE0MSwwLjA0Mi0wLjI5MywwLjAxNS0wLjQxNi0wLjA2OCAgIGMtMS44My0xLjI0NS0yLjkxLTEuNDI3LTMuMzQ2LTEuNDM4Yy0wLjU2MywxLjY2MS0wLjE3NywyLjg1NS0wLjAzOSwzLjE5NmMwLjA3MiwwLjE3OSwwLjAzNiwwLjM4My0wLjA5NCwwLjUyNSAgIGMtMC45MDQsMC45OTEtMS4zNjIsMi4xOTItMS4zNjIsMy41N2MwLDUuMjgyLDMuMTE1LDYuMzUsNi4xNjIsNi42OTdjMC4xOTYsMC4wMjIsMC4zNjEsMC4xNTgsMC40MiwwLjM0NyAgIGMwLjA1OSwwLjE4OCwwLjAwMSwwLjM5NS0wLjE0NywwLjUyNWMtMC4yMjQsMC4xOTctMC42MjEsMC42NzItMC43NTYsMS42NGMtMC4wMjMsMC4xNy0wLjEzMywwLjMxNi0wLjI5LDAuMzg2ICAgYy0wLjc1LDAuMzM4LTMuMzE2LDEuMjM3LTQuODU4LTEuNDEzYy0wLjAxMS0wLjAxOS0wLjUyNS0wLjkyMS0xLjQ0NC0xLjE4NmMwLjMyNiwwLjIxOCwxLjA3NywwLjg1MiwxLjYzMSwyLjI2NSAgIGMwLjA0MywwLjEzMywwLjgwOCwyLjQwOSw0LjMxMywxLjY0NmMwLjE0OC0wLjAzMSwwLjMwMSwwLjAwMywwLjQxOSwwLjA5OGMwLjExOCwwLjA5NCwwLjE4NywwLjIzNywwLjE4OCwwLjM4N2wwLjAxMSwyLjE3ICAgYzAuMDAyLDAuNDkxLTAuMjM3LDAuOTU1LTAuNjQxLDEuMjM5QzEyLDMwLjA4MiwxMS42OTgsMzAuMTc2LDExLjM5MywzMC4xNzZ6IiBmaWxsPSIjNDU1QTY0Ii8+PHBhdGggZD0iTTE1LjczNywzMUM3LjQ3NCwzMSwxLDI0LjQxMSwxLDE2YzAtMy42MjksMS4yMzgtNy4xMTEsMy40ODUtOS44MDRjMC4xNzYtMC4yMTIsMC40OTMtMC4yNDEsMC43MDQtMC4wNjMgICBDNS40MDEsNi4zMSw1LjQzLDYuNjI1LDUuMjUzLDYuODM3QzMuMTU1LDkuMzUsMiwxMi42MDQsMiwxNmMwLDcuODUxLDYuMDM0LDE0LDEzLjczNywxNEMyMy42MDIsMzAsMzAsMjMuNzIsMzAsMTYgICBTMjMuNjAyLDIsMTUuNzM3LDJjLTIuNDQxLDAtNC44MTIsMC42Mi02Ljg1OCwxLjc5MkM4LjY0MSwzLjkyNyw4LjMzNCwzLjg0NSw4LjE5NywzLjYwNkM4LjA2LDMuMzY2LDguMTQzLDMuMDYxLDguMzgyLDIuOTIzICAgQzEwLjU3OSwxLjY2NSwxMy4xMjMsMSwxNS43MzcsMUMyNC4xNTMsMSwzMSw3LjcyOSwzMSwxNlMyNC4xNTMsMzEsMTUuNzM3LDMxeiIgZmlsbD0iIzQ1NUE2NCIvPjxnPjxnPjxnPjxnPjxnPjxnPjxwYXRoIGQ9Ik03LjU0Myw0LjU1MmMwLDAuMjc1LTAuMjI1LDAuNS0wLjUsMC41bDAsMGMtMC4yNzUsMC0wLjUtMC4yMjUtMC41LTAuNWwwLDAgICAgICAgICBjMC0wLjI3NSwwLjIyNS0wLjUsMC41LTAuNWwwLDBDNy4zMTgsNC4wNTIsNy41NDMsNC4yNzYsNy41NDMsNC41NTJMNy41NDMsNC41NTJ6IiBmaWxsPSIjNDU1QTY0Ii8+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg==";

/***/ }),

/***/ "./src/Assets/svg/logo.4f82cd73.svg":
/*!******************************************!*\
  !*** ./src/Assets/svg/logo.4f82cd73.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1NTdweCIgaGVpZ2h0PSIxNTJweCIgdmlld0JveD0iMCAwIDU1NyAxNTIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDU1NyAxNTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI1NTciIGhlaWdodD0iMTUyIiB4PSIwIiB5PSIwIgogICAgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFpMEFBQUNZQ0FZQUFBQW9jZG1kQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk4KQUFCNkpnQUFnSVFBQVBvQUFBQ0E2QUFBZFRBQUFPcGdBQUE2bUFBQUYzQ2N1bEU4QUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQQpDWEJJV1hNQUFCSnpBQUFTY3dHTUlya0hBQUJXZkVsRVFWUjQydTI5ZTdRY1ZabncvZXV6Kzh1YmxaVXZLeXNyYjFaV2lKbFV6Q0F2Cmd4QkR4QXd5OFhBUkVSQWlwVWNHUVZGQVJYQ1FRV3pwTXd5TFlVN2pVUm04aXdwZXdNdDRzQkZRRVRBa1I4VElZQVlEazhrRTVLUHkKWmlMbXkrVE41TXZFVEZaVzc5UGZIN3ZyOUs3cTZ1NjY3T28rT2RtL3RVN1NWVjJYWisrcTZucjJzNTlMb1Y2dkUwV2hVQWdzejU4LwpQM0s3NTU1N0RvdkZFdVNrazA3cXR3aEhKWFBtek9tM0NCYUxKVWNLN1pRV0NDb3VVVXJMVWF5d3pBSW1nRVA5RnNReTliRUtUTyt3ClNvdkZNcjJKcmJSQVVIRTVTaFNXMmNCS1lBMXdNbkJjWS8wQzREQ3dEOWdMUEFuY0R6emJiNEV0UndaV2tUSFBuajE3V0xac1diL0YKc0Znc09XS1ZsbWhXQXU4RDNnUEVIYnJWZ0llQjl3SUgrdDBBeTlUSEtpN20yTE5uRDRXN2Ivd1k4T2NaRC9VYnAxTDlaTC9iWTdGTQpkYnl5ZXpId3pneUhlTWlwVk85TnVsT3gwNWYxZXIxRmNabm1MQVB1Qk00SEJoTHVXd1F1QXVZRGJ3VU85cnN4bHFsTmxPSnZGWmxNCnZBL0o4Wk5MUlFFMVNkdmxhSDdaNzBaWUxFY0lWMUVRWjB3K1U5MmVyL0QzZ2krbE9XblNGL04wWlFad0svQXZ3QVYwNzVjSjRFWGcKZThCTG9lL1dBQi9yZDRNc1J5YlQzSUtaRzRXN2I1eURHblNBYVB6VnBmcWYwTEsrVHYrRENRVHIrdDBXaTJXcTR3MFBMVUN5T3ZDTQo2YzlYMUY4dDhQenRBcDVLYys1aW1wMm0yUS9yQXVDbndLcVkyMjhHUGdnODAxaWVDZHhHVUZHNUd2Z1UxbEhYa29KT3o1ZTF4TFN5Clo4OGVDbkE4TUhQeUIxUkhYMWNRUVdVbXlCYW5VdDNTNy9iMEE2L3NMZ0JPQlJZRElBSEJiaVNQTzZQVmZmMld6ekxGcU10VkNHWk4KTG9zWSt3aWF6eDg4NEZTcWg5T2NPcFhTTW8xWUJUd0d6SXV4N1FUS0dsTkIrYS80SEFKS3dCSmdxTEZ1SVhBS3lrSFhZakdHcjlCWQo1U1dFWkhuY0Rkc2krRW0vbTlGcnZMSjdJcEpia1p5THNqZzNrVUJSSFBKSzd2Y1EzT0JVclBKaWFTQTVQZTJPQUFnZVNudnFvM2w2CjZHTGc1OFJUV0E0QjV3Ri9SMUJoOFprQXFxRjFjL3ZkUU12MDVibm5ucHR1RnM5VVRFWU1DVTZtMkJqdUJhZDhnc3ZoYmRDMlVRT1kKb3dLdjVCYTlzdnM1Sk04QmF4SE1hT2tQTmFVMkUzZy84Ry9lOE5BSi9aYmJNa1VRREVZK1ExSEwvcnFpOEpkM09aWHE0MmxQbmRqUwpNazErS05jQTl5Vm8vODNBbzEyMmViSGZqYkljZmNSOUhxZWpaU1lRNGl4WmhZaVk5Z2t2aDZlR21wOWZjU3JWbzhJeTZwWGRoVWdlCkFrN3AybC9OZFF1cHk1OTdaZmUxVHFXNnA5OXRzUFFQcit6T0JVNmNYQkgzSHFwUFdqa3pXVFNQeHVtaFU0Q0hFclI5TS9EWmZndHQKc1dTaG5YSnpKQ3N6Z1p3c1JiRTY0K0VlN25kN2VvRlhjb3NVeEgwVU9TWFJqblVKQmJFUXVBT1Yxc0Z5OUhJcUJURWo5ZDUxK1pVcwpKei9hcG9jV29LWng1c2JjZmdLNGl1Z3BJWXZsaU9kSW5XYmFzNmM1MlBmSzdvbjRnNUM2MUVkMHJlamZCVC8vdk45dDZoR2ZBTTVxCmFYK3pINkxYRllULytUMWV5VjNhNzBaWStvams3VzIvYS9mc05kZHZBNTdQY3ZxanlkSXlBNVcxZG5HQ2ZiNEdiT3EzNEJaTDN1aUsKeTFTM3ZzeVpNeWVZcmwreWN2S1hyTkRJQlZHazhYL0lWajM1dldnNG1nSXFzM1czNmQ4akhxL3NMcUFnYm9wb2Y3Qi9mUHp0OUhYcQozYk1HMk43djlsajZSRkVNdHYydUVERTM1Q3U5S2tmTG1ETmF6V1FFNkpmU2NnWXFjdWNOMnJwZkFKL1A4WnhYb2g2MnVCd0diczl3CnZsZHliSXZGWXZFUnZDNndYQXlGTmZzdlgxMko4Wk5jcWYvWE9hUFY2WjhNVW5JanhVYVlhckQ5elQ3ektZaFdoYSs1M2NsQTRreW0KbGlNZnIrUXVwaTZia1hwaEpTVjhEMEZRT2M0UU5lVFRTNlZsRnZBQjRFWmdVY1QzZWY1b0xBYytuWENmdTRFZENiWS9OYlQ4Y283dApzVmh5WXlwYlhTSUxJaGJFWUl0VlJmOHg5ZGY3aW91Z0dmbXNYc0pQOUx0ZGVlTU5EdzBBRjBXMlA5eG5ZUk8vcnZRQkNKYjJ1ejJXCnZyRW0wcHJpRTdiVWdUNWcyT0dNakdXdXo1ZElhY2t3OTMwaThBT2FCUWQ3elJkQVM0UVRqNlJXbGxkcm4xOEc5dmVwclJhTE1jTFAKZkQrVm1DaUZ4UnNlbWtOTktvOWMvMldyRXFPMWZvYm1DN3RwaFRtSTRJZDlhMVN2cU10amdXVVI3Vy8yQzlwM1ljV2xIbEoyTEVjcgpwN2NvdnZxOW95LzduK3VUVmowanp1NjlzTFNjaXNvNE96ZTAvcG5HM3oraHBtS1NXRFdTY0JGd1RzSjlIZ0YySnR4blVQdThIZXU4CmE1bUc5Q081WGNmcXpUVzVDc0hzd0RyUjVuUDB1cWVQaWhCZXljSkEzcHJvdnVqZVgrcnpiL3JkSEV1ZktJckJTU1drMjczVGV0LzgKMklnSU9UZnhCT0JuQkNzbFB3N2NBUFFpWGZZQUtvdHRVcjZlY1BzRm9CVnFnOHdtTUl2RjBrVmhBUkNzVER6NkQxb1ZOdlM3alQxaQpXZHVSY1ZLRTJlQUVyK3dPQUd1UW5JZXl5bThIZnVxTVZvK0tNUFFqQmEva0xxRW1sM2E5ZjZLL1B3Qm02bnJscWJUTVFJVVgrd3JMCkJDcEpXeVhIYzRaNUIwcHhTc0p1bEdLVmhOTlFOWWg4ZnRIRE5sb3NQYWNYZmk5ZEZSYkY2YkhxbmtRaHFLR0tuazUvQkJzajFxVmgKajFPcEdvdTA4c3J1UXVDcndBVWhlVDdnbGQzdkFlOUxXNlBHWWhqQkdlZzZnMys5Q2lJNjFEbDRQY2VkU25YQ2hCaDVLaTIzQXNkcQp5NzFXV0lyQWNJcjlIaWE1VS9DN3RjLzdzVFdITEVjUmVVd1p4VkZZdkpKYkpQbWdwSWxrcXpOYVBWb2M1bDlCalhablp6eE9Hc3QxCkpJM01xazhRdEZMclhJSWFSRjdmZy82eGRPZTh5TFgxV0NZN0kxTkRrRjl5dWZuQWg3WGxjZUNUT1oyckhXdlJVdzNISjJuOWtVV04KYy9sc3dqcmhXbzVDL0VSMVdaUFZ4YlN3Z0pyeVdFS2hrVXZFLysyVUVMa09ndXNFNC8zdXMxN2hWS3I3Z1ljNzlrbFVIK3FmSlJ1Qgp1d3lLOVNYZytNbHJwY3ZVUFArSHZiSjdmS3FqVzR6aGxkd1pTRTZOL2F6cDY5VC80NlpreVV0cGVUL0JhYUViR3YvM2tpdFM3SE1ZCklzeW9uYm1jWUQ5K29jZnR0RmltSEQzSnRGc1VnNVBSQ1hwZWxuYnJJTGhPOHUxKzkxT1B1WTI2UE55MlQ2TDZzUG41SlFUdmNpcloKRW9QNWVDWDNISlFsUmM5aXZCWEJUY0FlN2Z3emdJLzB1K01zSEl0Z1VleG5UVjlYbDl1QWwwd0prcGZTb2srWFBFUHZIVk9Ya1R4aQpDRlRISmtrS054TzRXbHZlejFHUVdkTmlpVXRTNVNXQmxRVnE4blZJZ2lNN0hYK2twMi9UWkR0RmtTbWQrSkdHVTZsdVExS2FYQkh1Ckc3MS9nbjMzRW5DbVU2a21qYWhzVDFGY1Azays5ZjhYa1p6a1ZLcWZwQ0RlakdTM1puMjV5Q3U3TTlPZXltS0VOUkdXdCtDOTArNTUKSzRqSG5WRXovaXlRajlLeWpPQWNaYWJpU0NtNU91Vis0d20zZnovQnNnQjNBWWY2MEY2TFpVb1RWM0dKcTdCNEpYY0F3WnBHcVhzMQpxcXRwYyt1UzlwWUR4YVBPeU5qUm1KYmc4Nmg2YW9jbiswNGZHZnZVSnZ0dURNSHBUcVZxTENXRlYzYm5VcGRuVDU2dkxoOEVydmZUCnV6c2pZNXNSM0tqSnN3QVNGbmkwbUVWd2VzankxbnJ2Nk90QXo4L3lNNU9pNU9HSXUwSTc3aUZVenBOZWMxSEsvZjQ1d2JaelVObDkKZmZZRGQvYWhyUmJMRVVFM2g5MDllL1pFWjd5TlFyQUF5ZkdCVEszQnJLM0JaRmV5WmY5cXYvdWpIelJHdkhkN0pmY3BpdUpXNnZKOApaRXZpemNNSW5nYnVkRWFyRCtZZ3htRGdlZ2h1aVpoMjJoVFlSbkloTnNDaEwzZ2x0NGprdE1RN3F1dTNGOEZUSnVYSlEyblI2NERzCkFIcWR1R2tscEU0enZUWEJ0amVIenZNMVlGZVAyMnF4VEFzU1RRc3BWZ1JTME9zS0N6Uk0wMXFHM0tCeXM0ZWFUT3E3TnExd1JxdmIKZ0hkNVpYY3VndU1vaUJYVXBab0tLb290enNoWW5yOWx5aEt2cnQvTDFHVkx6aTZuVXQzcURRL3RveWJuTmxhdDdIZWZIYlVVeFNwcQpjcUcyclA2UHF1VVZmZzZMWXBNek1uYkFxRGc1TkZFUHFYc3hoK04zNHk5Sk4rMDFRWHpmbTFPQWoyckxCNEE3K3RCV2krV0k0N25uCm5tdXh0aVJVV0lBMjVtcWZUc3MxdWY2b0tKQVlBNmRTM1FjODNmanJEWkxYYTlOMVQ3Yk4zMUdUQnhDVG1kU1hlbVYzd0ZTdUQwc0MKNm5LdzVWbUNWbWR0L3p0OTI1bzBGdXJzazVjamJqOUpVc2xaWndjcWVxZ2JBNmlNdWJyQ2R4UFd5bUt4OUk2Q0dJeDBDSXdPdHd6KwpUL1pLczVZTUZNWE15V3ZXMlJML3ZIYnRsakk5MzFkVEg4bnBrYzlZT3lkYy9ic2MwZ3Iwc3Nwekw1aFArbVJUY1IzTlJnam1mM2tXCitFYS9HMjZ4SEtuRTltTnA0QTBQemFVbVQyeXhzT2lodXhDMHdQai8xK1FoYklSZmZ3bUduWGMyc2VuWHpoWnI3RG5lOE5BTTZyTHAKenhKK25uVG43ZGJuOENXblVqVmVybWU2YWE2clNGN04yU2ZPVk5ZN2dJOXJ5d2VCZDVJOGc2N0ZZa25QYWdUQkVGaDl4QmVGLzExUgpQT1dNVnZmMnV3RkhPYzNhUlVXeG9sRjdxSldpQ05ZNEVvRU02NVplVUpPbkFMTTZQbHMrclVybGVCNGk1YUcwL0t2MnVkZVpERS9QCnNHODNoK0hUZ0hzSTl0a1Z3TkdTQnR4aU1ZYWZ2MlhQbmhSKytqWFpmTTc5SDlKbStHeHdXLy9IdHZtOThUbDJTMElrdndQOGE3ZU0KZHRieG12enZRQzZYZ2xqUWI5R1BPa1FqUDRzZjBoek81ZVAvcjZhQ2d0OUxjNm43ZGZKUVd2VE1kMHVBeEI1MkdjamlZZDdKbjJVeAo4RTJDMWFvL0JmeGpEOXRtc1V3N1VqamdRbEVvdjdXb2tWOTRuYStzTkJXWEIvcmRaZ3NQQTNxSTh5MXR0cXNGWHBRMU96L1Vjd3JpCndzQkFRTDhlVVRXSG11dHFlWlhKeUVOcGVaWm03WjBpNlhPbXBHbkwwZ3o3LzFPYjlZdFJSYjJXYSt0K2lBcDV0bGdzS1RubW1HTzQKKys2N0UrM2pEUS9Ob3laUFFLSmVZalhaZEFBTUw3ZXUzMncwcTZzbEZjNW9kUitTUjdUcnN0WXJ1YTN2Q2NIVGdldVh0cHEzSlJWZQp5WjAvK2F5Rm42Zm81d3ZOd1hxOFVlL0tPSGtvTGZ1QnpkcnlaYWo2RVhremw2QmlZWUpUVUFxTFBwZjZBQ3FzMnBaTHQxZ3lzSDc5Cit1UTcxZVFxaW1JMkFwVVRvdE5mZUJ2NFNiL2JiR2tnR05XdXp3QkZjWTlYY2s4TmJDTnBYa09yc1BTRFZSVEZySlpuS2M1bnlTL3kKRWlxdjZLRnYwd3c5UGhIbHdQcTl2QnJSSUgySittaldBdmNSekR2elE1VENNbFhTZjg5Qk9SNTNtaGJiQ3V4RjVaS3hPUTZTTVlDNgovaldtaDdOMUVYVy9MSUMyVG8wdm9jTDNEek1WUzFJSVRtOU9FOFNaTGdoRU54eVZXWENuSWs2bHV0RXJ1VjhEK1lIR3FybkFZMTdKClBjOFpyYXJNdDVNUlE1UFJZTmFCdWdPTitrd3pnQk1vaUxtVFV6bjYvNUtORkVVdFZzSzN3TE1Ha09DejRPRzgycG1YMHZJQThHbGcKWG1QNVR0UThwdEhNZUNHU3hVMjJaM1pEM2l0RDYzK0lLZ1RaVDRWbEdUQ0ljamhlUVRKRjdVV1UwL0JMd0MrQTlXQi9CRUtzYlB5ZApESnlLS29oNUxPcSszWTZLZXZndXNLN2Znc1prRG1yUU1JaTZaNVlTMzhkc0Y3QVRsVHI5SVZUeXNhbGdYUndFbXBrM2k2RWhlTlE2CnhmYW96S3NBWHRsZFRFR2NSbDIraVlKWURpeHNjN3dYZ1plb3kxOGdlY1lacmZZNjIvZjBRdkFSQ21JMXpSUVNzNm5MRFY3Wi9Ud3EKdGNUbXhuYitTemRKeHZKcGoxZDJGeUU1RmNHYktJaEI2bklSa25tVDk2dnVLT3NyTGtXZ0xnOTdKZmRGQkZ0UXBXc2VjQ3JWcUlDUwpOWkhQVXZmbmJoZDFtVnRpMlVLOVh1KzhRYUV3K2ZuM3YvOTlrbVAvTFhDcnR2eERWSGh3WHR3Ry9FMkcvZjhVRlRKOUI3QW85RjJsCjBaWisvR2d2QnQ0RHZJdGdmcGlzSEVEVmhib05NQjVMbjVLUEFuK2U4UmpQb2E1WFhFNEVQZ2ljajNJY2o4T1RxR2xQWTBYa0RITUIKNm40NUZ5WXppbVpsRzhyeStDM1VjM0I3NC9ocDJmN0NDeSs4RWVES0s2K010WU5YZG1jRC93a1VKNmNPb29qNlRuS1hNMXE5V2p2VwpNdFIxWDR0UzVKSU80QTRDVHlQNU52RElWRk5ndkxKN0twTHJFazJydE5abnV0RmtvY1JJT1llSEZsR1RHMXJDbVNYN0VId0h1RlpiCiszOUYxQ2c2cXZCSzdqemdJZ1JYb0FaWXJhNFhuWjZOYUdxb1FleWRUcVg2S0lTZXRlVGM2MVNxNzgyckQvSlVXdVlDdnlYb0hQc3AKVlBiWVBLWXBSZ25tVUVuS1M3VDZ4QndBM29kU3VIck5VbFJmdlo5OGt3RFdnQWRSU2xtL2xaZC9KMWcxT3czWEE1L3RzczBBeXBKeQpDM0FHNlh5NzlnTnZZK29VY1pzSmZBaTRnZXg5MklrYXNBK1Z5REUxTzNmdS9Mcy8vdkdQazFFamNSUVhyK3llUTBFMEs4YUdSM3p0CmxsVkV3NW1vdkJGbkk3a2VPQXNZNkxoL3UzWGg3MnJ5QVBCbEJIYzZsZXFVeUl6dGxkeVBBNk5hKzFzanF6cjFYMTN1QUp4ZXBNMzMKeXU0Q0N1SXJoSU0yZ3RjUGptS2x4U3U1eTRCaDRDS0tZbTZnZjN3NjMvOXhyLzkyMUN6SmZ1QytXUGQvNi9sY3AxTE5MVW92ejVmaApQbFFlazhlMDgzd2M5WUlvWVY1eHlScGFIVlpZSGdHdVFVMEw5SkxGcU1pa3l6SHJ3SHdRZFUxODVxRmVkRVdVejlFN1VOYUQ3L1M0CnZUNkxVTDRXV2FoQjE3blVwY0RuVU5hSUxNeEJoY0cva2Y2V2NKaUZtc3E4Q1gxYUl6dUhhRTRmTHFTcDJCWEpxTEFBRTMvODR4L3YKUzdIZm1aTS93UDVvTWh4VlVwZk43L3p2WVIrQ09VaCtpVUE1ZXpickVEVjlKd1FUcUdzNWo3cWNPWGtjL1pqaFVheksvamtiOWR2MgpZYS9zM2dYYzdsVDZuTUJPTkFyWEJ0b1g2anNSL2o3UTFwLzBxczZQVTZudUJseXY3RjZPWkJqQjhzaStoMTk3Wlhjamt0OVFGRTlTCms3dWMwZXBVbUxMTWpVYTAzQjBJTGtWU2JPbVRPUGQvOVBYZlMxRWNvaTVuQXZPMC9sNks1RXR0N29ubys5L0h6emhkRkxrV0k4MDcKSSs1NjFQU0R6c2RRZmdGcE05ZTJ3OVFQOWo2VTJmZzhlcSt3WElLYTN2Z0FaaFNXUTZoY01tOEYvZ1E0UnZ2N0UrQkMxRFVDNWJQUQp6NWZ2RWdOdFhrZm5aSCtYbzZ4L1dSVVduMlgwdDFEbXVjQnZVRXFZaWZ2L1NaU2w1dldBUS9OZWVUVndIV0RxeDJnYndYeE84U2hvCitWbUU5cjlQdTNWcVpQcWpGb1VGRGpRY0JxK2dLRTRHSEdkazdCanE4aytBUDIyWTRCOEdKaWIzRVpPeXRDYlRVdjV3SHdOKzY1WGMKc3czMVZXSzhzanRBUWF6bzJDZmh6NjNydnQ5cnVaMUs5VnNJWGd0Y2c5Q200cHY5dkFyNEs0cmlQdXJ5ZjFNVW5sZDI3L2VHaDhwZQoyVDNWSzd2ejBwMTVhdUtWM2ZjREhvTExLWWhpNUwwWDUvNXZydHNDM0lUZ3o0QlhPU05qeHdDdm9pQWNCT2ZoKytxMXZ5ZTYzZjkrClZlZGMzeU41VGcvNURLQitWSzhOcmQrQitvRTBOZlh5UzFUVzJpemNqYklDOVhxVXRBQ1ZiZmRjekNpU2UxSE94SGZSUGRPdkh5R1QKUzB4OUFqNE1mQ25qTWQ1TmRKVGFESlRKODFyTUsrbzExRXQrYzg3OW96TWIrQXB3TWRtdHBZZUFyNkh1bCsxZHRoMUF2Y3lHTXA3egpwaGRlZU9HVCtvcHUwME5lMloyRDVQOGdRdjRzNlQ3dkFqNU5RWHd0VGhTRlYzSlBSWEFQY0Z5Qzg5UW9pZ3B3cXpNeTF0T29QYS9rCnpnYitLM2EvdEs1N0JYaFZQeXNxZTJYM1BVaStuZkRhSGtLd0Y4bG00R1dLNGcvQTA5VGtzODVvZFYrLzJwSzQ3U1YzTWFvbzd6a1oKNzNPZmJjQXRGTVFEenNoWTIrazFyK3dPSVBrY292R3VUbmZPdjNjcTFWeHptUFdpOXRBRThCSGdSb0tSTjB1QSsxRWp4UTloTHZvbgpMZXVBcStpOXduSUtzQUhsQ0pyMWVrd0FZOEJKd04vVFhXSHg5K20zd2dJcVlpY0xCNGt1aERjYmRaLzlGZm5jNzBXVXN0UXJqa041Ci9GOUtkb1hsQVpSRjVUcmlXUlVuZ0M5a1BHY051RGZGZnFjaEd1M3RaalZvLzNrbnl1ZnAxVTZsK2creHdqNEJaN1M2a1lKNEk3S1IKVFRmZU9ZdlU1ZDlTbDA4MG5CcDdoMkF3VWIrMHJudXdud29MZ0ZPcDNvdlFwck9MNGtuZ2kwaWVRbWhScUVIWlp3S0xFSnlMNEZycQpjb1M2ZkFMQmYzcGw5OWRleVgyL1YzWk5XL2lONHBYY3N4RDhHMEpUV0ZyYkdmZnpMdFI3OS9WT3BUcldTV0ZwOVBrRWdqdnhYVGZTCm5MTWdmcDUzSC9XeVlPSm5VSTZMWVcvMFZhaFI0NytqUWl2L21uWmUwZm55M1I2ZkQ5UTB4V09ZcWRHMEQzQlJVU01tc243T1I0WDcKOXFyZXh5a1o5MytRVm9WekVVb3BqcG9PZWdvVnpmWmFzcGRqTURYZDFJMjF3SzhoYytHNDNTai9wWGVTZkVvd1M2a01VTTZ3cnlUZQpTL0ttbHN5YzhmOXFLQXZxLzNKR3E1OTFLdFhFT1hlY2tiRzlDSzVBc25VeXlxYVovVE80SFB4K0VNbVBHOWFQWHZHR2xqNmd5N0wrClZ4RDkrQzFzSlpoMTlmdE9wZm9SWjdUNkY4Q3JnRGNBTjFJUWp5RFowL1VlZ05YQVBVaCs2NVVqc3U5T0FieVMrMWZBWThoR2JyQzQKMTZ2MWJ3SzRsNEo0clZPcGZzYXBWSk9rR2ptSTVIRFg4MExyL1EvN25aR3gzQU1UOG5URWplSlI0RFVvUjlPL0lwaTRiUTdxeDk5LwpBZXhGS1RqYlVUK3l2K3R5N0t3UkU3M3VpeXRSeXBxSjgyNEQzb3daWmVWc1ZGVE5DcFRmMFNIVVhPaXQ1SmRSZEE2KzZUMDlQd2d0CkwwSmxNdzRmOTZsR1c5YlRkQWEvck5IZXRESXNSaWw1ZVlhOWZoemxINVpWbVg4WmVEdndmTXI5czFyRUhrcTUzd1dCVVYxNGFpUHEKZjhVRWdnODZsZW8zTXNxTlU2bnU4OHJ1ZTFHS2NQQThZUWRGZjcxYU53ajgyQ3U3NTZWUm1CSWpRd09BS0l1Sy9sM1F4UDhLTmJtSgpxVUpUcmtrZktLZFMzUWM4MC9qN2pGZDJaMUVReDFPWDcwVDlyczRMdkV5RDdUOFd5ZjFlMmIzR3FWVHY2bmZ6QUx5eVcwVHlUZUFTClJNT1FFTHgvV2orM3YrOFBBTzkyS3RXMHlkMFdRNmlDZXRSNS9mWEIreiszaEhJNnZYNVJnM29KRHROTTRIWVYwWkUvOHhwL0szb2sKMTZ0NzJBZFhvdVlzVGVBbnZjdnFSVjlzeUhSNWFQMU1sRFhzeDZncHB6em1LNWVTN1Y3Y1N6QnE2RFRnWndTVjRuMG9aZVh6dEVhdQoxVkFXZ0xSS3l5ek1PNWI3REtDVWxiS0JZejJMQ3YzZGwrRVlneG4yUFlTYXZreEVZNDUvV1l0Q0VwVVlWN1FzZjh1RXd1TGpWS3FiCnZKTDdIZFQwWEhzNWFGazNDTnpubGQxMzltRHFaVTFncVZQaTRMRFNKWGpFcWZRL0lzY3J1Y2NEY3pYWjJ5clpEVVZ3RTdESks3c2oKRk1SaklGZDNhUDhBa3E5NEpSZG50TCtLUzBOaHVRL2xuOVlxYTJ2dW5QYjNmMEZzbzhpWnpzaFlja3RtazdlMVBiK0lXQmRjemkxMQp2MDR2cDRmQzdBRStpVklXL2dMMU1seFB0aC9VSTRFemdLOGFPcFlwaFFWVW5wdkx1Mnp6TjJSM3dvd2k2NVNEYmdGcXA3Q2NoOHJmCjB1NkZrVFdNTnk5TUtTeWJVTmE0ZlJtT3NaeHNGczFuVUZiVFpBaE9SV2dXSmorYzA2OTM0bjhPZjk5TWdtZVdvcmk5NWZ6NmVmVS8KZlJ2QlJaaTVsbTN4eXU0SkNHWWtraXRZMnlldEpjd3NnZ1dhdkxzUjhmenVHa1g2emtPd04wYjd2K0NWM1ZYOWFxSlhkbWVnU3Q1YwpISEd2dExzKzBkZXdZVzNQb3JCNFpYY0FQVmRPMVBuYjNVT0s4VjcwV3orVkZwMm5VS1A0TTFIemxTZWhmRE51UUkyTS9iOU5xTkZpCjFGOVdlbkh6cmdhcW1PbjNCekNuc0t4R1RkZnBmQloxRFQ1RjhFVi9hOHhqSnVGMUdmZjNsY0RUZ0o4U1ZGajJvMEsrdTRYclRrVUgKdlU5Z1RtRjVDOW1kekU4ajI3MmIxbGZpUEtCMWVrUFBFVkdQTUNjSTFqdVZhdkxRNm03VTVUYmd5WlljRmRIYmh0ZmM0cFhjckVwNgplMVJZZVBNYXhaR3IrWGsvUFhyeGRFVUcvTGEyT1pWcTdEcFl6c2pZWHVEeEdPMHZvZ1pyUGNjYkhpckM1SlNRTGxNN1dUdmQveThpCk9OTVpHY3ZtSGxBUUp3QW5oQlNSN25JcDJiYlNPZDJFTWFhSzBxSnpBR1VLSEFQK0FSWFo0UCs5SGpXbkh2V1hOWnRyM282L0MxRTMKNlZ3RHg5b0tYSTBaaFdVQTllRDYwek1US0lmZTYxSFhvSVJTSG4yT0EwNU5jb0lZWlBrUjM0NGF3WDhJWldIUm85RDJvMTdXVHh1VwpOOHdoekJjWFhJc1pCWEUzeXNKaUlpcnV6QXo3SHFaNzRyOFd2Skk3QThrWkVjNml6Zi85UDMxWi9aN21ZcTUyS3RVSkpEOFB5QkdXClRWOGYzS1pJVWR6VEdOV2FweTdQakpRcHF1L0MvYWVpaHZLc0R4Y2Z3UnNuNVV1VDB3ZG14V3ovR1Y3WlhkSHo5dFhrS0pKTFd1NlgKZHYrM2F3TnNveUJPZHlyVkxGTkN2a3hySTUrdmJzK2IydWZoWGtXY1RVV2xKUzM3TXU2Zk5hTnVKM3d6WUZablU3K2RieVdObVQyYQpFd2pPZ1g4UENLZGcvaUxCbDU3cHVoSlpsS0IvUkNrc1g2RjFTaWlKd3BKRmFkMk51ZXNCNm5yOElLTk12bHhacDRSMHNseW5qYVJMClhyZ01XTnhpSHZkSGVYV3Bzbjc2eS9wbmFjUUNHNDNneVVER1VWMCtYUVpmUnJSdGFuSUZxcDZZVVJyK0VhZTFzVG8xLzYvSjRHZi8KVDA2UnFTSEZjdTA2L3lweFA0VHJ0SFZxZjBIMEt2clBsKytqQ1A0NklJTi9IOVcwKzFxL3o2UHVmOEVleU96RG92UHVsa3k2dFpBYwpOZTE1MDc4dmlpZDYxWC9UU1duSnlxTHNoMmpMQ0NvcUp5c1RxRnBJSm91WTZROXNqZWc4SERWVW9UeWY4dzJlZnlYWjdzT2xxT1NGCk9oT29FaEpKTEN4WlE2NU5zUVNWd0MycnduSVlaWTFMR3lVVVpnSHhDMHBHa1M3RHFtQk55M3k2bjRVekhCVVQ5T000Z0pvV3k0dG4KZ2YyUnZnYStqR0cvRXREOUEyNXYrRFNZNUhoRUkwVkIyRC9DbHlGS0x2WFNPWURna1J6N0t6WmV5WjJGSDlhdnJuWFNpc0ZMS1lpbApzZHRmbDIvcVlkc0dVWWt1Z3pJVXRYdGF2NmYwRExmQiszOC9rcmNic2JBb3VZNURMMXJaTG9lUGlGaFhFSHVweVZ4VDkrdFlwU1ZJCkhnbnV6cUkxRzNCYVBvL0tSMktTMDdYUFcxQlRMVkU4cG4xZWlMbVgvR0RHL1MrbTlUNittbFpyVVo1c05YU2MyYWlYdXdrRmVzUncKSDV4R3RnaXZkT0dRa2dzREptbGZZUW12YS8xNzNobk5yLzVQWXhwbFY2UjV2NU9NcWsxUUVBdnhJMGJNc1NiVythUFhqeWZ4RzhrVgp3UklLWW41RHJvTW9KOU1rWEpDdy9jZDdaWGRtd25Na3hpdTdpNEg3a1JRVFhKZDI2MHJPYVBVcGcrSmQxbmFxdGRPZk1zQTg0NHoyCklKUy9nVlZhbWd4Z0pzbWJ6aHhVR0xHSkIrSmxWUDRVMDh6VlBuZDZzV3hDL1lDQTZxdEJRK2QvdStIMlhJMUtTNStFRThpbXNPNHoKSlBzd1p2eUYxZ0YvWjBnbW55eitMTStUWXZyTUs3c0RDTlpRYjVpai9UOTlTcVBlOW5QKzFiY0xZa3VMZWIrYnJMclpYM0s5VWQ4Vwp5WVdSZmROSmx1YmZWSm9hV3FuSnV0T3BWSlBsUDVLOE4ySDdGNUt6VDZNM1BEUVQrRDZDK1pQWHYvMjE2SGF0N25KR3hzeUdhZ3ZXCnRrejlSTWtUbGtYZC83bG53ZFdaVGtxTFNaOENVNHlpcGkreWNoZzEzV0U2M2Y1TWdvcmEvOXRoMjcwRTYrdWNiT0Q4Q3pFYnRmVU4KVlAyb3BHU041dmlOQWRuUFJSWGJ5OG9lelBzY0RSRE8vWkdNNzVPdXF2dHBTR1pIWnVQMGtXMCtxOUlZK1ZLVEJ5TXo0dXJPa3lMMAp2YjRkckVDYUdTZzFwbFNDejFMUXNoTU1Ddzg2ZUI1RzlpWXhXQ3drYjlDV3hoUDFROWxkaWhxRUpHbC81MXcySnFqSm01Q04ybmo2CitRVFJqcmJCL3REdnJhM0lRR0JFWnJ6aG9jVklsa2VlTHl4UDYzY1R2WjVXbkU1S2k0blFScE4rRGFlZ2tzaVpZSXo4UWhIMWVoVGQKSEJmMTBhdUpzTTJMTUdPRkFxV3dmRERVbnJpY25tSWZuYXdLODN4VTJMYUpaSS9Ya3laTmZtZm00YjhJMHBFMmsvSmJBMHZoK2ZSMgo2K0FRTXZlSU1SRDhjMlRHMGs2T3NHRkZSaGp5RHhPc3dMZWE2czZVUHY3STJFZDNJQlpzY2thclUyblFkNG9tMjI4VDduc3hnb0dFCjdXOGZHbTBBcit5dVFQQUpJRnFSalg5ZlQxQ1hWeG1maXFuTGQrQmJtdHI1cmRCbUhiem9WS3BKcCs4eU1aMlVGaE9ZTWhFT0FIZGcKNWlXMEgvVWl5b05EQkozY1R1eXkvVDlybjVlVHJTN1JBTXA2WklKTnFENUtvN0FNb0JMK1pTRnJ1UDN0WkM5REFTclo0SGNNSENkTQpGZ1gxUmRMM3p4cUsyZ2c1UE9vckJ1YlY5ZldibmRGcS9rVkE5WFA3c2hSRjY4aFUvODVmMS93K3E4THNIOGNObkROc1dkRDdycWpKCnFmNStuSHRmeGFSUlhISzFKdTk0Z24zVmIwcnk5dWZYbnBJN0M4bTNLWWdaa2RmZnZ6Y0tJUTNGbDB1Ly80dmlVMDZsbW9mRGEvUGUKS1VROFUxTDdyaGk2eDFVaHk1NWlsWllncnpaMG5JdWdZUXJNVG9sOGE5cm96bmQvMm1YYnNNTnBscGZabW96NysyeEhoVGFuZlVtZApTTGFvbURTT2dqcG5ZY1lpdHhlVnl5Z1BzcnhZVTFsWnZKSzdDTW1xeWJuMEtOcDlWNVBqT2ZWRGtQREl2YjA4ZEdqSENrTitMVUdMClRaSitFN2xaY2RNd3FNbTFLOUVvWG5MVzVEUkhtdnNtSHo0R25KankzdEMvMjBaZGpwZ1d6aXU1U3dLMXF1TElFclJnNVQ4Tkc2SWYKdFllbU1nc05IR01XS3ZXNkNiYWhwajN5NUVtYXpwL25vMHFadCtORmxITGdPNjJ1UkJYQlRJTUpwK0xkd0lWa1M1dzJtRkdHcmFSUApMRGVUMW5EdHROeUcrV2tobnl6K0xGMGRQSys4TWtKbks0clYxR1dyNWRNZmtVWk53ZmpmMVdSUGFxQTA1QXpLRWtlKzRQY0xzbzcwCnZiSjdISEJzbStOSHk5RDgvaVh5RFExUHlwdTBQdDJjYUUvQjFSMzdQN3I5dWVFTkR5Mm5McHYrSittdWo4K051U1QrVTZVbFpzU1MKTC9yN3ZJcm90bVU2V1ZvU0pTQnF3MXdEeC9nQVpwTElnY3BFbTNmeE12MmxjaHlkODhuVUNPYjlTT3VNKzJHeUt3czFsTUtTTlE5SgoxaHdOV1h5cExzVk14TnAyVkRoOEhzd2h2VVZzTDZwRVI0QVhYbmdoenI1bkJzelM3VXpvT3Mya1llTTU5VVVyZGRscVVxOTNHS25xCisvalRHQ0pqeEpoc1RHKzJPNzR1WDlpM0E5WTdsV3FhYWRXOEdOU1NBOFlleFh0bGR3bXk4ZHVWclAwZzJVMGV2N04xZVJ0NlZHSzcKNndQUjhqWHYvM1ZPcFpxWGNuQ2hwdXlIK3lYY25xQjhTcTZlWjFDZVRrcUxpUlRDV1p3TlFWbXViakxVbnFmeDYyZmt5N01FWC95MwowOWs1Vm45SnA4a2l2SXJzbHFqRHFMcExXWjB0WjVJOTZWOVNSMEdmZWZoSnBySnpBMmJ1L3loV2s5NVordUUwY25sbGQ0QzZQSDl5CkxqOGNadW5qUjE3bzFPUlc4bGYwZy9naG9jMVE1aWE2b3FWYlpZS2h6OWwraDR2aXNvQXNlditFdzFOMWVaVGZSTS9OKyszd3l1NWkKQ21LRkp2OTQ3SjBMNGlwZ1Z1TDJxLzdiYlRwSGpWZDJUd0V1am5uOW04dGhmeGM0VEYyYWVxY0VaU3k1Uy9DVlJOOGhXSC9Hd3YzVgoybmQ5dVhlbWs5SXlGYmlBYk02cE9pT2tjeXhOeW1HQ1dYQlgwcm5talQ1TVhrRXk1K1ZWcUNSMTh6TEsvQmxVUkZWV0JzbGVLUEdaCmxQdGRqeG5MM2xPWVR6aW9zeUxEdm1rZFBGY0FTenBhTE1JaG8vN25vbml5VnpWUUlwR2gvOE1STEZFVUJXbnhTdTQ4NnZMRXlmYTMKTzVjdVQ3Ty9EaU42TWpDS3kyblVaTEdoVE8xRUpwZ2Vxc2tQcFdpL3Z5NXB4dDN1U082WVBGODdtYUxrMHo4clplSjdUcVdhei9TZApIcmtXRlpyZmxDRW92Ni9nOU1wM0xNUjBVbHBNUkF2TUF5MWVQVG1ta3I4OUF6Mk5mZjhHd1NySUgwUFY4ekhGQVBBM3FDbThyQXJMClJ1Qm1RM0s5eGNBeDBsaDc1bUV1Uy9LdDVHZGxnZlJPdUJPa0RkT1hETGJrMFlpS2Ftak5NdHRyeDhBL0NVU2YrTkVlYU12Ky8rRjIKNk5NRDJmd3J6a0EyaWdPR0N6WHE2M1I1aXBQbmZ0NnA1SmMxT0RHU3BzV29LRFk2bzlWWUZqT3Y1QTRCOHhPM3YzbnRqRllDOTBydQpXUlRGYWJHdmYxUlVrZnArQWpORlU5djNkOVR6VlJTdHoxczQwa3J5Q2tYUkYxK282ZVNJbXpYc0ZOVExOYTBpdDVyczAwcytJK1Q3Cklnb3pBVndGL0JMMVFoMUFGU0E4SGJpR1lQUlNrbnZHejV6N1ZiSXBnenJmTk5nM1dRdWxQVU02Sjl6ck1GZnRlNTJodm9oaUZ1bHoKRnoxSldnZHB3ZHNpemZ6K1p4L2RyQTFRazdVZVI4SXNpWlRKdC81RUdWRDhhU1M5WFlYMGxoYmd2VnI3VzNOc2hQdElsN0V1ZjlURAp2dXFJVjNabm9YNURmUm5qWjFrVmphaTVwTzF2cnY4WFkrMG91UVBBTFlIcnJCTjEvZEdXZ3pKK3g2bFV0NXVTTFNDbktpblFURWFvClAxOWhHU0hLc3Zta016TFcyMm5ZQnRQSjBtS0tZMVB1OXo3TTlPY09ldVBMRW1ZcktqbWJmaU1PQWI5REtWRXJHdXZlME9VNFJaU2kKY2djcXI4c1R0Q29zMjFQS2VKajAwVXBobHBJdDFCbTZKK09Md3FTVjVRNUR4Mm5IQ2FTM2pLV2FHdHErWWVOY3BQYnlncWhSWGpEagpiUE83YlU2bGgwblNkSGtLb3IyYzRjOFF6M0czQzE3Wm5VTlJySW5zaS9BMFZWUS9Gc1RVeVlLcnNoL1BhOGhaSStaejdwWGRVNUdOCnZDNUoyOTk4QVp1ekdCVEZDUkNSK2JiVDlkZGxEOHI4ZGVPOTNPUWlvQmpyZnRXVlB0OFNJL3FYMjJjNldWcE1rY1luWlE3cUJXK0MKMjBrZlFwdVZINkx5anR4RE0veDdMbEFHUGtIMHlQa2NsS0wzZjZNVW14VzBWd2Iyb0p4dzk2TXNKa2w1R2RocHFLM25rdjMrVHpNVgpjVG5acDhqOHZyalhVRiswWXpERHZyRmVpQkhoem9QNGpyOVJtVVBiL2ErMkdjKzVQOElzbXBTejNjamFwK1dsRk5nKzNUMHR1UURrCm5EYVpTcU9YbS92dVFzaWVaakx0MHBaM2EwdlBPcFZxM0Q2NUFxRU5GdU8zMzdmSzdFVU5GTTFRazZYSWMzYTYvdEV5cmtPU1orWGsKZDdYdHI3QmxLdnk4MVdVdFo5azZNcDJVbG9Pb3ZCMVpIV0hUOU1tbG1ESDM3MGNwRHYza0VlRDFxQ21kYzJoYWp3WlE2ZWJEeENtMAp0ZzJscEh3Wk9BRGNuMUkya3lQRHJJVWEwL2hzekVRVmREVEJ0OG5mVVR0dE9QakxwTGVtS1I4YWZWUWFObEczRzZFS2VwZWZSWjF2CmFlU29QaXFxcVIxcTVKcTJyOXpZNXdxL25JcmlVV2RrYkVxRU9uc2xkeVpxRU9GZjAxaFpWcjJTT3hlNEtGWDdtK2Q2eHFtWVNZdnYKbGQyRlNDNlpQSFljWk52bGU1elJmQnpLRytIaG5XdSt5WTdybm5kRzg1bTJpc04wbWg0NmhKbk1zWCtlWXA4TERiWGhRVU50eU1wTwo0RHpnamNBL2tHNGt1QXVWTytSTTRMWEFwMUFLeXd5VU1wU0d4d3kxYno3WnF5bHZKWG5Ob1VITStQWWNKcDkwL1RvejZGN1dvUjJQCkVFT2hpa29xVjJlaTFjK28wd3VnK2QxaDZOM296eHNlbWtPN3lMT2tMNndVMlZtOWtqc0hPQ2YxeTdFbWY1Wi9MOFZFY0FITkFkRUUKQlJGdlVDTzRHQmx6c05pK244dzVia3ZlMytWYzhXUVM3QUFlTUNaWEs4MWFRM0ZsQ2pLZW8yeGRtVTZXbG42eGdPeTFhM3p5bk1OTQp3OU9OdjV0UVRsdURLSWZkcFcyMmZ4YjRFZXFtM2tUME5OY1p3T3dVc3V6QzNNT3lpdXloem1sa3VjcVEvT3RRMW93OFdVYjZla2h0CjU3dVBPZVlZMXE5ZkgvbmQ5ZzBibHhWZ2NUMkpYMm96K3VaRnAxTE5LeU53S3pXNUFNR2NnQlhJLzZ4SEJIV1BEbm94VllpMmV0SFAKVEhndW44UEEramdiOW9oM2FaYVE3YzdJV05jMEF0N3cwQUIxZVVNZzkwbWFTS3lDd2RvNW92RjhwN3NtdWt6MzV1cmtXaEFYSXFTKwpIQzJ2L2prNFpkUmJpMmFJNmFhMG1EQ25KWFhPUEFNei9mZ0s2WE4rNUkwL2l0Mkk2dVBidGUrK2dacjZlWVo0U2IzZWxsS0dwekFYCk5aUjFhZ2lTUDdnTHlaN0l6dWRMaG83VGliU3Ardy9Rd2JHeG5jTFM0UHc2RThWSlo3K2FiSWFENnRZSS96dFFUMTRqbXFFSGZhTEwKY0VKVEJxSGswT1V0K0RMSzhIN043ZFQrNlNLcy9QRGdadnZWaDlianQvWVpiSEZHcTFQQm9xdWlXQ1JyTmZrZWpMVmpYUTRpV1o2cQovYzNQcjFBMDg1dnJsZDN6a1N4TmZQMzFFSGtsMHdSQzNwZGpmOCtqSnB0MThhTGtMYmFSWFMzVzZFUHEva0FYZHZxeVVDajBVN1kwClBFMzJzT09rbzh1MEwrRXdZL1E2azJjNndtYkZPNGtmYmw0a3ZWVXFqdTlNWFBuUHpYaU1ORk1SYTBsbllRcXpsOTY4b05QbVozbWUKOUxXZ0xpd3dRTjBQQmUwVTZpeENuMldnQW5uKzFPWHlnQXkrak8xQ1dNT3lOOXVRMkdMV3lCeDdSaURUYS92anQvWlpuMTg2QVNRWApJUmpRNUl2N3dyNnFZenM3dGIvNStVbG5aTXpVUU9pZHFhNS82L1pQT1pXcStXUjNUUzRJT0M1SHlSdnV1eUEvNld2eVJxYVhUMHUvCkdEUjBuTDZGa0NYazlkcm5wQldPVjVDdUxwTkpjL1lLMGs5NytMeEk4dUtFZjJsSS91K2hyQmw1TTVoeXY3U2h6cTAxamlJR2U1UHIKV3hudlFaL29NcndteGpaeDVFOHpwWFVSZFJrY2NMWTdWN1JNVXlaMVB5ck5naDgydm9VWUF5Q3Y3TTVIaGV5bWJiKy9yWkdCa0RjOApOSnR3bGUxT01yVmJwL3JndXlaazZ0RCt0MFhLSmR0dUg2UWcrbjd2VExmcElSTXNSa1VDN1l1eDdTcjhzTWRzN0tUUHprMEptS3Q5CjNrS3lDSmJCbE9kOEhuTVZqTlBLb0pOMHBMcUk3STYvUG1ranI1TEttellLYnp6T1JoRk91R3VBdWZYTjJudWszV2l2ZGYxT1o3U2EKdDQ5UFdJYlZNYmFKcy83WGljOWRFRmUxK0VuRTlRTVM3RFBxeDVFQnIreWVRVUVjTnpteXI4bHZPNk94aWpjT0ViYjR4bSsvendUUwprTVdwSnRjZ0l0SVl4TDkvbXhGbk5abWJGY3dydTNOb2wxQXpycXgxMmZkN3A2Mmw1UWljR2dJejB5dXppRjlQNTdTWTIzVmpuTjVtCndNMkNQdjJXZElva3JTK0pTU3ZVZXcwY0krbG80d0xNREJCNk5UVzBoblJXMkYxMEtHdHd6REhIdE45em9IRnYvRWRFUm5WSmVJUWMKL242OEIzMHlTZVBIZjNuYlJGeWRhRTJRbHlpRnZGZDJWMUtYM2FmQUplMzZiZHpnbEVnMkpOZFJsLzU5ZGhBUnU1NVk5MmU0ZmZ0OQoxam1qeGlvVVg1YjYrdXNVeFRwbk5GZG44dlBwOWp2VStWNStHVE9aNXpNeDNhYUgvcW5INTN0OTlrTUFmYXFXbVlKRkJLTnVYa2l3CmI1WXc0M0ZEOGk4ZzNmU1V6a0dTS3c3dlRyaDlPM3FWd1RTdFA4dDRweS9iT2VGNkc1NmF3UVRuQkt3c09pTDAxL3A5cjU4ZlZmbGEKVHc3V09WRllzQzNOZmZZaEV2dTB4SXRBRTBUM216VG1HNVlKcit3ZWp3aWtQbGpuVktwZGs3eDVKWGNsNFduRUpPMXZZbVFnNUpYZAptUWpPVG5uOWc5UmwzdGZtWFYyMzZIUXZGOFJUVGlXV0pTeFhwcHZTWW9xNFV6NXBJeXpDalBlN3dURlpRdEFLbFNTTi9ma0p0dFhaCmk0b2NNc0g1WkwvbngwbVdzWGdoZEVua0ZKOWUrVDJsdmE5aktRL2hxYUVDQTh1QlJleDZLWHFFM0p6dlZ6dUVsM3NkT1NRYkpTMTAKT2FJSzljazIyekM1L0pKVGlUL2E5MHJ1REdCdHgvN29kdDZZaWR0NjBJZlhVQkF6dEpGOXZIUVBncmNqRytubjA3UmZmVDZFdVNTZQpKMUlRODFKZS8vRDI0M2wxdDFkMjUxRVFaOFdVSS9xdkpxZUUzMldrcVNocWF1ajN2Lzk5djJYdEpVdWhhMW4weFdUUHZnc3FoZlQyCmZqYzRKdm9JNXlES0lUVXVhUlB3aldOdTZzdzFjSXlrb2M2bjRhZWx6MGFOM2xoYUZwTStBVjdYK2Zpb2hITEFCVzJ0TElFZWtLM0wKZ3UzMCt2a1J2RGxnT285S0RoY2xxNCtjL0djODBYbUw0bXhxY21Ia01lUEpzY09wOU5qM0p3S3Y1TTVIY09ta2JJTG5uVXExNjczagpsZDBpS3Z0NHV2YjcvVjRVVHpzalk3dU1OS1lnM3A3aCtqZXB5MmVkMFdxZVV5K25VSlBCM0ZSUmNyUlBkSGdJWVd6d21BbFRscFlpCjZzZTUzNDY5dmF6WmN3THhmVjg2OFNSSGpqK0xudGI5WmVJNUs0TjZhUSttUEtjcGsra2N6RmpHa2lvT3BrTGlIeVgvdFAyZ3N1Q20KZVk2M29YeGFralBBVzlpVnlMVkRaMk12VGRaZTJaMkY1Q3dqQjB0YWRxQW1zMDR6VHBWUTV4dVF6Smxja3JHVGFwNkFiSnZZTWdrLwpNTmFTbWh3MGRLUnhZekpGSVhsbnhpTzg2RlNxWmhTOWpNVDZjZXBpWlRrVitBcnF4KzR5OGs4djNvazBWWGZUMG4xZU5SNjl6UytSCm5oa0VmVkxHRSt5N212UzFtVXlaczlObTR0WFpTYks4R3I0eWI0SmUrVzJrclRmVU1mbmZTU2VkeEp3NWMxcldiOSt3Y1RZVHJJa2QKL1JHbTkrRzc2V1VOY3BBRXlTUzlzanViZHBFZmNaSDlUNnZnRFEvTnB5NC9ySzNhaGVUdW1QSy8yMERmSDZZbUh6VFNscEs3RUdGcwo2amUzTExOZXlaM1Z5S0NjaFNsVEVieEZhVWtRTlRRYnBheGNRdE5pODA3NnE3U1lJazVXM0ZjYk9sZnFJV2FQV1U0d3Y4bHZFK3liCjF0cXdIWE9tL3pNTkhHTWp5U0xVbHFEUzRadWdWNzRJZ3luM2V5TGxmdWN5d0VEc2VpMUJKdWgxT3ZxQ3VEQk5yYUFXQkZ1ZFNqVisKN2FxQ3VLVEZ2SitNQS9Td05sTUhiZ3hZV1FRanptZzFyb1U4WG5IRVRoVEYwODZvb2FraE9BMXBaSGJoRUIyaTdqSWpXSTJNTEhhYgo1QmhUSmxpa2E0ZTNzYktjZ01vWG9VZGlIQ2F0ZVhqcThTY3h0akdWZHlPL205VXMrdFRLQk1sZW9tbTEvSEZEc2crUTNoRllKMm5CClJsT08ycnRSQlJyelppN3BpaVFlUk5WRFNzT0Y5WW1KOWxFWHdab253V1haMi93c1h0a3RVcGNYVE9iVVNDTnpjMTB5cTBkZFhoWjUKM3ZoeWJIWXExZjI5NnF2SS9pdTVDNmpMRDJreTdZaHJaZkdHaDFaUmw4c3l0Rjh0MXcybXlCZWNIUHU4blMxRXlSVFlwRWpla3ZpZQpEWEtBS2ZTZTZ1alRFcUd3ekFRK2hwclMwQldXemFpS3dCL3NkNE42eEV6U1QzZm83S08zZmpoWjBCMXBkeExmUW5RODZhME5wa3ltCkowRG11ZkFhOEhqQ2ZkS0dEb2ZaaGxJTThrYUY4aVpuQ3ltcWsyL2ZzSEVtQTV4UllDQVlDYUwvWHhUQmRRSTlFbWE4QjMyaU00Z00KUlJaMnlpUmFFRVJ1cS81L0pPNUp2Yks3RU1tcWx2WVhSSERaUDdiL3AzODNGVUtkaStJR1lJNG03MmhzSzB0Tm5wT3gvZjVMMmR3MApoMlJOaHV1dmY4N05pdXFWM0FGZ3FLVS93bktGKzBwdmcyUzlVNm4yNHZjbkZnRkxTNWVwb1prbzYwcDR4SG8zY0ExVG8yN093WVljCkpoeGtPekVMRmNxYWxkMzBKaVY3VnNMK0xFa2VzcldrZC9nMjlRTXphT0FZTDZHVXRTU1lzclQweWxjcmwvd3NKNTEwVXJ1dlRxeFAKVEtqbnFDVzZnbUIwUTlRUGFxOU4xcktodUVmSkVrWGJOckhkR2EyMkxTb1p3VHZ3bGNtb3Zta25RN0N2K2hycTdBMFBMYVFtUDZUSgp0Z1A0Vm9KRFJQUjlndmFyL3g5M1JzMVlOTHpob1ZuVTVIRnR6dzJkcm45NG4vejhHZ1VuVGpvdmQ3cGYyOG1uaWpyMnRhcHptTGJUClF5RXJ5MHlnU211aHVidFIxcFdwRXYzeUNpcXZod21Gb2hPbS9CU21SS1hWR0t3RmRDL0tKS08ydEMvQ3phUXZ2QmNtYmJpMXpuakMKN2VlUjNicmprOFIvS0F0cG5jdTcvcWhGT2VIV21YaGJnUUhxbXgrS240WmRSM1pOUzJBTXIrek9SQ2tQMlpGOE0rSDJiOC9vZ0xvWApWUXFqZjlUbG5RanRONlFnUHUyTWpNVWF2VGRxRFIxdlFJb2ZHV3pQb3NqVS9lbkliMUFpT1N1ejgzSmRUaGtuWE5DVWxpNVdsbnRvClZWaStBMXpOMUZGWWVvbUpla09Rck5oZ1B3azcwc1lOblZ4SWVtdkR1Q0haNTJERy95anBhQ05yNWwyZDJGRW1HUmdnWGFSVFJ5ZkMKRGxZV0NnTURGOVFmdVNPZHdnTDduTkhxNWg3MGk4OGcrbUJJSDYwS2JWMjh0bnd2N2trYlVVUFpJbFFrNHdtY1hZM2pEUSt0cGk2SAp0RlhQVXBmeElvWVVweERNeEoyR3cwZ2VOTmFvZ2xpcDVabFJ4TC8remUzVi9ubStCN0tGeVV0Mk5ISWhUUmtpTFMwaEs4dVZxQWdoCm5WZUFqOUNidkJHVy9yS0FZRVhWeDRudmgzTUc2YWZxVEpuK0I4bWUzSzFHOHF5ODNRdnF4V00veWFlbDBwRFduK1Y1VWxqRXRtL1kKdUl3SlRzZ3dDaHp2UVo4MGtWd1JrTFZkMGJ2dVBPNk1WdU5IREVyV0JDd1VhUkQ4ckFjOTFJbFBFNXdpdnNHcEpGQ2lKS2NiQ0hYZQo3SXdhekROU2x3dGFaRW9xbzlwK2sxT3A1akx3OThydUFySmFxQVJUSW5XL1RoRTZXbGxtQVRkRnJQOEk4Uk9MVFVmZWFPZzRwcVkvCjh1UVNncU9jSkZXRzA0WTZIOEtjZFNGdDNoR2ROUDRzSnJMZ2dvckk2NFhmVTlxRWFWMTlKZmJzMlJNMVBUUllaeUk2MUxuWStQWHYKSEZyY3MzbDJiM2hvRVRYNWpsamh0a1h0elJVbHYrQ2VSQ2NYdUtuQ2ZKdHlUUFN6TXE5WGNqOUFUVFl0ZUVWeHJ6TXlOcDZ3TFdzUwpoNW1IN3lGaFBFZk5TUjN2WGYzY25lWE1MK1dGNUd5U0RCckRzaGNGMUdVMU4vbFMwczFCOGxKYS9UZTJBQS8wVy9CcHdyLzJXNEF1CkZBbFdWTjFIQXRNMjZVT2RYOEZjK0x5SkpJQnBmdlRmWUVqK1hrMGhwcFczclVYTW54cGF0aXpTQlN6b1oxUU1EVlBEcHZmd05yMk0KSEtyTDY3WHpCdVVSRVo5cjBpOHhFR1o3NGlrS3FVMnZGaU9HOHUyc1A3NE1zTXVwVkpPVTJ6Q0dWM2JuQWFQYXFyM1U1YzBKanpHYgptancyZGZ1Yis1ajF5NUNrdWY1UmN1Wm5SUlc4YWJMOXVuemh2dFFWUEYzMm1xd2hwMFJ1bndERnNKVkZteG9hQUs2TDJPZXIvUmJhCjBqUE9na1p4T01YRHhBKzlQWVAwODlEamh1U2ZoWm9QejBvL0V5djFLcm9zYlQ5RktuU2RmRm0yYjloWUJNNHBNRURkLzhHc04zNG8KL1REUndHZlozRWFOL25ZamU1SzNScVh0TDRpTEViSlZIaG95Q3FsazAyWDN2eXVpZi9jRloyUXNkcFNsVjNMblVCVExxYmUwdjNsOApYWjd3K2VxeTMwNlVYNkVvNWs3S1U1TTN4YW5rSEdJWm9wRmVJazM3MWZYWWp1azhSNkxoczViayt1di8rKzJRL0Z1Ty9UODRLWS9mCkYvcnpGbFpjd3YxV0ZNOFlxOUZra0U3SjVSYlRPaDgyd1JSSzU1c2p2K3EzQUZPRWoyaWZKeUNSYVR0TGNVSlRwdjlqeWU3QUI3MnUKSWh5a0Y1RkRKMEtxakpsUGswNnBPcmZPeEF3Mi96aG9RbGVqTzIwejdYTlJOTDZUQUU4N285VmVwVmk0a3BwVW1hQ0ZESVdMaHMzLwpFY3QrL29zaXU2akxyeVU2czJCd3NqK0M3WTl4L3NrWGRsL0NWYjJ5ZXo2U29XYWZ5VWNRTWRQMUI1dTBQRlA3MVRWNE1BZS9qUG10CjB6OGRybjlVVExFQVJENHVBbDdaWGF6NlRtcDlGOUZINGR3dCtqMHUramV0MkltQTBqSi9mdUIzYXpCaSsyMm9xc1RUbmZ5eUV4NDUKckNZWU1iYUZaQy92dEZGREV5UjNlbTJIaWFpaDlJVUFqeHdHVSs0M0hsNFJ0ckMwQ1hXK3NEQXdRTjB2a3VqL2NFWWx3UEtYZzlORgpQYkY4ZVdXM2lHeE1qN2FUSzRxb3BHWTFlWWN6V2sycTRKMGMyZjUyY2tSOTEydUhaUm9Pb0xJeHdGSHk3RVZ3ZFNxSFU4R2ZaMnEvCldqYXZ1SFZ5VjRtNi9sRnlKWTAyU2liZmlsVDNqcjdjWHd0eld5YVZscERDQWtTbUtFNlNFT2xJcHRzYzhHOE1uU2RyQWI4OHVTVzAKL09rRSt5NG52ZGY2WHBJVkplekVhd3djNDBpcXdwMld0TGwwMGo0SGcwRHJEN1lJL1UrYjVWNVp2aVFYSURTZktEMjBOVnF1b016TgpGOVp1aXVLdUZCS3NpdFVmN2Z3NkpKc1FmUm1BM1lsZ2dkYitrUlRUUW40YmpzM1FmaERVeU90K2lYdjkyMjNiaUI3S1JiYWlXQjdwClY5UHVIbTR0UFhDQW9oalBSYmFzVFlOSWhRV0N2Z3crdit1M3dEM2dKYnBiV2t5WnBsL1g3OGEyWVRWd3RyYThoMlRUZ3VlVFBndXUKeVIrWUJRYU9rWFo2eHBTRFhkNitHek5JSDU3ZHNSNUpWTlRROWcwYlQ0V0paZlZuRy9rSk8xbjdkWnFqd3QySS9QMVpHbGFXNFk1cAoydU9nWGdhZmRrYkdraytqU1UzeDcyVFphWWRnWFY3aHRPM3dob2N1b2lZdjFsWTlqZUNMR1E2NUlOSmFFUmZKUm1lMG1zY1V6QlprCmpGeE0zV1NXT1pWeHFjbFhUNTYvVS9yKzhISnoyeTFKL0s5TTQ1WGRlVWoyT2FPdDkrOUFHNFdsSFZOOWFtZzIyVU5OTnh2YTVram0KWm9KS3g1Mm9mQ0Z4ZVh1R2M1czBTWnFZSGhwUHVaOHBCWCtmb2VPMFl4SHBNa2h2UlVWNXRhVk4xSkNxTmZRZjJ0UlFuRDhtLzM4NgpVWTZQOUp5UFlHVnMrZHI5RmNYendPZFRTU0NZMjlMK0pIODlOdTk3WlhjSmRmbHRCQU1OR1E0RDF6bVZkUDVIWHRrZFFMQTZkZnZWCjN4TzVORmF3TC9POWtTZWlNVDJVdE8rYTI0N25MR0ZidkxKN0hQQXZDS3JlOEZCTHlIYW4wYkNKVU5GZXM1RHNoUXgvR21PYnZaaDUKbWVSZGJpQU5hNEZ6dE9VOWtHaWtOSWRvSzExY2VsVm5KdzVKQ2tPRzZVVVdXeE1NcHR3dnJVVk01ZTd4aTdIcGhSTDl6M3FodWZBMgpQWEFzOVVydUxBcmkxb0FjK3FnMExGLzRjN010RTlUazlXbGUybDdaUFJhWUU3dVBXamxBRDZmenZaSTdzK0hITWxzcnRQZEZwMUxOCjloeWtiNysvUHAvblVEYjgzRHBmLzZDZmlIN1ArNS96VWw0S1luYWc3L1RQdXF5K0xLM2I5R1ZXeFJzZU9wYUNlQUkxbUZwTFhaNGQKM3FhVDBtSXFPVll2eVpwZXZ3YXNqN0hkQWJyN3ZjUmhlZTQ5a293aXlwZEZ2eTl1SlptVjVRSkluY0h6QU9hVWxrV29DTGdzYkNSOQoxdWRuU05adjdjaVdEYlU3YVpQdnhSckYzMzMzM2R4OXR3b2EyYjVoNDN4VXhlMW1HR1pkY3hMVVEzdDl3dHYwd3JHMEtLNmtMazhNCnlLRy9YTUx5aFQ4MzIvSkRaN1FhNS9la0Zja01ZQ0IySDdXeXhhbmtNaTBTaldBWTBVaFFxT1RjQ1l4a09tWkJMTTdRZm45OXh5bk0KRE8zOVhWczVST2l6YnNIdzJ5Tm9MN2NKL1BQby9SVWxxeTlMZUp1QzZQbmcwU3U3eDFLWEc2aEwvejErZzFPcHRwU002YVMwVEtuVQp2VEZabW5IL3pjU2ZBak5SNm4wSjJTMURKdmtvUVN2SlZpQlptQ2E4T2NQNXR4Sy9SRUEzQmtqdlYrT1RwZnBxRFRNdjJCTU05VWNVCkE2U0w4cG9nM1JUcE8rclAvV1JXZmQxbmc2Tk4vUzg4R2dWOTNWNm5VczMxeDlRcnUzT0JHeWRIeUdINW9tUU5qMVI5M3h2SlZabUUKaVJxaGg4L2JydTk2R0RYa0RRKzlBL2diVFk0SkpGY1o4Q1Zaa3FIOVVCRFBPNVhxdnB5YXZiSGo5US9MRlhVL3FmMktxYzRlaDNBLwpSZlZsV0ViL2MxMXV5VTJ1Q0x5U2V4eXdBY21paGd4LzcxU3EveEMxYmFjT2U0YjBZYXY5NHVTTSszODl3YlltSEVabm9pd0MrL0xxCmtBUXNSVmxWZkNhQUcwam1kRndrT0xXVWxLazJwVEtlY2YrSFNKOFZ1QmNzSVYzRjhsMjBzVFErOTl4ems1OWZlT0dGOE5lbnMvdUYKcHNOZjFHaFRoUWMzUDZOdEozc1FOVlFRdDFDWGl3T2p6ekI2NUVVdE5GSnRjcFV6V3MxaWFWdlowbjZkcU5GNmNMa24rVm04c25zYwpkWGxmcVAzZmNrYXJqMlkrZUpUbEluNzdvUzd6VTNBTFlnZEM3cUVtNTBkZWYvMiswQ04wNmpKNC95c24rQWR6a0srWjlDNXMrV2xYCjZOR1hyeWhlcGlaNzVzRHRsZHpqR3I1SGl4cnkvU053Vzd2dGs0NUVUVlUzem9zc2ZqajdnUjhtMlA1cHpEamtUaFhmb1hzSUptSjcKR0VqNnc3T2FiQkU3LzlUdlR0QXdNVlgxSVBFekNQZURYQ3R3ditZMXpZano3UnMyenNDUFNBdUhYUkphOW4vUXc5K0xmQjFMdmVHaApFNmpMYTF2azZTU2ZpUHorTHVKWFFvK21LR1oyUEg4bitSUzU1eGJ5aG9kbUF6L0hkeVZRNTkrS0d1eVlKMW43b1NDeVdFbzcwb2lzCmViek45ZStleDRjTzM1dkFWNDZpK2ljc1g5aXZwaVozUjBYdDVJRTNQSFFCS25YQ29vYTFad3pCWloyU1IzWlNXcUpxRG1TMVpPVEoKTElnUmd0YWVMNUtzZ0dFTitLWUJ1YWRDbjE2TFNydnZzeGU0SXNWeHNrUU5RUjhTWVhYZ2ViSlBrZTRsdTBYT1ZISE9LTkxlZXkwdgpnMDVwK3h1Y1VXZGlia1FDcStoRVc5RWhtcmxaV3J5eVc2UXV2NDV2Zlk1S0lDcmFMQWVkTFYraUlHN0lIR3BjYnpQU2pkTi9CWEhRCnFWUTM1OVZYQU43dzBCenE4cWRJRm1zeTFZRDNPYU81VGNuRWE3Ky9yaTd6SzBhb3psRnR1ZjdKNVYrU3M0eE45UHUxZWY3Vy9oUDAKWkdySUs3bHJxY3Y3OFoyM0JjOVRGSmQxeTE3Y1NXbUowbEpYazZScVpHODVublNweUVGTno5eVpZcis3eVY0YnB0OVRjQ3VCTzdUbApHdkF1MGxXZ3pqSVZZckpJb2duR0RSM25CeG4zejlNaGZqRGxmckdWaDllODVqVzg1ald2NFEwLy82ZDNGLzVMUzM4VTlXUGZlZDNoClhIOU1DK0t2a2F5ZVBKOWVsMFdmOHk4SzJyNm9pdUlnOEJablpDeTdkVTAySEVqYm5hdFRYOVh6TmUxN0pYZUFtcnd6VU14UnRmL3EKek5GQ1FUYW5hbjl6WGI3NWZBVHJDUTlzV3BYWWJ2Sy9LaGZaOVB3dlNaODFNd0VFSGZGSzdsb0VQMmc0bkt2VUFBWHg1amk1WVRvcApMZXRwZFlwY3pOU0xlUEVaekxEdmwxR2h2VWs1U0hKSDFUQXJ5Ujdsa3BhNXFKZXFyb2grRVZpWDRsaEx5T1lJYmNLeW9iT0xiQW5lClRQa0UvSVJzVTBTcmpQVklrQVdreTFxY0pwVDI3SW4vUG5oUmZlc1RXZkphUEpWRC9SaWdNYWRlbHpjSHp1ZjdBblQ2SFA2cnkzYzYKbzFWVDJaeXo1UC9JdDZxejRITUkzaDg2NzVlcHkyOFlQVTlCSE14d3Z4d2c3MktqQlhFOWdtTEdmQzFaWmdmYUk5aVU0ZjdKczRpagptaElTamZlT091ZnoxT1diblpHeFdObWJPeWt0ZTRrTy83MHN6d1psSUsxY0x3TzNaemp2S05rdEJQMXcxaHhBS1N5NkVycWU5UFBSCmw1RE5FMzZ6NGZiVnlLWUVtWExpMjBPMkVkOGM4bEZxVHlYZDlVcmFMMmNEUC9xZDlHYnhuN3VDSTd3a2Z6azVsbnBsZHlaUVJUWk0KMU9uL2JuSXExVWVNQ1JhZWVrcjJsMllBRnErL1N1NkhrRndidWpicktJZ2JUV2ZmZFViR0pwQThrN0lQOXVVVjh1MlYzQmxleVIyaApKdjgyNHowREJaSEdFVDRPL3pwRjc1OHlOWGsva2htTjltOEJ6blFxMWRqbEpybzU0a2I1Ykx5SHFUZEZ0QXhWcVRZTk41Sk5JOThOCjNKUlIvdmZtMFNrZEtBSmZKWmlxZnlkd0llbnI3S1N0WCtPVGg5UGN4cFQ3YlNHZDVTMktoYVN2d3dUcVdjc2o3RG50OVVyaVYzSU8KOEZDOU1ERHJQMmZ1aVp0Qk5ubzVMMytuZ3ZndWd1TUQ1K3IyZjZ1cy8raU1WajlwV0s1VEk4K3BuMXVYSzd5Y0ExN1p2UlRCRjBMdApYNGZrUWlOVFlsRUluazNWZm1HczFFcXdEMHJ1REFSVkJHWHRmSWZiM3IvZDF0Zmw4VjdKTlZGdUpNeXpIZTdYYnM5YUxrcUxWM1pICkVJd2dKaTBzbTZuTE01MUtOZEg1dWlrdEQ5STZBbDRFWEpsSG96S1FOaC9DRjRFSERKei9PeVNQdE5GWlJlOThXd2FBTHhHOGhqdUIKTTBtdnZNMERUc3NnVTlxOEg5MUlxd2laZE9DN2tXQlVWaHF5S29SUnBMM2ZJaU40OUZEbkJ1OEJmZ1RNL1BWLy9WZjdGMmw0cmo4cQp0RlhOc1c4MjNRRmV5UjJoTGk5cU9YZTMvNFBiUDREQlFZZFhjZ2U4c3ZzeDZ2SkxrZWVNNnFkd0lyR2F4RFRlOE5DbFNMNkpicDJyCnkzWEFoYzVvTmM4SXVlaUlzVTd0Vi84YlQ1L2dsZDFGUUJWVlc4MC96MWJVODdrMUlGZTMrOXBIclI3TW9kKzJVSmQ3QXJMVUl1L2YKMW1WaGRuclJLN3N6dmJMN0phQ3N0ZnQ1NEMxSkxDdyszWlNXR3RGWkRXOGl2ZE9yYVdZQkgwaXgzN09ZQzgycm9SU250QnJxQUtyZQpUeS80S3NIK2VnV2xzR1M1VVU4aDI0dDVQMllWQlo5SFNEZEZaTW92NFRqUzNadGhoakJyM1p4THV2d3MwSDE2YUFZcXg4STNhVGdSCi8vTHd3ZllKMm9xaS9YZk52MmVkU3FhY0p5MTR3ME8zVVJUbEdPZHVUWVhlVE1qMUlQQ1hhV3ZydE1oVWRzK2dLRFpRRUorbUlJcGQKengrMXp1OVRrMzFWY2k4QnZrbFJrMG15am9LNDBLbmtxckNBbW5vNm1LajlCYlB0Qi9ESzdpa1V4Qk1VeGZuYU9SNEVYdStNakcxRQpjaFVGVVV0NFgvc1dvbmVibHRlcFZBOVNFSnNDc3NTVnlXeS9MYUFnZmtSQmZGZzcvaFpFc2lraG5UaHoyajlFNWV6US9TNFdBMThBCjNrMzY2UVJUWElrYTZTZGhONm9HaWtrVDRrNVV5TzhHMHZrS25BVmNEbnpMZUE4cFpxS3VXZGpDY2pyWkZZYXNJODIwMHpqZDJOYjQKU3pxOWt2UitpbUlCYWxRMlcxdDNGOHIzSjJscS9xVW9hNXlwZmxxWlFnWlF6dEw3T255L0NMaVBZUGc4Znpqd2N0YVU1Y2J5czNnbApkd0M0amJvc0o5NDUySVlIRU5rVkZxL3NGaW1JODZuTFc0QVZIZnNwejdUdjBiTE5RRVVXWGhzNGQwRThndUNkdVUwSmFUaVY2bDZ2CjVENkk0SktFN1RmeERQdlZ2aThHdmtKZCtzL3lZZUFXcDlLY0VuUkdxeHU5c25zMXlSS1UrcHpqbGR6RnptalZWR1Y0UlYxK20yekoKUGpQaGxkMlZRSlc2WERxNXNpRFdJM21YTTVwc1NrZ25ibks1YTJpTnhMaTQ4ZGRQRnRJaGMxNGI5Z011WFNyVXB1UXBsRU53MmgreQpUNU5QZE5ZaTFBOS8xSlJRVm9XbFNQWnF5bm1tWmsvekk3SWk0emtYQWs4UTlHWFpCbHdQbkVlNmtNSmJEUFpKMm5wRG5lcTRYSVNhCmpnc29MRHQzN3VRUHUvK2YxbFRtVVdHaFVTblAxZWR4RTQxdU9OMStEaWhyRm9QV2RQeitjamhsZkZQbUI4aG9ZZkZLN2pLdjVINmMKZ3ZnM2F2SkhTRmFFenJNZnlUVklQdGtpUTFUL0JmZk43Q1BobGQwVlNINk41RnJ0MkllQlR6b2pZK2Yxd01LaTh6a0tvcGFnL1ZBUQpxeHJKNzlMM1FjbGRqT1RIRk1WOW1xUDJYaVRuNlFxTGoxT3AzZzE4dHVWK2FuOWYrL0xQb0NpeUJJTkVJOWsvMlcrZDd1L1c3ek85Cmc3eXlPOE1ydXlNVXhDK0JwVnBwaDI4QWI4bWlzRUI4cFdVbjhGWmFRNkQ3cWNrTkFGOGgyWWp4UUtNZFQrVW8xeitpTEE5cHBpWG0KbzVRTGs0ckxXY0J2VVRsMmZKNEVUc0pNYU9RS3NpZEl5ck9pNk5kSUh0MjFnbUIvSldFTktrdW9idDA1Z0VyV2R3aDE3NTFIY3YraApzNEgzRytpUG1TaUxYaHFpTWhiUFEwV2gzVTlFMWZMcStwL3pxMWYrRUhUNGkvSzVVRTZKd1FKenRZWS9pOGl1MUhvbGR3bVNIeU80CmR2TFkrdm5DTXRWa014VjdzR0RqZzZSVVdMeVNPODhydVpkNlpmY3hCQzhBbzlUbDhsRDd0MUlVVnlGNGxUTmEvVEtDcnlNNE5DbUwKM2s4NlFSbFA4TXJ1MGxUOXBQd1B5cWhydlZKci95NEVybE9wWmcwNlNJd3pXbjJHdW53MFFmdWhMdWRSbDZuZVRWN1puZTJWM1k4aAorQzJDYzdSamIwSHdlbWUwMmo0bGhPUUdCSjhOeUtoZnUzYjNmMTFlNHBWZEkxR2tYc2xkN1pYZG53RS9waTZMay8yajkxbW4rMTgwCktyR25PL2Rad0hOQW1icWMxVGozQVFUWE9hUFZLNXlSc2N4cEN3cno1d2RkVXlJYzZuVE9SWm04OVlSWHU0SDNvZndIZXNrSFVQNFoKY2RtT21zN0theW9pekJEd1hkSk5GZmxXa0N4S3hXS1VQOUtsTkpYVEdpb256ZldZbTlZYlFYZXdTc2RKcUttSHZGaUx1bStUbEsxNApIS1hneHVtblpTam52R3VBWTBQZlRhRDYrL09oOWFjQlB5V1owbDFEV1VuUzNzTXpVQU9OdEJiU1A2VnBtU3VpbnNIYjZHQ0svOFJECjM5djluZi94ZnhaUWsycE9YYSs5MHNuYTczOWZGT1BPeUZocVIyUnZlS2hJVGI2SG92Z2NOZGs2OG83eS80aDZxUlJGalpxc0lCaUoKcTdCNEpYY21ndU9RWEVCUlhJaWEvaG1JYUwrcUxpKzRFM2c4SERyc2xkMmZJam0zNndtRGJSbWpKdjh5YmpwMnIrek9BcTVFVWlKYwpya1h3S0hDVlV6RThmWkdBaGsvSnI2ako5citucmRkeU0zWDVodGpYcSt6T0JpNm5JSzZoSnNQNVUrNUdjRjFjQzVOWGN1K2tLRDQ2CmVkL0h1ZitMWWo5MStWYW5VazMxZkh0bGR4bFFvaUN1QkFaaU9XUkgrei90cHlaUGRrYXJzYXp3aldmc1ZJcmlGdUNNa0FLMEE4bGwKem1qVldEYnJwRW9McU5EaW54TE1IWEVZTlpMOEhyM3hjZmtBeXNvUzl5VzBHVFc2eldOS3FCTm5vK2I0MDVocjk2SWNoYitWY0w4NQpxTFQ4MXhOMGx0Nk5zZ0JsTDJRVzVGL0lIcElyeVArKytUckpvOTd1QnE2ak5UbmNBRW81T1IvbHg5UnVldXdneW1uOTgyMitYNFc2ClA1SWttRHFNdXJaM0plaXpRVlNXNDdWRVdFTmlzZ2M0cG5IKzl3RER0Q3BvUGpWVTlNYXRhNS80aDdkdk9qendvVUNhY0I5OW5mODcKSjFxKyt6dW5VazA4TmVhVjNTSndQcEtiRWFINlh2SE9xN01EdU1LcFZEc21YZlJLN2dJRXh5TTVIZDlhSnhyUGZ2Unhkd0xmUS9MVgpUa25wSnFkcVlHYWtuTzNiOERVa3crM004WTJLMWl1US9DV0NpNEU1b2VQdVJWQUN2bUU2QjBzYXZMSjdLL0MzQ2RvUGtwODBsSTJYCjJ4eHpGcEpURVZ6V1VBem5oNjdUZnVBYXAxTDlUZ3A1UDRwa0ZOSElTUkxuL2xmbmU2OHpXbjB3OW5tR2g1WlRreVVFbHdJelE4ZDkKRWNIWFVibkltaVVxdXZmZE5ncmlnODdJV0tTeTBYaStqa055UG9MM05qNEhqd1hmQUc0MG5TOG5qZElDNm1YNGJXalIvc2VBajZCZQprSG54QVZUSWJsd0x4bDJvRjA4dWNmc3hXQWg4bi9SaGJVK2hYcmdQMDlrSjhnelVpMmtJRlIyaU00WjYwWmxXMnBZREw1Qzg4S2JPCnMvU20vbElSK0JVcTBpa0pPMUQ5OTc5UkVWSW5vNndrM1lxSHZvUlM1THVOTUJhaEZQQ2twdUdOS01mcXgya3R1VEFITmIzMXBzWngKVGVSNWVSUTFEWFE5N1hNaVRhQitxTDRBUFAvb29nVXpQMy9meDczbkR4Y1hUa1lsZEhLbUxJaW1LYjI1L2VsT3BUb09EU2Rhd1ZlQQpOVWdlUnZBVnAxTGRyaCtpb1RpY2kvb2RXdGx5ZkYrR2JzcEtRZml5UGtoQlhPZU1qTzJZUEVmWlhZUmtBWUpUVU5hbjVTZ0ZkRDYrCkZWcHZpMzd1bXR5RDRGRUs0dHZVNU1hNDRjSmV5YjBUK0doYmVaVlZxclYvSmZzUlBFeHdhdTkxRGIrRkZZaUdwYSsxL1k5VGsxY1kKZHc3TlFNTnArVEhxOG96WTdWY2NRazNyL1VwYjk3K1FMR3RjdzNsdHJ2ODY0R3FuRXMvaTBFYm1NNEN2VHlhUmkzZi9UNkJtTG01cgpWeGFoWVJVNkc3Z0t5U0F3TTlCKzVYLzBaUVREVHFWNjBDdTdkMUlRSDUyVUlkNzlYMFA5Zm0yZytlNlpBNXhNUVp4S1hRWUhRTTFuClppZVNhNXpSNnNOcCs2MFRhWlVXVUMrcU80Q1BodGJ2UW1sMVg2UFZCeVlMODFBdjc3WEVlMG51UWlrclkyYTdMQlVES0grRVQ5T3EKVU1UbE1Pb0dlZ240UTJQZC8wU05kbGNUUGMzd05NcUI4L0djMnZWK1ZIWG9MSXlobEsxZU1BOFZpcHRuQnVLREtFWDVadUtuN3g5QQpXWUh1SkhubytHSFUxT2YyeHZKeEtNdWU2WnBGRTdSLzdtcW9sOEt0MEt3UDlPaWlCUmRmK2JYeTl4T2ZxZm1pcjFHWC84TWY1WHNsCjl6amdYd2xPZCs2Z09XVzFITUhpeVhvbTNZN2YzWHErRS9XYjgyZW81L2JZUnQvT1FGQnN1My93K0JPb2EvTWtjRDlGc1M1T2ZaVXcKWHRrZEFINkRORkFWdm5QN2R5QzREc25EdmFyMG03QWZabEVRRDFHVForWFVmb0M5Q0c0QnZtekN3dVFORDgybExtOUQ4aUhpRExhYgo4azJnQnByUDR1ZWNFcnk2b1hDdUpQb1puNkFvMWxPVE56aWoxY2twZDI5NGFJQzYvQnlTYXhQYy8wbjc3ekNDVzVGODBSazFtNkpBCko0dlM0dlBYcUZUMjRZdXhDeldDdkpmbUQyb2FGcUo4QmE0bDNndi9NR3BLNVdieXRmaWtZUjVLa2Zxcm1HMUp5MGJVQ3lRdlpjWG4KRjJSUGlsY0NQcFd6bkRwRmxDTDNNY3krMkhlaUZMQlIwdDkzQzFBK1FubGxuVDVzK0xndm9TSnA3b2hxODZPTEZ2emd5bnZLUXhtTwp2OTZwVk0vVVYzaGw5MnlVcFhYcTFFQXJCRWI0aDFBdm1uRmdBNUtubk5HZ05TZ3RYdG1kQnp4R1B2V290Z09mcGlDKzRZeU1tUnhzCkdzY2JIcHBGWGQ2RCtlalZ2Y0NkalpmdVB1TnlsOXlWQ0VaUlZ2RXMxdWtvSmxBMTQyNXpLdFcyZ1NaZTJiMk5ndmpFcElPdUNRcmkKRUhWNUw1SVJaN1M2SS9zQnU1ek9nTklDeXVUK2RhTE54alZVdHNDZm9MVEZGeHZMN1RUWUJTaC9tVFdvdFBLcmlmZHltVURsbEJraApYNmRPRTh4RmhZaStqMnlaWkhWMm9mcjQrMFRYakRMTkhPRGZTWmZ2UStmUDZSeEtteGNyVUJiQnJORnZHMUgzL2c4eFY2QnRLV3A2CjQxTFMrVVBwSEVUZER6OUFLUzFacTA3dlFMMlF2OXM0Ym1RMHdLT0xGaXdFdkN2dkthZFhETlcwVElzL2tEYzhOSWVhL0RCd0k4Sk0KUG80TWZiRVB5ZE9OYUtCbmtXeDFSdE1sellxRE56dzBtNXE4R2Znd2drd2h2VWdPSUJoSDhsVmdmYzZaYmMzM1Jja2RRbkE3NlJNbAorbXdHdm9uazNqeVVsUWk1VDBOd0JXcldZRzZtZzBuMkF2Y2l1RCt1QTY5WGRzOUc4blZFeHFoUHlTWUU5eVA1VnA3M2ZCaFRTZ3VvCkVkek5LQ3RDdHhmWlB1M3pNeWlGd3c4eG5VbXlFZkJCbEwvSGJlUmRpdHc4QXloei9pREsvMkFRTlM4ZVJ3dXZvVjcybTRBZm8xNmUKdlJ3aHpjSk0rdWwxOU0vZkNOU0kvWHlVZ3J5R3puMC9nYktvK1BPODQ1akxuaHZGVEpTVDc3dFJmYjJVN3ZmR0JPcGUyTnlRY1IzTgp2REMzQVgrVFFvNEpsT1h1a2NaeHU0WXRQcnBvd1R4ZzlaWDNaQW9zMjlRcGE2WlhkdWNnZVFkd0lVV3hocHFjZzJCZzByOEJtbjRsCi9weTk3bXNTWEJjY1JBbTJhUDIyQmNrK2l1SVAxT1ZMcUJINU5pUUhuVkV6MlhDVDRnMFBMYUl1UDBoQm5FdE5ycVFvQmdMdGltcS8KbWpyWVFsMCtpN28zSGpTZGFiam4vYUJxQVYwQXVBMm4wTmtkcjc5a0FzRkxTRFpURkJ1b3l5ZUJiZjF3TlBaSzdpd0U1eUo1TTdBRwp3YkZJQnRwZVEvOCtMWXBOMU9VbTRDSGdxVFE1Y3hxSkF5OUhUYzBQSWhtWWpITFN6OStNZHBwQWNoQjRrcUxZUUUzK2hLSjQwUmtaCjYzbS9tVlJhZk9haG9sN2VRZnZvZ3F3Y1Fpa29YMEQ5a0U2MWFhQXN6RVVsSlZ0QXF3bDhBcVdvSEdEcVc1T09WRmFnRkxJbEtJdmYKaTZqSW1jTW9CYkdmRE5CVTdsZlRWR0Iyb2tiOWgyaWZxSytJeW9lek5NVjV2NEZ5S2s3TVgvekZYL1NzYzd5eUcvWE1kRWI5SUI5MApLdFhOUFJNMG43YjdEdWF2ZzBDMHlqYmcvd1ArMjZsVS82WGZjdmFnSDQ0RjVpTlpnV0JXUTFuYmpsQkJDR25EaVhzaysyelViTVVNCi9DbEFkUjM5NTdyV3pqRTMwM21WOHJRQzllNCtUanN2d0lzVXhCN3E4bVduVWsyYTd5b1g4bEJhZEZhalJyRG5vMHg0V2VyVHZJd2EKNVQyR2N2cWJUb3FLeFpJM24wQk5oNlhoTWxSUjBNVDBVbW14V0N6VG43eVZGcDI1S04rWFphZ3d3YVpXMThwMmxEUGJ2Nk9jL1o1QgpqWGFubkRlN3hYSUVjQXFxckVCYUg0Zy9vOFBVNjZKRjNhSy9MUmFMeFF6bVBJaTdzNC84bzFrc0ZrdVFJWlNqY0ZxRlpULzUrdTFZCkxCWkxiRXlIWFZrc2xxbUJuOWZvKzJTTDhOcEtieDI4TFJhTHBTMjl0TFJZTEpiZWNEWktZY2xheUJMNjczeHNzVmdzazFoTGk4VXkKZlppTktxL3hNNElLU3haZnNGLzN1MUVXaThYaVk1VVdpMlY2Y0R5cXZzeDdhRDdYbTRGM2tzMG41ZGtNKzFvc0ZvdFJyTkppc1J6NQpYSTdLTm4xOFkzay9xbHpFNjFGNWZkS212TjlKczY2UHhXS3g5QjNyMDJLeEhMbk1RUG11WEVwekFMSU9WUjdDcjg2YnBUams4OFRJCmZtdXhXQ3k5d2xwYUxKWWprMFdvUkl2K2ROQkJsSFhselRRVkZockxhZG5jNzBaYUxCYUxqclcwV0N4SEhpdFJvY3grbVl6dHdGVW8KSzR2T0RGUWtVVm8yOUx1aEZvdkZvbU9WRm92bHlPSTA0S2MwYzY5c0I4NGsydG4yRk5LWHpqaUl5a1J0c1Znc1V3WTdQV1N4SERsYwpDL3lDcHNMeU1uQTY3YU9EM3BiaFhDL1RySEpzc1Znc1V3SnJhYkZZamd5dVJWVTE5OW1Pc3JCczc3RFBZSWJ6amZlN3dSYUx4UkxHCldsb3NscW5QKzRIUGFjdmJVUmFXN1IzMm1RZWNrT0djMXAvRllyRk1PYXpTWXJGTWJaYWlGQmIvV1QwRVhFRm5oUVhnSGFUM1o1a0EKbnV4M3d5MFdpeVdNVlZvc2xxbk5Od2xXYUw0TldCOWp2OU16blBNcFlFKy9HMjZ4V0N4aHJOSmlzVXhkTGlEb2wvSTg4SmtZKzgwawpXNmp6ai92ZGNJdkZZb25DS2kwV3k5VGwrb2psd3pIMk94ZmwwNUtXaC92ZGNJdkZZb25DS2kwV3k5VGtXRlJPRnA4ZHhJL29lWHVHCjh6NE52Tmp2eGxzc0Zrc1VWbW14V0tZbTV4Sk1TZkJEbElOc04rWURhek9jOXdmOWJyakZZckcwd3lvdEZzdlU1RTJoNVovRjNPOWMKZ282N1NkZ1AzTjN2aGxzc0ZrczdyTkppc1V3OVpnS3J0ZVVKNGhVdkhBQStrdUc4ZHdNSCt0MTRpOFZpYVlkVldpeVdxY2M4WUtHMgovREx4UXBEUEFsYWxQT2RCWUxUZkRiZFlMSlpPV0tYRllwaytmREREdmpjRHUvdmRBSXZGWXVtRVZWb3NscW5QamhqYnJDRzlBKzZ6CndCZjczVWlMeFdMcGhsVmFMSmFwejhFWTI5eEp1dWQ1SC9BKzR1Vi9zVmdzbHI1aWxSYUxaZXB4RUJYSjQzTUtuZXNJWFFtc1RIR2UKQ2VBcVZLWmRpOFZpbWZKWXBjVmltWHJzSXhndHRBRDRhSnR0bHdPM3BqelBOYWo4THhhTHhYSkVZSlVXaTJWcThzM1E4Z2h3TFNyaAozQ3pnREZTTm9OOEJpeEllZXdLNEdyaXIzNDIwV0N5V0pCVG16NThmV1BIY2M4LzFXeWFMeFFJemdIOUZXVkowZHFEeXVDeEllZHg5CktCK1dCMDBKdW1oUlVwM0pZckZZMG1FdExSYkwxT1F3YXZvbXpCTFNLeXpyZ2RkaVVHR3hXQ3lXWG1LVkZvdGw2dkk0S3ZkS25KcEQKblhnR09BODRFOWhwVXNDVFRqcXBQejFqc1ZpT1NvcmhGVmwvaE96MGtzVmlsSytoc3VIZWpxcjhISmNEd0ZQQWw0Q2Y5THNSRm92RgpZb0lXbjVhcGdsVitMSllBczFIRkVDOUVLUytMQ0RyZ2JnSU9vUkxGL1JKWWgvSmZ5UTEvZ1BNZi8vRWYvZTRiaThWeWxEQmxsUmFUCldBWElNZzBwRXJTVUh1cmx5WFdMckZWYUxCWkxyeWhtUDhUVXgrUzh1MVdBTEZPRVd1UFBZckZZamhyK2Yvd3VLK3d6Z2t0OUFBQUEKSlhSRldIUmtZWFJsT21OeVpXRjBaUUF5TURJd0xUQXhMVEUyVkRJek9qQTFPalV6S3pBek9qQXczbm1jUFFBQUFDVjBSVmgwWkdGMApaVHB0YjJScFpua0FNakF5TUMwd01TMHhObFF5TXpvd05UbzFNeXN3TXpvd01LOGtKSUVBQUFBWWRFVllkRk52Wm5SM1lYSmxBSEJoCmFXNTBMbTVsZENBMExqQXVPV3d6Zms0QUFBQUFTVVZPUks1Q1lJST0iIC8+Cjwvc3ZnPgo=";

/***/ }),

/***/ "./src/Assets/svg/pause_blue_button_icon_227842.svg":
/*!**********************************************************!*\
  !*** ./src/Assets/svg/pause_blue_button_icon_227842.svg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzI1MCkiPgo8Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0MCIgc3Ryb2tlPSIjMEQ2RUZEIiBzdHJva2Utd2lkdGg9IjMyIi8+CjxyZWN0IHg9IjI5NyIgeT0iMzU5LjgiIHdpZHRoPSIyMDQuOCIgaGVpZ2h0PSI0OCIgcng9IjIwIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMjk3IDM1OS44KSIgZmlsbD0iIzBENkVGRCIvPgo8cmVjdCB4PSIxNjciIHk9IjM1Ni44IiB3aWR0aD0iMjA0LjgiIGhlaWdodD0iNDgiIHJ4PSIyMCIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDE2NyAzNTYuOCkiIGZpbGw9IiMwRDZFRkQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xXzI1MCI+CjxyZWN0IHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=";

/***/ }),

/***/ "./src/Assets/svg/play_blue_button_icon_227848.svg":
/*!*********************************************************!*\
  !*** ./src/Assets/svg/play_blue_button_icon_227848.svg ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzI0NykiPgo8Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI0MCIgc3Ryb2tlPSIjMEQ2RUZEIiBzdHJva2Utd2lkdGg9IjMyIi8+CjxwYXRoIGQ9Ik0zOTYuMzMzIDIzOC4zNDZDNDA5LjY2NyAyNDYuMDQ0IDQwOS42NjcgMjY1LjI4OSAzOTYuMzMzIDI3Mi45ODdMMjAwLjMzMyAzODYuMTQ4QzE4NyAzOTMuODQ2IDE3MC4zMzMgMzg0LjIyMyAxNzAuMzMzIDM2OC44MjdMMTcwLjMzMyAxNDIuNTA2QzE3MC4zMzMgMTI3LjExIDE4NyAxMTcuNDg4IDIwMC4zMzMgMTI1LjE4NkwzOTYuMzMzIDIzOC4zNDZaIiBmaWxsPSIjMEQ2RUZEIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8yNDciPgo8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/Assets/svg/rs_school_js.svg":
/*!*****************************************!*\
  !*** ./src/Assets/svg/rs_school_js.svg ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmlld0JveD0iMCAwIDU1Mi44IDIwNS4zIj48c3R5bGU+LnN0MHtmaWxsOiNmZmZ9LnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyl9LnN0MntjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyl9LnN0M3tjbGlwLXBhdGg6dXJsKCNTVkdJRF82Xyl9LnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0NXtmaWxsOiNmZmY7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0NntjbGlwLXBhdGg6dXJsKCNTVkdJRF84Xyl9LnN0Niwuc3Q3e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q4LC5zdDl7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTBfKX0uc3Q5e2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMH08L3N0eWxlPjx0aXRsZT5yc19zY2hvb2xfanM8L3RpdGxlPjxwYXRoIGQ9Ik0yODUuNCA2OGwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOSAzLjYgNi45IDUuNCAxMi4yIDUuNCAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjUgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4xLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNCA2IDQuMiA5LjYgMTEgMTAuNyAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44cy01LjMtMi44LTkuMi0yLjhjLTMuMiAwLTUuNi43LTcuMiAyLTEuNSAxLjItMi41IDMtMi40IDUgMCAxLjUuOCAyLjkgMiAzLjggMS4zIDEuMiA0LjQgMi4zIDkuMyAzLjMgMTIuMSAyLjYgMjAuNyA1LjIgMjYgNy45IDUuMyAyLjcgOS4xIDYgMTEuNCA5LjkgMi40IDQgMy42IDguNiAzLjUgMTMuMyAwIDUuNi0xLjYgMTEuMi00LjggMTUuOS0zLjMgNC45LTcuOSA4LjctMTMuMyAxMS01LjcgMi41LTEyLjkgMy44LTIxLjUgMy44LTE1LjIgMC0yNS43LTIuOS0zMS42LTguOFMyODYuMSA3NyAyODUuNCA2OHpNNi4zIDk3LjZWOC4yaDQ2LjFjOC41IDAgMTUuMS43IDE5LjYgMi4yIDQuNCAxLjQgOC4zIDQuMyAxMC45IDguMiAyLjkgNC4zIDQuMyA5LjMgNC4yIDE0LjUuMyA4LjgtNC4yIDE3LjItMTEuOSAyMS42LTMgMS43LTYuMyAyLjktOS43IDMuNSAyLjUuNyA1IDEuOSA3LjIgMy4zIDEuNyAxLjQgMy4xIDMgNC40IDQuNyAxLjUgMS43IDIuOCAzLjYgMy45IDUuNmwxMy40IDI1LjlINjNMNDguMiA3MC4yYy0xLjktMy41LTMuNS01LjgtNS02LjktMi0xLjQtNC40LTIuMS02LjgtMi4xSDM0djM2LjNINi4zek0zNCA0NC40aDExLjdjMi41LS4yIDQuOS0uNiA3LjMtMS4yIDEuOC0uMyAzLjQtMS4zIDQuNS0yLjggMi43LTMuNiAyLjMtOC43LTEtMTEuOC0xLjgtMS41LTUuMy0yLjMtMTAuMy0yLjNIMzR2MTguMXpNMCAxNzQuMmwyNi4zLTEuN2MuNiA0LjMgMS43IDcuNSAzLjUgOS44IDIuOCAzLjYgNi45IDUuNSAxMi4yIDUuNSAzLjkgMCA3LS45IDkuMS0yLjggMi0xLjYgMy4yLTMuOSAzLjItNi40IDAtMi40LTEuMS00LjctMy02LjItMi0xLjgtNi43LTMuNi0xNC4yLTUuMi0xMi4xLTIuNy0yMC44LTYuMy0yNS45LTEwLjktNS4xLTQuMy04LTEwLjYtNy44LTE3LjMgMC00LjYgMS40LTkuMiA0LTEzIDMtNC4zIDcuMS03LjcgMTItOS42IDUuMy0yLjMgMTIuNy0zLjUgMjItMy41IDExLjQgMCAyMC4xIDIuMSAyNi4xIDYuNHM5LjUgMTEgMTAuNiAyMC4zbC0yNiAxLjVjLS43LTQtMi4xLTYuOS00LjQtOC44LTIuMi0xLjktNS4zLTIuOC05LjItMi43LTMuMiAwLTUuNi43LTcuMiAyLjEtMS42IDEuMi0yLjUgMy0yLjQgNSAwIDEuNS44IDIuOSAyIDMuOCAxLjMgMS4yIDQuNCAyLjMgOS4zIDMuMyAxMi4xIDIuNiAyMC43IDUuMiAyNiA3LjkgNS4zIDIuNyA5LjEgNiAxMS40IDkuOSAyLjQgNCAzLjYgOC42IDMuNiAxMy4yIDAgNS42LTEuNyAxMS4xLTQuOCAxNS44LTMuMyA0LjktNy45IDguNy0xMy4zIDExLTUuNyAyLjUtMTIuOSAzLjgtMjEuNSAzLjgtMTUuMiAwLTI1LjctMi45LTMxLjYtOC44LTUuOS02LTkuMi0xMy40LTEwLTIyLjR6Ii8+PHBhdGggZD0iTTEzMyAxNjcuMmwyNC4yIDcuM2MtMS4zIDYuMS00IDExLjktNy43IDE3LTMuNCA0LjUtNy45IDgtMTMgMTAuMy01LjIgMi4zLTExLjggMy41LTE5LjggMy41LTkuNyAwLTE3LjctMS40LTIzLjgtNC4yLTYuMi0yLjgtMTEuNS03LjgtMTYtMTQuOS00LjUtNy4xLTYuNy0xNi4yLTYuNy0yNy4zIDAtMTQuOCAzLjktMjYuMiAxMS44LTM0LjFzMTktMTEuOSAzMy40LTExLjljMTEuMyAwIDIwLjEgMi4zIDI2LjYgNi44IDYuNCA0LjYgMTEuMiAxMS42IDE0LjQgMjFsLTI0LjQgNS40Yy0uNi0yLjEtMS41LTQuMi0yLjctNi0xLjUtMi4xLTMuNC0zLjctNS43LTQuOS0yLjMtMS4yLTQuOS0xLjctNy41LTEuNy02LjMgMC0xMS4xIDIuNS0xNC40IDcuNi0yLjUgMy43LTMuOCA5LjYtMy44IDE3LjYgMCA5LjkgMS41IDE2LjcgNC41IDIwLjQgMyAzLjcgNy4yIDUuNSAxMi43IDUuNSA1LjMgMCA5LjMtMS41IDEyLTQuNCAyLjctMy4xIDQuNy03LjQgNS45LTEzem01Ni41LTUyLjhoMjcuNnYzMS4zaDMwLjJ2LTMxLjNoMjcuOHY4OS40aC0yNy44di0zNi4yaC0zMC4ydjM2LjJoLTI3LjZ2LTg5LjR6Ii8+PHBhdGggZD0iTTI3MS4zIDE1OS4xYzAtMTQuNiA0LjEtMjYgMTIuMi0zNC4xIDguMS04LjEgMTkuNS0xMi4yIDM0LTEyLjIgMTQuOSAwIDI2LjMgNCAzNC40IDEyUzM2NCAxNDQgMzY0IDE1OC40YzAgMTAuNS0xLjggMTktNS4zIDI1LjctMy40IDYuNi04LjcgMTItMTUuMiAxNS42LTYuNyAzLjctMTUgNS42LTI0LjkgNS42LTEwLjEgMC0xOC40LTEuNi0yNS00LjgtNi44LTMuNC0xMi40LTguNy0xNi4xLTE1LjItNC4xLTctNi4yLTE1LjctNi4yLTI2LjJ6bTI3LjYuMWMwIDkgMS43IDE1LjUgNSAxOS41IDMuMyAzLjkgNy45IDUuOSAxMy43IDUuOSA1LjkgMCAxMC41LTEuOSAxMy44LTUuOHM0LjktMTAuOCA0LjktMjAuOGMwLTguNC0xLjctMTQuNi01LjEtMTguNC0zLjQtMy45LTgtNS44LTEzLjgtNS44LTUuMS0uMi0xMCAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6bTkzLjQtLjFjMC0xNC42IDQuMS0yNiAxMi4yLTM0LjEgOC4xLTguMSAxOS41LTEyLjIgMzQtMTIuMiAxNC45IDAgMjYuNCA0IDM0LjQgMTJTNDg1IDE0NCA0ODUgMTU4LjRjMCAxMC41LTEuOCAxOS01LjMgMjUuNy0zLjQgNi42LTguNyAxMi0xNS4yIDE1LjYtNi43IDMuNy0xNSA1LjYtMjQuOSA1LjYtMTAuMSAwLTE4LjQtMS42LTI1LTQuOC02LjgtMy40LTEyLjQtOC43LTE2LjEtMTUuMi00LjEtNy02LjItMTUuNy02LjItMjYuMnptMjcuNi4xYzAgOSAxLjcgMTUuNSA1IDE5LjUgMy4zIDMuOSA3LjkgNS45IDEzLjcgNS45IDUuOSAwIDEwLjUtMS45IDEzLjgtNS44IDMuMy0zLjkgNC45LTEwLjggNC45LTIwLjggMC04LjQtMS43LTE0LjYtNS4xLTE4LjQtMy40LTMuOS04LTUuOC0xMy44LTUuOC01LjEtLjItMTAuMSAyLTEzLjQgNS45LTMuNCAzLjktNS4xIDEwLjQtNS4xIDE5LjV6Ii8+PHBhdGggZD0iTTQ4Mi4xIDExNC40aDI3LjZ2NjcuNGg0My4xdjIySDQ4MnYtODkuNHoiLz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDAiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48ZGVmcz48ZWxsaXBzZSBpZD0iU1ZHSURfMV8iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDEiPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDAiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjxnIGlkPSJMYXllcl8yXzFfIj48ZGVmcz48cGF0aCBpZD0iU1ZHSURfM18iIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGlkPSJMYXllcl8xLTIiIGNsYXNzPSJzdDIiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0MCIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjxkZWZzPjxlbGxpcHNlIGlkPSJTVkdJRF81XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PC9kZWZzPjxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPjx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzVfIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PGcgY2xhc3M9InN0MyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF83XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj48dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF83XyIgb3ZlcmZsb3c9InZpc2libGUiLz48L2NsaXBQYXRoPjxnIGNsYXNzPSJzdDQiPjxlbGxpcHNlIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjQ2IDY3Ljg4KSIgY2xhc3M9InN0NSIgY3g9IjQyMC41IiBjeT0iNjcuOSIgcng9IjYzIiByeT0iNTEuOCIvPjwvZz48cGF0aCB0cmFuc2Zvcm09InJvdGF0ZSgtMzcgNDIwLjc5OSA2OC44MDIpIiBjbGFzcz0ic3Q2IiBkPSJNMzU3LjggMTdoMTI1Ljl2MTAzLjdIMzU3Ljh6Ii8+PGVsbGlwc2UgdHJhbnNmb3JtPSJyb3RhdGUoLTM3LjAwMSA0MjAuNDYgNjcuODgpIiBjbGFzcz0ic3Q3IiBjeD0iNDIwLjUiIGN5PSI2Ny45IiByeD0iNjMiIHJ5PSI1MS44Ii8+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0MCIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxkZWZzPjxwYXRoIGlkPSJTVkdJRF85XyIgdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjwvZGVmcz48Y2xpcFBhdGggaWQ9IlNWR0lEXzEwXyI+PHVzZSB4bGluazpocmVmPSIjU1ZHSURfOV8iIG92ZXJmbG93PSJ2aXNpYmxlIi8+PC9jbGlwUGF0aD48ZyBjbGFzcz0ic3Q4Ij48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDUiIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48L2c+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoLTM3IDQyMC43OTkgNjguODAyKSIgY2xhc3M9InN0OSIgZD0iTTM1Ny44IDE3aDEyNS45djEwMy43SDM1Ny44eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKC0zNy4wMDEgNDIwLjgyIDY4LjM1MykiIGNsYXNzPSJzdDciIGQ9Ik0zMzAuOS0xNC4yaDE3OS44djE2NS4xSDMzMC45eiIvPjwvZz48ZWxsaXBzZSB0cmFuc2Zvcm09InJvdGF0ZSgtMzcuMDAxIDQyMC40NiA2Ny44OCkiIGNsYXNzPSJzdDciIGN4PSI0MjAuNSIgY3k9IjY3LjkiIHJ4PSI2MyIgcnk9IjUxLjgiLz48cGF0aCBkPSJNMzkyLjQgNjEuM2wxMC03IDEyLjMgMTcuNWMyLjEgMi44IDMuNyA1LjggNC45IDkuMS43IDIuNS41IDUuMi0uNSA3LjYtMS4zIDMtMy40IDUuNS02LjIgNy4zLTMuMyAyLjMtNi4xIDMuNi04LjUgNC0yLjMuNC00LjcgMC02LjktMS0yLjQtMS4yLTQuNS0yLjktNi4xLTUuMWw4LjYtOGMuNyAxLjEgMS42IDIuMSAyLjYgMi45LjcuNSAxLjUuOCAyLjQuOC43IDAgMS40LS4zIDEuOS0uNyAxLS42IDEuNy0xLjggMS42LTMtLjMtMS43LTEtMy40LTIuMS00LjdsLTE0LTE5Ljd6bTMwIDExLjFsOS4xLTcuMmMxIDEuMiAyLjMgMi4xIDMuNyAyLjYgMiAuNiA0LjEuMiA1LjgtMS4xIDEuMi0uOCAyLjItMS45IDIuNi0zLjMuNi0xLjgtLjQtMy44LTIuMi00LjQtLjMtLjEtLjYtLjItLjktLjItMS4yLS4xLTMuMy40LTYuNCAxLjctNS4xIDIuMS05LjEgMi45LTEyLjEgMi42LTIuOS0uMy01LjYtMS44LTcuMi00LjMtMS4yLTEuNy0xLjgtMy43LTEuOS01LjcgMC0yLjMuNi00LjYgMS45LTYuNSAxLjktMi43IDQuMi01IDctNi44IDQuMi0yLjkgNy45LTQuMyAxMS4xLTQuMyAzLjIgMCA2LjIgMS41IDkgNC42bC05IDcuMWMtMS44LTIuMy01LjItMi44LTcuNS0xbC0uMy4zYy0xIC42LTEuNyAxLjUtMi4xIDIuNi0uMy44LS4xIDEuNy40IDIuNC40LjUgMSAuOSAxLjcuOS44LjEgMi4yLS4zIDQuMi0xLjIgNS0yLjEgOC44LTMuMyAxMS40LTMuNyAyLjItLjQgNC41LS4yIDYuNi43IDEuOS44IDMuNSAyLjIgNC42IDMuOSAxLjQgMiAyLjIgNC40IDIuMyA2LjkuMSAyLjYtLjYgNS4xLTIgNy4zLTEuOCAyLjctNC4xIDUtNi44IDYuOC01LjUgMy44LTEwIDUuNC0xMy42IDQuOC0zLjktLjYtNy4xLTIuNi05LjQtNS41eiIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

/***/ }),

/***/ "./src/Assets/svg/v1.svg":
/*!*******************************!*\
  !*** ./src/Assets/svg/v1.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQ4cHgiIGhlaWdodD0iNDhweCIgdmlld0JveD0iMCAwIDI0IDI0IiBhcmlhLWxhYmVsbGVkYnk9InZvbHVtZUxvdWRJY29uVGl0bGUgdm9sdW1lTG91ZEljb25EZXNjIiBzdHJva2U9IiMyMzI5RDYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgZmlsbD0ibm9uZSIgY29sb3I9IiMyMzI5RDYiPiA8dGl0bGUgaWQ9InZvbHVtZUxvdWRJY29uVGl0bGUiPlZvbHVtZSBMb3VkPC90aXRsZT4gPGRlc2MgaWQ9InZvbHVtZUxvdWRJY29uRGVzYyI+SGlnaCBsZXZlbCB2b2x1bWU8L2Rlc2M+IDxwYXRoIGQ9Ik0xMyA1djE0bC01LTRIM1Y5aDV6Ii8+IDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEzIDE0YzEuNS0xIDEuNS0zIDAtNCIvPiA8cGF0aCBkPSJNMTYgMTZDMTguMDg1ODI1MyAxMy45MTQxNzQ3IDE4LjA4NTgyNTMgMTAuMDg1ODI1MyAxNiA4TTE4IDE5QzIxLjk4NTUyIDE1LjAxNDQ4IDIyLjAwNzY4MDMgOS4wMDc2ODAzMyAxOCA1Ii8+IDwvc3ZnPg==";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f8e5685d83cfbc63c18c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "wp:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewp"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map