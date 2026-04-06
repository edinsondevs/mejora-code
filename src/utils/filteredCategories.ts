import type { Category } from "../interfaces/data.interfaces";

export const getFilteredCategories = (
	categories: Category[],
	activeLevel: string,
	searchQuery: string,
): Category[] => {
	// 1. Clon profundo (usando structuredClone para seguridad de tipos)
	let filtered: Category[] = structuredClone(categories);

	// 2. Filtrar por Nivel (si no es "Todos")
	if (activeLevel !== "Todos") {
		filtered = filtered.filter(
			(cat) => cat.name.includes(activeLevel) || cat.name === activeLevel,
		);
	}

	// 3. Filtrar por búsqueda (si hay query)
	if (searchQuery.trim()) {
		const query = searchQuery.toLowerCase();
		filtered = filtered
			.map((cat) => ({
				...cat,
				items: cat.items.filter(
					(item) =>
						item.name.toLowerCase().includes(query) ||
						item.description.toLowerCase().includes(query),
				),
			}))
			.filter((cat) => cat.items.length > 0);
	}

	return filtered;
};
