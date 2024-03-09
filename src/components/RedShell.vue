<script setup>
defineProps({
	x: { type: Number, default: 0 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		gltf-model="#redshell"
		scale="0.002 0.002 0.002"
		:position="`${x} ${y} ${z}`"
		rotation="0 0 0"
		class="red-shell"
	></a-entity>
</template>
