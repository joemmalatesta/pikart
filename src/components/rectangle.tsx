import React, { useState } from "react";
import { Rectangle } from "@/lib/types"; // This type should define properties for a rectangle.

interface RectangleProps {
  rectangleList: Rectangle[];
  setRectangleList: React.Dispatch<React.SetStateAction<Rectangle[]>>;
}

const DrawRectangle: React.FC<RectangleProps> = ({ rectangleList, setRectangleList }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging) return;
    const width = event.clientX - startPosition.x;
    const height = event.clientY - startPosition.y;
    setDimensions({ width, height });
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const newRectangle: Rectangle = {
      // Define the properties based on your Rectangle type
      x: startPosition.x,
      y: startPosition.y,
      width: dimensions.width,
      height: dimensions.height
    };
    console.log('new rectangle made...')
    setRectangleList([...rectangleList, newRectangle]);
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
          <rect
            x={Math.min(startPosition.x, startPosition.x + dimensions.width)}
            y={Math.min(startPosition.y, startPosition.y + dimensions.height)}
            width={Math.abs(dimensions.width)}
            height={Math.abs(dimensions.height)}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      )}
    </div>
  );
};

export default DrawRectangle;
