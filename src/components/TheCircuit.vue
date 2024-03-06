<script setup>
// Vue
import { watch, ref } from "vue";
import { gameDiff } from "../store/game.js";

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
import { positionOnLeftAndRightTheMiddleLane } from "../utils/position-on-lane.js";

// Components
import Kart from "./Kart.vue";
import Banana from "./Banana.vue";
import RedShell from "./RedShell.vue";
import Star from "./Star.vue";

// defineProps({
// 	numberOfBananas: { type: Number, default: 0 },
// 	numberOfRedShells: { type: Number, default: 0 },
// 	numberOfStars: { type: Number, default: 0 },
// 	// numberOfGoombas: { type: Number, default: 10 },
// });

let numberOfBananas = 0;
let numberOfRedShells = 0;
let numberOfStars = 0;

const loaded = ref(false);

watch(gameDiff, (difficulty) => {
	// document.querySelector("#head").setAttribute("move", "");
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
	// Play the countdown
	document.querySelector("#start").components.sound.playSound();
	// alert(difficulty);
	switch (difficulty) {
		case "easy":
			numberOfBananas = 15;
			numberOfRedShells = 15;
			numberOfStars = 10;
			loaded.value = true;
			break;
		case "medium":
			numberOfBananas = 10;
			numberOfRedShells = 10;
			numberOfStars = 5;
			loaded.value = true;
			break;
		case "hard":
			numberOfBananas = 5;
			numberOfRedShells = 5;
			numberOfStars = 2;
			loaded.value = true;
			break;
		default:
			alert("Nothing appenend");
			break;
	}
});

toggleFog(true, "00AAFF", 20, 40);

const startSquare = {
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

const roadSquare = {
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

const targetBoxes = {
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

createPavement(startSquare, -2.39, 0.025, -2);
createPavement(startSquare, -2.39, 0.025, -52);
createPavement(roadSquare, -2.015, 0, -26.625);
createPavement(targetBoxes, -3.5, 0, -51.625, -0.25, 0.25, true);
createPavement(targetBoxes, 3.5, 0, -51.625, -0.25, 0.25, true);
</script>

<template>
	<a-entity
		id="theme-music-play"
		sound="src: #theme-music; autoplay: false; loop: true; volume : 0.4;"
	></a-entity>
	<a-entity
		id="start"
		sound="src: #start-sound; autoplay: false; loop: false; volume : 1;"
		position="0 0.8 -0.2"
	></a-entity>

	<Kart
		id="mykart"
		position="0 0.274 0"
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

	<!-- I want to make an elevate animation for the stars below but i need to save their x and z position before -->
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

	<a-text
		value="Welcome to Mario Kart VR"
		position="0 2 -2"
		rotation="0 0 0"
		scale="0.5 0.5 0.5"
		color="black"
		align="center"
		width="10"
		wrap-count="20"
		side="double"
	></a-text>

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

	<

	<a-text
		id="score-text"
		position="0 1.63 -56"
		rotation="0 0 0"
		color="black"
		align="center"
		width="2"
		side="double"
	></a-text>

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
../aframe/move.js
