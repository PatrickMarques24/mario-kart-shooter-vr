import { goombaKilled, gameFinished } from "../store/game.js";

AFRAME.registerComponent("move", {
	schema: {
		posZ: { type: "number", default: 0 },
	},
	init: function () {
		const cameraRig = document.querySelector("#camera-rig");
		const head = document.querySelector("#head");

		let position = this.el.object3D.position;
		let rotation = this.el.object3D.rotation;

		this.data.posZ = position.z;

		this.el.setAttribute("position", `${position.x} ${position.y} ${position.z}`);
		this.el.setAttribute(
			"rotation",
			`${THREE.MathUtils.radToDeg(rotation.x)} ${THREE.MathUtils.radToDeg(
				rotation.y
			)} ${THREE.MathUtils.radToDeg(rotation.z)}`
		);
	},
	tick: function () {
		const cameraRig = document.querySelector("#camera-rig");
		const scorePlane = document.querySelector("#score-plane");
		const scoreText = document.querySelector("#score-text");

		let position = this.el.object3D.position;
		setTimeout(() => {
			if (this.data.posZ > -53) {
				// this.data.posZ -= 0.02;
				this.data.posZ -= 1;

				// Change the Z position
				this.el.setAttribute(
					"position",
					`${position.x} ${position.y} ${this.data.posZ}`
				);
			} else {
				// gameFinished.value = true;
				// alert(gameFinished.value);
				// We cannot more shoot the goombas
				document.querySelectorAll(".goombas").forEach((goomba) => {
					goomba.removeAttribute("clickable");
				});
				cameraRig.setAttribute("movement-controls", "camera: #head;");
				cameraRig.setAttribute("disable-in-vr", "component: movement-controls;");
				scoreText.setAttribute(
					"value",
					`${
						goombaKilled.value > 0 ? "Congratulations ! 🏆" : "Oh no :("
					} \n You killed ${goombaKilled.value} ${
						goombaKilled.value > 1 ? "goombas" : "goomba"
					}!`
				);
				scorePlane.setAttribute("visible", "true");
				document.querySelector("#camera-rig").removeAttribute("bind-position");
				// document.querySelector("#restart-plane").setAttribute("visible", "true");
			}
		}, 3000);
	},
});
