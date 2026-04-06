
function NavBarAside({areas, activeTab, setActiveTab, setActiveLevel, setSearchQuery}: {areas: any, activeTab: string, setActiveTab: (tab: string) => void, setActiveLevel: (level: string) => void, setSearchQuery: (query: string) => void}) {
	return (
		<nav style={{ flex: 1, padding: "1rem" }}>
			{areas.map((area: any) => (
				<div
					key={area.id}
					style={{ marginBottom: "1.5rem" }}>
					<h3
						style={{
							color: "var(--text-muted)",
							fontSize: "0.8rem",
							textTransform: "uppercase",
							letterSpacing: "1px",
							marginBottom: "0.8rem",
							paddingLeft: "0.5rem",
							borderLeft: "2px solid var(--neon-purple)",
						}}>
						{area.name}
					</h3>
					{area.items.map((lang: any) => (
						<button
							key={lang.id}
							onClick={() => {
								setActiveTab(lang.id);
								setActiveLevel("Todos");
								setSearchQuery("");
							}}
							style={{
								width: "100%",
								textAlign: "left",
								background:
									activeTab === lang.id ?
										`${lang.color}20`
									:	"transparent",
								color:
									activeTab === lang.id ?
										lang.color
									:	"var(--text-muted)",
								border: "none",
								padding: "0.6rem 0.8rem",
								borderRadius: "4px",
								cursor: "pointer",
								fontWeight:
									activeTab === lang.id ? "bold" : "normal",
								display: "flex",
								alignItems: "center",
								gap: "0.5rem",
								marginBottom: "0.2rem",
								borderLeft:
									activeTab === lang.id ?
										`3px solid ${lang.color}`
									:	"3px solid transparent",
								transition: "all 0.2s",
							}}>
							{lang.name}
						</button>
					))}
				</div>
			))}
		</nav>
	);
}

export default NavBarAside;
