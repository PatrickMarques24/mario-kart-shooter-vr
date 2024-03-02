AFRAME.registerComponent("move-kart", {
	schema: {
		posZ: { type: "number", default: 0 },
	},
	init: function () {},
	tick: function () {
		this.data.posZ -= 0.01;

		this.el.setAttribute("position", `0 0 ${this.data.posZ}`);
	},
});
