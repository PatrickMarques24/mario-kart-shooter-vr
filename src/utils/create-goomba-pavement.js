import { killGoomba, killGoombaVR } from "./killgoomba.js";
import "../aframe/physx-force-pushable.js";
import { goombaKilled, grabbedItem } from "../store/game.js";

// If VR
const VR =
	AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()
		? true
		: false;

export const createGoombaPavement = (
	data,
	x = 0,
	y = 0,
	z = 0,
	minHeight = 0,
	maxHeight = 0
) => {
	const aScene = document.querySelector("a-scene");
	const tileFloor = document.createElement("a-entity");
	for (let i = 0; i < data.cols; i++) {
		for (let j = 0; j < data.rows; j++) {
			let squareAltitude = Math.random() * (maxHeight - minHeight) + minHeight;

			if (j < data.rows - 3 && Math.random() > 0.7) {
				const myTile = document.createElement("a-entity");
				myTile.setAttribute("gltf-model", "#brick");
				myTile.setAttribute("scale", "0.001, 0.001, 0.001");
				myTile.setAttribute("rotation", "0 90 0");
				myTile.setAttribute("physx-body", "type: static;");

				// Commenter en bas et commenter au-dessus si on veut des blocs moins gourmands en triangles au lieu de briques

				// myTile.setAttribute("width", data.square.width);
				// myTile.setAttribute("height", data.square.height);
				// myTile.setAttribute("depth", data.square.depth);
				// // color the tile, one of 2 is black other is white

				// myTile.setAttribute(
				// 	"color",
				// 	`${(i + j) % 2 === 0 ? data.square.color1 : data.square.color2}`
				// );

				// position the tile, we will use the offset to space them out
				myTile.setAttribute(
					"position",
					`${i * (data.square.width + data.offset) - 0.2} ${squareAltitude - 0.5} ${
						j * (data.square.width + data.offset)
					}`
				);
				tileFloor.appendChild(myTile);

				// GOOMBA

				const goomba = document.createElement("a-entity");
				goomba.setAttribute("gltf-model", "#goomba");
				goomba.classList.add("goomba");
				goomba.setAttribute("scale", "0.007 0.007 0.007");
				// goomba.setAttribute("clickable", "");
				goomba.setAttribute(
					"position",
					`${i * (data.square.width + data.offset)} ${
						squareAltitude + data.square.height / 2 + 0.095
					} ${j * (data.square.width + data.offset)}`
				);

				// If the goomba are on the right side of the pavement, rotate them -90 degrees else 90
				if (x > 0) {
					goomba.setAttribute("rotation", "0 -90 0");
				} else {
					goomba.setAttribute("rotation", "0 90 0");
				}

				goomba.setAttribute("physx-body", "emitCollisionEvents: true;");
				goomba.setAttribute("physx-force-pushable", "");

				// If VR, we need to make the goomba kinematic and add a contactbegin event listener to kill them, and it's on kinematic, so it will not fall but after the kill it will
				if (VR) {
					goomba.setAttribute("physx-body", "type: kinematic;");

					// Callback is in external function because we need to remove the event listener after the goomba is killed
					let hasKilledGoomba = false; // Variable de contrôle

					goomba.addEventListener("contactbegin", () => {
						goomba.setAttribute("physx-body", "type: dynamic;");
						if (!hasKilledGoomba) {
							// Vérifie si killGoombaVR() n'a pas encore été exécuté
							killGoombaVR();

							hasKilledGoomba = true; // Met à jour la variable après la première exécution
						}
					});
				}

				// If not VR, we can kill the goomba by clicking on them, and it's on dynamic, so it will fall or fly
				if (!VR) {
					goomba.setAttribute("physx-body", "type: dynamic;");
					goomba.addEventListener("click", (e) =>
						killGoomba(
							e,
							x,
							squareAltitude + data.square.height / 2,
							j * (data.square.width + data.offset)
						)
					);
				}

				tileFloor.appendChild(goomba);
			}
		}
	}

	// position the pavement
	tileFloor.setAttribute("position", `${x} ${y} ${z}`);
	tileFloor.setAttribute("class", "goomba-pavement");

	aScene.appendChild(tileFloor);
};
