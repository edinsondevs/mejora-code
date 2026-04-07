
function NavBarAside({areas, activeTab, setActiveTab, setActiveLevel, setSearchQuery}: {areas: any, activeTab: string, setActiveTab: (tab: string) => void, setActiveLevel: (level: string) => void, setSearchQuery: (query: string) => void}) {
	return (
		<nav className="aside-navbar">
			{areas.map((area: any) => (
				<div
					key={area.id}>
					<h3>
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
								background:
									activeTab === lang.id ?
										`${lang.color}20`
									:	"transparent",
								color:
									activeTab === lang.id ?
										lang.color
									:	"var(--text-muted)",
								fontWeight: activeTab === lang.id ? "bold" : "normal",
								borderLeft:
									activeTab === lang.id ?
										`3px solid ${lang.color}`
									:	"3px solid transparent",
								
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
