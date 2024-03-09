<script setup>
// Vue
import { watch, ref } from "vue";
import {
	gameDiff,
	gameFinished,
	goombaKilled,
	grabbedItem,
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
import "../aframe/physx-force-pushable.js";

// Utils
import { toggleFog } from "../utils/weather-and-time.js";
import { createPavement } from "../utils/create-pavement.js";
import { createGoombaPavement } from "../utils/create-goomba-pavement.js";
import {
	positionOnLeftAndRightTheMiddleLane,
	positionZOnTheLane,
} from "../utils/position-on-lane.js";
import { startGame } from "../utils/start-game.js";
import { finishGame } from "../utils/finish-game.js";

// Components
import Kart from "./Kart.vue";
import Banana from "./Banana.vue";
import RedShell from "./RedShell.vue";
import Star from "./Star.vue";
import Lakitu from "./Lakitu.vue";
import Musics from "./Musics.vue";

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

const VR = AFRAME.utils.device.checkHeadsetConnected() ? true : false;

// function restart() {
// 	gameDiff = "restart";

// 	alert("Restarting the game");
// 	// Stop the finishmusic
// 	// document.querySelector("#victory-play").components.sound.pauseSound();

// 	document
// 		.querySelector("#lakitu-instance")
// 		.setAttribute("position", "1 0.5 -3");
// 	document.querySelector("#lakitu-instance").setAttribute("scale", "1 1 1");

// 	document.querySelector("#camera-rig").removeAttribute("bind-position");
// 	document.querySelector("#camera-rig").setAttribute("position", "0 -100 0");
// 	// restart the game
// 	document.querySelector("#mykart").removeAttribute("move", "");
// 	document.querySelector("#mykart").setAttribute("position", "0 0.274 0");
// 	document.querySelector("#mykart").setAttribute("rotation", "0 180 0");
// 	document.querySelectorAll(".goomba-pavement")?.forEach((goomba) => {
// 		goomba.remove();
// 	});
// 	document.querySelectorAll(".banana")?.forEach((banana) => {
// 		banana.remove();
// 	});
// 	document.querySelectorAll(".red-shell")?.forEach((redShell) => {
// 		redShell.remove();
// 	});
// 	document.querySelectorAll(".star")?.forEach((star) => {
// 		star.remove();
// 	});
// 	document.querySelector("#score-plane").setAttribute("visible", "false");
// 	goombaKilled.value = 0;
// 	gameFinished.value = false;

// 	createGoombaPavement(targetBoxes, -3.5, 0, -51.625, -0.25, 0.25, true);
// 	createGoombaPavement(targetBoxes, 3.5, 0, -51.625, -0.25, 0.25, true);

// 	loaded.value = false;

// 	document.querySelector("#game-over-play").components.sound.pauseSound();
// }

watch(gameDiff, (difficulty) => {
	startGame(difficulty);

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
			console.log("Nothing appenend");
			break;
	}
});

watch(grabbedItem, () => {
	// If the player has an item, the goombas are clickable
	if (grabbedItem.value) {
		document.querySelectorAll(".goomba").forEach((goomba) => {
			goomba.setAttribute("clickable", "");
		});
	} else {
		document.querySelectorAll(".goomba").forEach((goomba) => {
			goomba.removeAttribute("clickable");
		});
	}
});

watch(gameFinished, (finished) => {
	finishGame(finished);
});

toggleFog(true, "00AAFF", 20, 40);

createPavement(startSquare, -2.39, 0.025, -2);
createPavement(startSquare, -2.39, 0.025, -52);
createPavement(roadSquare, -2.015, 0, -26.625);
createGoombaPavement(targetBoxes, -3.5, 0, -51.625, -0.25, 0.25);
createGoombaPavement(targetBoxes, 3.5, 0, -51.625, -0.25, 0.25);
</script>

<template>
	<Musics />

	<Kart
		id="mykart"
		position="0 0.274 0"
		rotation="0 180 0"
		clickable
		_:teleport-camera-rig="` x: 0; y: -100; z: 0;
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
		physx-body="type: dynamic;"
		physx-grabbable
		physx-force-pushable
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
		physx-body="type: dynamic;"
		physx-grabbable
		physx-force-pushable
	/>

	<Lakitu id="lakitu-instance" :x="1" :y="0.5" :z="-3" />

	<!-- In desktop, I don't really need gravity, so I can make the stars flying -->
	<a-entity
		v-if="!VR"
		position="0 0.2 0"
		animation__elevate="property: position; to: 0 0.5 0; autoplay: true; dir: alternate; loop: true; dur: 1000; easing: easeInOutQuad"
	>
		<Star
			v-if="loaded"
			v-for="i in numberOfStars"
			:key="i"
			:x="positionOnLeftAndRightTheMiddleLane()"
			:y="0.256"
			:z="positionZOnTheLane()"
			clickable
			simple-grab
		/>
	</a-entity>

	<Star
		v-if="loaded && VR"
		v-for="i in numberOfStars"
		:key="i"
		:x="positionOnLeftAndRightTheMiddleLane()"
		:y="0.256"
		:z="positionZOnTheLane()"
		clickable
		simple-grab
		physx-body="type: dynamic;"
		physx-grabbable
		physx-force-pushable
	/>

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
		_clickable
		@click="restart()"
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

	<!-- Navigation mesh -->
	<!-- <a-entity
		id="originalnavmesh"
		geometry="primitive: plane; height: 5; width: 5"
		position="0 0.01 1.5"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"
		physx-body="type: static"
	></a-entity> -->

	<!-- If I put the width to large, the plane go to low or to high because it will collide with the bricks or with the goombas-->
	<a-entity
		id="allthecircuit"
		geometry="primitive: plane; height: 60; width: 5"
		position="0 0 -30"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"
		physx-body="type: static"
	></a-entity>
</template>
