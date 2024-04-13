import React, { useState } from "react";
import { Triangle } from "@/lib/types"; // This type should define properties for a triangle.

interface TriangleProps {
  triangleList: Triangle[];
  setTriangleList: React.Dispatch<React.SetStateAction<Triangle[]>>;
}

const DrawTriangle: React.FC<TriangleProps> = ({ triangleList, setTriangleList }) => {
  const [vertices, setVertices] = useState({ v1: { x: 0, y: 0 }, v2: { x: 0, y: 0 }, v3: { x: 0, y: 0 } });
  const [dragStage, setDragStage] = useState(0); // 0 = no vertex set, 1 = first vertex set, 2 = second vertex set

  const handleMouseDown = (event: React.MouseEvent) => {
    const { clientX: x, clientY: y } = event;
    if (dragStage === 0) {
      setVertices({ v1: { x, y }, v2: { x, y }, v3: { x, y } });
      setDragStage(1);
    } else if (dragStage === 1) {
      setVertices((prev) => ({ ...prev, v2: { x, y } }));
      setDragStage(2);
    } else if (dragStage === 2) {
      setVertices((prev) => ({ ...prev, v3: { x, y } }));
      setTriangleList([...triangleList, { v1: vertices.v1, v2: vertices.v2, v3: { x, y } }]);
      setDragStage(0);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (dragStage === 2) {
      const { clientX: x, clientY: y } = event;
      setVertices((prev) => ({ ...prev, v3: { x, y } }));
    }
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      style={{ height: "100vh", position: "relative", cursor: "crosshair" }}
    >
      {dragStage > 0 && (
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <polygon
            points={`${vertices.v1.x},${vertices.v1.y} ${vertices.v2.x},${vertices.v2.y} ${vertices.v3.x},${vertices.v3.y}`}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      )}
    </div>
  );
};

export default DrawTriangle;
