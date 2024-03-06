// import { grabTheThing } from "./grab-and-drop.js";
import { goombaKilled } from "../store/game.js";

import "../aframe/simple-grab.js";

export const createPavement = (
	data,
	x = 0,
	y = 0,
	z = 0,
	min = 0,
	max = 0,
	iPutGoombaOnIt = false
) => {
	const tileFloor = document.createElement("a-entity");
	for (let i = 0; i < data.cols; i++) {
		for (let j = 0; j < data.rows; j++) {
			let squareAltitude = Math.random() * (max - min) + min;

			// L'idéal aurait été de mettre en commun certain bout de code commun, sauf que si je créais un a-box dans la condition
			// je ne pouvais pas le réutiliser à la sortie de la condition

			if (!iPutGoombaOnIt) {
				const myTile = document.createElement("a-box");
				myTile.setAttribute("width", data.square.width);
				myTile.setAttribute("height", data.square.height);
				myTile.setAttribute("depth", data.square.depth);

				// color the tile, one of 2 is black other is white
				myTile.setAttribute(
					"color",
					`${(i + j) % 2 === 0 ? data.square.color1 : data.square.color2}`
				);

				// position the tile, we will use the offset to space them out
				myTile.setAttribute(
					"position",
					`${i * (data.square.width + data.offset)} ${squareAltitude} ${
						j * (data.square.width + data.offset)
					}`
				);
				tileFloor.appendChild(myTile);
			} else if (iPutGoombaOnIt && j < data.rows - 3 && Math.random() > 0.7) {
				const myTile = document.createElement("a-entity");
				myTile.setAttribute("gltf-model", "#brick");
				myTile.setAttribute("scale", "0.001, 0.001, 0.001");
				myTile.setAttribute("rotation", "0 90 0");

				// Commenter en bas et commenter au-dessus si on veut des blocs moins gourmands en triangles au lieu de briques

				// myTile.setAttribute("width", data.square.width);
				// myTile.setAttribute("height", data.square.height);
				// myTile.setAttribute("depth", data.square.depth);
				// // color the tile, one of 2 is black other is white

				// myTile.setAttribute(
				// 	"color",
				// 	`${(i + j) % 2 === 0 ? data.square.color1 : data.square.color2}`
				// );

				const goomba = document.createElement("a-entity");
				goomba.setAttribute("gltf-model", "#goomba");
				goomba.setAttribute("scale", "0.007 0.007 0.007");
				// goomba.setAttribute("clickable", "");
				goomba.setAttribute(
					"position",
					`${i * (data.square.width + data.offset)} ${
						squareAltitude + data.square.height / 2
					} ${j * (data.square.width + data.offset)}`
				);

				// If the goomba are on the right side of the pavement, rotate them -90 degrees else 90
				if (x > 0) {
					goomba.setAttribute("rotation", "0 -90 0");
				} else {
					goomba.setAttribute("rotation", "0 90 0");
				}

				goomba.classList.add("goombas");

				goomba.addEventListener("click", (e) =>
					killGoomba(
						e,
						x,
						squareAltitude + data.square.height / 2,
						j * (data.square.width + data.offset)
					)
				);

				// goomba.setAttribute("simple-grab", "");
				tileFloor.appendChild(goomba);

				// position the tile, we will use the offset to space them out
				myTile.setAttribute(
					"position",
					`${i * (data.square.width + data.offset) - 0.2} ${squareAltitude - 0.5} ${
						j * (data.square.width + data.offset)
					}`
				);
				tileFloor.appendChild(myTile);
			}
		}
	}

	// position the pavement
	tileFloor.setAttribute("position", `${x} ${y} ${z}`);

	document.querySelector("a-scene").appendChild(tileFloor);
};

function killGoomba(e, x, y, z) {
	// If the player has nothing grabbed in the hand, he cannot kill the goomba

	// These animations are common to the position of the goomba (position are relative to the goomba)

	// These animations are if the goomba is on the right side of the pavement (position are relative to the goomba)
	if (x > 0) {
		e.currentTarget.setAttribute(
			"animation__2",
			"property: rotation; to: -90 -90 0; dur: 500; autoplay : true;"
		);

		e.currentTarget.setAttribute(
			"animation__3",
			`property: position; to: ${0.6} ${y + 0.2} ${z}; dur: 250; autoplay : true;`
		);
		e.currentTarget.setAttribute(
			"animation__4",
			`property: position; to: ${0.6} ${0.2} ${z}; dur: 250; startEvents: animationcomplete`
		);
	} else {
		// 	// These animations are if the goomba is on the left side of the pavement (position are relative to the goomba)
		e.currentTarget.setAttribute(
			"animation__2",
			"property: rotation; to: -90 90 0; dur: 500; autoplay : true;"
		);
		e.currentTarget.setAttribute(
			"animation__3",
			`property: position; to: ${-0.6} ${y + 0.2} ${z}; dur: 250; autoplay : true;`
		);
		e.currentTarget.setAttribute(
			"animation__4",
			`property: position; to: ${-0.6} ${0.2} ${z}; dur: 250; startEvents: animationcomplete`
		);
	}

	// e.currentTarget.setAttribute(
	// 	"animation__5",
	// 	"property: scale; to: 0 0 0; dur: 500; autoplay : true;"
	// );

	goombaKilled.value++;
	setTimeout(() => {
		e.currentTarget.remove();
	}, 500);
}
