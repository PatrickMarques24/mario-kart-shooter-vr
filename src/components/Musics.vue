<script setup>
defineProps({
	x: { type: Number, default: 0 },
	y: { type: Number, default: 0 },
	z: { type: Number, default: 0 },
});
</script>

<template>
	<a-entity
		id="theme-music-play"
		sound="src: #theme-music; autoplay: false; loop: true; volume : 0.4;"
		bind-position="target: #head"
	></a-entity>
	<a-entity
		id="start"
		sound="src: #start-sound; autoplay: false; loop: false; volume : 1;"
		position="0 0.8 -0.2"
		bind-position="target: #head"
	></a-entity>
	<a-entity
		id="game-over-play"
		sound="src: #game-over-music; autoplay: false; loop: false; volume : 0.8;"
		bind-position="target: #head"
	>
	</a-entity>
	<a-entity
		id="game-play"
		sound="src: #game-music; autoplay: false; loop: true; volume : 0.4;"
		bind-position="target: #head"
	></a-entity>
	<a-entity
		id="victory-play"
		sound="src: #victory-music; autoplay: false; loop: false; volume : 0.4;"
		bind-position="target: #head"
	></a-entity>
</template>
