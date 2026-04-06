
function ButtonLevels({activeLang, activeLevel, setActiveLevel, level}: {activeLang: any, activeLevel: string, setActiveLevel: (level: string) => void, level: string}) {
  return (
		<button
			key={level}
			onClick={() => setActiveLevel(level)}
			style={{
				background:
					activeLevel === level ? activeLang.color : "transparent",
				color: activeLevel === level ? "#000" : "var(--text-muted)",
				border: `1px solid ${
					activeLevel === level ? activeLang.color : "#333"
				}`,
				padding: "0.5rem 1.5rem",
				borderRadius: "20px",
				cursor: "pointer",
				fontWeight: activeLevel === level ? "bold" : "normal",
				transition: "all 0.2s",
			}}>
			{level}
		</button>
  );
}

export default ButtonLevels