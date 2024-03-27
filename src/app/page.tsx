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

	useEffect(() => {
		console.log(textboxList)
	}, [textboxList])
	
	return (
		<main className="text-5xl w-screen h-screen">
			{textboxList.map((textbox) => {
				return (
					<textarea
					value={textbox.text}
					className={`bg-transparent rounded-md p-2 `}
					style={{
						position: "absolute",
						left: `${textbox.x}px`,
						top: `${textbox.y}px`,
						width: `${textbox.width}px`,
						height: `${textbox.height}px`,
						resize: "none",
					}}
				/>
				)
			})}
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
