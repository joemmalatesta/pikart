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
	// Check if we are currently drawing.
	const [isDrawing, setIsDrawing] = useState<boolean>(false);

	// This function will be called by the Canvas component
	const handleIsDrawingChange = (drawing: boolean) => {
	  setIsDrawing(drawing);
	};

	const clearTextboxList = () => {
		SetTextboxList([])
	  };
	
	  useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
		  if (event.key === 'c' && activeTool === 5) { // Press 'C' to clear the canvas
			clearTextboxList();
		  }
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	  }, [activeTool]);

	return (
		<main className="text-5xl w-screen h-screen">
			{textboxList.map((textbox) => {
				return (
					<p	
						key={textbox.x}
						className={`p-2 ${(activeTool === 2 || activeTool === 5) && isDrawing  ? '-z-10' : "z-10"}`}
						style={{
							position: "absolute",
							left: `${textbox.x}px`,
							top: `${textbox.y}px`,
							width: `${textbox.width}px`
						}}
					>
						{textbox.text}
					</p>
				);
			})}
			{activeTool === 4 ? (
				<div className="absolute inset-0">
					<BoxExtras textboxList={textboxList} setTextboxList={SetTextboxList} />
				</div>
			) : (
				""
			)}
			<Canvas activeToolId={activeTool} color={color} lineThickness={lineThickness} onIsDrawingChange={handleIsDrawingChange} />
			{/* PASS ACTIVE TOOL PROP INTO PAGE */}
			<div className="absolute flex flex-col justify-center bottom-8 right-1/2 translate-x-1/2">
				{activeTool === 2 ? (
					<DrawingExtras color={color} setColor={setColor} lineThickness={lineThickness} setLineThickness={setLineThickness} />
				) : (
					""
				)}
				{
					activeTool === 5 ? 	<p className="text-center font-semibold opacity-80 text-sm">"C" to Clear Canvas</p> : ""
				}
				<Toolbar activeToolId={activeTool} setActiveToolId={setActiveTool} />
				
				
			</div>
		</main>
	);
}
