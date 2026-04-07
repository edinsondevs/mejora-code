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

	return (
		<div
			className='card'
			style={{
				border: `1px solid ${color}`,
				boxShadow: `0 0 5px ${color}20`,
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
				<div className="card-example-header">
					<span>
						Ejemplo
					</span>
					<button
						onClick={handleCopy}
						style={{ background: color }}
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
						borderLeft: `2px solid ${color}`,
						padding: "1rem",
						borderRadius: "4px",
						fontSize: "0.85rem",
						margin: 0,
					}}
					>
					{item.example}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default Card;
