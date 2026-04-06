import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Item } from "../interfaces/data.interfaces";

const Card = ({ item, color }: { item: Item; color: string }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(item.example);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};
	// console.log(item);
	return (
		<div
			className='card'
			style={{
				background: "var(--bg-card)",
				border: `1px solid ${color}`,
				borderRadius: "8px",
				padding: "1.5rem",
				marginBottom: "1.5rem",
				boxShadow: `0 0 5px ${color}20`,
				transition: "transform 0.2s, box-shadow 0.2s",
				display: "flex",
				flexDirection: "column",
				gap: "0.5rem",
			}}
			onMouseEnter={(e) => {
				e.currentTarget.style.transform = "translateY(-5px)";
				e.currentTarget.style.boxShadow = `0 0 15px ${color}40`;
			}}
			onMouseLeave={(e) => {
				e.currentTarget.style.transform = "none";
				e.currentTarget.style.boxShadow = `0 0 5px ${color}20`;
			}}>
			<h3 style={{ color: color, margin: 0 }}>{item.name}</h3>
			<p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
				{item.description}
			</p>

			<div style={{ marginTop: "1rem" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: "0.5rem",
					}}>
					<span
						style={{
							fontSize: "0.8rem",
							color: "var(--text-muted)",
							fontWeight: "bold",
							textTransform: "uppercase",
						}}>
						Ejemplo
					</span>
					<button
						onClick={handleCopy}
						style={{
							background: color,
							color: "#000",
							border: "none",
							borderRadius: "4px",
							padding: "0.2rem 0.5rem",
							fontSize: "0.7rem",
							cursor: "pointer",
							fontWeight: "bold",
							opacity: 0.9,
							transition: "opacity 0.2s",
						}}
						onMouseEnter={(e) =>
							((e.target as HTMLElement).style.opacity = "1")
						}
						onMouseLeave={(e) =>
							((e.target as HTMLElement).style.opacity = "0.9")
						}>
						{copied ? "Copiado!" : "Copiar"}
					</button>
				</div>
				<SyntaxHighlighter
					language='javascript'
					style={atomDark}
					customStyle={{
						background: "#1e1e1e", // Gris oscuro de Visual Studio
						padding: "1rem",
						borderRadius: "4px",
						fontSize: "0.85rem",
						borderLeft: `2px solid ${color}`,
						margin: 0,
					}}>
					{item.example}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default Card;
