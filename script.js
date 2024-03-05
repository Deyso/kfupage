const birthDate = new Date('1999-08-29T19:45') // Replace YYYY-MM-DDTHH:mm with the actual birth date and time

function updateTime() {
	const now = new Date()
	const diff = now - birthDate

	const years = Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000))
	const days = Math.floor(diff / (24 * 60 * 60 * 1000)) % 365
	const hours = Math.floor(diff / (60 * 60 * 1000)) % 24
	const minutes = Math.floor(diff / (60 * 1000)) % 60
	const seconds = Math.floor(diff / 1000) % 60

	document.getElementById(
		'timeContainer'
	).innerText = `${years} years, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`

	// Change background color
	const hue = (seconds * 6) % 360
	document.body.style.backgroundColor = `hsl(${hue}, 70%, 60%)`
}

updateTime()
setInterval(updateTime, 1000) // Update every second
