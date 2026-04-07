const backend = [
	{
		id: "supabase",
		name: "Supabase",
		description: "Alternativa Open Source a Firebase.",
		color: "#3ecf8e",
		docLink: "https://supabase.com/docs",
		categories: [
			{
				name: "Database",
				items: [
					{
						name: "JS Client Select",
						description: "Consultar DB desde el cliente.",
						example: `const { data, error } = await supabase\n  .from('countries')\n  .select('name, capital_city')\n  .eq('region', 'South America')`,
					},
					{
						name: "Auth SignUp",
						description: "Registro de usuarios.",
						example: `const { data, error } = await supabase.auth.signUp({\n  email: 'example@email.com',\n  password: 'example-password',\n})`,
					},
				],
			},
		],
	},
	{
		id: "rest",
		name: "REST API",
		description: "Arquitectura estándar para servicios web.",
		color: "#ff6c37", // Postman Orange
		docLink: "https://restfulapi.net/",
		categories: [
			{
				name: "Conceptos",
				items: [
					{
						name: "HTTP Methods",
						description: "Verbos principales.",
						example: `GET     /users      (Obtener lista)\nPOST    /users      (Crear usuario)\nPUT     /users/1    (Reemplazar usuario 1)\nPATCH   /users/1    (Actualizar campos usuario 1)\nDELETE  /users/1    (Borrar usuario 1)`,
					},
					{
						name: "Status Codes",
						description: "Códigos de respuesta comunes.",
						example: `200 OK           (Éxito)\n201 Created      (Recurso creado)\n400 Bad Request  (Error del cliente)\n401 Unauthorized (No autenticado)\n403 Forbidden    (No autorizado/permisos)\n404 Not Found    (No encontrado)\n500 Server Error (Error interno)`,
					},
				],
			},
		],
	},
];

export default backend;