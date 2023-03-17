const form = document.querySelector('.input')
const values = document.querySelectorAll('.bar_button')
const bar = document.querySelector('.bar-wrapper')
let prev = 5

form.addEventListener('input', () => {
	for (let i = 0; i < values.length; i++) {
		r = window.getComputedStyle(values[i], ':after').getPropertyValue('content').replace('$', '').replace(/"/g, '')
		//console.log(r.replace('$', ''))
		console.log(form.value)
		console.log(typeof form.value)

		if (form.value == r) {
			if (document.querySelector('.activ')) {
				document.querySelector('.activ').classList.remove('activ')
			}
			values[i].classList.add('activ')
			i += 100
		} else {
			if (document.querySelector('.activ')) {
				document.querySelector('.activ').classList.remove('activ')
			}
		}
	}
})

bar.addEventListener('click', (event) => {
	if (document.querySelector('.activ')) {
		document.querySelector('.activ').classList.remove('activ')
	}
	event.target.closest('.bar_button').classList.add('activ')
	form.value = window.getComputedStyle(event.target, ':after').getPropertyValue('content').replace('$', '').replace(/"/g, '')
})


//function limitKeypress(event, value, maxLength) {
//	if (value != undefined && value.toString().length >= maxLength) {
//		event.preventDefault();
//	}
//}

