"use client";

import { tools } from "@/lib/tools";
import { useEffect, useRef, useState } from "react";
interface CanvasProps {
	activeToolId: number;
}

const Canvas: React.FC<CanvasProps> = ({ activeToolId }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [isDrawing, setIsDrawing] = useState<boolean>(false);
	const [cursorURL, setCursorURL] = useState<string>("");
	let activeTool = tools[activeToolId]


	useEffect(() => {
		// Check if window is defined to avoid SSR issues, even though 'use client' should handle it
		if (typeof window !== "undefined") {
			const base64EncodedSVG = window.btoa(activeTool.svgString);
			setCursorURL(`data:image/svg+xml;base64,${base64EncodedSVG}`);
		}
	}, [activeTool]);

	//   In the future, this should all be moved to hooks or extra files and called when the tool is selected...
	const startDrawing = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		const { offsetX, offsetY } = event.nativeEvent;
		const ctx = canvasRef.current?.getContext("2d");
		if (ctx) {
			ctx.beginPath();
			ctx.moveTo(offsetX, offsetY);
			setIsDrawing(true);
		}
	};

	const draw = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
		if (!isDrawing) {
			return;
		}
		const { offsetX, offsetY } = event.nativeEvent;
		const ctx = canvasRef.current?.getContext("2d");
		if (ctx) {
			ctx.lineTo(offsetX, offsetY);
			ctx.stroke();
		}
	};

	const stopDrawing = () => {
		const ctx = canvasRef.current?.getContext("2d");
		if (ctx) {
			ctx.closePath();
			setIsDrawing(false);
		}
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			const ctx = canvas.getContext("2d");
			if (ctx) {
				// MAKE THESE PROPS
				ctx.strokeStyle = "black";
				ctx.lineWidth = 10;
			}
		}

		// Adjust canvas size on window resize
		const resizeCanvas = () => {
			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
		};
		window.addEventListener("resize", resizeCanvas);

		return () => window.removeEventListener("resize", resizeCanvas);
	}, []);

	return (
		<canvas
			ref={canvasRef}
			onMouseDown={startDrawing}
			onMouseMove={draw}
			onMouseUp={stopDrawing}
			onMouseOut={stopDrawing}
			style={{
				display: "block",
				backgroundColor: "white",
				width: "100%",
				height: "100%",
				cursor: cursorURL ? `url('${cursorURL}') 6 23, auto` : "auto",
			}}
		/>
	);
};

export default Canvas;
