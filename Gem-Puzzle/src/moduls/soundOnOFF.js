import { setings } from "./setings";

export function saundOnOff() {
	const soundButton = document.querySelector('.Saund');

	soundButton.addEventListener('click', (event) => {
		if (setings.sound === 'On') {
			setings.sound = 'Off'
			document.querySelector('.Saund').textContent = 'Saund Off';
		} else {
			setings.sound = 'On'
			document.querySelector('.Saund').textContent = 'Saund On';
		}
		event.target.classList.toggle('off')
	})
}