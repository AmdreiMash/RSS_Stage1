const range = document.querySelector('.bar')
const slide = document.querySelector('.testimonials__comments')

let prev = 0

range.addEventListener('change', () => {
	if (document.body.scrollWidth > 1000) {
		slide.style.transform = `translateX(-${range.value * 9.14}%)`
	} else {
		slide.style.transform = `translateX(-${range.value * 10.1}%)`
	}
	console.log(document.body.scrollWidth)
})