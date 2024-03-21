"use client";

import Canvas from "@/components/canvas";
import Toolbar from "@/components/toolbar";
import { useState, useEffect } from "react";

export default function Home() {
	const [activeTool, setActiveTool] = useState<number>(0);


	return (
		<main className="text-5xl w-screen h-screen">
			<Canvas activeToolId={activeTool} /> 
      {/* PASS ACTIVE TOOL PROP INTO PAGE */}
			<div className="absolute flex justify-center bottom-10 right-1/2 translate-x-1/2">
				<Toolbar activeToolId={activeTool} setActiveToolId={setActiveTool} />
			</div>
		</main>
	);
}
