<script setup>
defineProps({
	x: { type: Number, default: 0.256 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		gltf-model="#star"
		rotation="0 0 0"
		:position="`${x} ${y} ${z}`"
		scale="0.1 0.1 0.1"
		animation__rotate="property: rotation; to: 0 360 0; autoplay: true; loop: true; dur: 5000; ease : easeInOutQuad"
		class="star"
	></a-entity>
</template>
