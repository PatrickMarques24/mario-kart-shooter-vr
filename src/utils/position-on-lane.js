const VR = AFRAME.utils.device.checkHeadsetConnected() ? true : false;

export function positionOnLeftAndRightTheMiddleLane(
	numberOfLanes = 5,
	widthOfRoad = 5,
	widthOfLane = 1
) {
	const maValeurAleatoire = Math.floor(Math.random() * (5 - 1 + 1) + 1);
	switch (maValeurAleatoire) {
		case 1:
			// IF VR headset don't put the item too far from the player
			if (VR) {
				return -1;
				break;
			}
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
			// IF VR headset don't put the item too far from the player
			if (VR) {
				return 1;
				break;
			}
			return 2;
			break;
		default:
			return 0;
	}
}

export function positionZOnTheLane() {
	return Math.random() * 45 - 49;
}
