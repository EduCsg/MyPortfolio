//skills show

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("showSkills");
			entry.target.classList.remove("hiddenSkills");
		}

		// else {
		// 	entry.target.classList.remove("showSkills");
		// 	entry.target.classList.add("hiddenSkills");
		// }
	});
});

const hiddenElements = document.querySelectorAll(".hiddenSkills");
hiddenElements.forEach((el) => observer.observe(el));

//skil title show

const observerSkill = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("showSkillTitle");
			entry.target.classList.remove("hiddenSkillTitle");
		}

		// else {
		// 	entry.target.classList.remove("showSkills");
		// 	entry.target.classList.add("hiddenSkills");
		// }
	});
});

const skillTitle = document.querySelectorAll(".skills-title");
skillTitle.forEach((el) => observerSkill.observe(el));
