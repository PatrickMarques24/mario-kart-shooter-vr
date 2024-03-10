// If VR
const VR =
	AFRAME.utils.device.checkHeadsetConnected() && !AFRAME.utils.device.isMobile()
		? true
		: false;

export function positionOnLeftAndRightTheMiddleLane(
	numberOfLanes = 5,
	widthOfRoad = 5,
	widthOfLane = 1
) {
	const maValeurAleatoire = Math.floor(Math.random() * (5 - 1 + 1) + 1);

	// If VR, it's closer
	if (VR) {
		switch (maValeurAleatoire) {
			case 1:
				return -0.85;
				break;
			case 2:
				return -0.85;
				break;
			case 3:
				return Math.random() < 0.5 ? -0.85 : 0.85;
				break;
			case 4:
				return 0.85;
				break;
			case 5:
				return 0.85;
				break;
			default:
				return 0;
		}
	}

	switch (maValeurAleatoire) {
		case 1:
			return -2;
			break;
		case 2:
			return -1;
			break;
		case 3:
			return Math.random() < 0.5 ? -1 : 1;
			break;
		case 4:
			return 1;
			break;
		case 5:
			return 2;
			break;
		default:
			return 0;
	}
}

export function positionZOnTheLane() {
	return Math.random() * 45 - 49;
}
