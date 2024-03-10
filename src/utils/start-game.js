export const startGame = (difficulty) => {
	const head = document.querySelector("#head");
	const cameraRig = document.querySelector("#camera-rig");
	const lakituInstance = document.querySelector("#lakitu-instance");
	const lakituText = document.querySelector("#lakitu-text");
	const handRight = document.querySelector("#hand-right");
	const startPlay = document.querySelector("#start");
	const gamePlay = document.querySelector("#game-play");
	const themeMusicPlay = document.querySelector("#theme-music-play");
	const myKart = document.querySelector("#mykart");
	// If VR
	const VR =
		AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()
			? true
			: false;

	// Disable the laser

	// if (difficulty === "restart") {
	// 	return;
	// }
	// If we arent in VR, change the position of the camera
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
			const redShell = document.querySelectorAll(".red-shell");
			redShell.forEach((shell) => {
				shell.setAttribute("clickable", "");
				shell.setAttribute("simple-grab", "");
			});
			const allStars = document.querySelectorAll(".star");
			allStars.forEach((star) => {
				star.setAttribute("clickable", "");
				star.setAttribute("simple-grab", "");
			});
		}, 0);
	}

	// If we are in VR we need to remove the laser during the game (doesn't work)
	if (VR) {
		handRight.removeAttribute("laser-controls");
		handRight.setAttribute("raycaster", "showLine", false);
	}

	// Disable WASD controls
	cameraRig.removeAttribute("movement-controls");

	// We begin the game
	lakituText.setAttribute("value", "3");
	lakituText.setAttribute("scale", "0.2 0.2 0.2");

	// We begin the countdown
	// Play the countdown
	startPlay.components.sound.playSound();
	setTimeout(() => {
		lakituText.setAttribute("value", "2");
	}, 1500);

	setTimeout(() => {
		lakituText.setAttribute("value", "GO !");
		// Go to the sky
		lakituInstance.setAttribute(
			"animation__2",
			"property: position; to: 1 10 -3; dur: 2000; easing: easeInOutQuad; delay: 500"
		);
		lakituInstance.setAttribute(
			"animation__3",
			"property: scale; to: 0 0 0; dur: 2000; easing: easeInOutQuad; delay: 500"
		);
	}, 2500);

	// Play the game music 500 ms after the countdown finish sound begins (so delay 3000) and pause the main theme
	setTimeout(() => {
		gamePlay.components.sound.playSound();
		themeMusicPlay.components.sound.pauseSound();
	}, 3000);

	myKart.setAttribute("move", "");
	myKart.removeAttribute("clickable");
	cameraRig.setAttribute("bind-position", "target: #mykart");
};
