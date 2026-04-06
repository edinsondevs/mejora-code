import Card from './Card';
import { ButtonLinkDocs, InputSearch } from './shared';
import ButtonLevels from './shared/ButtonLevels';
import { Category } from '../interfaces/data.interfaces';

function Main({ activeLang, activeLevel, searchQuery, setSearchQuery, setActiveLevel, filteredCategories, currentLevels }: any) {

  return (
		<main style={{ flex: 1, padding: "2rem", width: "100%" }}>
			<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
				<header
					style={{
						marginBottom: "2rem",
						borderBottom: `1px solid ${activeLang.color}40`,
						paddingBottom: "2rem",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "1rem",
					}}>
					<div>
						<h1
							style={{
								fontSize: "2.5rem",
								color: activeLang.color,
								marginBottom: "0.5rem",
							}}>
							{activeLang.name}
						</h1>
						<p style={{ color: "var(--text-muted)" }}>
							{activeLang.description}
						</p>
					</div>
					<div
						style={{
							display: "flex",
							gap: "1rem",
							alignItems: "center",
						}}>
						{/* Entrada de búsqueda */}
						<InputSearch activeLang={activeLang} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

						{/* Botón de documentación */}
						<ButtonLinkDocs activeLang={activeLang} />
					</div>
				</header>

				{/* Filtros de categoría (Dinámicos basados en el contenido) */}
				<div
					style={{
						marginBottom: "2rem",
						display: "flex",
						gap: "1rem",
						flexWrap: "wrap",
					}}>
					{currentLevels.map((level: string) => (
						<ButtonLevels activeLang={activeLang} activeLevel={activeLevel} setActiveLevel={setActiveLevel} level={level} />
					))}
				</div>

				{/* Categorías y Tarjetas */}
				<div
					style={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fill, minmax(350px, 1fr))",
						gap: "2rem",
					}}>
					{filteredCategories.length > 0 ?
						filteredCategories.map((cat: Category, idx: number) => (
							<div
								key={idx}
								style={{
									marginBottom: "2rem",
									gridColumn: "1 / -1",
								}}>
								<h3
									style={{
										color: "#fff",
										marginBottom: "1.5rem",
										fontSize: "1.5rem",
										display: "flex",
										alignItems: "center",
										gap: "1rem",
									}}>
									<span
										style={{
											height: "2px",
											width: "30px",
											background: activeLang.color,
										}}></span>
									{cat.name}
								</h3>
								<div
									style={{
										display: "grid",
										gridTemplateColumns:
											"repeat(auto-fill, minmax(300px, 1fr))",
										gap: "1.5rem",
									}}>
									{cat.items.map((item, i) => (
										<Card
											key={i}
											item={item}
											color={activeLang.color}
										/>
									))}
								</div>
							</div>
						))
					:	<p
							style={{
								color: "var(--text-muted)",
								gridColumn: "1 / -1",
								textAlign: "center",
								padding: "2rem",
							}}>
							{searchQuery ?
								`No se encontraron resultados para "${searchQuery}"`
							:	`No hay contenido en esta categoría.`}
						</p>
					}
				</div>
			</div>
		</main>
  );
}

export default Main