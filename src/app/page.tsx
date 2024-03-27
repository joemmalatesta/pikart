"use client";

import { TextBox } from "@/lib/types";
import BoxExtras from "@/components/textbox";
import Canvas from "@/components/canvas";
import DrawingExtras from "@/components/drawingExtras";
import Toolbar from "@/components/toolbar";
import { useState, useEffect } from "react";

export default function Home() {
	const [activeTool, setActiveTool] = useState<number>(0);
	const [textboxList, SetTextboxList] = useState<TextBox[]>([]);
	const [lineThickness, setLineThickness] = useState<number>(4);
	const [color, setColor] = useState<string>("Black");

	// useEffect(() => {
	// 	console.log('color changed')
	// }, [color])

	return (
		<main className="text-5xl w-screen h-screen">
			{textboxList.map((textbox) => {
				return (
					<p	
						key={textbox.x}
						className={`p-2`}
						style={{
							position: "absolute",
							left: `${textbox.x}px`,
							top: `${textbox.y}px`,
						}}
					>
						{textbox.text}
					</p>
				);
			})}
			{activeTool === 5 ? (
				<div className="absolute inset-0">
					<BoxExtras textboxList={textboxList} setTextboxList={SetTextboxList} />
				</div>
			) : (
				""
			)}
			<Canvas activeToolId={activeTool} color={color} lineThickness={lineThickness} />
			{/* PASS ACTIVE TOOL PROP INTO PAGE */}
			<div className="absolute flex flex-col justify-center bottom-10 right-1/2 translate-x-1/2">
				{activeTool === 3 ? (
					<DrawingExtras color={color} setColor={setColor} lineThickness={lineThickness} setLineThickness={setLineThickness} />
				) : (
					""
				)}
				<Toolbar activeToolId={activeTool} setActiveToolId={setActiveTool} />
			</div>
		</main>
	);
}
