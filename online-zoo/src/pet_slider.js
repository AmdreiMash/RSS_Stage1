const animals = [
	{
		name: 'Red Pandas',
		from: 'Native to Southwest China',
		food: 'banan',
		img: `url('./img/pets/Red.jpeg')`,
	},
	{
		name: 'Koalas',
		from: 'Australia',
		food: 'banan',
		img: `url('./img/pets/Co.jpeg')`,
	},
	{
		name: 'Alpacas',
		from: 'South America',
		food: 'banan',
		img: `url('./img/pets/Alpa.jpeg')`,
	},
	{
		name: 'giant Pandas',
		from: 'Native to Southwest China',
		food: 'banan',
		img: `url('./img/pets/panda.jpg')`,
	},
	{
		name: 'Eagles',
		from: 'Native to South America',
		food: 'meat',
		img: `url('./img/pets/Eagle.jpg')`,
	},
	{
		name: 'Gorillas',
		from: 'Native to Congo',
		food: 'banan',
		img: `url('./img/pets/Gorilla.jpg')`,
	},
	{
		name: 'Two-toed Sloth',
		from: 'Mesoamerica, South America',
		food: 'banan',
		img: `url('./img/pets/two.jpg')`,
	},
	{
		name: 'cheetahs',
		from: 'Native to Africa',
		food: 'meat',
		img: `url('./img/pets/cheetahs.jpg')`,
	},
	{
		name: 'Penguins',
		from: 'Native to Antarctica',
		food: 'meat',
		img: `url('./img/pets/Penguins.jpg')`,
	},
	{
		name: 'foxes',
		from: 'All over the world',
		food: 'meat',
		img: `url('./img/pets/fox.jpeg')`,
	},
	{
		name: 'brown bears',
		from: 'Europe',
		food: 'meat',
		img: `url('./img/pets/Bear.jpeg')`,
	},
	{
		name: 'Zubrs',
		from: 'Belarus',
		food: 'banan',
		img: `url('./img/pets/Zubr.jpeg')`,
	},
	{
		name: 'Aligators',
		from: 'Africa',
		food: 'meat',
		img: `url('./img/pets/Aligator.jpg')`,
	},
];

const slider = document.querySelector('.pets_slider-wrap')
const arrs = document.querySelector('.arr-wrapper')
let quantity;

if (document.body.scrollWidth > 800) {
	quantity = 6;
} else {
	quantity = 4;
}


function getSlaid() {
	const slaid = document.createElement('div');
	slaid.classList.add('pets-wrap', 'transition')
	let cards = new Set()

	while (cards.size < quantity) {
		animals.sort(() => Math.random() - 0.5)
		cards.add(animals[0])
	}
	cards.forEach(e => {
		let bth = document.createElement('div')
		bth.classList.add('pets-bnt')
		let img = document.createElement('div')
		let text = document.createElement('div')
		text.classList.add('pets__text')
		img.classList.add('pets__img')
		img.style.backgroundImage = e.img;
		let food = document.createElement('div')
		food.classList.add('pet__icon', e.food)
		let bg = document.createElement('div')
		bg.classList.add('bg')
		let name = document.createElement('p')
		name.classList.add('pet__name')
		name.innerHTML = e.name
		let from = document.createElement('p')
		from.classList.add('pet__from')
		from.innerHTML = e.from
		img.append(bg)
		img.append(name.cloneNode(true))
		img.append(from.cloneNode(true))
		text.append(name)
		text.append(from)
		text.append(food)
		bth.append(img)
		bth.append(text)
		slaid.append(bth)
	})
	return slaid
}

slider.append(getSlaid())

function runSlider(event) {
	if (event.target.classList.contains('ri')) {
		let slaid = getSlaid()
		slaid.style.transform = `translateX(-110%)`
		slider.prepend(slaid)
		slaid.classList.add('transition')
		setTimeout(() => {
			slaid.style.transform = `translateX(0%)`
		}, 0)
		slider.lastElementChild.style.transform = `translateX(110%)`
		setTimeout(() => { slider.lastElementChild.remove() }, 1000)

	} else if (event.target.classList.contains('le')) {
		let slaid = getSlaid()
		slaid.style.transform = `translateX(110%)`
		slider.prepend(slaid)
		slaid.classList.add('transition')
		setTimeout(() => {
			slaid.style.transform = `translateX(0%)`
		}, 0)
		slider.lastElementChild.style.transform = `translateX(-110%)`

		setTimeout(() => { slider.lastElementChild.remove() }, 1000)
	}
}

arrs.addEventListener('click', runSlider)
let arr = arrs.querySelectorAll('.arr')

slider.addEventListener('transitionstart', (e) => {
	if (e.target.classList.contains('pets-wrap')) {
		arrs.removeEventListener('click', runSlider)
		for (let i = 0; i < arr.length; i++) {
			arr[i].classList.add('dez')
		}
	}
})

slider.addEventListener('transitionend', (e) => {
	if (e.target.classList.contains('pets-wrap')) {
		arrs.addEventListener('click', runSlider)
		for (let i = 0; i < arr.length; i++) {
			arr[i].classList.remove('dez')
		}
	}
})
