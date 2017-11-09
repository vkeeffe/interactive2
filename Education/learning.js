var learning = ["visual", "aural", "verbal", "physical", "logical", "social", "solitary",];

window.addEventListener("load", function() {
		var randoms3 = window.document.getElementsByClassName("randoms3");
		for (i = 0; i < randoms3.length; i++)
				changeWord3(randoms3[i]);
}, false);

function changeWord3(a) {
		a.style.opacity = '0.1';
		a.innerHTML = learning[getRandomInt(0, learning.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord3(a);
		}, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
