let cardArray = [
    {
      id: 1,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 2,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 3,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 4,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 5,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 6,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
    {
      id: 7,
      name: "earth",
      img: "public/exercise-1/earth.svg",
    },
    {
      id: 8,
      name: "jupiter",
      img: "public/exercise-1/jupiter.svg",
    },
    {
      id: 9,
      name: "mars",
      img: "public/exercise-1/mars.svg",
    },
    {
      id: 10,
      name: "mercury",
      img: "public/exercise-1/mercury.svg",
    },
    {
      id: 11,
      name: "saturn",
      img: "public/exercise-1/saturn.svg",
    },
    {
      id: 12,
      name: "uranus",
      img: "public/exercise-1/uranus.svg",
    },
  ];


const grid$$ = document.querySelector('[data-function="grid"]');
const score$$ = document.querySelector('[data-function="score"]');
const attempts$$ = document.querySelector('[data-function="attempts"]');

const valuesArray = [];
let contarScore = 0;
let contarIntentos = 0;

cardArray.forEach((carta) => {
    const div$$ = document.createElement('div');
    const img$$ = document.createElement('img');

    div$$.appendChild(img$$);
    grid$$.appendChild(div$$);

    img$$.setAttribute('src', carta.img);
    img$$.setAttribute('alt', carta.name);

    div$$.addEventListener("click", () => {
        addValueToArray(img$$, div$$);
    })
});

const addValueToArray = (item) => {
	console.log(item.classList == "selected");
	if (item.classList != "selected" && !item.src.includes("tick.svg")) {
		item.classList.add("selected");
		valuesArray.unshift(item);
	}
	if (valuesArray.length >= 2) {
		attempts$$.textContent = ++countAttemps;
		setTimeout(
			() => {
				if (valuesArray[0].src == valuesArray[1].src) {
					score$$.textContent = ++countScore;
					valuesArray[0].src = "public/exercise-1/tick.svg";
					valuesArray[1].src = "public/exercise-1/tick.svg";
				} else {
					valuesArray[0].classList.remove("selected");
					valuesArray[1].classList.remove("selected");
				}
				valuesArray.splice(0, 2);
			},
			500,
			valuesArray
		);
	}
};