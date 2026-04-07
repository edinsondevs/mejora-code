const apis = [
	{
		id: "node",
		name: "Node.js",
		description: "Entorno de ejecución para JavaScript en el servidor.",
		color: "#6cc24a",
		docLink: "https://nodejs.org/en/docs/",
		categories: [
			{
				name: "Conceptos Básicos",
				items: [
					{
						name: "File System (fs)",
						description: "Leer y escribir archivos.",
						example: `const fs = require('fs');\n\n// Leer archivo asincronamente\nfs.readFile('/path/to/file', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n\n// Escribir archivo\nfs.writeFile('message.txt', 'Hello Node', (err) => {\n  if (err) throw err;\n  console.log('The file has been saved!');\n});`,
					},
					{
						name: "Simple HTTP Server",
						description: "Crear un servidor sin frameworks.",
						example: `const http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/plain');\n  res.end('Hello World');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at port 3000');\n});`,
					},
				],
			},
		],
	},
	{
		id: "express",
		name: "Express.js",
		description: "Framework web minimalista para Node.js.",
		color: "#9b9898f5",
		docLink: "https://expressjs.com/",
		categories: [
			{
				name: "Conceptos Básicos",
				items: [
					{
						name: "Basic Routing",
						description: "Definir rutas GET/POST.",
						example: `const express = require('express')\nconst app = express()\nconst port = 3000\n\napp.get('/', (req, res) => {\n  res.send('Hello World!')\n})\n\napp.post('/', (req, res) => {\n  res.send('Got a POST request')\n})\n\napp.listen(port)`,
					},
					{
						name: "Middleware",
						description:
							"Funciones que se ejecutan durante la petición.",
						example: `// Middleware de log\nconst myLogger = function (req, res, next) {\n  console.log('LOGGED')\n  next()\n}\n\napp.use(myLogger)`,
					},
				],
			},
		],
	},
	{
		id: "sql",
		name: "SQL (Postgres)",
		description:
			"Lenguaje de consulta estructurada para bases de datos relacionales.",
		color: "#e48e00",
		docLink: "https://www.postgresql.org/docs/",
		categories: [
			{
				name: "Consultas Básicas",
				items: [
					{
						name: "SELECT Basics",
						description: "Recuperar datos de una tabla.",
						example: `-- Seleccionar todo\nSELECT * FROM users;\n\n-- Seleccionar columnas específicas con condición\nSELECT name, email FROM users WHERE age > 18;\n\n-- Ordenar\nSELECT * FROM products ORDER BY price DESC;`,
					},
					{
						name: "INSERT & UPDATE",
						description: "Modificar datos.",
						example: `-- Insertar\nINSERT INTO users (name, email) VALUES ('John', 'john@example.com');\n\n-- Actualizar\nUPDATE users SET email = 'new@example.com' WHERE id = 1;`,
					},
				],
			},
			{
				name: "Joins",
				items: [
					{
						name: "INNER JOIN",
						description:
							"Combinar filas donde hay coincidencia en ambas tablas.",
						example: `SELECT orders.id, users.name\nFROM orders\nINNER JOIN users ON orders.user_id = users.id;`,
					},
					{
						name: "LEFT JOIN",
						description:
							"Todas las filas de la izq, y coincidencias de la der.",
						example: `SELECT users.name, orders.id\nFROM users\nLEFT JOIN orders ON users.id = orders.user_id;`,
					},
				],
			},
		],
	},
	{
		id: "mongodb",
		name: "MongoDB",
		description: "Base de datos NoSQL orientada a documentos.",
		color: "#4db33d",
		docLink: "https://www.mongodb.com/docs/",
		categories: [
			{
				name: "Operaciones CRUD",
				items: [
					{
						name: "Find (Select)",
						description: "Buscar documentos.",
						example: `// Buscar todos\ndb.users.find({})\n\n// Filtrar\ndb.users.find({ age: { $gt: 18 } })\n\n// Proyección (solo campos específicos)\ndb.users.find({}, { name: 1, email: 1 })`,
					},
					{
						name: "Insert One/Many",
						description: "Guardar documentos.",
						example: `// Insertar uno\ndb.users.insertOne({ name: "Alice", age: 25 })\n\n// Insertar varios\ndb.users.insertMany([\n  { name: "Bob", age: 30 },\n  { name: "Charlie", age: 35 }\n])`,
					},
				],
			},
		],
	},
];

export default apis;
