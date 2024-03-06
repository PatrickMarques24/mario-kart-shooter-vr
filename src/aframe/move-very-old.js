AFRAME.registerComponent("move", {
	schema: {
		posZ: { type: "number", default: 0 },
	},
	init: function () {
		const cameraRig = document.querySelector("#camera-rig");
		const head = document.querySelector("#head");

		this.data.posZ = 0;

		head.setAttribute("position", `0 0.8 -0.2`);
		// this.el.setAttribute("rotation", "0 0 0");
		if (this.el.getAttribute("id") === "mykart") {
			this.el.setAttribute("position", `0 0.274 0`);
			this.el.setAttribute("rotation", `0 180 0`);
		}

		// Disable WASD controls
		cameraRig.removeAttribute("movement-controls");

		// const newnavmesh = document.createElement("a-entity");
		// newnavmesh.setAttribute("id", "newnavmesh");
		// newnavmesh.setAttribute("geometry", "primitive: plane; height: 50; width: 5");
		// newnavmesh.setAttribute("position", "0 0.01 -25");
		// newnavmesh.setAttribute("rotation", "-90 0 0");
		// newnavmesh.setAttribute("data-role", "nav-mesh");
		// newnavmesh.setAttribute("material", "color: red");
		// newnavmesh.setAttribute("visible", "true");
		// document.querySelector("a-scene").appendChild(newnavmesh);

		// id="originalnavmesh"
		// geometry="primitive: plane; height: 5; width: 5"
		// position="0 0.01 1.5"
		// rotation="-90 0 0"
		// data-role="nav-mesh"
		// material="color: blue"
		// visible="true"

		// Remove navmesh with id "originalnavmesh"
		// document.querySelector("#originalnavmesh").remove();
	},
	tick: function () {
		const cameraRig = document.querySelector("#camera-rig");
		const scoreText = document.querySelector("#score-text");
		const head = document.querySelector("#head");
		setTimeout(() => {
			if (this.data.posZ > -53) {
				this.data.posZ -= 0.02;
				// this.data.posZ -= 1;

				this.el.setAttribute("position", `0 0.8 ${this.data.posZ - 0.2}`);

				// if its the kart, its other position
				if (this.el.getAttribute("id") === "mykart") {
					this.el.setAttribute("position", `0 0.274 ${this.data.posZ}`);
				}
			} else {
				// this.el.setAttribute("position", `0 1.63 ${this.data.posZ}`);
				// // if its the kart, its other position
				// if (this.el.getAttribute("id") === "mykart") {
				// 	this.el.setAttribute("position", `0 0.274 ${this.data.posZ}`);
				// }
				cameraRig.setAttribute("movement-controls", "camera: #head;");
				cameraRig.setAttribute("disable-in-vr", "component: movement-controls;");
				scoreText.setAttribute("value", "Game Over");
				scoreText.setAttribute("visible", "true");
			}
		}, 3000);
	},
});
