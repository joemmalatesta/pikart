import { tools } from "@/lib/tools";
import { useState, useEffect } from "react";

interface ToolbarProps {
	activeToolId: number;
	setActiveToolId: (id: number) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ setActiveToolId }) => {
	const [active, setActive] = useState(0);


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
		</main>
	);
};

export default Toolbar;
