<script setup>
defineProps({
	x: { type: Number, default: 0 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		gltf-model="#radio"
		:position="`${x} ${y} ${z}`"
		rotation="0 0 0"
	></a-entity>
</template>
