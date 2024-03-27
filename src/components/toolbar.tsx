import { tools } from "@/lib/tools";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";


interface ToolbarProps {
	activeToolId: number;
	setActiveToolId: (id: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ setActiveToolId }) => {
	const [active, setActive] = useState(0);
	const takeScreenshot = () => {
		html2canvas(document.body).then((canvas) => {
		  // Convert the canvas to a data URL
		  const base64image = canvas.toDataURL("image/png");
		  // Open a new blank window
		  const newWindow = window.open('', '_blank');
		  if (newWindow) {
			// Set the contents of the new window to display the image
			newWindow.document.write(`<img src="${base64image}" width="100%" />`);
			newWindow.document.title = "Screenshot";
		  }
		});
	  };


	return (
		<main className="ring-2 rounded-xl ring-gray-800/70 bg-gray-700/60 flex justify-between gap-10 p-1 px-6">
			{tools.map((tool) => {
				return (
					<button
						key={tool.id}
						className={`w-12 h-12 flex justify-center items-center transition-all duration-200 ${
							active === tool.id ? "bg-gray-700/70 rounded-full w-12" : ""
						}`}
						onClick={() => {
							setActiveToolId(tool.id);
              setActive(tool.id)
						}}
					>
						<img className="w-7" src={`icons/${tool.name}.svg`} alt={tool.name} />
					</button>
				);
			})}
			<button onClick={takeScreenshot} className="w-12 h-12 flex justify-center items-center transition-all duration-200">
				<img className="w-7" src="icons/export.svg" alt="Export" />
			</button>
		</main>
	);
};

export default Toolbar;
