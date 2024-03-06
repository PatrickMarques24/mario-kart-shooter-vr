<script setup>
import { vModelRadio } from "vue";
import "../aframe/clickable.js";
import "../aframe/teleport-camera-rig.js";
import { gameDiff } from "../store/game.js";

function changeDifficulty(difficulty) {
	gameDiff.value = difficulty;
}

let coordonnees = `
  x: 0;
  y: 0;
  z: 0;
  handleRotation: true;
  rot: 0;
`;

// If VR
if (AFRAME.utils.device.checkHeadsetConnected()) {
	coordonnees = `
	x: 0;
	y: 0;
	z: -0.2;
	handleRotation: true;
	rot: 0;
  `;
}

let music = true;

function toggleMusic() {
	music = !music;

	const theme = document.querySelector("#theme-music-play");
	const start = document.querySelector("#start");

	if (music) {
		theme.setAttribute(
			"sound",
			"src: #theme-music; autoplay: true; loop: true; volume : 0.4;"
		);
		start.setAttribute("sound", "src: #start-sound; loop: false; volume : 1;");
	} else {
		theme.setAttribute(
			"sound",
			"src: #theme-music; autoplay: true; loop: true; volume : 0;"
		);
		start.setAttribute("sound", "src: #start-sound;  loop: false; volume : 0;");
	}
}
</script>

<template>
	<a-entity height="5" width="8" depth="8" position="0 -97.5 0">
		<a-text
			value="In this game, you need to throw items on the goombas to get points. You can grab items by clicking on them, the difficulty will change the amount of items available to throw. Good luck!"
			position="0 0 -3"
			rotation="0 0 0"
			color="black"
			align="center"
			width="4"
			side="double"
		></a-text>

		<!-- EASY -->
		<a-box
			opacity="0.8"
			side="double"
			width="0.5"
			height="0.5"
			depth="0.5"
			color="#AAFFAA"
			position="-1 -1.3 -3"
			clickable
			@click="changeDifficulty('easy')"
			visible="true"
			:teleport-camera-rig="`${coordonnees}`"
		></a-box>
		<a-text
			value="Easy"
			position="-1 -1.3 -2.75"
			rotation="0 0 0"
			color="#FFF"
			align="center"
			width="1.5"
			side="double"
		></a-text>

		<!-- MEDIUM -->
		<a-box
			opacity="0.8"
			side="double"
			width="0.5"
			height="0.5"
			depth="0.5"
			color="#AAAAFF"
			position="0 -1.3 -3"
			clickable
			@click="changeDifficulty('medium')"
			visible="true"
			:teleport-camera-rig="`${coordonnees}`"
		></a-box>
		<a-text
			value="Medium"
			position="0 -1.3 -2.75"
			rotation="0 0 0"
			color="#FFF"
			align="center"
			width="1.5"
			side="double"
		></a-text>

		<!-- HARD -->
		<a-box
			opacity="0.8"
			side="double"
			width="0.5"
			height="0.5"
			depth="0.5"
			color="#FF5555"
			position="1 -1.3 -3"
			clickable
			@click="changeDifficulty('hard')"
			visible="true"
			:teleport-camera-rig="`${coordonnees}`"
		></a-box>
		<a-text
			value="Hard"
			position="1 -1.3 -2.75"
			rotation="0 0 0"
			color="#FFF"
			align="center"
			width="1.5"
			side="double"
		></a-text>

		<!-- Sound -->
		<a-box
			opacity="0.8"
			side="double"
			width="3"
			height="0.5"
			depth="0.5"
			color="white"
			position="0 -2.3 -3"
			clickable
			@click="toggleMusic()"
			visible="true"
		></a-box>
		<a-text
			value="Toggle sound"
			position="0 -2.3 -2.75"
			rotation="0 0 0"
			color="#000"
			align="center"
			width="1.5"
			side="double"
		></a-text>
	</a-entity>

	<a-ocean
		color="#00AAFF"
		width="100"
		depth="100"
		density="100"
		speed="0.5"
		position="0 -101 0"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>
	<a-ocean
		color="#0055AA"
		width="100"
		depth="100"
		density="20"
		speed="0.5"
		position="0 -101 0"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>
	<a-ocean
		color="#3377BB"
		width="100"
		depth="100"
		density="20"
		speed="0.5"
		position="0 -101 0"
		amplitudeVariance="0.05"
		amplitude="0"
	></a-ocean>

	<a-entity
		gltf-model="#circuit"
		position="6.2 -108 18"
		scale="0.4 0.4 0.4"
		rotation="0 125 0"
	>
	</a-entity>

	<!-- <a-entity
		geometry="primitive: plane; height: 7; width: 4.2"
		position="0 -100.1 0"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="false"
	></a-entity> -->
</template>

<style scoped></style>
