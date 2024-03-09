<script setup>
import { ref } from "vue";

defineProps({
	loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
	showOnboarding.value = false;
	if (
		AFRAME.utils.device.checkHeadsetConnected() &&
		!AFRAME.utils.device.isMobile()
	) {
		document.querySelector("a-scene").enterVR();
	}
	document.querySelector("#theme-music-play").components.sound.playSound();
}

// Définition des technologies incluses
const technologyAssets = [
	{
		name: "aframe-extras controls and animation-mixer",
		link: "https://github.com/c-frame/aframe-extras",
		author: {
			name: "c-frame",
			link: "https://github.com/c-frame",
		},
		license: {
			name: "MIT License",
			link: "https://github.com/c-frame/aframe-extras/blob/master/LICENSE",
		},
		modifications: null,
	},
	{
		name: "aframe physx",
		link: "https://github.com/c-frame/physx",
		author: {
			name: "c-frame",
			link: "https://github.com/c-frame",
		},
		license: {
			name: "MIT License",
			link: "https://github.com/c-frame/aframe-extras/blob/master/LICENSE",
		},
		modifications: null,
	},
	{
		name: "aframe-blink-controls",
		link: "https://github.com/jure/aframe-blink-controls/",
		author: {
			name: "c-frame",
			link: "https://github.com/c-frame",
		},
		license: {
			name: "MIT License",
			link: "https://github.com/jure/aframe-blink-controls/blob/main/LICENSE",
		},
		modifications: null,
	},
	{
		name: "simple-navmesh-constraint",
		link: "https://github.com/AdaRoseCannon/aframe-xr-boilerplate",
		author: "Ada Rose Cannon",
		authorLink: "https://github.com/AdaRoseCannon",
		license: {
			name: "MIT License",
			link:
				"https://github.com/AdaRoseCannon/aframe-xr-boilerplate/blob/glitch/LICENSE",
		},
	},
];

// Définition des assets 3D inclus
const asset3D = [
	{
		name: "Go Kart",
		link: "https://skfb.ly/6TuMD",
		author: {
			name: "Samuel Thomas",
			link: "https://sketchfab.com/SamuelTea",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},

		modifications: null,
	},
	{
		name: "Banana Peel (Mario Kart)",
		link: "https://skfb.ly/6EvGw",
		author: {
			name: "Yanez Designs",
			link: "https://sketchfab.com/Yanez-Designs",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
		modifications: null,
	},
	{
		name: "Red Koopa Troopa Shell (Super Mario Bros)",
		link: "https://skfb.ly/6zRWI",
		author: {
			name: "Yanez Designs",
			link: "https://sketchfab.com/Yanez-Designs",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
		modifications: null,
	},
	{
		name: "super mario star",
		link: "https://skfb.ly/oyQUJ",
		author: {
			name: "gaelinix",
			link: "https://sketchfab.com/gaelinix",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
		modifications: null,
	},
	{
		name: "Goomba",
		link: "https://skfb.ly/oLEQV",
		author: {
			name: "tirrellclark.75",
			link: "https://sketchfab.com/tirrellclark.75",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
		modifications: null,
	},
	{
		name: "Brick Block (Super Mario Bros)",
		link: "https://skfb.ly/6zQG9",
		author: {
			name: "Yanez Designs",
			link: "https://sketchfab.com/Yanez-Designs",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
		modifications: null,
	},
	{
		name: "DS DSi - Mario Kart DS - Mario Circuit",
		link: "https://skfb.ly/optKO",
		author: {
			name: "lonewolf1898",
			link: "https://sketchfab.com/lonewolf1898",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
		modifications: "Finish line removed and replaced with road texture.",
	},
	{
		name: "Lakitu",
		link: "https://skfb.ly/oBoZp",
		author: {
			name: "Xen",
			link: "https://sketchfab.com/XenMC",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
		modifications:
			"A white board has been added to allow Lakitu to display text.",
	},
	{
		name: "Project Zomboid - Radio",
		link: "https://skfb.ly/oPvCA",
		author: {
			name: "Phartam",
			link: "https://sketchfab.com/Phartam",
		},
		license: {
			name: "CC BY 4.0",
			link: "https://creativecommons.org/licenses/by/4.0/",
		},
	},
];

// Définition des audios inclus
const audioAssets = [
	{
		name: "Countdown",
		link: "https://opengameart.org/content/countdown",
		author: {
			name: "qubodup",
			link: "https://opengameart.org/users/qubodup",
		},
		license: {
			name: "CC BY 3.0",
			link: "https://creativecommons.org/licenses/by/3.0/",
		},
		modifications:
			"Added the files together in the following order: countdown-a, countdown-a, countdown-b.",
	},
	{
		name: "Starfishario",
		link: "https://opengameart.org/content/starfishario",
		author: {
			name: "iamoneabe",
			link: "https://opengameart.org/users/iamoneabe",
		},
		license: {
			name: "CC 0",
			link: "https://creativecommons.org/publicdomain/zero/1.0/",
		},
		modifications: null,
	},
	{
		name: "Victory!",
		link: "https://opengameart.org/content/victory-1",
		author: {
			name: "Viktor Kraus",
			link: "https://opengameart.org/users/viktor-kraus",
		},
		license: {
			name: "CC BY 3.0",
			link: "https://creativecommons.org/licenses/by/3.0/",
		},
		modifications: "Cut to 2:38, fade in at the beginning.",
	},
	{
		name: "The Fun Run! - Day 3",
		link: "https://opengameart.org/content/the-fun-run-day-3",
		author: {
			name: "Zane Little Music",
			link: "https://opengameart.org/users/zane-little-music",
		},
		license: {
			name: "CC 0",
			link: "https://creativecommons.org/publicdomain/zero/1.0/",
		},
		modifications: "Cut to 1:10.",
	},
	{
		name: "Game Over",
		link: "https://opengameart.org/content/game-over",
		author: {
			name: "Kistol",
			link: "https://opengameart.org/users/kistol",
		},
		license: {
			name: "CC 0",
			link: "https://creativecommons.org/publicdomain/zero/1.0/",
		},
		modifications: "Cut by 0.4 second.",
	},
];

const imageAssets = [
	{
		name: "les frères Mario",
		link: "https://www.favicon.cc/?action=icon&file_id=137640",
		author: {
			name: "marcojetson",
			link: "https://www.favicon.cc/?action=icon_list&user_id=36881",
		},
		license: {
			name: "CC 0",
			link: "https://creativecommons.org/publicdomain/zero/1.0/",
		},
		modifications: "Added a VR headset to Mario's head and two controllers.",
	},
];
</script>

<template>
	<div id="onboarding" v-if="showOnboarding">
		<div>
			<h1>Mario Kart Shooter VR</h1>
			<p v-if="!loaded">loading...</p>
			<button v-if="loaded" @click="enterScene()">Enter scene</button>
			<div class="licences">
				<section>
					<h2 class="warning">Warning</h2>
					<p class="warning">
						For the best VR experience for headset users, sit comfortably on the floor
						or on a bed, adjusting the virtual floor height to match your seating
						level. Use your headset's dedicated command to recenter your view before
						clicking start.
					</p>
					<p class="warning">
						Also, make sure you have enough space and avoid standing up or sitting
						down once the game has started.
					</p>
				</section>
				<section>
					<h2>Movement modes support</h2>
					<p>
						Desktop <br />
						Keyboard for move (WASD or Arrows keys) + Mouse for look control (Drag and
						drop)
					</p>

					<p>
						Mobile
						<br />
						1x Finger touch to go forward + 2x Fingers touch to go backward + Gaze
						cursor for click
					</p>

					<p>
						VR Headset
						<br />
						AR/VR walk + Teleport (Grip for grab and laser for click) + Gaze cursor
						for click
					</p>
				</section>
				<section>
					<dl>
						<dt>
							<h2>Included</h2>
							<h3 v-if="technologyAssets.length == 1" class="asset-type">
								Technology
							</h3>
							<h3 v-if="technologyAssets.length > 1" class="asset-type">
								Technologies
							</h3>
						</dt>
						<template v-for="(asset, index) in technologyAssets" :key="index">
							<dt>
								<a :href="asset.link" target="_blank">{{ asset.name }}</a>
							</dt>
							<dd>
								by
								<a :href="asset.author.link" target="_blank">{{ asset.author.name }}</a>
								under
								<a :href="asset.license.link" target="_blank">{{
									asset.license.name
								}}</a>
							</dd>
							<dd v-if="asset.modifications">
								Modifications : {{ asset.modifications }}
							</dd>
						</template>

						<dt>
							<h3 v-if="asset3D.length == 1" class="asset-type">3D asset</h3>
							<h3 v-if="asset3D.length > 1" class="asset-type">3D assets</h3>
						</dt>

						<!-- Affichage dynamique des données des assets 3D -->
						<template v-for="(asset, index) in asset3D" :key="index">
							<dt>
								<a :href="asset.link" target="_blank">{{ asset.name }}</a>
							</dt>
							<dd>
								by
								<a :href="asset.author.link" target="_blank">{{ asset.author.name }}</a>
								under
								<a :href="asset.license.link" target="_blank">{{
									asset.license.name
								}}</a>
							</dd>
							<dd v-if="asset.modifications">
								Modifications : {{ asset.modifications }}
							</dd>
						</template>

						<dt>
							<h3 v-if="audioAssets.length == 1" class="asset-type">Audio</h3>
							<h3 v-if="audioAssets.length > 1" class="asset-type">Audios</h3>
						</dt>

						<!-- Affichage dynamique des données des assets audio -->
						<template v-for="(asset, index) in audioAssets" :key="index">
							<dt>
								<a :href="asset.link" target="_blank">{{ asset.name }}</a>
							</dt>
							<dd>
								by
								<a :href="asset.author.link" target="_blank">{{ asset.author.name }}</a>
								under
								<a :href="asset.license.link" target="_blank">{{
									asset.license.name
								}}</a>
							</dd>
							<dd v-if="asset.modifications">
								Modifications : {{ asset.modifications }}
							</dd>
						</template>

						<dt>
							<h3 v-if="imageAssets.length == 1" class="asset-type">Image</h3>
							<h3 v-if="imageAssets.length > 1" class="asset-type">Images</h3>
						</dt>

						<!-- Affichage dynamique des données des images -->
						<template v-for="(asset, index) in imageAssets" :key="index">
							<dt>
								<a :href="asset.link" target="_blank">{{ asset.name }}</a>
							</dt>
							<dd>
								by
								<a :href="asset.author.link" target="_blank">{{ asset.author.name }}</a>
								under
								<a :href="asset.license.link" target="_blank">{{
									asset.license.name
								}}</a>
							</dd>
							<dd v-if="asset.modifications">
								Modifications : {{ asset.modifications }}
							</dd>
						</template>
					</dl>
				</section>
				<section>
					<h2>Attributions</h2>
					<p>
						This work is created by
						<a target="_blank" href="https://github.com/PatrickMarques24"
							>Patrick Marques Meliciano</a
						>
						based on code provided by
						<a target="_blank" href="https://github.com/Chabloz">Nicolas Chabloz</a>
						during a
						<a href="https://github.com/Chabloz/VR-A-Frame">VR course at HEIG-VD</a>.
					</p>
				</section>
			</div>
		</div>
	</div>
</template>

<style scoped>
.warning {
	color: #ffc107;
}

h1 {
	font-size: 1.5rem;
}

h2 {
	font-size: 1.3rem;
}

a {
	color: #eee;
	text-decoration: none;
}

.licences {
	margin: 2rem 0;
	font-size: 1rem;
	text-align: left;
}

.licences dt {
	padding-top: 0.75rem;
	font-size: 0.9rem;
	font-weight: bold;
}

.licences dd {
	margin-left: 0;
	font-size: 0.8rem;
}

#onboarding {
	position: absolute;
	top: 0;
	left: 0;
	background-color: #333;
	color: #ccc;
	width: 100vw;
	height: 100vh;
	padding: 1rem;
	font-family: monospace;
	z-index: 10000;
	overflow: auto;
}

#onboarding > * {
	margin: 0 auto;
	max-width: 50rem;
	width: calc(100vw - 10rem);
	text-align: center;
	border-radius: 0.3rem;
	padding: 1rem;
	font-size: 1.3rem;
}

#onboarding button {
	font-size: 1.3rem;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
	background-color: white;
	color: black;
	border: none;
	cursor: pointer;
}

/* .asset-type {
	margin-top: 20px;
} */
</style>
