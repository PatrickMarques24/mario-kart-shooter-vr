export const startGame = (difficulty) => {
	const head = document.querySelector("#head");
	const cameraRig = document.querySelector("#camera-rig");
	const VR = AFRAME.utils.device.checkHeadsetConnected() ? true : false;

	// Disable the laser

	// if (difficulty === "restart") {
	// 	return;
	// }
	// If we arent in VR, change the position of the camera
	// It's not allowed to move the camera in VR
	if (!VR) {
		head.setAttribute("position", `0 0.6 -0.2`);

		// We need to put a setTimout because we change the attributes of a dynamic object (Physx documentation)
		// Items are clicable only if we are not in VR (because we can grab them in VR and it's more immersive)
		setTimeout(() => {
			const allGoombas = document.querySelectorAll(".goomba");
			allGoombas.forEach((goomba) => {
				goomba.setAttribute("clickable", "");
			});
			const allBananas = document.querySelectorAll(".banana");
			allBananas.forEach((banana) => {
				banana.setAttribute("clickable", "");
				banana.setAttribute("simple-grab", "");
			});
			const allStars = document.querySelectorAll(".star");
			allStars.forEach((star) => {
				star.setAttribute("clickable", "");
				star.setAttribute("simple-grab", "");
			});
		}, 0);
	}

	// If we are in VR
	if (VR) {
		document.querySelector("#hand-right").addEventListener("loaded", function () {
			// Supprimer le contrôle laser
			document.querySelector("#hand-right").removeAttribute("laser-controls");
		});
	}

	// Disable WASD controls
	cameraRig.removeAttribute("movement-controls");

	// We begin the game
	const lakituText = document.querySelector("#lakitu-text");
	lakituText.setAttribute("value", "3");
	lakituText.setAttribute("scale", "0.2 0.2 0.2");

	// We begin the countdown
	// Play the countdown
	document.querySelector("#start").components.sound.playSound();
	setTimeout(() => {
		lakituText.setAttribute("value", "2");
	}, 1500);

	setTimeout(() => {
		lakituText.setAttribute("value", "GO !");
		// Go to the sky
		document
			.querySelector("#lakitu-instance")
			.setAttribute(
				"animation__2",
				"property: position; to: 1 10 -3; dur: 2000; easing: easeInOutQuad; delay: 500"
			);
		document
			.querySelector("#lakitu-instance")
			.setAttribute(
				"animation__3",
				"property: scale; to: 0 0 0; dur: 2000; easing: easeInOutQuad; delay: 500"
			);
	}, 2500);

	// Play the game music 500 ms after the countdown finish sound begins (so delay 3000) and pause the main theme
	setTimeout(() => {
		document.querySelector("#game-play").components.sound.playSound();
		document.querySelector("#theme-music-play").components.sound.pauseSound();
	}, 3000);

	document.querySelector("#mykart").setAttribute("move", "");
	document.querySelector("#mykart").removeAttribute("clickable");
	document
		.querySelector("#camera-rig")
		.setAttribute("bind-position", "target: #mykart");

	// const allGoombas = document.querySelectorAll(".goombas");
	// allGoombas.forEach((goomba) => {
	// 	goomba.setAttribute("clickable", "");
	// });
};
