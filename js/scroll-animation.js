//skills hidden/show

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);

		if (entry.isIntersecting) {
			entry.target.classList.add("showSkills");
			entry.target.classList.remove("hiddenSkills");
		} else {
			entry.target.classList.remove("showSkills");
			entry.target.classList.add("hiddenSkills");
		}
	});
});

const hiddenElements = document.querySelectorAll(".hiddenSkills");
hiddenElements.forEach((el) => observer.observe(el));
