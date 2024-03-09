<script setup>
import Radio from "./Radio.vue";
import "../aframe/clickable.js";
import "../aframe/teleport-camera-rig.js";
import { gameDiff } from "../store/game.js";

const theme = document.querySelector("#theme-music-play");
const start = document.querySelector("#start");
const gamePlay = document.querySelector("#game-play");
const victoryPlay = document.querySelector("#victory-play");
const gameOverPlay = document.querySelector("#game-over-play");

const myradio = document.querySelector("#myradio");

let coordonnees = "";

// If VR
const VR = AFRAME.utils.device.checkHeadsetConnected() ? true : false;
if (VR) {
	coordonnees = `
	x: 0;
	y: 0.8;
	z: -0.4;
	handleRotation: true;
	rot: 0;
  	`;
} else {
	coordonnees = `
	x: 0;
  	y: 0.8;
  	z: 0;
  	handleRotation: true;
	rot: 0;
	`;
}

let music = true;

function toggleMusic() {
	music = !music;

	const allMusic = [theme, start, gamePlay, victoryPlay, gameOverPlay];

	if (music) {
		theme.setAttribute("sound", "volume : 0.4;");
		start.setAttribute("sound", "volume : 1;");
		gamePlay.setAttribute("sound", "volume : 0.4;");
		victoryPlay.setAttribute("sound", "volume : 0.4;");
		gameOverPlay.setAttribute("sound", "volume : 1;");
		document.querySelector("#myradio").setAttribute("scale", "0.2 0.2 0.2");
		document
			.querySelector("#myradio")
			.setAttribute(
				"animation",
				"property: scale; to: 0.22 0.22 0.22; dur: 250; dir: alternate; loop: true"
			);
	} else {
		allMusic.forEach((music) => {
			music.setAttribute("sound", "volume: 0;");
		});

		// I don't know why, but if I put myradio.removeAt... it doesn't work
		document.querySelector("#myradio").removeAttribute("animation");
	}
}
</script>

<template>
	<a-entity height="5" width="8" depth="8" position="0 -97.5 0">
		<a-text
			value="In this game, you need to throw items on the goombas to get points. You can grab items by clicking on them, the difficulty will change the amount of items available to throw. Good luck!"
			position="0 0 -3.25"
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
			position="-1 -1.3 -3.25"
			clickable
			@click="gameDiff = 'easy'"
			visible="true"
			:teleport-camera-rig="`${coordonnees}`"
		></a-box>
		<a-text
			value="Easy"
			position="-1 -1.3 -3"
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
			position="0 -1.3 -3.25"
			clickable
			@click="gameDiff = 'medium'"
			visible="true"
			:teleport-camera-rig="`${coordonnees}`"
		></a-box>
		<a-text
			value="Medium"
			position="0 -1.3 -3"
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
			position="1 -1.3 -3.25"
			clickable
			@click="gameDiff = 'hard'"
			visible="true"
			:teleport-camera-rig="`${coordonnees}`"
		></a-box>
		<a-text
			value="Hard"
			position="1 -1.3 -3"
			rotation="0 0 0"
			color="#FFF"
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

	<Radio
		id="myradio"
		:x="1"
		:y="-100"
		:z="-2"
		scale="0.2 0.2 0.2"
		rotation="0 -115 0"
		@click="toggleMusic"
		clickable
		animation="property: scale; to: 0.22 0.22 0.22; dur: 250; dir: alternate; loop: true"
	/>

	<a-entity
		gltf-model="#circuit"
		position="6.2 -108 18"
		scale="0.4 0.4 0.4"
		rotation="0 125 0"
	>
	</a-entity>

	<a-entity
		geometry="primitive: plane; height: 7; width: 4.2"
		position="0 -100.1 0"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="false"
	></a-entity>
</template>

<style scoped></style>
