import React, { useEffect, useRef, useState } from "react";
import { Circle } from "@/lib/types"; // This type should define properties for a circle.

interface CircleProps {
  circleList: Circle[];
  setCircleList: React.Dispatch<React.SetStateAction<Circle[]>>;
}

const DrawCircle: React.FC<CircleProps> = ({ circleList, setCircleList }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [centerPosition, setCenterPosition] = useState({ x: 0, y: 0 });
  const [radius, setRadius] = useState(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setCenterPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const currentRadius = Math.sqrt(Math.pow(event.clientX - centerPosition.x, 2) + Math.pow(event.clientY - centerPosition.y, 2));
    setRadius(currentRadius);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const newCircle: Circle = {
      // Define the properties based on your Circle type
      x: centerPosition.x,
      y: centerPosition.y,
      radius: radius
    };
    console.log('new circle made...')
    setCircleList([...circleList, newCircle]);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ height: "100vh", position: "relative", cursor: "crosshair" }}
    >
      {isDragging && (
        <svg
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
            cx={centerPosition.x}
            cy={centerPosition.y}
            r={radius}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      )}
    </div>
  );
};

export default DrawCircle;
