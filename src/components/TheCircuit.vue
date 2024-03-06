<script setup>
// Vue
import { watch, ref } from "vue";
import {
	gameDiff,
	gameFinished,
	goombaKilled,
	startSquare,
	roadSquare,
	targetBoxes,
	easy,
	medium,
	hard,
} from "../store/game.js";

// A-Frame
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";
import "../aframe/clickable.js";
import "../aframe/life-like-automaton.js";
import "../aframe/a-ocean.js";
import "../aframe/teleport-camera-rig.js";
import "../aframe/simple-grab.js";
import "../aframe/proximity-trigger.js";
import "../aframe/move.js";

// Utils
import { toggleFog } from "../utils/weather-and-time.js";
import { createPavement } from "../utils/create-pavement.js";
import { createGoombaPavement } from "../utils/create-goomba-pavement.js";
import { positionOnLeftAndRightTheMiddleLane } from "../utils/position-on-lane.js";

// Components
import Kart from "./Kart.vue";
import Banana from "./Banana.vue";
import RedShell from "./RedShell.vue";
import Star from "./Star.vue";
import Lakitu from "./Lakitu.vue";

// Const and variables
let numberOfBananas = 0;
let numberOfRedShells = 0;
let numberOfStars = 0;
let personalColor = "black";

const cameraRig = document.querySelector("#camera-rig");
const head = document.querySelector("#head");
const scorePlane = document.querySelector("#score-plane");
const scoreText = document.querySelector("#score-text");

const loaded = ref(false);

import { grabbedItem } from "../store/game.js";

watch(grabbedItem, (item) => {
	// if (item === "banana") {
	// 	// Play the banana sound
	// 	document.querySelector("#banana-sound").components.sound.playSound();
	// }
	// if (item === "red-shell") {
	// 	// Play the red shell sound
	// 	document.querySelector("#red-shell-sound").components.sound.playSound();
	// }
	// if (item === "star") {
	// 	// Play the star sound
	// 	document.querySelector("#star-sound").components.sound.playSound();
	// }
});

