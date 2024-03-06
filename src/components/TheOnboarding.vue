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
</script>

<template>
	<div id="onboarding" v-if="showOnboarding">
		<div>
			<h1>Mario Kart VR</h1>
			<p v-if="!loaded">loading...</p>
			<button v-if="loaded" @click="enterScene()">Enter scene</button>
			<div class="licences">
				<section>
					<h4>Movement modes support</h4>
					<ul>
						<li>
							Desktop – Keyboard for move (WASD or Arrows keys) + Mouse for look
							control (Drag and drop)
						</li>
						<li>
							Mobile – 1x Finger touch to go forward + 2x Fingers touch to go backward
							+ Gaze cursor for click
						</li>
						<li>
							VR Headset – AR/VR walk + Teleport (Grip for grab and laser for click) +
							Gaze cursor for click
						</li>
					</ul>
				</section>
				<dl>
					<dt>
						<i>Included technologies</i>
					</dt>
					<dt>
						<a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and
							animation-mixer</a>
					</dt>
					<dd>
						<a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT
							License</a>
					</dd>

					<dt>
						<a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
					</dt>
					<dd>
						<a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT
							License</a>
					</dd>

					<dt>
						<a href="https://github.com/jure/aframe-blink-controls/"
							target="_blank">aframe-blink-controls</a>
					</dt>
					<dd>
						<a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT
							License</a>
					</dd>

					<dt>
						<a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
							target="_blank">simple-navmesh-constraint</a>
					</dt>
					<dd>By Ada Rose Cannon under MIT License</dd>

					<dt>
						<a href="https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1"
							target="_blank">Physic room model</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/tekuto1s" target="_blank">tekuto1s</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>

					<dt>
						<i>Included 3D assets</i>
					</dt>
<dt>
						<a href="https://skfb.ly/6TuMD" target="_blank">Go Kart</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/SamuelTea" target="_blank">Samuel Thomas</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>

					<dt>
						<a href="https://skfb.ly/6EvGw" target="_blank">Banana Peel (Mario Kart)</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/Yanez-Designs" target="_blank">Yanez Designs</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>

					<dt>
						<a href="https://skfb.ly/6zRWI" target="_blank">Red Koopa Troopa Shell (Super Mario Bros)</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/Yanez-Designs" target="_blank">Yanez Designs</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>

					<dt>
						<a href="https://skfb.ly/oyQUJ" target="_blank">super mario star</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/gaelinix" target="_blank">gaelinix</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>

					<dt>
						<a href="https://skfb.ly/oLEQV" target="_blank">Goomba</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/tirrellclark.75" target="_blank">tirrellclark.75</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>
					<dt>
						<a href="https://skfb.ly/6zQG9" target="_blank">Brick Block (Super Mario Bros)</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/Yanez-Designs" target="_blank">Yanez Designs</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>

					<dt>
						<a href="https://skfb.ly/optKO" target="_blank">DS DSi - Mario Kart DS - Mario Circuit</a>
					</dt>
					<dd>
						by
						<a href="https://sketchfab.com/lonewolf1898" target="_blank">lonewolf1898</a>
						under
						<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
					</dd>
					<dd>
								Modifications : Finish line deleted
							</dd>

					<dt>
						<i>Included audio</i>
							<dt>
							<a href="https://opengameart.org/content/countdown" target="_blank">Countdown</a>
							</dt>
							<dd>
								by
								<a href="https://opengameart.org/users/qubodup" target="_blank">qubodup</a>
								under
								<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>
							</dd>
							<dd>
								Modifications : Added the files together in the order, countdown-a, countdown-a, countdown-b.
							</dd>

							<dt>
							<a href="https://opengameart.org/content/starfishario" target="_blank">Starfishario</a>
							</dt>
							<dd>
								by
								<a href="https://opengameart.org/users/iamoneabe" target="_blank">iamoneabe</a>
								under
								<a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC 0</a>
							</dd>

							<dt>
							<a href="https://skfb.ly/oBoZp" target="_blank">Lakitu</a>
							</dt>
							<dd>
								by
								<a href="https://sketchfab.com/XenMC" target="_blank">Xen</a>
								under
								<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
							</dd>

					</dt>
				</dl>
			</div>
		</div>
	</div>
</template>

<style scoped>
h1 {
	font-size: 1.5rem;
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

#onboarding>* {
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
</style>
