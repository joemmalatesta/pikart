"use client";
import React, { useState } from "react";

interface TextBoxProps {
	color: string,
	setColor: React.Dispatch<React.SetStateAction<string>>,
  lineThickness: number,
  setLineThickness: React.Dispatch<React.SetStateAction<number>>
}

const DrawingExtras: React.FC<TextBoxProps> = ({color, setColor, lineThickness, setLineThickness}) => {
	// Options for colors and line thicknesses
	const colors = ["Red", "Green", "Blue", "Orange", "Black"];
	const thicknesses = [5, 8, 12];

	return (
		<div className="rounded-xl flex justify-center gap-10 p-1 px-6">
			{/* Color selection */}
			<div className="text-lg flex items-center justify-between gap-2">
				<p className="font-bold">Color</p>
				<div className="flex justify-around items-center gap-2">
					{colors.map((colorOption) => (
						<button
							className={`w-6 h-6 rounded-lg`}
							key={colorOption}
							style={{
								backgroundColor: colorOption.toLowerCase(),
							}}
							onClick={() => setColor(colorOption)}
						></button>
					))}
				</div>
			</div>

			{/* Line thickness selection */}
			<div className="text-lg flex items-center justify-between gap-2">
      <p className="font-bold">Thickness</p>
      <div className="flex items-center justify-center gap-2">
				{thicknesses.map((thicknessOption) => (
					<button className={`rounded-full ${lineThickness === thicknessOption? "opacity-60" : ""} `} style={{width: thicknessOption*2, height: thicknessOption*2, backgroundColor: color.toLowerCase(),}} key={thicknessOption}  onClick={() => setLineThickness(thicknessOption)}>
					</button>
				))}
        </div>
			</div>
		</div>
	);
}
 
export default DrawingExtras;