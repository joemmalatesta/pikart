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