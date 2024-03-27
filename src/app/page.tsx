"use client";

interface TextBox {
	x: number;
	y: number;
	width: number;
	height: number;
	text: string;
}

import BoxExtras from "@/components/boxExtras";
import Canvas from "@/components/canvas";
import DrawingExtras from "@/components/drawingExtras";
import Toolbar from "@/components/toolbar";
import { useState, useEffect } from "react";

export default function Home() {
	const [activeTool, setActiveTool] = useState<number>(0);
	const [textboxList, SetTextboxList] = useState<TextBox[]>([]);

	return (
		<main className="text-5xl w-screen h-screen">
			{activeTool === 5 ? (
				<div className="absolute inset-0">
					<BoxExtras textboxList={textboxList} setTextboxList={SetTextboxList} />
				</div>
			) : (
				""
			)}
			<Canvas activeToolId={activeTool} />
			{/* PASS ACTIVE TOOL PROP INTO PAGE */}
			<div className="absolute flex justify-center bottom-10 right-1/2 translate-x-1/2">
				<Toolbar activeToolId={activeTool} setActiveToolId={setActiveTool} />
			</div>
			<div className="absolute flex justify-start bottom-1/2 left-10 translate-y-1/2">
				<DrawingExtras />
			</div>
		</main>
	);
}
