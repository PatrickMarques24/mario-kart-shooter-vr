export const toggleFog = (boolean, hex = "00A8E5", near = 1, far = 15) => {
	if (boolean) {
		document
			.querySelector("a-scene")
			.setAttribute(
				"fog",
				`type: linear; color: #${hex}; near: ${near}; far: ${far};`
			);
	} else {
		document.querySelector("a-scene").removeAttribute("fog");
	}
};
