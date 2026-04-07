import { Area } from "../interfaces/data.interfaces";
import { apis, backend, frontend } from "./index"

export const areas: Area[] = [
	{
		id: "frontend",
		name: "Frontend",
		items: frontend,
	},
	{
		id: "backend",
		name: "Backend",
		items: backend,
	},
	{
		id: "apis",
		name: "APIs",
		items: apis,
	},
];
