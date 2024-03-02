<script>
import "../aframe/clickable.js";
import "../aframe/teleport-camera-rig.js";
</script>
<template>
	<a-box
		height="5"
		width="5"
		depth="5"
		position="0 -7.5 0"
		side="double"
		color="black"
	>
		<a-text
			value="In this game, you need to throw items on the goombas to get points. You can grab items by clicking on them, the difficulty will change the amount of items available to throw. Good luck!"
			position="0 0 -2.4"
			rotation="0 0 0"
			color="white"
			align="center"
			width="4"
		></a-text>
		<a-box
			opacity="0.5"
			width="1"
			height="1"
			depth="1"
			position="-1 -1 -2.4"
			clickable
			:teleport-camera-rig="`
      x: 0;
      y: 0;
      z: 0;
      handleRotation: false};
      rot: 0;
    `"
			visible="false"
		></a-box>
		<a-text
			value="Easy"
			position="-1 -1 -2.4"
			rotation="0 0 0"
			color="#AAFFAA"
			align="center"
			width="1.5"
		></a-text>

		<a-box
			width="1"
			height="1"
			depth="1"
			position="0 -1 -2.4"
			clickable
			:teleport-camera-rig="`
      x: 0;
      y: 0;
      z: 0;
      handleRotation: false};
      rot: 0;
    `"
			visible="false"
		></a-box>
		<a-text
			value="Medium"
			position="0 -1 -2.4"
			rotation="0 0 0"
			color="white"
			align="center"
			width="1.5"
		></a-text>

		<a-box
			width="1"
			height="1"
			depth="1"
			position="1 -1 -2.4"
			clickable
			:teleport-camera-rig="`
      x: 0;
      y: 0;
      z: 0;
      handleRotation: false};
      rot: 0;
    `"
			visible="false"
		></a-box>
		<a-text
			value="Hard"
			position="1 -1 -2.4"
			rotation="0 0 0"
			color="red"
			align="center"
			width="1.5"
		></a-text>
	</a-box>

	<a-entity
		geometry="primitive: plane; height: 4; width: 4"
		position="0 -9.99 0"
		rotation="-90 0 0"
		data-role="nav-mesh"
		material="color: blue"
		visible="true"
	></a-entity>
</template>
<style scoped></style>
