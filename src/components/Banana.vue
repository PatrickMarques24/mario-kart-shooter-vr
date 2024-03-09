<script setup>
defineProps({
	x: { type: Number, default: 0.3 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		gltf-model="#banana"
		rotation="0 0 0"
		:position="`${x} ${y} ${z}`"
		scale="0.001 0.001 0.001"
		class="banana"
	></a-entity>
</template>
