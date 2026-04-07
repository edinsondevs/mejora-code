import Card from "../Card";
import { ButtonLinkDocs, InputSearch } from "../shared";
import ButtonLevels from "../shared/ButtonLevels";
import { Category } from "../../interfaces/data.interfaces";
import MainCards from "./MainCards";

function Main({
	activeLang,
	activeLevel,
	searchQuery,
	setSearchQuery,
	setActiveLevel,
	filteredCategories,
	currentLevels,
}: any) {
	return (
		<main className='main'>
			<div className='main-container'>
				<header
					style={{ borderBottom: `1px solid ${activeLang.color}40` }}>
					<div>
						<h1 style={{ color: activeLang.color }}>
							{activeLang.name}
						</h1>
						<p style={{ color: "var(--text-muted)" }}>
							{activeLang.description}
						</p>
					</div>
					<div className='main-input-search'>
						<InputSearch
							activeLang={activeLang}
							searchQuery={searchQuery}
							setSearchQuery={setSearchQuery}
						/>
						<ButtonLinkDocs activeLang={activeLang} />
					</div>
				</header>

				{/* Filtros de categoría (Dinámicos basados en el contenido) */}
				<div className='main-filters-chips'>
					{currentLevels.map((level: string) => (
						<ButtonLevels
							activeLang={activeLang}
							activeLevel={activeLevel}
							setActiveLevel={setActiveLevel}
							level={level}
						/>
					))}
				</div>

				{/* Categorías y Tarjetas */}
				<MainCards
					filteredCategories={filteredCategories}
					activeLang={activeLang}
					searchQuery={searchQuery}
				/>
			</div>
		</main>
	);
}

export default Main;
