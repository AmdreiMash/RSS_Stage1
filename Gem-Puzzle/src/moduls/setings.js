export let setings = {
	size: 1 + 1,
	nullPozition: [],
	count: 0,
	time: 0,
	game: false,
	sound: 'On',
	nums: [],
	areaArray: [],
	vin: [],
	result: [],
	lod: function () {
		setings.loadNums = JSON.parse(localStorage.getItem('setings')).join(',').split(',').reverse()
		this.size = localStorage.getItem('size')
		this.nullPozition = localStorage.getItem('nullPozition').split(',')
		this.time = localStorage.getItem('time')
		this.count = localStorage.getItem('count')
	},
}