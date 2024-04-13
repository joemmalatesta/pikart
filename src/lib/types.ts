export interface SVGIcon {
	id: number;
	name: string;
	svgString: string; //Used for having it as the cursor
	xOffset: number; //setting cursor coordinates -- so the paint comes out of the brush instead of the handle of it :D
	yOffset: number;
}


export interface TextBox {
	x: number;
	y: number;
	width: number;
	height: number;
	text?: string;
}

export interface Circle {
	x: number;
	y: number;
	radius: number;
}

export interface Rectangle {
	x: number;
	y: number;
	width: number;
	height: number;
}

interface Coordinates {
	x: number,
	y: number
}

export interface Triangle {
	v1: Coordinates,
	v2: Coordinates,
	v3: Coordinates,
}