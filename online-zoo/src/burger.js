const comments = document.querySelectorAll('.comment')
const popUp = document.querySelector('.popUp')
const testimonialsComments = document.querySelector('.testimonials__comments')
const popCross = document.querySelector('.Cross_pop')
let el;
const bur = document.querySelector('.Burger')
const bg = document.querySelector('.black')
const nav = document.querySelector('nav')
const cr = document.querySelector('.Cross')

console.log(bur)
console.log(bg)

function toglClass(element) {
	element.classList.toggle('act')
};

function addClass(element) {
	element.classList.add('act')
};

function removeClass(element) {
	element.classList.remove('act')
};

let addPopUpTaglet = (...elements) => {
	elements.forEach(element => {
		element.addEventListener('click', () => {
			toglClass(bur)
			toglClass(bg)
			toglClass(nav);
		});
	});
};
addPopUpTaglet(bur, cr)
bg.addEventListener('click', () => {
	removeClass(nav)
	removeClass(bur)
	removeClass(bg)
	removeClass(popUp)
	setTimeout(() => {
		popUp.removeChild(el)
	}, 300);
})

//! pop up
try {

	testimonialsComments.addEventListener('click', (e) => {
		if (window.screen.width <= 980) {
			addClass(bg)
			el = e.target.closest('.comment').cloneNode(true);
			popUp.append(el)
			setTimeout(() => {
				popUp.classList.add('act')
			}, 100)
		}
	})


	popCross.addEventListener('click', () => {
		removeClass(popUp)
		removeClass(bg)
		setTimeout(() => {
			popUp.removeChild(el)
		}, 300);
	})
} catch {
	console.log('донат')
}