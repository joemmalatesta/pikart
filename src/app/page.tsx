"use client";

import { Circle, Rectangle, TextBox, Triangle } from "@/lib/types";
import BoxExtras from "@/components/textbox";
import Canvas from "@/components/canvas";
import DrawingExtras from "@/components/drawingExtras";
import Toolbar from "@/components/toolbar";
import { useState, useEffect } from "react";
import DrawCircle from "@/components/circle";
import DrawRectangle from "@/components/rectangle";
import DrawTriangle from "@/components/triangle";
import ShapeExtras from "@/components/shapeExtras";

export default function Home() {
	const [activeTool, setActiveTool] = useState<number>(0);
	const [textboxList, SetTextboxList] = useState<TextBox[]>([]);
	const [circleList, setCircleList] = useState<Circle[]>([]);
	const [rectList, setRectList] = useState<Rectangle[]>([]);
	const [triangleList, setTriangleList] = useState<Triangle[]>([]);
	const [lineThickness, setLineThickness] = useState<number>(4);
	const [color, setColor] = useState<string>("Black");
	const [shape, setShape] = useState<string>("rectangle");
	// Check if we are currently drawing.
	const [isDrawing, setIsDrawing] = useState<boolean>(false);

	// This function will be called by the Canvas component
	const handleIsDrawingChange = (drawing: boolean) => {
		setIsDrawing(drawing);
	};

	const clearTextboxList = () => {
		SetTextboxList([]);
		setCircleList([]);
		setRectList([]);
		setTriangleList([]);
	};

	useEffect(() => {
		console.log(shape)
	}, [shape])


	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "c" && activeTool === 5) {
				// Press 'C' to clear the canvas
				clearTextboxList();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activeTool]);

	return (
		<main className="text-5xl w-screen h-screen">
			{/* Add text and shapes back on screen */}
			{textboxList.map((textbox) => {
				return (
					<p
						key={textbox.x}
						className={`p-2 ${(activeTool === 2 || activeTool === 5) && isDrawing ? "-z-10" : "z-10"}`}
						style={{
							position: "absolute",
							left: `${textbox.x}px`,
							top: `${textbox.y}px`,
							width: `${textbox.width}px`,
						}}
					>
						{textbox.text}
					</p>
				);
			})}
			{circleList.map((circle) => {
				return (
					<svg
					key={circle.x}
					style={{
					  position: "absolute",
					  top: 0,
					  left: 0,
					  width: "100%",
					  height: "100%",
					  pointerEvents: "none", // Ignore pointer events
					}}
				  >
					<circle
					  cx={circle.x}
					  cy={circle.y}
					  r={circle.radius}
					  stroke="black"
					  strokeWidth="2"
					  fill="transparent"
					/>
				  </svg>
				);
			})}
			{rectList.map((rectangle) => {
				return (
					<svg
					key={rectangle.x}
					style={{
					  position: "absolute",
					  top: 0,
					  left: 0,
					  width: "100%",
					  height: "100%",
					  pointerEvents: "none", // Ignore pointer events
					}}
				  >
					<rect
					  x={rectangle.x}
					  y={rectangle.y}
					  width={rectangle.width}
					  height={rectangle.height}
					  stroke="black"
					  strokeWidth="2"
					  fill="transparent"
					/>
				  </svg>
				);
			})}
			{triangleList.map((triangle) => {
				return (
					<svg
					key={triangle.v1.x}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none", // Ignore pointer events
          }}
        >
          <polygon
            points={`${triangle.v1.x},${triangle.v1.y} ${triangle.v2.x},${triangle.v2.y} ${triangle.v3.x},${triangle.v3.y}`}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
				);
			})}
			{activeTool === 4 ? (
				<div className="absolute inset-0">
					<BoxExtras textboxList={textboxList} setTextboxList={SetTextboxList} />
				</div>
			) : activeTool === 3 ? (
				<div className="absolute inset-0">
					{shape === 'rectangle' ? <DrawRectangle rectangleList={rectList} setRectangleList={setRectList} /> :
					shape === 'circle' ? <DrawCircle circleList={circleList} setCircleList={setCircleList} /> :
					<DrawTriangle triangleList={triangleList} setTriangleList={setTriangleList} />} 
					
					
					
					
				</div>
			) : (
				""
			)}
			<Canvas activeToolId={activeTool} color={color} lineThickness={lineThickness} onIsDrawingChange={handleIsDrawingChange} />
			{/* PASS ACTIVE TOOL PROP INTO PAGE */}
			<div className="absolute flex flex-col justify-center bottom-8 right-1/2 translate-x-1/2">
				{activeTool === 2 ? 
					<DrawingExtras color={color} setColor={setColor} lineThickness={lineThickness} setLineThickness={setLineThickness} />
					
				 : activeTool === 3 ? 
					<ShapeExtras shape={shape} setShape={setShape} />  :
					activeTool === 0 || activeTool === 1 ? <p className="text-center font-semibold opacity-80 text-base mb-1">Tool coming soon...</p>:
					activeTool === 5 ? <p className="text-center font-semibold opacity-80 text-base mb-1">"C" to Clear Canvas</p> :
					""
				}

				<Toolbar activeToolId={activeTool} setActiveToolId={setActiveTool} />
				<p className="text-xs font-medium flex justify-center py-1 gap-1">Created by <a className="underline underline-offset-2 hover:underline-offset-4 transition-all" href="https://joemmalatesta.com">Joe Malatesta</a></p>
			</div>
		</main>
	);
}
