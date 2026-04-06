import { Area } from "../interfaces/data.interfaces";

export const areas: Area[] = [
	{
		id: "frontend",
		name: "Frontend",
		items: [
			{
				id: "javascript",
				name: "JavaScript",
				description:
					"Lenguaje de programación fundamental para la web.",
				color: "#f0db4f",
				docLink: "https://developer.mozilla.org/es/docs/Web/JavaScript",
				categories: [
					{
						name: "Conceptos Básicos",
						items: [
							{
								name: "Variables (let/const)",
								description:
									"Diferencias entre variables mutables e inmutables.",
								example: `// var (Evitar): Scope de función, se puede redeclarar\nvar x = 1;\n\n// let: Scope de bloque, reasignable\nlet nombre = "Juan";\nnombre = "Pedro";\n\n// const: Scope de bloque, no reasignable (pero objetos mutables)\nconst PI = 3.1416;\nconst usuario = { id: 1 };\nusuario.nombre = "Ana"; // Válido`,
							},
							{
								name: "Arrow Functions",
								description:
									"Sintaxis concisa para funciones y manejo del `this`.",
								example: `// Función tradicional\nfunction sumar(a, b) {\n  return a + b;\n}\n\n// Arrow Function\nconst sumarArrow = (a, b) => a + b;\n\n// Return implícito en objetos (requiere paréntesis)\nconst getObj = () => ({ id: 1, name: "Test" });`,
							},
							{
								name: "Template Literals",
								description:
									"Cadenas de texto con interpolación de variables.",
								example: `const nombre = "Mundo";\nconst fecha = new Date().getFullYear();\n\n// Inserción de variables y expresiones\nconst saludo = \`Hola \${nombre}, estamos en \${fecha}\`;\n\nconsole.log(saludo); // "Hola Mundo, estamos en 2025"`,
							},
						],
					},
					{
						name: "Nivel Intermedio",
						items: [
							{
								name: "Array Methods (Map/Filter/Reduce)",
								description:
									"Métodos funcionales para manipular arrays.",
								example: `const users = [{id: 1, name: "Ana"}, {id: 2, name: "Beto"}];\n\n// Map: Transformar\nconst names = users.map(u => u.name); // ["Ana", "Beto"]\n\n// Filter: Filtrar\nconst user1 = users.filter(u => u.id === 1); // [{id: 1...}]\n\n// Reduce: Acumular\nconst totalIds = users.reduce((acc, u) => acc + u.id, 0); // 3`,
							},
							{
								name: "Destructuring",
								description:
									"Extraer valores de objetos y arrays fácilmente.",
								example: `// Objetos\nconst user = { name: "Alex", age: 30, country: "MX" };\nconst { name, age } = user;\n\n// Arrays\nconst colors = ["red", "green", "blue"];\nconst [first, second] = colors; // first="red", second="green"\n\n// Renombrado\nconst { name: nombreCompleto } = user;`,
							},
							{
								name: "Manipulación del DOM",
								description:
									"Seleccionar y modificar elementos HTML.",
								example: `// Selector\nconst btn = document.querySelector('#miBoton');\n\n// Event Listener\nbtn.addEventListener('click', (e) => {\n  e.target.style.backgroundColor = 'red';\n  document.body.classList.toggle('dark-mode');\n});\n\n// Crear elementos\nconst div = document.createElement('div');\ndiv.textContent = 'Nuevo Elemento';\ndocument.body.appendChild(div);`,
							},
						],
					},
					{
						name: "Nivel Avanzado",
						items: [
							{
								name: "Async/Await & Promises",
								description:
									"Manejo moderno de operaciones asíncronas.",
								example: `const fetchData = async () => {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("Error:", error);\n  }\n};\n\n// Promise.all para paralelo\nconst [users, posts] = await Promise.all([\n  fetch('/users'),\n  fetch('/posts')\n]);`,
							},
							{
								name: "Closures",
								description:
									"Funciones que recuerdan su entorno léxico.",
								example: `function crearContador() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getValue: () => count\n  };\n}\n\nconst counter = crearContador();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.getValue()); // 1\n// 'count' es privado y solo accesible por los métodos retornados`,
							},
							{
								name: "Event Loop",
								description:
									"Cómo JS maneja la concurrencia (Call Stack vs Task Queue).",
								example: `console.log('Inicio'); // 1. Sincrono\n\nsetTimeout(() => {\n  console.log('Timeout'); // 4. MacroTask\n}, 0);\n\nPromise.resolve().then(() => {\n  console.log('Promesa'); // 3. MicroTask (Prioridad sobre Timeout)\n});\n\nconsole.log('Fin'); // 2. Sincrono\n\n// Output: Inicio -> Fin -> Promesa -> Timeout`,
							},
						],
					},
				],
			},
			{
				id: "typescript",
				name: "TypeScript",
				description: "JavaScript con tipado estático y superpoderes.",
				color: "#3178c6",
				docLink: "https://www.typescriptlang.org/docs/",
				categories: [
					{
						name: "Conceptos Básicos",
						items: [
							{
								name: "Tipos Básicos",
								description:
									"Anotaciones de tipo para variables.",
								example: `let isDone: boolean = false;\nlet decimal: number = 6;\nlet color: string = "blue";\nlet list: number[] = [1, 2, 3];\nlet anything: any = 4; // Evitar si es posible`,
							},
							{
								name: "Interfaces vs Types",
								description:
									"Definición de estructuras de objetos.",
								example: `// Interface (Extensible, mejor para objetos)\ninterface User {\n  id: number;\n  name: string;\n}\n\n// Type (Más flexible, uniones, primitivos)\ntype Status = "active" | "inactive";\ntype ID = string | number;`,
							},
						],
					},
					{
						name: "Nivel Intermedio",
						items: [
							{
								name: "Generics",
								description:
									"Componentes reutilizables que funcionan con varios tipos.",
								example: `function identity<T>(arg: T): T {\n  return arg;\n}\n\nlet output1 = identity<string>("myString");\nlet output2 = identity<number>(100);\n\n// Interfaz Genérica\ninterface Box<T> {\n  contents: T;\n}`,
							},
							{
								name: "Union & Intersection Types",
								description: "Combinar tipos.",
								example: `// Union (Uno u otro)\nfunction printId(id: number | string) {\n  console.log(id);\n}\n\n// Intersection (Ambos)\ninterface ErrorHandling {\n  success: boolean;\n  error?: { message: string };\n}\n\ntype ArtworksResponse = ArtworksData & ErrorHandling;`,
							},
						],
					},
					{
						name: "Nivel Avanzado",
						items: [
							{
								name: "Utility Types",
								description:
									"Tipos globales para transformar otros tipos.",
								example: `interface User {\n  id: number;\n  name: string;\n  email?: string;\n}\n\n// Partial: Todo opcional\ntype UpdateUser = Partial<User>;\n\n// Required: Todo requerido\ntype CompleteUser = Required<User>;\n\n// Pick: Elegir propiedades\ntype UserPreview = Pick<User, "id" | "name">;\n\n// Omit: Excluir propiedades\ntype UserNoId = Omit<User, "id">;`,
							},
							{
								name: "Type Guards",
								description:
									"Funciones para estrechar tipos en runtime.",
								example: `interface Fish { swim: () => void }\ninterface Bird { fly: () => void }\n\nfunction isFish(pet: Fish | Bird): pet is Fish {\n  return (pet as Fish).swim !== undefined;\n}\n\nif (isFish(pet)) {\n  pet.swim(); // TS sabe que es Fish aqui\n} else {\n  pet.fly(); // TS sabe que es Bird aqui\n}`,
							},
						],
					},
				],
			},
			{
				id: "react",
				name: "React",
				description: "Librería para construir interfaces de usuario.",
				color: "#61dafb",
				docLink: "https://react.dev/",
				categories: [
					{
						name: "Conceptos Básicos",
						items: [
							{
								name: "Components & Props",
								description:
									"Bloques de construcción de la UI.",
								example: `function Welcome(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n\n// Uso\n<Welcome name="Sara" />`,
							},
							{
								name: "useState Hook",
								description: "Manejo de estado local.",
								example: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}`,
							},
						],
					},
					{
						name: "Nivel Intermedio",
						items: [
							{
								name: "useEffect Hook",
								description:
									"Efectos secundarios (API calls, subscriptions).",
								example: `useEffect(() => {\n  const subscription = props.source.subscribe();\n  // Función de limpieza\n  return () => {\n    subscription.unsubscribe();\n  };\n}, [props.source]); // Dependencias`,
							},
							{
								name: "Context API",
								description: "Estado global sin prop drilling.",
								example: `const ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value="dark">\n      <Toolbar />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Toolbar() {\n  const theme = useContext(ThemeContext);\n  return <div>Current theme: {theme}</div>;\n}`,
							},
						],
					},
					{
						name: "Nivel Avanzado",
						items: [
							{
								name: "useRef & ForwardRef",
								description:
									"Acceso directo a nodos del DOM y persistencia de valores.",
								example: `// useRef para guardar valores mutables sin re-render\nconst count = useRef(0);\n\n// Acceso a DOM\nconst inputRef = useRef(null);\nconst focusInput = () => inputRef.current.focus();\n\nreturn <input ref={inputRef} />;`,
							},
							{
								name: "Custom Hooks",
								description: "Reutilizar lógica de estado.",
								example: `function useWindowSize() {\n  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);\n  useEffect(() => {\n    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n  return size;\n}`,
							},
						],
					},
				],
			},
			{
				id: "react-native",
				name: "React Native",
				description:
					"Framework para apps móviles nativas usando React.",
				color: "#00d8ff",
				docLink: "https://reactnative.dev/docs/getting-started",
				categories: [
					{
						name: "Conceptos Básicos",
						items: [
							{
								name: "Core Components",
								description:
									"View, Text, Image, ScrollView, TextInput.",
								example: `import { View, Text, Image, ScrollView, TextInput } from 'react-native';\n\nconst App = () => (\n  <ScrollView>\n    <View>\n      <Text>Hola Mundo</Text>\n      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={{width: 50, height: 50}} />\n      <TextInput placeholder="Escribe aqui" />\n    </View>\n  </ScrollView>\n);`,
							},
							{
								name: "StyleSheet",
								description:
									"Estilos optimizados para RN, similar a CSS pero en JS.",
								example: `import { StyleSheet, View } from 'react-native';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    padding: 24,\n    backgroundColor: "#eaeaea"\n  },\n  title: {\n    marginTop: 16,\n    paddingVertical: 8,\n    borderWidth: 4,\n    borderColor: "#20232a",\n    borderRadius: 6,\n    backgroundColor: "#61dafb",\n    color: "#20232a",\n    textAlign: "center",\n    fontSize: 30,\n    fontWeight: "bold"\n  }\n});`,
							},
							{
								name: "Flexbox Layout",
								description:
									"Sistema de diseño principal en RN (flexDirection column por defecto).",
								example: `// Columna (por defecto)\n<View style={{ flex: 1, flexDirection: 'column' }}>\n  <View style={{ flex: 1, backgroundColor: 'red' }} />\n  <View style={{ flex: 2, backgroundColor: 'green' }} />\n  <View style={{ flex: 3, backgroundColor: 'blue' }} />\n</View>\n\n// Fila, Justificar y Alinear\n<View style={{ \n  flexDirection: 'row', \n  justifyContent: 'center', \n  alignItems: 'center' \n}}>\n  {/* Elementos hijos centrados */}\n</View>`,
							},
						],
					},
					{
						name: "Listas",
						items: [
							{
								name: "FlatList",
								description:
									"Lista optimizada para sets de datos largos.",
								example: `const DATA = [{id: '1', title: 'Item 1'}, {id: '2', title: 'Item 2'}];\n\nconst App = () => (\n  <FlatList\n    data={DATA}\n    renderItem={({ item }) => <Text>{item.title}</Text>}\n    keyExtractor={item => item.id}\n  />\n);`,
							},
							{
								name: "SectionList",
								description: "Lista con secciones y cabeceras.",
								example: `const DATA = [\n  { title: "Platos Principales", data: ["Pizza", "Burger"] },\n  { title: "Bebidas", data: ["Agua", "Soda"] }\n];\n\n<SectionList\n  sections={DATA}\n  renderItem={({ item }) => <Text>{item}</Text>}\n  renderSectionHeader={({ section: { title } }) => (\n    <Text style={styles.header}>{title}</Text>\n  )}\n/>`,
							},
						],
					},
					{
						name: "Interactividad & UI Controls",
						items: [
							{
								name: "Touchable Components",
								description:
									"Manejo de toques (TouchableOpacity, Pressable).",
								example: `import { TouchableOpacity, Text } from 'react-native';\n\n<TouchableOpacity onPress={() => console.log('Presionado!')}>\n  <Text>Botón Personalizado</Text>\n</TouchableOpacity>`,
							},
							{
								name: "Switch & ActivityIndicator",
								description: "Controles nativos comunes.",
								example: `// Interruptor (Switch)\n<Switch \n  trackColor={{ false: "#767577", true: "#81b0ff" }}\n  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}\n  onValueChange={toggleSwitch}\n  value={isEnabled}\n/>\n\n// Cargador (Loader)\n<ActivityIndicator size="large" color="#0000ff" />`,
							},
							{
								name: "Modal",
								description:
									"Ventana superpuesta al contenido actual.",
								example: `<Modal\n  animationType="slide"\n  transparent={true}\n  visible={modalVisible}\n  onRequestClose={() => setModalVisible(!modalVisible)}\n>\n  <View style={styles.centeredView}>\n    <Text>Soy un Modal!</Text>\n  </View>\n</Modal>`,
							},
						],
					},
				],
			},
			{
				id: "tanstack",
				name: "TanStack Query",
				description: "Gestor de estado asíncrono y data fetching.",
				color: "#ff4154",
				docLink: "https://tanstack.com/query/latest",
				categories: [
					{
						name: "Nivel Básico",
						items: [
							{
								name: "useQuery",
								description: "Hook para fetching de datos.",
								example: `import { useQuery } from '@tanstack/react-query';\n\nfunction App() {\n  const { isPending, error, data } = useQuery({\n    queryKey: ['repoData'],\n    queryFn: () =>\n      fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>\n        res.json(),\n      ),\n  })\n\n  if (isPending) return 'Cargando...'\n  if (error) return 'Ha ocurrido un error: ' + error.message\n  return <div>{data.name}</div>\n}`,
							},
						],
					},
					{
						name: "Nivel Intermedio",
						items: [
							{
								name: "useMutation",
								description:
									"Hook para crear/actualizar/borrar datos.",
								example: `const mutation = useMutation({\n  mutationFn: (newTodo) => {\n    return axios.post('/todos', newTodo)\n  },\n})\n\n// Uso\n<button onClick={() => mutation.mutate({ id: new Date(), title: 'Do laundry' })}>`,
							},
							{
								name: "Query Invalidation",
								description:
									"Refrescar datos después de una mutación.",
								example: `const queryClient = useQueryClient()\n\nconst mutation = useMutation({\n  mutationFn: postTodo,\n  onSuccess: () => {\n    // Invalidate and refetch\n    queryClient.invalidateQueries({ queryKey: ['todos'] })\n  },\n})`,
							},
						],
					},
				],
			},
			{
				id: "axios",
				name: "Axios",
				description: "Cliente HTTP basado en promesas.",
				color: "#5a29e4",
				docLink: "https://axios-http.com/docs/intro",
				categories: [
					{
						name: "Conceptos Básicos",
						items: [
							{
								name: "GET Request",
								description:
									"Petición simple para obtener datos.",
								example: `import axios from 'axios';\n\naxios.get('/user?ID=12345')\n  .then(function (response) {\n    // manejar éxito\n    console.log(response.data);\n  })\n  .catch(function (error) {\n    // manejar error\n    console.log(error);\n  });`,
							},
							{
								name: "POST Request",
								description: "Enviar datos al servidor.",
								example: `axios.post('/user', {\n    firstName: 'Fred',\n    lastName: 'Flintstone'\n  })\n  .then(function (response) {\n    console.log(response);\n  })\n  .catch(function (error) {\n    console.log(error);\n  });`,
							},
						],
					},
					{
						name: "Nivel Intermedio",
						items: [
							{
								name: "Interceptors",
								description:
									"Interceptar peticiones o respuestas globalmente.",
								example: `// Añadir un interceptor de peticiones\naxios.interceptors.request.use(function (config) {\n    // Hacer algo antes de que se envíe la petición\n    config.headers.Authorization = 'Bearer token123';\n    return config;\n  }, function (error) {\n    return Promise.reject(error);\n  });`,
							},
							{
								name: "Axios Instance",
								description:
									"Crear una instancia pre-configurada.",
								example: `const instance = axios.create({\n  baseURL: 'https://some-domain.com/api/',\n  timeout: 1000,\n  headers: {'X-Custom-Header': 'foobar'}\n});`,
							},
						],
					},
				],
			},
		],
	},
	{
		id: "backend",
		name: "Backend",
		items: [
			{
				id: "node",
				name: "Node.js",
				description:
					"Entorno de ejecución para JavaScript en el servidor.",
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
								description:
									"Crear un servidor sin frameworks.",
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
		],
	},
	{
		id: "apis",
		name: "APIs",
		items: [
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
		],
	},
];
