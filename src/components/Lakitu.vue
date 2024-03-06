<script setup>
defineProps({
	x: { type: Number, default: 0 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		gltf-model="#lakitu"
		:position="`${x} ${y} ${z}`"
		rotation="0 10 0"
		:animation__elevate="`property: position; to: ${x} ${
			y + 0.5
		} ${z}; autoplay: true; dir: alternate; loop: true; dur: 1000; easing: easeInOutQuad`"
	>
		<a-plane
			position="-0.4 0 0.3"
			rotation="0 -30 0"
			width="0.5"
			height="0.5"
			color="white"
			side="double"
		>
			<a-text
				id="lakitu-text"
				value="Click on the kart"
				color="black"
				align="center"
				baseline="center"
				rotation="0
			0 0"
				scale="0.1 0.1 0.1"
				wrap-count="8"
			></a-text>
		</a-plane>
	</a-entity>
</template>
