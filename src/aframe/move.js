import { gameFinished } from "../store/game.js";

AFRAME.registerComponent("move", {
	schema: {
		posZ: { type: "number", default: 0 },
	},
	init: function () {
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
		let position = this.el.object3D.position;
		setTimeout(() => {
			if (this.data.posZ > -53) {
				this.data.posZ -= 0.016;

				// For development purpose (to test the end of the game faster)
				// this.data.posZ -= 1;
				// this.data.posZ -= 0.025;

				// Change the Z position
				this.el.setAttribute(
					"position",
					`${position.x} ${position.y} ${this.data.posZ}`
				);
			} else {
				gameFinished.value = true;
			}

			// Timeout for the countdown before moving
		}, 3000);
	},
	pause: function () {
		this.data.posZ = 0;
	},
});
