var system = ["linearity", "perfection", "undeviating", "robots",];

window.addEventListener("load", function() {
		var randoms4 = window.document.getElementsByClassName("randoms4");
		for (i = 0; i < randoms4.length; i++)
				changeWord4(randoms4[i]);
}, false);

function changeWord4(a) {
		a.style.opacity = '0.1';
		a.innerHTML = system[getRandomInt(0, system.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord4(a);
		}, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
