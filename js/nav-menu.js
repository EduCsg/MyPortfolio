var ul = document.getElementsByClassName("navbar-items")[0];
var menuBtn = document.querySelector(".menu-btn i");

function menuShow() {
	if (ul.classList.contains("open")) {
		ul.classList.remove("open");
	} else {
		ul.classList.add("open");
	}
}

const navBtns = document.querySelectorAll(".menu-btn-li");

navBtns.forEach((navBtn) => {
	navBtn.addEventListener("click", () => {
		ul.classList.remove("open");
	});
});
