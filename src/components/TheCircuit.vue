<script setup>
import { ref } from "vue";
import { randomHsl } from "../utils/color.js";
import BoxColorChanging from "./BoxColorChanging.vue";
import PortalTeleporter from "./PortalTeleporter.vue";
import ExitDoor from "./ExitDoor.vue";
import { toggleFog } from "../aframe/weather-and-time.js";
import "../aframe/life-like-automaton.js";
import "../aframe/a-ocean.js";
import { createPavement } from "../utils/create-pavement.js";
import Kart from "./Kart.vue";
import Banana from "./Banana.vue";

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

createPavement(startSquare, -2.39, 0, -2);
createPavement(startSquare, -2.39, 0, -52);
createPavement(roadSquare, -2.015, 0, -26.625);
</script>

<template>
	<a-entity
		id="theme-music-play"
		sound="src: #theme-music; autoplay: false; loop: true; volume : 0.025;"
	></a-entity>

	<Kart position="0 0 -10" />
	<Banana position="1 0.3 -3" />

	<a-box
		color="red"
		position="0 0.5 -1"
		rotation="0 0 0"
		height="1"
		width="1"
		depth="1"
	></a-box>

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
	<a-ocean
		color="#00AAFF"
		width="100"
		depth="100"
		density="100"
		speed="0.5"
		position="0 -0.3 -25"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>
	<a-ocean
		color="#0055AA"
		width="100"
		depth="100"
		density="20"
		speed="0.5"
		position="0 -0.3 -25"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>
	<a-ocean
		color="#3377BB"
		width="100"
		depth="100"
		density="20"
		speed="0.5"
		position="0 -0.3 -25"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>
	<!-- <a-light
		type="ambient"
		color="#00A8E5"
		intensity="1"
		decay="2"
		backgroundColor="#DDA090"
		position="0 10 -25"
	>
	</a-light> -->
</template>
