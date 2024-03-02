import { copyPosition, copyRotation } from "./aframe.js";

export function grabTheThing(evt) {
	// if something already grabbed, switch it
	const el = evt.target;
	const grabbedEl = document.querySelector("[data-grabbed]");
	if (grabbedEl) {
		grabbedEl.removeAttribute("bind-position");
		grabbedEl.removeAttribute("bind-rotation");
		copyPosition(el, grabbedEl);
		copyRotation(el, grabbedEl);
		delete grabbedEl.dataset.grabbed;
		delete grabbedEl.dataset.dropped;
		if (el.dataset.dropped) {
			grabbedEl.dataset.dropped = el.dataset.dropped;
		}
	}

	if (el.sceneEl.is("vr-mode")) {
		el.setAttribute("bind-position", "target: #hand-right");
		el.setAttribute("bind-rotation", "target: #hand-right; convertToLocal: true");
	} else {
		el.setAttribute("bind-position", "target: #dummy-hand-right;");
		el.setAttribute(
			"bind-rotation",
			"target: #dummy-hand-right; convertToLocal: true"
		);
	}
	el.dataset.grabbed = true;
	delete el.dataset.dropped;
}
