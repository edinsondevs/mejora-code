const frontend = [
	{
		id: "javascript",
		name: "JavaScript",
		description: "Lenguaje de programación fundamental para la web.",
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
						name: "Array.map()",
						description:
							"Transforma cada elemento de un array y retorna uno nuevo.",
						example: `const users = [{ id: 1, name: "Ana" }, { id: 2, name: "Beto" }];\n\n// Retorna un array nuevo con los nombres\nconst names = users.map(user => user.name);\n// ["Ana", "Beto"]\n\n// Transformar estructura\nconst formatted = users.map(user => ({\n  ...user,\n  name: user.name.toUpperCase()\n}));\n// [{ id: 1, name: "ANA" }, { id: 2, name: "BETO" }]`,
					},
					{
						name: "Array.filter()",
						description:
							"Retorna un nuevo array con los elementos que cumplen una condición.",
						example: `const products = [\n  { id: 1, name: "Laptop", stock: 0 },\n  { id: 2, name: "Mouse", stock: 5 },\n  { id: 3, name: "Teclado", stock: 0 },\n];\n\n// Solo los que tienen stock\nconst available = products.filter(p => p.stock > 0);\n// [{ id: 2, name: "Mouse", stock: 5 }]\n\n// Eliminar un elemento por id\nconst withoutFirst = products.filter(p => p.id !== 1);`,
					},
					{
						name: "Array.reduce()",
						description:
							"Acumula los elementos de un array en un único valor.",
						example: `const items = [\n  { name: "Laptop", price: 1200 },\n  { name: "Mouse", price: 30 },\n  { name: "Teclado", price: 80 },\n];\n\n// Sumar precios\nconst total = items.reduce((acc, item) => acc + item.price, 0);\n// 1310\n\n// Agrupar por categoría (uso avanzado)\nconst byCategory = items.reduce<Record<string, typeof items>>((acc, item) => {\n  const key = item.name;\n  acc[key] = acc[key] ?? [];\n  acc[key].push(item);\n  return acc;\n}, {});`,
					},
					{
						name: "Array.find() & findIndex()",
						description:
							"Encontrar el primer elemento (o su índice) que cumple una condición.",
						example: `const users = [\n  { id: 1, name: "Ana", active: false },\n  { id: 2, name: "Beto", active: true },\n  { id: 3, name: "Carlos", active: true },\n];\n\n// find: retorna el elemento o undefined\nconst user = users.find(u => u.id === 2);\n// { id: 2, name: "Beto", active: true }\n\n// findIndex: retorna el índice o -1\nconst idx = users.findIndex(u => u.id === 2);\n// 1\n\n// Uso típico: actualizar un item en un array de estado\nconst updated = [...users];\nupdated[idx] = { ...updated[idx], active: false };`,
					},
					{
						name: "Array.some() & every()",
						description:
							"Verificar si alguno o todos los elementos cumplen una condición.",
						example: `const roles = ["admin", "editor", "viewer"];\n\n// some: true si AL MENOS uno cumple\nconst hasAdmin = roles.some(r => r === "admin"); // true\n\n// every: true si TODOS cumplen\nconst allActive = [true, true, false].every(Boolean); // false\n\n// Caso real: validar formulario\nconst fields = [name, email, password];\nconst isFormValid = fields.every(field => field.trim() !== "");`,
					},
					{
						name: "Object.keys() / values() / entries()",
						description:
							"Iterar o transformar las propiedades de un objeto.",
						example: `const config = { host: "localhost", port: 3000, debug: true };\n\n// keys: array de claves\nObject.keys(config);   // ["host", "port", "debug"]\n\n// values: array de valores\nObject.values(config); // ["localhost", 3000, true]\n\n// entries: array de pares [clave, valor]\nObject.entries(config).forEach(([key, value]) => {\n  console.log(\`\${key}: \${value}\`);\n});\n\n// Transformar objeto (equivalente a map para arrays)\nconst uppercased = Object.fromEntries(\n  Object.entries(config).map(([k, v]) => [k.toUpperCase(), v])\n);`,
					},
					{
						name: "Destructuring",
						description:
							"Extraer valores de objetos y arrays fácilmente.",
						example: `// Objetos\nconst user = { name: "Alex", age: 30, country: "MX" };\nconst { name, age } = user;\n\n// Arrays\nconst colors = ["red", "green", "blue"];\nconst [first, second] = colors; // first="red", second="green"\n\n// Renombrado\nconst { name: nombreCompleto } = user;`,
					},
					{
						name: "Manipulación del DOM",
						description: "Seleccionar y modificar elementos HTML.",
						example: `// Selector\nconst btn = document.querySelector('#miBoton');\n\n// Event Listener\nbtn.addEventListener('click', (e) => {\n  e.target.style.backgroundColor = 'red';\n  document.body.classList.toggle('dark-mode');\n});\n\n// Crear elementos\nconst div = document.createElement('div');\ndiv.textContent = 'Nuevo Elemento';\ndocument.body.appendChild(div);`,
					},
					{
						name: "Spread & Rest Operator",
						description: "Expandir iterables o agrupar argumentos.",
						example: `// Spread: expandir\nconst a = [1, 2];\nconst b = [...a, 3, 4]; // [1, 2, 3, 4]\n\nconst user = { name: "Ana" };\nconst updated = { ...user, age: 30 };\n\n// Rest: agrupar el resto de args\nconst suma = (first, ...rest) => rest.reduce((acc, n) => acc + n, first);\nsuma(1, 2, 3, 4); // 10`,
					},
					{
						name: "Optional Chaining & Nullish Coalescing",
						description:
							"Acceso seguro a propiedades y valores por defecto.",
						example: `const user = { address: { city: "BA" } };\n\n// Optional chaining: no explota si address es null\nconst city = user?.address?.city; // "BA"\nconst zip = user?.address?.zip;   // undefined\n\n// Nullish coalescing: solo activa si es null o undefined\nconst display = zip ?? "Sin CP"; // "Sin CP"\n\n// Diferencia con ||: 0 y "" no activan ??\nconst count = 0 ?? 10; // 0\nconst count2 = 0 || 10; // 10`,
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
					{
						name: "Classes & Prototype",
						description:
							"Sintaxis de clase moderna sobre el sistema prototípico de JS.",
						example: `class Animal {\n  // Campo privado (ES2022)\n  #name: string;\n\n  constructor(name: string) {\n    this.#name = name;\n  }\n\n  speak(): string {\n    return \`\${this.#name} hace un sonido\`;\n  }\n}\n\nclass Dog extends Animal {\n  #breed: string;\n\n  constructor(name: string, breed: string) {\n    super(name);\n    this.#breed = breed;\n  }\n\n  override speak(): string {\n    return \`\${super.speak()} (guau)\`;\n  }\n}\n\nconst dog = new Dog("Rex", "Labrador");\ndog.speak(); // "Rex hace un sonido (guau)"`,
					},
					{
						name: "Modules (ES Modules)",
						description: "Sistema nativo de módulos en JS moderno.",
						example: `// math.ts - named exports\nexport const PI = 3.14159;\nexport const sumar = (a: number, b: number) => a + b;\n\n// utils.ts - default export\nconst formatDate = (d: Date) => d.toISOString();\nexport default formatDate;\n\n// main.ts - imports\nimport formatDate from './utils';\nimport { PI, sumar } from './math';\nimport * as math from './math'; // namespace`,
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
						description: "Anotaciones de tipo para variables.",
						example: `let isDone: boolean = false;\nlet decimal: number = 6;\nlet color: string = "blue";\nlet list: number[] = [1, 2, 3];\nlet anything: any = 4; // Evitar si es posible`,
					},
					{
						name: "Interfaces vs Types",
						description: "Definición de estructuras de objetos.",
						example: `// Interface (Extensible, mejor para objetos)\ninterface User {\n  id: number;\n  name: string;\n}\n\n// Type (Más flexible, uniones, primitivos)\ntype Status = "active" | "inactive";\ntype ID = string | number;`,
					},
					{
						name: "Enums vs Const Enums",
						description:
							"Conjuntos de constantes nombradas con diferentes trade-offs.",
						example: `// Enum regular: genera código JS en runtime\nenum Direction {\n  Up = "UP",\n  Down = "DOWN",\n  Left = "LEFT",\n  Right = "RIGHT",\n}\n\n// const enum: se inlinea en compilación, no genera objeto JS\n// Más performante, pero no compatible con isolatedModules (Vite/esbuild)\nconst enum Status {\n  Active = "ACTIVE",\n  Inactive = "INACTIVE",\n}\n\n// Alternativa recomendada en proyectos con Vite:\nconst STATUS = {\n  Active: "ACTIVE",\n  Inactive: "INACTIVE",\n} as const;\n\ntype Status = typeof STATUS[keyof typeof STATUS];\n// "ACTIVE" | "INACTIVE"`,
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
						description: "Bloques de construcción de la UI.",
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
					{
						name: "useReducer",
						description:
							"Alternativa a useState para lógica de estado compleja.",
						example: `type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };\n\nconst reducer = (state: number, action: Action): number => {\n  switch (action.type) {\n    case 'increment': return state + 1;\n    case 'decrement': return state - 1;\n    case 'reset':     return 0;\n    default: return state;\n  }\n};\n\nfunction Counter() {\n  const [count, dispatch] = useReducer(reducer, 0);\n  return (\n    <>\n      <p>{count}</p>\n      <button onClick={() => dispatch({ type: 'increment' })}>+</button>\n      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>\n    </>\n  );\n}`,
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
					{
						name: "useMemo",
						description:
							"Memoiza el resultado de un cálculo costoso entre renders.",
						example: `const sortedList = useMemo(() => {\n  return [...items].sort((a, b) => a.price - b.price);\n}, [items]);\n// Solo recalcula si 'items' cambia\n\n// No usar por defecto.\n// Justificar con React DevTools Profiler antes de agregarlo.`,
					},
					{
						name: "useCallback",
						description:
							"Memoiza la referencia de una función entre renders.",
						example: `const handleSelect = useCallback((id: number) => {\n  onSelect(id);\n}, [onSelect]);\n\n// Útil cuando la función se pasa como prop\n// a un componente envuelto en React.memo.\n\n// Sin useCallback, el hijo se re-renderiza igual\n// porque la función es una referencia nueva en cada render.`,
					},
					{
						name: "React.memo",
						description:
							"Evita re-renders de un componente si sus props no cambiaron.",
						example: `const Card = React.memo(({ title, price }: { title: string; price: number }) => {\n  console.log("render");\n  return <div>{title} - {price}" </div>;\n});\n\n// Solo re-renderiza si 'title' o 'price' cambian.\n// Comparación superficial (shallow) por defecto.\n// Para comparación custom, pasar segundo argumento:\nReact.memo(Card, (prev, next) => prev.price === next.price);`,
					},
					{
						name: "React.lazy",
						description:
							"Carga diferida de un componente para reducir el bundle inicial.",
						example: `const HeavyChart = React.lazy(() => import('./HeavyChart'));\n\n// Siempre debe usarse dentro de un Suspense.\n// El import() genera un chunk separado en el bundle.`,
					},
					{
						name: "Suspense",
						description:
							"Muestra un fallback mientras un componente lazy o una promesa cargan.",
						example: `function Dashboard() {\n  return (\n    <Suspense fallback={<div>Cargando gráfico...</div>}>\n      <HeavyChart />\n    </Suspense>\n  );\n}\n\n// En React 18+, Suspense también funciona\n// con data fetching via frameworks (Next.js, Remix).`,
					},
				],
			},
		],
	},
	{
		id: "zustand",
		name: "Zustand",
		description: "Manejo de estado global minimalista para React.",
		color: "#f56f2c",
		docLink: "https://zustand.docs.pmnd.rs/",
		categories: [
			{
				name: "Conceptos Básicos",
				items: [
					{
						name: "Crear un Store",
						description:
							"Definir estado y acciones en un único store tipado.",
						example: `import { create } from 'zustand';\n\ninterface CounterStore {\n  count: number;\n  increment: () => void;\n  decrement: () => void;\n  reset: () => void;\n}\n\nconst useCounterStore = create<CounterStore>((set) => ({\n  count: 0,\n  increment: () => set((state) => ({ count: state.count + 1 })),\n  decrement: () => set((state) => ({ count: state.count - 1 })),\n  reset: () => set({ count: 0 }),\n}));\n\n// Uso en componente\nconst { count, increment } = useCounterStore();`,
					},
					{
						name: "Selectores",
						description:
							"Suscribirse solo a una parte del estado para evitar re-renders.",
						example: `// Sin selector: re-render ante cualquier cambio del store\nconst store = useCounterStore();\n\n// Con selector: re-render solo si 'count' cambia\nconst count = useCounterStore((state) => state.count);\nconst increment = useCounterStore((state) => state.increment);\n\n// Las acciones son estables (no cambian), no hace falta memoizarlas`,
					},
				],
			},
			{
				name: "Nivel Intermedio",
				items: [
					{
						name: "Middleware: persist",
						description:
							"Persistir el estado en localStorage o sessionStorage.",
						example: `import { create } from 'zustand';\nimport { persist } from 'zustand/middleware';\n\ninterface ThemeStore {\n  theme: 'light' | 'dark';\n  toggle: () => void;\n}\n\nconst useThemeStore = create<ThemeStore>()(\n  persist(\n    (set) => ({\n      theme: 'light',\n      toggle: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),\n    }),\n    { name: 'theme-storage' } // clave en localStorage\n  )\n);`,
					},
					{
						name: "Middleware: devtools",
						description:
							"Integración con Redux DevTools para debugging.",
						example: `import { devtools } from 'zustand/middleware';\n\nconst useStore = create<MyStore>()(\n  devtools(\n    (set) => ({\n      bears: 0,\n      addBear: () => set((s) => ({ bears: s.bears + 1 }), false, 'addBear'),\n      //                                                          ↑ nombre de la acción en devtools\n    }),\n    { name: 'BearStore' }\n  )\n);`,
					},
				],
			},
		],
	},
	{
		id: "react-native",
		name: "React Native",
		description: "Framework para apps móviles nativas usando React.",
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
						description: "Ventana superpuesta al contenido actual.",
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
						description: "Hook para crear/actualizar/borrar datos.",
						example: `const mutation = useMutation({\n  mutationFn: (newTodo) => {\n    return axios.post('/todos', newTodo)\n  },\n})\n\n// Uso\n<button onClick={() => mutation.mutate({ id: new Date(), title: 'Do laundry' })}>`,
					},
					{
						name: "Query Invalidation",
						description: "Refrescar datos después de una mutación.",
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
						description: "Petición simple para obtener datos.",
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
						description: "Crear una instancia pre-configurada.",
						example: `const instance = axios.create({\n  baseURL: 'https://some-domain.com/api/',\n  timeout: 1000,\n  headers: {'X-Custom-Header': 'foobar'}\n});`,
					},
				],
			},
		],
	},
	{
		id: "react-router",
		name: "React Router",
		description: "Enrutamiento declarativo para aplicaciones React.",
		color: "#F44250",
		docLink: "https://reactrouter.com/en/main",
		categories: [
			{
				name: "Conceptos Básicos",
				items: [
					{
						name: "Configuración de Rutas",
						description:
							"Definir rutas con createBrowserRouter (v6.4+).",
						example: `import { createBrowserRouter, RouterProvider } from 'react-router-dom';\n\nconst router = createBrowserRouter([\n  {\n    path: '/',\n    element: <RootLayout />,\n    children: [\n      { index: true, element: <Home /> },\n      { path: 'about', element: <About /> },\n      { path: 'users/:id', element: <UserDetail /> },\n      { path: '*', element: <NotFound /> },\n    ],\n  },\n]);\n\nfunction App() {\n  return <RouterProvider router={router} />;\n}`,
					},
					{
						name: "Link & NavLink",
						description:
							"Navegación declarativa sin recargar la página.",
						example: `import { Link, NavLink } from 'react-router-dom';\n\n// Link básico\n<Link to="/about">Sobre nosotros</Link>\n\n// NavLink: aplica clase activa automáticamente\n<NavLink\n  to="/dashboard"\n  className={({ isActive }) => isActive ? 'nav-active' : ''}\n>\n  Dashboard\n</NavLink>`,
					},
				],
			},
			{
				name: "Nivel Intermedio",
				items: [
					{
						name: "useNavigate & useParams",
						description:
							"Navegación programática y lectura de parámetros de ruta.",
						example: `import { useNavigate, useParams } from 'react-router-dom';\n\nfunction UserDetail() {\n  const { id } = useParams<{ id: string }>();\n  const navigate = useNavigate();\n\n  const handleBack = () => navigate(-1); // equivale a history.back()\n  const goHome = () => navigate('/', { replace: true });\n\n  return <div>User ID: {id}</div>;\n}`,
					},
					{
						name: "Loaders & Actions (v6.4+)",
						description:
							"Carga de datos y mutaciones integradas en la ruta.",
						example: `// Definición\nconst router = createBrowserRouter([\n  {\n    path: 'users/:id',\n    element: <UserDetail />,\n    loader: async ({ params }) => {\n      const res = await fetch(\`/api/users/\${params.id}\`);\n      if (!res.ok) throw new Response('Not Found', { status: 404 });\n      return res.json();\n    },\n  },\n]);\n\n// Consumo en el componente\nimport { useLoaderData } from 'react-router-dom';\n\nfunction UserDetail() {\n  const user = useLoaderData() as User;\n  return <h1>{user.name}</h1>;\n}`,
					},
				],
			},
		],
	},
];

export default frontend;