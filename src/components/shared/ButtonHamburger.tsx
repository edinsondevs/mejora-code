import { CSSProperties } from "react";

interface ButtonHamburgerProps {
	setIsSidebarOpen: (open: boolean) => void;
	mode: "open" | "close";
}

function ButtonHamburger({ setIsSidebarOpen, mode }: ButtonHamburgerProps) {
	const isOpenMode = mode === "open";

	const buttonStyles: CSSProperties = isOpenMode ?
		{
			position: "fixed",
			top: "1rem",
			left: "1rem",
			zIndex: 100,
			background: "var(--bg-card)",
			border: "1px solid var(--neon-cyan)",
			color: "var(--neon-cyan)",
			padding: "0.5rem",
			borderRadius: "4px",
			cursor: "pointer",
		}
	:	{
			background: "transparent",
			border: "none",
			color: "var(--text-muted)",
			fontSize: "1.2rem",
			cursor: "pointer",
		};

	return (
		<button
			onClick={() => setIsSidebarOpen(isOpenMode ? true : false)}
			style={buttonStyles}>
			{isOpenMode ? "☰" : "✕"}
		</button>
	);
}

export default ButtonHamburger;