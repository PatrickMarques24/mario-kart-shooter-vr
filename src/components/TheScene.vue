<script setup>
import { ref } from "vue";

import TheCameraRig from "./TheCameraRig.vue";
// import TheMainRoom from "./TheMainRoom.vue";
// import TheLifeCubeRoom from "./TheLifeCubeRoom.vue";
// import ThePhysicRoom from "./ThePhysicRoom.vue";
// import TheOceanRoom from "./TheOceanRoom.vue";
// import TheSquareGroundRoom from "./TheSquareGroundRoom.vue";
import TheCircuit from "./TheCircuit.vue";
import TheWaitingRoom from "./TheWaitingRoom.vue";

import "../aframe/move.js";

defineProps({
	scale: Number,
	overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
	<a-scene
		background="color: skyblue;"
		:webxr="`
      requiredFeatures: local-floor;
      referenceSpaceType: local-floor;
      optionalFeatures: dom-overlay;
      overlayElement: ${overlaySelector};
    `"
		xr-mode-ui="XRMode: xr"
		physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
	>
		<a-assets @loaded="allAssetsLoaded = true">
			<!-- Assets -->
			<a-asset-item id="kart" src="assets/kart.glb"></a-asset-item>
			<a-asset-item id="banana" src="assets/banana-peel.glb"></a-asset-item>
			<a-asset-item id="redshell" src="assets/red-shell.glb"></a-asset-item>
			<a-asset-item id="star" src="assets/star.glb"></a-asset-item>
			<a-asset-item id="goomba" src="assets/goomba.glb"></a-asset-item>
			<a-asset-item id="brick" src="assets/brick.glb"></a-asset-item>
			<a-asset-item id="circuit" src="assets/circuit.gltf"></a-asset-item>
			<a-asset-item id="lakitu" src="assets/lakitu.glb"></a-asset-item>

			<!-- Audio -->
			<a-asset-item
				id="theme-music"
				response-type="arraybuffer"
				src="assets/sounds/main.mp3"
				preload="auto"
			></a-asset-item>
			<a-asset-item
				id="start-sound"
				response-type="arraybuffer"
				src="assets/sounds/start.mp3"
				preload="auto"
			></a-asset-item>

			<!-- Images -->
			<!--<img
				id="room-physic-out-texture"
				:src="`assets/main-room-from-physic-room.png`"
			/>-->
		</a-assets>

		<template v-if="allAssetsLoaded">
			<TheCircuit />
			<TheWaitingRoom />
		</template>

		<TheCameraRig />
		<!-- <TheCameraRig position="0 0 -10" /> -->
	</a-scene>
</template>
