import React, { TextareaHTMLAttributes, useEffect, useRef, useState } from "react";
interface TextBox {
	x: number,
	y: number,
	width: number,
	height: number,
	text: string
}

interface TextBoxProps {
	textboxList: TextBox[],
	setTextboxList: any,
}

const DrawTextarea: React.FC<TextBoxProps> = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
	const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });
	const [textarea, setTextarea] = useState(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null); // Create a ref for the textarea

    useEffect(() => {
        // Automatically focus the textarea once it is rendered
        if (textarea && textareaRef.current) {
          textareaRef.current.focus();
        }
      }, [textarea]); // Dependency array includes textarea, so this runs every time a new textarea is created

	const handleMouseDown = (event: MouseEvent) => {
		setIsDragging(true);
		const startPos = { x: event.clientX, y: event.clientY };
		setStartPosition(startPos);
		setCurrentPosition(startPos); // Initialize current position to start position
	};

	const handleMouseMove = (event: MouseEvent) => {
		if (!isDragging) return;
		setCurrentPosition({ x: event.clientX, y: event.clientY });
	};

	const handleMouseUp = () => {
		setIsDragging(false);
		setTextarea({
			x: Math.min(startPosition.x, currentPosition.x),
			y: Math.min(startPosition.y, currentPosition.y),
			width: Math.abs(currentPosition.x - startPosition.x),
			height: Math.abs(currentPosition.y - startPosition.y),
		});
	};

	// Calculate the dimensions and position for the outline div
	const outlineStyle = {
		position: "absolute",
		left: `${Math.min(startPosition.x, currentPosition.x)}px`,
		top: `${Math.min(startPosition.y, currentPosition.y)}px`,
		width: `${Math.abs(currentPosition.x - startPosition.x)}px`,
		height: `${Math.abs(currentPosition.y - startPosition.y)}px`,
		border: "2px dashed #000", // Dashed border for the outline
		pointerEvents: "none", // Ignore pointer events
	};

	return (
		<div
			onMouseDown={handleMouseDown}
			onMouseMove={handleMouseMove}
			onMouseUp={handleMouseUp}
			onMouseLeave={handleMouseUp} // Consider mouse leaving as ending the drag
			style={{ height: "100vh", position: "relative", cursor: "crosshair" }}
		>
			{isDragging && <div style={outlineStyle} />}
			{textarea && (
				<textarea
                    ref={textareaRef}
					className={`bg-transparent outline-1 rounded-md outline p-2 `}
					style={{
						position: "absolute",
						left: `${textarea.x}px`,
						top: `${textarea.y}px`,
						width: `${textarea.width}px`,
						height: `${textarea.height}px`,
						resize: "none",
					}}
				/>
			)}
		</div>
	);
}

export default DrawTextarea;
