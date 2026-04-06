import { Category } from '../interfaces/data.interfaces';
import Card from './Card';

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
						<a
							href={activeLang.docLink}
							target='_blank'
							rel='noopener noreferrer'
							style={{
								padding: "0 20px",
								borderRadius: "4px",
								whiteSpace: "nowrap",
								color: activeLang.color,
								fontWeight: "bold",
								opacity: 0.9,
								transition: "opacity 0.2s",
							}}>
							Ver Documentación →
						</a>
						{/* Entrada de búsqueda */}
						<input
							type='text'
							placeholder={`Buscar en ${activeLang.name}...`}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							style={{
								padding: "0.6rem 1rem",
								borderRadius: "20px",
								border: "1px solid var(--text-muted)",
								background: "rgba(255,255,255,0.05)",
								color: "#fff",
								width: "250px",
								outline: "none",
							}}
							onFocus={(e) =>
								(e.target.style.borderColor = activeLang.color)
							}
							onBlur={(e) =>
								(e.target.style.borderColor =
									"var(--text-muted)")
							}
						/>

						<a
							href={activeLang.docLink}
							target='_blank'
							rel='noopener noreferrer'
							style={{
								padding: "0.5rem 1rem",
								border: `1px solid ${activeLang.color}`,
								borderRadius: "4px",
								fontSize: "0.9rem",
								color: activeLang.color,
								whiteSpace: "nowrap",
								textDecoration: "none",
							}}>
							Docs Oficiales ↗
						</a>
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
						<button
							key={level}
							onClick={() => setActiveLevel(level)}
							style={{
								background:
									activeLevel === level ?
										activeLang.color
									:	"transparent",
								color:
									activeLevel === level ? "#000" : (
										"var(--text-muted)"
									),
								border: `1px solid ${
									activeLevel === level ?
										activeLang.color
									:	"#333"
								}`,
								padding: "0.5rem 1.5rem",
								borderRadius: "20px",
								cursor: "pointer",
								fontWeight:
									activeLevel === level ? "bold" : "normal",
								transition: "all 0.2s",
							}}>
							{level}
						</button>
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