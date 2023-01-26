function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = [
	"Web Developer",
	"Mobile Developer",
	"React Developer",
	"Front-End Entusiast!",
];
const el = document.getElementById("typewriter");

let sleepTime = 70;

let curPhraseIndex = 0;

const writeLoop = async () => {
	while (true) {
		let curWord = phrases[curPhraseIndex];

		for (let i = 0; i < curWord.length; i++) {
			el.innerText = curWord.substring(0, i + 1);

			await sleep(sleepTime);
		}

		await sleep(sleepTime * 15);

		for (let i = curWord.length; i > 0; i--) {
			el.innerText = curWord.substring(0, i - 1);

			await sleep(sleepTime);
		}

		await sleep(sleepTime * 10);

		if (curPhraseIndex === phrases.length - 1) {
			curPhraseIndex = 0;
		} else {
			curPhraseIndex++;
		}
	}
};

setTimeout(() => {
	writeLoop();
}, 2500);
