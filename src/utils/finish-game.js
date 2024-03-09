import { gameDiff, goombaKilled } from "../store/game.js";

export const finishGame = (finished) => {
	// I need to declare again  because the watch function is not reactive
	const cameraRig = document.querySelector("#camera-rig");
	const scorePlane = document.querySelector("#score-plane");
	const scoreText = document.querySelector("#score-text");
	const gamePlay = document.querySelector("#game-play");
	const victoryPlay = document.querySelector("#victory-play");
	const gameOverPlay = document.querySelector("#game-over-play");
	const VR = AFRAME.utils.device.checkHeadsetConnected() ? true : false;

	if (finished) {
		// Music part

		gamePlay.components.sound.pauseSound();

		// If the player killed at least one goomba, play the victory music, else play the game over music
		if (goombaKilled.value > 0) {
			victoryPlay.components.sound.playSound();
			setTimeout(() => {
				victoryPlay.components.sound.pauseSound();
				document.querySelector("#theme-music-play").components.sound.playSound();
			}, 14000);
		} else {
			gameOverPlay.components.sound.playSound();
			setTimeout(() => {
				document.querySelector("#theme-music-play").components.sound.playSound();
			}, 14000);
		}

		// Fun part - possibility to grab the goombas and the kart and throw them and the items on the ground
		if (!VR) {
			cameraRig.setAttribute("movement-controls", "camera: #head;");

			document.querySelector("#mykart").setAttribute("clickable", "");
		}

		document.querySelector("#mykart").setAttribute("simple-grab", "");
		document.querySelector("#mykart").setAttribute("physx-force-pushable", "");
		document.querySelector("#mykart").setAttribute("physx-grabbable", "");
		document
			.querySelector("#mykart")
			.setAttribute("physx-body", "type: dynamic;");

		scoreText.setAttribute(
			"value",
			`Difficulty : ${gameDiff.value} \n
        ${
									goombaKilled.value > 0
										? `Congratulations ! 🏆 \n You hit ${goombaKilled.value}`
										: "Oh no :( \n You didn't touch any"
								} ${goombaKilled.value > 1 ? "goombas" : "goomba"}!
        \n
        You can restart by refresh the page or go throwing the items to have fun ! The Kart too !`
		);
		scorePlane.setAttribute("visible", "true");
		document.querySelector("#camera-rig").removeAttribute("bind-position");
		// document.querySelector("#restart-plane").setAttribute("visible", "true");
	}
};
