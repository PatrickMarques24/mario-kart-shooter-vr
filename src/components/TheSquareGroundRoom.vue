<script setup>
import PortalTeleporter from "./PortalTeleporter.vue";
import { createPavement } from "../utils/create-pavement.js";

const data = {
	rows: 20,
	cols: 20,
	offset: 0.02,
	square: {
		width: 0.5,
		height: 0.05,
		depth: 0.5,
		color1: "black",
		color2: "white",
	},
};

let altitude = 400;

createPavement(data, altitude, -1, 5);

// For dev purposes
// alert(
// 	`Pour la salle avec ${altitude}, il vous faut une salle d'une taille de \n
// 		${data.rows * (data.square.width + data.offset) - data.offset} en x \n
// 		${data.cols * (data.square.depth + data.offset) - data.offset} en y \n
// 		pour vos carrés`
// );
</script>

<template>
	<a-box id="squareroom" position="0 402 0" depth="10" height="5" width="10">
		>
		<a-light
			type="ambient"
			color="#FFF"
			intensity="0.5"
			decay="2"
			backgroundColor="#FFF"
			position="0 2 0"
		></a-light>
		<PortalTeleporter
			label="Back to main room"
			material="src: #room-gol-out-texture"
			position="0 -0.5 4.9"
			rotation="0 180 0"
			:rot="0"
		/>
	</a-box>

	<!-- Life Cube room navigation mesh -->
	<a-entity
		data-role="nav-mesh"
		geometry="primitive: plane; height: 9.5; width: 9.5"
		position="0 400.01 0"
		rotation="-90 0 0"
		material="color: #555"
		visible="true"
	></a-entity>
</template>
