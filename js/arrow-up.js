const arrow = document.getElementsByClassName("arrow-up")[0];

window.onscroll = () => {
	var st = window.pageYOffset || document.documentElement.scrollTop;

	if (st > 5) {
		arrow.classList.add("arrowShow");
	} else {
		arrow.classList.remove("arrowShow");
	}
};

arrow.addEventListener("click", () => {
	// if (arrow.classList.contains("arrowHidden")) {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	// }
});
