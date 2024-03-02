<script setup>
// Vue
import { ref } from "vue";

// A-Frame
import "../aframe/bind-position.js";
import "../aframe/bind-rotation.js";
import "../aframe/clickable.js";
import "../aframe/life-like-automaton.js";
import "../aframe/a-ocean.js";

// Utils
import { toggleFog } from "../utils/weather-and-time.js";
import { copyPosition, copyRotation } from "../utils/aframe.js";
import { createPavement } from "../utils/create-pavement.js";
import { grabTheThing } from "../utils/grab-and-drop.js";
import { positionOnLeftAndRightTheMiddleLane } from "../utils/position-on-lane.js";

// Components
import Kart from "./Kart.vue";
import Banana from "./Banana.vue";
import RedShell from "./RedShell.vue";
import Star from "./Star.vue";

defineProps({
	numberOfBananas: { type: Number, default: 10 },
	numberOfRedShells: { type: Number, default: 10 },
	numberOfStars: { type: Number, default: 5 },
	// numberOfGoombas: { type: Number, default: 10 },
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

createPavement(startSquare, -2.39, 0, -2);
createPavement(startSquare, -2.39, 0, -52);
createPavement(roadSquare, -2.015, 0, -26.625);
createPavement(targetBoxes, -3.5, 0, -51.625, -0.25, 0.25, true);
createPavement(targetBoxes, 3.5, 0, -51.625, -0.25, 0.25, true);

// function dropTheThing(evt) {
// 	const grabbedEl = document.querySelector("[data-grabbed]");
// 	// if nothing grabbed, return
// 	if (!grabbedEl) return;

// 	//drop it
// 	grabbedEl.removeAttribute("bind-position");
// 	grabbedEl.removeAttribute("bind-rotation");
// 	copyPosition(evt.target, grabbedEl);
// 	copyRotation(evt.target, grabbedEl);
// 	delete grabbedEl.dataset.grabbed;

// 	const dropZoneId = evt.target.id;
// 	// if something was in the drop zone, grab it
// 	const elInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"]`);
// 	if (elInDropZone) {
// 		grabTheThing({ target: elInDropZone });
// 	}

// 	grabbedEl.dataset.dropped = dropZoneId;
// }

function dropTheThing(evt) {
	const grabbedEl = document.querySelector("[data-grabbed]");
	// if nothing grabbed, return
	if (!grabbedEl) return;

	//drop it
	// console.log(evt.target);
	grabbedEl.removeAttribute("bind-position");
	grabbedEl.removeAttribute("bind-rotation");
	copyPosition(evt.target, grabbedEl);
	copyRotation(evt.target, grabbedEl);
	delete grabbedEl.dataset.grabbed;

	const dropZoneId = evt.target.id;
	// if something was in the drop zone, grab it
	const elInDropZone = document.querySelector(`[data-dropped="${dropZoneId}"]`);
	if (elInDropZone) {
		grabTheThing({ target: elInDropZone });
	}

	grabbedEl.dataset.dropped = dropZoneId;
}

function enterInKart() {
	document.querySelector("#start").components.sound.playSound();
}

const myNumber = ref(0);
</script>

<template>
	<!-- <a-entity
		id="theme-music-play"
		sound="src: #theme-music; autoplay: false; loop: true; volume : 0.025;"
	></a-entity> -->
	<a-entity
		id="start"
		sound="src: #start-sound; autoplay: false; loop: false; volume : 1;"
	></a-entity>

	<Kart position="0 0.274 0" clickable @click="enterInKart()" />
	<Banana
		v-for="i in numberOfBananas"
		:key="i"
		:x="positionOnLeftAndRightTheMiddleLane()"
		:y="0.3"
		:z="Math.random() * 45 - 52"
		:rotation="`0 ${Math.random() * 3600} 0`"
		clickable
		@click="(evt) => grabTheThing(evt)"
	/>

	<RedShell
		v-for="i in numberOfRedShells"
		:key="i"
		:x="positionOnLeftAndRightTheMiddleLane()"
		:y="0"
		:z="Math.random() * 45 - 52"
		:rotation="`0 ${Math.random() * 3600} 0`"
		clickable
		@click="(evt) => grabTheThing(evt)"
	/>

	<!-- I want to make an elevate animation for the stars below but i need to save their x and z position before -->
	<a-entity
		position="0 0.2 0"
		animation__elevate="property: position; to: 0 0.5 0; autoplay: true; dir: alternate; loop: true; dur: 1000; easing: easeInOutQuad"
	>
		<Star
			v-for="i in numberOfStars"
			:key="i"
			:x="positionOnLeftAndRightTheMiddleLane()"
			:y="0.256"
			:z="Math.random() * 45 - 52"
			clickable
			@click="(evt) => grabTheThing(evt)"
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
	<a-plane
		color="#22AA22"
		width="20"
		height="100"
		rotation="-90 0 0"
		position="0 0 -25"
	></a-plane>
	<a-ocean
		color="#00AAFF"
		width="100"
		depth="100"
		density="100"
		speed="0.5"
		position="50 -0.3 -25"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>
	<a-ocean
		color="#0055AA"
		width="100"
		depth="100"
		density="20"
		speed="0.5"
		position="50 -0.3 -25"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>
	<a-ocean
		color="#3377BB"
		width="100"
		depth="100"
		density="20"
		speed="0.5"
		position="50 -0.3 -25"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>

	<a-entity
		gltf-model="#circuit"
		position="38.5 -7.465 35"
		scale="0.4 0.4 0.4"
		rotation="0 90 0"
	>
	</a-entity>
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
		geometry="primitive: plane; height: 5; width: 5"
		position="0 0.01 1.5"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"
	></a-entity> -->
</template>
