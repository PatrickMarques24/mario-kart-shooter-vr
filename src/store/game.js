import { ref } from "vue";

export const gameDiff = ref("none");

export const gameFinished = ref(false);

export const goombaKilled = ref(0);

export const grabbedItem = ref(null);

export const startSquare = {
	rows: 4,
	cols: 20,
	offset: 0,
	square: {
		width: 0.25,
		height: 0.05,
		depth: 0.25,
		color1: "black",
		color2: "white",
	},
};

export const roadSquare = {
	rows: 1,
	cols: 5,
	offset: 0,
	square: {
		width: 1,
		height: 0.05,
		depth: 49,
		color1: "#555",
		color2: "#666",
	},
};

export const targetBoxes = {
	rows: 51,
	cols: 1,
	offset: 0,
	square: {
		width: 1,
		height: 1,
		depth: 1,
		color1: "brown",
		color2: "brown",
	},
};

export const easy = {
	bananas: 15,
	redShells: 15,
	stars: 10,
	color: "#AAFFAA",
};

export const medium = {
	bananas: 10,
	redShells: 10,
	stars: 5,
	color: "#AAAAFF",
};

export const hard = {
	bananas: 5,
	redShells: 5,
	stars: 3,
	color: "#FF5555",
};
