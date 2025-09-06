const loadLesson = () => {
	fetch("https://openapi.programming-hero.com/api/levels/all")
		.then((res) => res.json())
		.then((json) => displayLesson(json.data));
};

const loadLevelWord = (id) => {
	const url = `https://openapi.programming-hero.com/api/level/${id}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) =>{
	console.log(words)
}


const displayLesson = (lessons) => {
	const levelContainer = document.getElementById("level-container");
	levelContainer.innerHTML = "";
	for (let lesson of lessons) {
		const btnDiv = document.createElement("div");
		btnDiv.innerHTML = `
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-soft btn-primary">
            <i class="fa-solid fa-book"></i> Lesson - ${lesson.level_no}
		</button>
        `;

		levelContainer.append(btnDiv);
	}
};

loadLesson();
