import { Aside, Main, ButtonHamburger } from "./components";
import useMejoraSelection from "./hooks/useMejoraSelection";

function App() {
	const {
		isSidebarOpen,
		setIsSidebarOpen,
		activeTab,
		setActiveTab,
		activeLevel,
		setActiveLevel,
		searchQuery,
		setSearchQuery,
		activeLang,
		filteredCategories,
		currentLevels,
		hasData,
	} = useMejoraSelection();

	if (!hasData || !activeLang) {
		return <div>No hay datos disponibles</div>;
	}

	return (
		<div
			style={{
				display: "flex",
				minHeight: "100vh",
			}}>
			{/* Botón para alternar la barra lateral (Flotante cuando está cerrada) */}
			{!isSidebarOpen && (
				<ButtonHamburger
					setIsSidebarOpen={setIsSidebarOpen}
					mode='open'
				/>
			)}

			{/* Barra lateral */}
			<Aside
				isSidebarOpen={isSidebarOpen}
				setIsSidebarOpen={setIsSidebarOpen}
				setActiveTab={setActiveTab}
				setActiveLevel={setActiveLevel}
				setSearchQuery={setSearchQuery}
				activeTab={activeTab}
			/>
			{/* Contenido principal */}
			<Main
				activeLang={activeLang}
				activeLevel={activeLevel}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				setActiveLevel={setActiveLevel}
				filteredCategories={filteredCategories}
				currentLevels={currentLevels}
			/>
		</div>
	);
}

export default App;
