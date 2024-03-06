import { goombaKilled } from "../store/game.js";

AFRAME.registerComponent("move", {
	schema: {
		posZ: { type: "number", default: 0 },
	},
	init: function () {
		const cameraRig = document.querySelector("#camera-rig");
		const head = document.querySelector("#head");

		this.data.posZ = 0;

		// If we arent in VR, change the position of the camera
		// It's not allowed to move the camera in VR
		if (!AFRAME.utils.device.checkHeadsetConnected()) {
			head.setAttribute("position", `0 0.8 -0.2`);
		}

		// If we are in VR
		if (AFRAME.utils.device.checkHeadsetConnected()) {
			// cameraRig.setAttribute("position", `0 0 -0.2`);
		}

		if (this.el.getAttribute("id") === "mykart") {
			this.el.setAttribute("position", `0 0.274 0`);
			this.el.setAttribute("rotation", `0 180 0`);
		}

		// Disable WASD controls
		cameraRig.removeAttribute("movement-controls");
	},
	tick: function () {
		const cameraRig = document.querySelector("#camera-rig");
		const scorePlane = document.querySelector("#score-plane");
		const scoreText = document.querySelector("#score-text");
		setTimeout(() => {
			if (this.data.posZ > -53) {
				this.data.posZ -= 0.02;
				// this.data.posZ -= 1;

				// If we arent in VR, alert "hello non-VR"
				if (!AFRAME.utils.device.checkHeadsetConnected()) {
					cameraRig.setAttribute("position", `0 0.8 ${this.data.posZ - 0.2}`);
				}

				// If we are in VR, alert "hello VR"
				if (AFRAME.utils.device.checkHeadsetConnected()) {
					cameraRig.setAttribute("position", `0 0 ${this.data.posZ - 0.2}`);
				}

				// if its the kart, its other position
				if (this.el.getAttribute("id") === "mykart") {
					this.el.setAttribute("position", `0 0.274 ${this.data.posZ}`);
				}
			} else {
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
