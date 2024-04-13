"use client";
import React, { useState } from "react";

interface TextBoxProps {
	shape: string,
	setShape: React.Dispatch<React.SetStateAction<string>>,
}

const ShapeExtras: React.FC<TextBoxProps> = ({shape, setShape}) => {
	// Options for colors and line thicknesses
	const shapes = ["rectangle", "circle", "triangle"];

	return (
        <div className="flex flex-col">
				<div className={`flex justify-center items-center gap-3 text-base ${shape !== 'triangle' ? "mb-5" : ""}`}>
					{shapes.map((shapeOption) => (
						<button
							className={`rounded-lg flex gap-1 ${shape === shapeOption ? "bg-gray-700/60 rounded-full": ""}`}
							key={shapeOption}
							style={{
								backgroundColor: shapeOption.toLowerCase(),
							}}
							onClick={() => setShape(shapeOption)}
						><img src={`/icons/${shapeOption}.svg`} className="w-9 p-1" alt={shapeOption} /></button>
					))}
                    
				</div>
                <p className="text-sm flex justify-center font-semibold opacity-80">{shape === 'triangle' ? "Click each vertex": ""}</p>
                </div>
	);
}
 
export default ShapeExtras;