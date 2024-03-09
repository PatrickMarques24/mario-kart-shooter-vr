import { goombaKilled, grabbedItem } from "../store/game.js";

export function killGoombaVR() {
	goombaKilled.value++;
}

export function killGoomba() {
	// If the player has nothing grabbed in the hand, he cannot kill the goomba
	if (!grabbedItem.value) return;

	// Say the player we have nothing more in the hand
	grabbedItem.value = null;

	// Force the cursor to be white after the goomba is killed
	document
		.querySelector("#cursor")
		.setAttribute("material", "shader: flat; color: white;");

	// Force the laser to be white after the goomba is killed

	// Hide the grabbed item if the player hit the goomba (remove don't work)
	const grabbedItemDOM = document.querySelectorAll(".grabbed");
	grabbedItemDOM.forEach((item) => {
		item.setAttribute("visible", "false");
	});

	// These animations are if the goomba is on the right side of the pavement (position are relative to the goomba)
	// if (!AFRAME.utils.device.checkHeadsetConnected()) {
	// 	if (x > 0) {
	// 		e.currentTarget.setAttribute(
	// 			"animation__2",
	// 			"property: rotation; to: -90 -90 0; dur: 500; autoplay : true;"
	// 		);

	// 		e.currentTarget.setAttribute(
	// 			"animation__3",
	// 			`property: position; to: ${0.6} ${y + 0.2} ${z}; dur: 250; autoplay : true;`
	// 		);
	// 		e.currentTarget.setAttribute(
	// 			"animation__4",
	// 			`property: position; to: ${0.6} ${0.2} ${z}; dur: 250; startEvents: animationcomplete`
	// 		);
	// 	} else {
	// 		// 	// These animations are if the goomba is on the left side of the pavement (position are relative to the goomba)
	// 		e.currentTarget.setAttribute(
	// 			"animation__2",
	// 			"property: rotation; to: -90 90 0; dur: 500; autoplay : true;"
	// 		);
	// 		e.currentTarget.setAttribute(
	// 			"animation__3",
	// 			`property: position; to: ${-0.6} ${
	// 				y + 0.2
	// 			} ${z}; dur: 250; autoplay : true;`
	// 		);
	// 		e.currentTarget.setAttribute(
	// 			"animation__4",
	// 			`property: position; to: ${-0.6} ${0.2} ${z}; dur: 250; startEvents: animationcomplete`
	// 		);
	// 	}
	// }

	goombaKilled.value++;
}
