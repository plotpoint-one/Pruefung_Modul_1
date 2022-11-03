function dayComponent(day) {
	return `
		<div class="day">
			${day}
		</div>
	`
}
function monthComponent(monthName, monthShort, monthLength) {
	return `
	<section class="month ${monthShort}">
		<h2>${monthName}</h2>
		<div class="days">
			${dayComponent(monthLength)}
		</div>
	</section>
	`
}

function loadEvent() {

	console.log(months);

	const rootElement = document.getElementById("root");

	rootElement.insertAdjacentHTML("beforeend", monthComponent("January", "jan", 31));
	
}
window.addEventListener("load", loadEvent);