watch(gameDiff, (difficulty) => {
	// If we arent in VR, change the position of the camera
	// It's not allowed to move the camera in VR
	if (!AFRAME.utils.device.checkHeadsetConnected()) {
		head.setAttribute("position", `0 0.8 -0.2`);
	}

	// If we are in VR
	if (AFRAME.utils.device.checkHeadsetConnected()) {
		// cameraRig.setAttribute("position", `0 0 -0.2`);
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

	// Play the game music 500 ms after the countdown finish (so delay 3000) and pause the main theme
	setTimeout(() => {
		document.querySelector("#game-play").components.sound.playSound();
		document.querySelector("#theme-music-play").components.sound.pauseSound();
	}, 3000);

	document.querySelector("#mykart").setAttribute("move", "");
	document.querySelector("#mykart").removeAttribute("clickable");
	document
		.querySelector("#camera-rig")
		.setAttribute("bind-position", "target: #mykart");

	const allGoombas = document.querySelectorAll(".goombas");
	allGoombas.forEach((goomba) => {
		goomba.setAttribute("clickable", "");
		// goomba.setAttribute("simple-grab", "");
	});
	// document.querySelector(".camera-container").setAttribute("move", "");
	// alert(difficulty);
	switch (difficulty) {
		case "easy":
			numberOfBananas = easy.bananas;
			numberOfRedShells = easy.redShells;
			numberOfStars = easy.stars;
			personalColor = easy.color;
			loaded.value = true;
			break;
		case "medium":
			numberOfBananas = medium.bananas;
			numberOfRedShells = medium.redShells;
			numberOfStars = medium.stars;
			personalColor = medium.color;
			loaded.value = true;
			break;
		case "hard":
			numberOfBananas = hard.bananas;
			numberOfRedShells = hard.redShells;
			numberOfStars = hard.stars;
			personalColor = hard.color;
			loaded.value = true;
			break;
		default:
			alert("Nothing appenend");
			break;
	}
});

watch(gameFinished, (finished) => {
	// I need to declare again  because the watch function is not reactive
	const cameraRig = document.querySelector("#camera-rig");
	const scorePlane = document.querySelector("#score-plane");
	const scoreText = document.querySelector("#score-text");
	const gamePlay = document.querySelector("#game-play");
	const victoryPlay = document.querySelector("#victory-play");
	const gameOverPlay = document.querySelector("#game-over-play");

	if (finished) {
		// Music part

		gamePlay.components.sound.pauseSound();

		// If the player killed at least one goomba, play the victory music, else play the game over music
		if (goombaKilled.value > 0) {
			victoryPlay.components.sound.playSound();
		} else {
			gameOverPlay.components.sound.playSound();
		}

		// End of music part

		document.querySelectorAll(".goombas").forEach((goomba) => {
			goomba.removeAttribute("clickable");
		});
		cameraRig.setAttribute("movement-controls", "camera: #head;");
		cameraRig.setAttribute("disable-in-vr", "component: movement-controls;");
		scoreText.setAttribute(
			"value",
			`Difficulty : ${gameDiff.value} \n
			${
				goombaKilled.value > 0
					? `Congratulations ! 🏆 \n You hit ${goombaKilled.value}`
					: "Oh no :( \n You didn't touch any"
			} ${goombaKilled.value > 1 ? "goombas" : "goomba"}!`
		);
		scorePlane.setAttribute("visible", "true");
		document.querySelector("#camera-rig").removeAttribute("bind-position");
		// document.querySelector("#restart-plane").setAttribute("visible", "true");
	}
});

toggleFog(true, "00AAFF", 20, 40);

createPavement(startSquare, -2.39, 0.025, -2);
createPavement(startSquare, -2.39, 0.025, -52);
createPavement(roadSquare, -2.015, 0, -26.625);
createGoombaPavement(targetBoxes, -3.5, 0, -51.625, -0.25, 0.25, true);
createGoombaPavement(targetBoxes, 3.5, 0, -51.625, -0.25, 0.25, true);
</script>

<template>
	<a-entity
		id="theme-music-play"
		sound="src: #theme-music; autoplay: false; loop: true; volume : 0.4;"
		bind-position="target: #head"
	></a-entity>
	<a-entity
		id="start"
		sound="src: #start-sound; autoplay: false; loop: false; volume : 1;"
		position="0 0.8 -0.2"
		bind-position="target: #head"
	></a-entity>
	<a-entity
		id="game-over-play"
		sound="src: #game-over-music; autoplay: false; loop: false; volume : 1;"
		bind-position="target: #head"
	>
	</a-entity>
	<a-entity
		id="game-play"
		sound="src: #game-music; autoplay: false; loop: true; volume : 0.4;"
		bind-position="target: #head"
	></a-entity>
	<a-entity
		id="victory-play"
		sound="src: #victory-music; autoplay: false; loop: false; volume : 0.5;"
		bind-position="target: #head"
	></a-entity>

	<Kart
		id="mykart"
		position="0 0.274 0"
		rotation="0 180 0"
		clickable
		:teleport-camera-rig="` x: 0; y: -100; z: 0;
	handleRotation: 'false'; rot: 0; `"
	/>

	<Banana
		v-if="loaded"
		v-for="i in numberOfBananas"
		:key="i"
		:x="positionOnLeftAndRightTheMiddleLane()"
		:y="0.3"
		:z="Math.random() * 45 - 49"
		:rotation="`0 ${Math.random() * 3600} 0`"
		clickable
		simple-grab
	/>

	<RedShell
		v-if="loaded"
		v-for="i in numberOfRedShells"
		:key="i"
		:x="positionOnLeftAndRightTheMiddleLane()"
		:y="0"
		:z="Math.random() * 45 - 49"
		:rotation="`0 ${Math.random() * 3600} 0`"
		clickable
		simple-grab
	/>

	<Lakitu id="lakitu-instance" :x="1" :y="0.5" :z="-3" />

	<a-entity
		position="0 0.2 0"
		animation__elevate="property: position; to: 0 0.5 0; autoplay: true; dir: alternate; loop: true; dur: 1000; easing: easeInOutQuad"
	>
		<Star
			v-if="loaded"
			v-for="i in numberOfStars"
			:key="i"
			:x="positionOnLeftAndRightTheMiddleLane()"
			:y="0.256"
			:z="Math.random() * 45 - 49"
			clickable
			simple-grab
		/>
	</a-entity>

	<a-entity
		gltf-model="#circuit"
		position="38.5 -7.465 10"
		scale="0.4 0.4 0.4"
		rotation="0 90 0"
	>
	</a-entity>

	<!-- If I can make the proximity trigger work, I can trigger the end of the game when the kart reaches the end of the circuit, instead of using the end of the loop -->
	<!-- <a-plane
		position="0 0.01 -51.625"
		rotation="-90 0 0"
		width="5"
		height="1"
		color="#00AAFF"
		visible="false"
	></a-plane> -->

	<a-plane
		id="score-plane"
		position="0 1.5 -55"
		rotation="0 0 0"
		width="3"
		height="1"
		:color="`${personalColor}`"
		opacity="0.9"
		visible="false"
		side="double"
	>
		<a-text
			id="score-text"
			position="0 0 0.01"
			rotation="0 0 0"
			color="black"
			align="center"
			width="2"
			side="double"
		></a-text>
	</a-plane>

	<a-plane
		id="restart-plane"
		position="0 0.5 -55"
		height="0.5"
		width="1.5"
		color="red"
		visible="false"
		:teleport-camera-rig="` x: 0; y: -100; z: 0;
	handleRotation: 'false'; rot: 0; `"
	>
		><a-text
			value="Restart"
			id="score-text"
			position="0 0 0.01"
			rotation="0 0 0"
			color="white"
			align="center"
			width="2"
		></a-text
	></a-plane>

	<!-- <a-light
		type="ambient"
		color="#00A8E5"
		intensity="1"
		decay="2"
		backgroundColor="#DDA090"
		position="0 10 -25"
	>
	</a-light> -->

	<!-- Navigation mesh -->
	<!-- <a-entity
		id="originalnavmesh"
		geometry="primitive: plane; height: 5; width: 5"
		position="0 0.01 1.5"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"
	></a-entity> -->
</template>
