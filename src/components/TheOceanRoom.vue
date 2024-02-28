<script setup>
import PortalTeleporter from "./PortalTeleporter.vue";
import "../aframe/a-ocean.js";
import { toggleFog } from "../aframe/weather-and-time.js";
</script>

<template>
	<a-box
		position="0 302 0"
		depth="25"
		height="4"
		width="25"
		background="#AAFFFF"
	>
		<a-light
			type="ambient"
			color="#00A8E5"
			intensity="1"
			decay="2"
			backgroundColor="#DDA090"
			position="0 2 0"
		>
		</a-light>
		<PortalTeleporter
			label="Quit Ocean"
			material="src: #room-gol-out-texture"
			position="0 -0.5 1.9"
			rotation="0 180 0"
			:rot="90"
			@click="toggleFog(false)"
		/>
		<!-- 
		mappings: { width: 'ocean.width', depth: 'ocean.depth', density:
		'ocean.density', amplitude: 'ocean.amplitude', amplitudeVariance:
		'ocean.amplitudeVariance', speed: 'ocean.speed', speedVariance:
		'ocean.speedVariance', color: 'ocean.color', opacity: 'ocean.opacity' } }); -->

		<a-ocean
			color="#92E2E2"
			width="25"
			depth="25"
			density="20"
			speed="0.5"
			position="0 -1.8 0"
			amplitudeVariance="0.05"
			amplitude="0"
		></a-ocean>
		<a-ocean
			color="#90E0E0"
			width="25"
			depth="25"
			density="20"
			speed="0.5"
			position="0 -1.8 0"
			amplitudeVariance="0.05"
			amplitude="0"
		></a-ocean>
		<a-ocean
			color="#95E5E5"
			width="25"
			depth="25"
			density="20"
			speed="0.5"
			position="0 -1.8 0"
			amplitudeVariance="0.05"
			amplitude="0"
		></a-ocean>
	</a-box>

	<!-- Life Cube room navigation mesh -->
	<a-entity
		data-role="nav-mesh"
		geometry="primitive: plane; height: 14; width: 24"
		position="0 300.01 -5.3,"
		rotation="-90 0 0"
		material="color: white"
		visible="true"
	>
	</a-entity>
</template>
