<script setup>
defineProps({
	x: { type: Number, default: 0 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		gltf-model="#banana"
		rotation="0 180 0"
		scale="0.001 0.001 0.001"
	></a-entity>
</template>
