// 12. objects
const novels = [
	{
		name: "Miss Perception",
		link: "miss-perception.html"
	},
	{
		name: "Creatures of a Liminal Space",
		link: "creatures-of-a-liminal-space.html"
	},
	{
		name: "Stuck in the Rain",
		link: "stuck-in-the-rain.html"
	},
	{
		name: "Strangers on the Next Flight Over",
		link: "strangers-on-the-next-flight-over.html"
	}
];


//9. javascript functions
function setSeenClasses() {
	const seen = JSON.parse(localStorage.getItem("seen")) || [];
	for (const name of seen) {
		const seenElement = document.getElementById(name);
		seenElement.classList.add("seen");
	}
}

function updateSeen(name) {
	const seen = JSON.parse(localStorage.getItem("seen")) || [];
	// 13. array + array method
	// 15. local storage
	if (!seen.includes(name)) {// 11. conditional branching
		seen.push(name);
		localStorage.setItem("seen", JSON.stringify(seen));
	}
	setSeenClasses();
}

const novelsNav = document.getElementById("novels");


for (const {name, link} of novels) {
	// 10. dom manipulation; select, modify, event listener
	const novelElement = document.createElement("a");
	novelElement.classList.add("novel");
	novelElement.innerText = name;
	novelElement.id = name;
	// 14. template literals
	novelElement.href = `novels/${link}`;
	novelElement.addEventListener("click", () => updateSeen(name));
	novelsNav.appendChild(novelElement);
}

setSeenClasses();