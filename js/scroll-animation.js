//skills show

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("showSkills");
			entry.target.classList.remove("hiddenSkills");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hiddenSkills");
hiddenElements.forEach((el) => observer.observe(el));

//skill title show
//cursos title

const observerTitle = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("showTitle");
			entry.target.classList.remove("hiddenTitle");
		}
	});
});

const skillTitle = document.querySelectorAll(".skills-title");
skillTitle.forEach((el) => observerTitle.observe(el));

const cursosTitle = document.querySelectorAll(".cursos-title");
cursosTitle.forEach((el) => observerTitle.observe(el));

const projetosTitle = document.querySelectorAll(".projetos-title");
projetosTitle.forEach((el) => observerTitle.observe(el));

//cursos wrapper

const observerSlide = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		setTimeout(() => {
			if (entry.isIntersecting) {
				entry.target.classList.add("slide-show");
				entry.target.classList.remove("slide-hidden");
			}
		}, 600);
	});
});

const slideWrapper = document.querySelectorAll(".slide-wrapper");
slideWrapper.forEach((el) => observerSlide.observe(el));

//SUBTITLE

const observerSubtitle = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				entry.target.classList.add("showSubtitle");
				entry.target.classList.remove("hiddenSubtitle");
			}, 800);
		}

		// else {
		// 	entry.target.classList.remove("showSkills");
		// 	entry.target.classList.add("hiddenSkills");
		// }
	});
});

const allSubtitle = document.querySelectorAll(".hiddenSubtitle");
allSubtitle.forEach((el) => observerSubtitle.observe(el));

//navItem show

window.onload = () => {
	navItems.forEach((entry) => {
		entry.classList.add("showNavItem");
		entry.classList.remove("hiddenNavItem");
	});

	setTimeout(() => {
		headerName.classList.add("show-title");
	}, 1500);
};

const navItems = document.querySelectorAll(".menu-btn-li");
const headerName = document.getElementsByClassName("header-name")[0];
const headerTitle = document.getElementsByClassName("header-title")[0];

//projetos show

const observerProject = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		setTimeout(() => {
			if (entry.isIntersecting) {
				entry.target.classList.add("projeto-show");
				entry.target.classList.remove("projeto-hidden");
			}
		}, 600);
	});
});

const projectWrapper = document.querySelectorAll(".card");
projectWrapper.forEach((el) => observerProject.observe(el));
