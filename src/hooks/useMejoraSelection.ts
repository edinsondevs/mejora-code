import { useState, useMemo } from "react";
import { areas } from "../data/data";
import type { Language, Category } from "../interfaces/data.interfaces";
import { getFilteredCategories } from "../utils/filteredCategories";

function useMejoraSelection() {
	// 1. Obtener datos iniciales (predeterminados)
	const firstArea = areas[0];
	const defaultTech = firstArea?.items[0];

	// Nota: Si no hay data, los estados se inicializarán con valores vacíos o nulos,
	// pero los hooks DEBEN llamarse siempre en el mismo orden.
	const [activeTab, setActiveTab] = useState<string>(defaultTech?.id || "");
	const [activeLevel, setActiveLevel] = useState<string>("Todos");
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
	const [searchQuery, setSearchQuery] = useState<string>("");

	// 2. Ayuda para encontrar el objeto de idioma activo en la estructura anidada
	const activeLang = useMemo<Language | undefined>(() => {
		if (!activeTab) return defaultTech;
		for (const area of areas) {
			const found = area.items.find((item) => item.id === activeTab);
			if (found) return found;
		}
		return defaultTech;
	}, [activeTab, defaultTech]);

	// 3. Filtrado de categorías
	const filteredCategories = useMemo<Category[]>(() => {
		if (!activeLang) return [];
		return getFilteredCategories(
			activeLang.categories,
			activeLevel,
			searchQuery,
		);
	}, [activeLang, activeLevel, searchQuery]);

	// 4. Extraer niveles únicos
	const currentLevels = useMemo(() => {
		if (!activeLang) return ["Todos"];
		return ["Todos", ...activeLang.categories.map((cat) => cat.name)];
	}, [activeLang]);

	// Retornamos SIEMPRE el mismo tipo de objeto
	return {
		activeTab,
		setActiveTab,
		activeLevel,
		setActiveLevel,
		isSidebarOpen,
		setIsSidebarOpen,
		searchQuery,
		setSearchQuery,
		activeLang,
		filteredCategories,
		currentLevels,
		hasData: !!defaultTech, // Bandera para que App sepa si mostrar error o no
	};
}

export default useMejoraSelection;