export const createPavement = (
	data,
	x = 0,
	y = 0,
	z = 0,
	minHeight = 0,
	maxHeight = 0,
	iPutGoombaOnIt = false
) => {
	const aScene = document.querySelector("a-scene");
	const tileFloor = document.createElement("a-entity");
	for (let i = 0; i < data.cols; i++) {
		for (let j = 0; j < data.rows; j++) {
			let squareAltitude = Math.random() * (maxHeight - minHeight) + minHeight;

			const myTile = document.createElement("a-box");
			myTile.setAttribute("width", data.square.width);
			myTile.setAttribute("height", data.square.height);
			myTile.setAttribute("depth", data.square.depth);

			// color the tile, one of 2 is black other is white
			myTile.setAttribute(
				"color",
				`${(i + j) % 2 === 0 ? data.square.color1 : data.square.color2}`
			);

			// position the tile, we will use the offset to space them out
			myTile.setAttribute(
				"position",
				`${i * (data.square.width + data.offset)} ${squareAltitude} ${
					j * (data.square.width + data.offset)
				}`
			);
			tileFloor.appendChild(myTile);
		}
	}

	// position the pavement
	tileFloor.setAttribute("position", `${x} ${y} ${z}`);

	aScene.appendChild(tileFloor);
};
