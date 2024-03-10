import { gameDiff, goombaKilled } from "../store/game.js";

export const finishGame = (finished) => {
	const cameraRig = document.querySelector("#camera-rig");
	const scorePlane = document.querySelector("#score-plane");
	const scoreText = document.querySelector("#score-text");
	const gamePlay = document.querySelector("#game-play");
	const themeMusicPlay = document.querySelector("#theme-music-play");
	const victoryPlay = document.querySelector("#victory-play");
	const gameOverPlay = document.querySelector("#game-over-play");
	const myKart = document.querySelector("#mykart");
	const VR =
		AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()
			? true
			: false;

	if (finished) {
		// Music part

		gamePlay.components.sound.pauseSound();

		// If the player killed at least one goomba, play the victory music, else play the game over music
		if (goombaKilled.value > 0) {
			victoryPlay.components.sound.playSound();
			setTimeout(() => {
				themeMusicPlay.components.sound.playSound();
			}, 14000);
		} else {
			gameOverPlay.components.sound.playSound();

			// Stop the game-over music after 14 seconds because it's a loop and it's not good for the ears to listen to it for a long time
			setTimeout(() => {
				themeMusicPlay.components.sound.playSound();
			}, 14000);
		}

		// Fun part - possibility to grab the goombas and the kart and throw them and the items on the ground
		if (!VR) {
			cameraRig.setAttribute("movement-controls", "camera: #head;");
			myKart.setAttribute("clickable", "");
		}

		myKart.setAttribute("simple-grab", "");
		myKart.setAttribute("physx-force-pushable", "");
		myKart.setAttribute("physx-grabbable", "");
		myKart.setAttribute("physx-body", "type: dynamic;");

		// End of the fun part

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
		cameraRig.removeAttribute("bind-position");
		// document.querySelector("#restart-plane").setAttribute("visible", "true");
	}
};
