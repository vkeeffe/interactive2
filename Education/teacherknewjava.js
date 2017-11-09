var oola = ["My father left", "There was no food last night", "I couldn't sleep", "Someone attacked my friend", "My mother left", "We got evicted", "My parents don't care", "I'm scared", "I sleep on the rug", "My parents hit me", "I live on the street", "I feel invisible",];

window.addEventListener("load", function() {
		var randoms2 = window.document.getElementsByClassName("randoms2");
		for (i = 0; i < randoms2.length; i++)
				changeWord2(randoms2[i]);
}, false);

function changeWord2(a) {
		a.style.opacity = '0.1';
		a.innerHTML = oola[getRandomInt(0, oola.length - 1)];
		setTimeout(function() {
				a.style.opacity = '1';
		}, 425);
		setTimeout(function() {
				changeWord2(a);
		}, getRandomInt(500, 800));
}


function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}
