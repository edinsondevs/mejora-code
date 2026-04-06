export interface Item {
	name: string;
	description: string;
	example: string;
	docLink?: string;
}

export interface Category {
	name: string;
	items: Item[];
}

export interface Language {
	id: string;
	name: string;
	description: string;
	color: string;
	docLink: string;
	categories: Category[];
}

export interface Area {
	id: string;
	name: string;
	items: Language[];
}
