<script setup>
defineProps({
	x: { type: Number, default: 0 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		gltf-model="#kart"
		rotation="0 0 0"
		scale="0.005 0.005 0.005"
	></a-entity>
	<!-- :position="`${x} ${y} ${z}`" -->
</template>
