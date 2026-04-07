// types.ts - Tipado estricto
export interface CodeExample {
	name: string;
	description: string;
	example: string;
}

export interface Category {
	name: string;
	items: CodeExample[];
}

export interface Technology {
	id: string;
	name: string;
	description: string;
	color: string;
	docLink: string;
	categories: Category[];
}

// frontend.data.ts - Data source
const frontend: Technology[] = [
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
						example: `// var (Evitar): Scope de función, se puede redeclarar
var x = 1;

// let: Scope de bloque, reasignable
let nombre = "Juan";
nombre = "Pedro";

// const: Scope de bloque, no reasignable (pero objetos mutables)
const PI = 3.1416;
const usuario = { id: 1 };
usuario.nombre = "Ana"; // Válido`,
					},
					{
						name: "Arrow Functions",
						description:
							"Sintaxis concisa para funciones y manejo del \`this\`.",
						example: `// Función tradicional
function sumar(a, b) {
  return a + b;
}

// Arrow Function
const sumarArrow = (a, b) => a + b;

// Return implícito en objetos (requiere paréntesis)
const getObj = () => ({ id: 1, name: "Test" });`,
					},
					{
						name: "Template Literals",
						description:
							"Cadenas de texto con interpolación de variables.",
						example: `const nombre = "Mundo";
const fecha = new Date().getFullYear();

// Inserción de variables y expresiones
const saludo = \`Hola \${nombre}, estamos en \${fecha}\`;

console.log(saludo); // "Hola Mundo, estamos en 2025"`,
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
						example: `const users = [{id: 1, name: "Ana"}, {id: 2, name: "Beto"}];

// Map: Transformar
const names = users.map(u => u.name); // ["Ana", "Beto"]

// Filter: Filtrar
const user1 = users.filter(u => u.id === 1); // [{id: 1...}]

// Reduce: Acumular
const totalIds = users.reduce((acc, u) => acc + u.id, 0); // 3`,
					},
					{
						name: "Destructuring",
						description:
							"Extraer valores de objetos y arrays fácilmente.",
						example: `// Objetos
const user = { name: "Alex", age: 30, country: "MX" };
const { name, age } = user;

// Arrays
const colors = ["red", "green", "blue"];
const [first, second] = colors; // first="red", second="green"

// Renombrado
const { name: nombreCompleto } = user;`,
					},
					{
						name: "Manipulación del DOM",
						description: "Seleccionar y modificar elementos HTML.",
						example: `// Selector
const btn = document.querySelector('#miBoton');

// Event Listener
btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red';
  document.body.classList.toggle('dark-mode');
});

// Crear elementos
const div = document.createElement('div');
div.textContent = 'Nuevo Elemento';
document.body.appendChild(div);`,
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
						example: `const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

// Promise.all para paralelo
const [users, posts] = await Promise.all([
  fetch('/users').then(r => r.json()),
  fetch('/posts').then(r => r.json())
]);`,
					},
					{
						name: "Closures",
						description:
							"Funciones que recuerdan su entorno léxico.",
						example: `function crearContador() {
  let count = 0;
  return {
    increment: () => ++count,
    getValue: () => count
  };
}

const counter = crearContador();
console.log(counter.increment()); // 1
console.log(counter.getValue()); // 1
// 'count' es privado y solo accesible por los métodos retornados`,
					},
					{
						name: "Event Loop",
						description:
							"Cómo JS maneja la concurrencia (Call Stack vs Task Queue).",
						example: `console.log('Inicio'); // 1. Sincrono

setTimeout(() => {
  console.log('Timeout'); // 4. MacroTask
}, 0);

Promise.resolve().then(() => {
  console.log('Promesa'); // 3. MicroTask (Prioridad sobre Timeout)
});

console.log('Fin'); // 2. Sincrono

// Output: Inicio -> Fin -> Promesa -> Timeout`,
					},
					{
						name: "Proxy & Reflect",
						description:
							"Interceptar operaciones sobre objetos (metaprogramación).",
						example: `const handler = {
  get(target, prop) {
    console.log(\`Accediendo a: \${prop}\`);
    return Reflect.get(target, prop);
  },
  set(target, prop, value) {
    console.log(\`Modificando \${prop} a \${value}\`);
    return Reflect.set(target, prop, value);
  }
};

const user = new Proxy({ name: "Ana" }, handler);
console.log(user.name); // Log: "Accediendo a: name"
user.age = 30; // Log: "Modificando age a 30"`,
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
						example: `let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// Evitar 'any' - usar 'unknown' si no conoces el tipo
let notSure: unknown = 4;`,
					},
					{
						name: "Interfaces vs Types",
						description: "Definición de estructuras de objetos.",
						example: `// Interface (Extensible, mejor para objetos)
interface User {
  id: number;
  name: string;
  email?: string; // Opcional
}

// Extender interfaces
interface Admin extends User {
  role: "admin";
}

// Type (Más flexible, uniones, primitivos)
type Status = "active" | "inactive";
type ID = string | number;`,
					},
					{
						name: "Type Assertions",
						description:
							"Forzar un tipo cuando sabes más que el compilador.",
						example: `// Sintaxis 'as'
const input = document.getElementById("myInput") as HTMLInputElement;
input.value = "Hola";

// Sintaxis angle-bracket (no usar en JSX)
const input2 = <HTMLInputElement>document.getElementById("myInput");`,
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
						example: `function identity<T>(arg: T): T {
  return arg;
}

// Uso
const output1 = identity<string>("myString");
const output2 = identity(100); // Inferencia automática

// Interfaz Genérica
interface Box<T> {
  contents: T;
}

const stringBox: Box<string> = { contents: "hello" };`,
					},
					{
						name: "Union & Intersection Types",
						description: "Combinar tipos.",
						example: `// Union (Uno u otro)
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// Intersection (Ambos)
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { id: string; title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;`,
					},
					{
						name: "Literal Types",
						description: "Tipos con valores específicos.",
						example: `// String Literal Types
type Direction = "north" | "south" | "east" | "west";

function move(direction: Direction) {
  console.log(\`Moving \${direction}\`);
}

move("north"); // OK
// move("up"); // Error

// Numeric Literal Types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;`,
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
						example: `interface User {
  id: number;
  name: string;
  email?: string;
}

// Partial: Todo opcional
type UpdateUser = Partial<User>;

// Required: Todo requerido
type CompleteUser = Required<User>;

// Pick: Elegir propiedades
type UserPreview = Pick<User, "id" | "name">;

// Omit: Excluir propiedades
type UserNoId = Omit<User, "id">;

// Record: Crear objeto con claves específicas
type Roles = Record<"admin" | "user", { permissions: string[] }>;`,
					},
					{
						name: "Type Guards",
						description:
							"Funciones para estrechar tipos en runtime.",
						example: `interface Fish { swim: () => void }
interface Bird { fly: () => void }

// Type Predicate
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // TS sabe que es Fish
  } else {
    pet.fly(); // TS sabe que es Bird
  }
}`,
					},
					{
						name: "Mapped Types",
						description: "Crear tipos basados en otros tipos.",
						example: `type User = {
  id: number;
  name: string;
};

// Hacer todas las propiedades readonly
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// Hacer todas las propiedades opcionales y nullable
type NullableUser = {
  [K in keyof User]?: User[K] | null;
};

// Remover readonly
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};`,
					},
					{
						name: "Conditional Types",
						description: "Tipos que dependen de condiciones.",
						example: `// Sintaxis: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false

// Extraer tipo de retorno de función
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Func = () => string;
type FuncReturn = ReturnType<Func>; // string`,
					},
					{
						name: "Template Literal Types",
						description: "Tipos basados en strings literales.",
						example: `type World = "world";
type Greeting = \`hello \${World}\`; // "hello world"

// Combinaciones
type Color = "red" | "blue";
type Size = "small" | "large";
type Style = \`\${Color}-\${Size}\`; 
// "red-small" | "red-large" | "blue-small" | "blue-large"

// Uso práctico: Event handlers
type PropEventSource<T> = {
  on<K extends string & keyof T>(
    eventName: \`\${K}Changed\`,
    callback: (newValue: T[K]) => void
  ): void;
};`,
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
						example: `// Functional Component con Props tipadas
interface WelcomeProps {
  name: string;
  age?: number;
}

function Welcome({ name, age = 18 }: WelcomeProps) {
  return <h1>Hello, {name} ({age})</h1>;
}

// Uso
<Welcome name="Sara" />`,
					},
					{
						name: "useState Hook",
						description: "Manejo de estado local.",
						example: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  // Actualización funcional (recomendado para valores previos)
  const increment = () => setCount(prev => prev + 1);
  
  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}`,
					},
					{
						name: "Conditional Rendering",
						description: "Renderizado condicional de componentes.",
						example: `function UserGreeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  // Early return
  if (!isLoggedIn) {
    return <button>Login</button>;
  }
  
  return (
    <div>
      {/* Operador ternario */}
      {isLoggedIn ? <Dashboard /> : <Login />}
      
      {/* Short-circuit con && */}
      {isLoggedIn && <WelcomeMessage />}
    </div>
  );
}`,
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
						example: `import { useEffect, useState } from 'react';

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    let isMounted = true; // Prevenir memory leaks
    
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setUser(data);
      });
    
    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [userId]); // Dependencias
  
  return <div>{user?.name}</div>;
}`,
					},
					{
						name: "Context API",
						description: "Estado global sin prop drilling.",
						example: `import { createContext, useContext, useState } from 'react';

// 1. Crear contexto con tipo
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 2. Provider
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook para consumir
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// 4. Uso
function Button() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>{theme}</button>;
}`,
					},
					{
						name: "useMemo & useCallback",
						description:
							"Optimización de rendimiento mediante memoización.",
						example: `import { useMemo, useCallback, useState } from 'react';

function ExpensiveComponent({ items }: { items: number[] }) {
  const [count, setCount] = useState(0);
  
  // useMemo: Memoriza valores calculados
  const sortedItems = useMemo(() => {
    console.log('Sorting...');
    return [...items].sort((a, b) => a - b);
  }, [items]); // Solo recalcula si 'items' cambia
  
  // useCallback: Memoriza funciones
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []); // Función estable
  
  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Sorted: {sortedItems.join(', ')}</p>
    </div>
  );
}`,
					},
					{
						name: "useReducer",
						description:
							"Gestión de estado complejo con reducer pattern.",
						example: `import { useReducer } from 'react';

// 1. Definir tipos
type State = { count: number; error: string | null };
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'error'; payload: string };

// 2. Reducer puro
function counterReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, error: null };
    case 'decrement':
      return { ...state, count: state.count - 1, error: null };
    case 'reset':
      return { count: 0, error: null };
    case 'error':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// 3. Uso
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0, error: null });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}`,
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
						example: `import { useRef, forwardRef, useImperativeHandle } from 'react';

// useRef para valores mutables sin re-render
function Timer() {
  const intervalRef = useRef<number | null>(null);
  const countRef = useRef(0);
  
  const start = () => {
    intervalRef.current = setInterval(() => {
      countRef.current += 1;
      console.log(countRef.current);
    }, 1000);
  };
  
  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  
  return <button onClick={start}>Start</button>;
}

// ForwardRef para exponer refs a componentes hijos
interface InputProps {
  placeholder?: string;
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Uso
function Parent() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const focusInput = () => inputRef.current?.focus();
  
  return (
    <>
      <CustomInput ref={inputRef} placeholder="Type here" />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}`,
					},
					{
						name: "Custom Hooks",
						description:
							"Reutilizar lógica de estado entre componentes.",
						example: `import { useState, useEffect } from 'react';

// Hook personalizado para fetch de datos
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    let isMounted = true;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setData(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });
    
    return () => { isMounted = false; };
  }, [url]);
  
  return { data, loading, error };
}

// Uso
function UserList() {
  const { data, loading, error } = useFetch<User[]>('/api/users');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <ul>
      {data?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`,
					},
					{
						name: "Render Props Pattern",
						description:
							"Compartir lógica mediante props que son funciones.",
						example: `interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (position: MousePosition) => React.ReactNode;
}

function MouseTracker({ render }: MouseTrackerProps) {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  
  return <>{render(position)}</>;
}

// Uso
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <h1>Mouse at ({x}, {y})</h1>
      )}
    />
  );
}`,
					},
					{
						name: "Error Boundaries",
						description:
							"Capturar errores en el árbol de componentes.",
						example: `import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: null
  };
  
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Enviar a servicio de logging (Sentry, etc.)
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }
    
    return this.props.children;
  }
}

// Uso
function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <MyComponent />
    </ErrorBoundary>
  );
}`,
					},
					{
						name: "Composition Pattern",
						description:
							"Composición de componentes para máxima flexibilidad.",
						example: `// Compound Components Pattern
interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

Card.Header = function CardHeader({ children }: CardProps) {
  return <div className="card-header">{children}</div>;
};

Card.Body = function CardBody({ children }: CardProps) {
  return <div className="card-body">{children}</div>;
};

Card.Footer = function CardFooter({ children }: CardProps) {
  return <div className="card-footer">{children}</div>;
};

// Uso
function App() {
  return (
    <Card>
      <Card.Header>
        <h2>Title</h2>
      </Card.Header>
      <Card.Body>
        <p>Content here</p>
      </Card.Body>
      <Card.Footer>
        <button>Action</button>
      </Card.Footer>
    </Card>
  );
}`,
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
						example: `import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => (
  <ScrollView>
    <View>
      <Text>Hola Mundo</Text>
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={{ width: 50, height: 50 }} 
      />
      <TextInput 
        placeholder="Escribe aqui" 
        style={{ borderWidth: 1, padding: 10 }}
      />
    </View>
  </ScrollView>
);`,
					},
					{
						name: "StyleSheet",
						description:
							"Estilos optimizados para RN, similar a CSS pero en JS.",
						example: `import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hello RN</Text>
  </View>
);`,
					},
					{
						name: "Flexbox Layout",
						description:
							"Sistema de diseño principal en RN (flexDirection column por defecto).",
						example: `// Columna (por defecto)
<View style={{ flex: 1, flexDirection: 'column' }}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flex: 2, backgroundColor: 'green' }} />
  <View style={{ flex: 3, backgroundColor: 'blue' }} />
</View>

// Fila, Justificar y Alinear
<View style={{ 
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  padding: 20
}}>
  <Text>Left</Text>
  <Text>Center</Text>
  <Text>Right</Text>
</View>`,
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
						example: `import { FlatList, Text, View } from 'react-native';

interface Item {
  id: string;
  title: string;
}

const DATA: Item[] = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' }
];

const App = () => (
  <FlatList
    data={DATA}
    renderItem={({ item }) => (
      <View style={{ padding: 20, borderBottomWidth: 1 }}>
        <Text>{item.title}</Text>
      </View>
    )}
    keyExtractor={item => item.id}
    // Optimizaciones
    removeClippedSubviews={true}
    maxToRenderPerBatch={10}
    windowSize={10}
  />
);`,
					},
					{
						name: "SectionList",
						description: "Lista con secciones y cabeceras.",
						example: `import { SectionList, Text, View } from 'react-native';

const DATA = [
  { title: "Platos Principales", data: ["Pizza", "Burger"] },
  { title: "Bebidas", data: ["Agua", "Soda"] }
];

const App = () => (
  <SectionList
    sections={DATA}
    renderItem={({ item }) => (
      <Text style={{ padding: 10 }}>{item}</Text>
    )}
    renderSectionHeader={({ section: { title } }) => (
      <Text style={{ 
        fontWeight: 'bold', 
        backgroundColor: '#f0f0f0',
        padding: 10 
      }}>
        {title}
      </Text>
    )}
    keyExtractor={(item, index) => item + index}
  />
);`,
					},
				],
			},
			{
				name: "Interactividad & UI Controls",
				items: [
					{
						name: "Touchable Components",
						description:
							"Manejo de toques (Pressable recomendado sobre TouchableOpacity).",
						example: `import { Pressable, Text, StyleSheet } from 'react-native';

const App = () => (
  <Pressable
    onPress={() => console.log('Pressed')}
    onLongPress={() => console.log('Long Pressed')}
    style={({ pressed }) => [
      styles.button,
      pressed && styles.pressed
    ]}
  >
    {({ pressed }) => (
      <Text style={styles.text}>
        {pressed ? 'Pressed!' : 'Press Me'}
      </Text>
    )}
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#007AFF',
    borderRadius: 8
  },
  pressed: {
    opacity: 0.7
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
});`,
					},
					{
						name: "Switch & ActivityIndicator",
						description: "Controles nativos comunes.",
						example: `import { Switch, ActivityIndicator, View } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  
  return (
    <View>
      {/* Switch */}
      <Switch 
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsEnabled}
        value={isEnabled}
      />
      
      {/* Loader */}
      {loading && (
        <ActivityIndicator 
          size="large" 
          color="#0000ff" 
          animating={loading}
        />
      )}
    </View>
  );
};`,
					},
					{
						name: "Modal",
						description: "Ventana superpuesta al contenido actual.",
						example: `import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Soy un Modal!</Text>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Abrir Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});`,
					},
				],
			},
			{
				name: "Navegación",
				items: [
					{
						name: "React Navigation - Stack Navigator",
						description:
							"Navegación tipo stack (push/pop) entre pantallas.",
						example: `// npm install @react-navigation/native @react-navigation/native-stack
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';

// Tipado de rutas
type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number; title: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { 
          itemId: 86, 
          title: 'Item Title' 
        })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }: any) {
  const { itemId, title } = route.params;
  return (
    <View>
      <Text>Details: {title} (ID: {itemId})</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`,
					},
					{
						name: "React Navigation - Tab Navigator",
						description:
							"Navegación con tabs en la parte inferior.",
						example: `// npm install @react-navigation/bottom-tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <View><Text>Home</Text></View>;
}

function SettingsScreen() {
  return <View><Text>Settings</Text></View>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;
            
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}`,
					},
				],
			},
			{
				name: "APIs Nativas",
				items: [
					{
						name: "AsyncStorage",
						description: "Almacenamiento persistente clave-valor.",
						example: `// npm install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Guardar datos
const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error('Error saving data', e);
  }
};

// Leer datos
const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error reading data', e);
  }
};

// Eliminar datos
const removeData = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error('Error removing data', e);
  }
};

// Uso
await storeData('user', { id: 1, name: 'John' });
const user = await getData('user');`,
					},
					{
						name: "Permissions & Camera",
						description:
							"Solicitar permisos y acceder a la cámara.",
						example: `// npm install expo-camera expo-permissions
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(CameraType.back);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  if (hasPermission === null) {
    return <View><Text>Requesting permission...</Text></View>;
  }
  
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }
  
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View style={{ flex: 1, backgroundColor: 'transparent' }}>
          <Button
            title="Flip Camera"
            onPress={() => {
              setType(
                type === CameraType.back
                  ? CameraType.front
                  : CameraType.back
              );
            }}
          />
        </View>
      </Camera>
    </View>
  );
}`,
					},
					{
						name: "Geolocation",
						description: "Obtener ubicación del dispositivo.",
						example: `// npm install expo-location
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

export default function LocationScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  
  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location.coords);
  }
  
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}`,
					},
				],
			},
			{
				name: "Performance",
				items: [
					{
						name: "React.memo & useMemo",
						description: "Evitar re-renders innecesarios.",
						example: `import React, { memo, useMemo } from 'react';
import { Text, View } from 'react-native';

// Componente memoizado (solo re-renderiza si props cambian)
interface ItemProps {
  title: string;
  onPress: () => void;
}

const ListItem = memo(({ title, onPress }: ItemProps) => {
  console.log('Rendering:', title);
  return (
    <Pressable onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
});

// Uso con useMemo para evitar recrear objetos
function ParentComponent({ items }: { items: string[] }) {
  const [count, setCount] = useState(0);
  
  // Memorizar cálculos costosos
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);
  
  // Memorizar callbacks
  const handlePress = useCallback((item: string) => {
    console.log('Pressed:', item);
  }, []);
  
  return (
    <View>
      <Button title="Increment" onPress={() => setCount(c => c + 1)} />
      {sortedItems.map(item => (
        <ListItem key={item} title={item} onPress={() => handlePress(item)} />
      ))}
    </View>
  );
}`,
					},
					{
						name: "FlatList Optimization",
						description: "Técnicas para listas grandes.",
						example: `import { FlatList, Text, View } from 'react-native';

const ITEM_HEIGHT = 50;

const OptimizedList = ({ data }: { data: Item[] }) => {
  const renderItem = useCallback(({ item }: { item: Item }) => (
    <View style={{ height: ITEM_HEIGHT }}>
      <Text>{item.title}</Text>
    </View>
  ), []);
  
  const keyExtractor = useCallback((item: Item) => item.id, []);
  
  const getItemLayout = useCallback(
    (data: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    []
  );
  
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout} // Mejora scroll performance
      removeClippedSubviews={true} // Unmount items fuera de viewport
      maxToRenderPerBatch={10} // Renderizar 10 items por batch
      updateCellsBatchingPeriod={50} // Delay entre batches
      windowSize={10} // Número de páginas a renderizar
      initialNumToRender={10} // Items iniciales
    />
  );
};`,
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
						description:
							"Hook para fetching de datos con cache automático.",
						example: `import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
}

function UserProfile({ userId }: { userId: string }) {
  const { data, isPending, error, isError } = useQuery({
    queryKey: ['user', userId], // Cache key (array para dependencias)
    queryFn: async () => {
      const res = await fetch(\`/api/users/\${userId}\`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json() as Promise<User>;
    },
    staleTime: 5 * 60 * 1000, // 5 minutos (datos frescos)
    gcTime: 10 * 60 * 1000, // 10 minutos (garbage collection)
  });
  
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  
  return <div>{data.name}</div>;
}`,
					},
					{
						name: "QueryClient Setup",
						description:
							"Configuración global del cliente de queries.",
						example: `import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Crear cliente con configuración por defecto
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minuto
      gcTime: 5 * 60 * 1000, // 5 minutos
      retry: 3, // Reintentos en caso de error
      refetchOnWindowFocus: false, // No refetch al volver a la ventana
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
      {/* Devtools solo en desarrollo */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}`,
					},
				],
			},
			{
				name: "Nivel Intermedio",
				items: [
					{
						name: "useMutation",
						description: "Hook para crear/actualizar/borrar datos.",
						example: `import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function TodoForm() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (newTodo: Omit<Todo, 'id'>) => {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTodo),
      });
      return res.json();
    },
    onSuccess: () => {
      // Invalidar y refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
    onError: (error) => {
      console.error('Error creating todo:', error);
    },
  });
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate({
      title: formData.get('title') as string,
      completed: false,
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="title" required />
      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Adding...' : 'Add Todo'}
      </button>
      {mutation.isError && <p>Error: {mutation.error.message}</p>}
    </form>
  );
}`,
					},
					{
						name: "Query Invalidation",
						description: "Refrescar datos después de una mutación.",
						example: `import { useMutation, useQueryClient } from '@tanstack/react-query';

function useUpdateUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (user: User) => {
      const res = await fetch(\`/api/users/\${user.id}\`, {
        method: 'PUT',
        body: JSON.stringify(user),
      });
      return res.json();
    },
    onSuccess: (data, variables) => {
      // Opción 1: Invalidar queries específicas
      queryClient.invalidateQueries({ queryKey: ['user', variables.id] });
      
      // Opción 2: Invalidar todas las queries de usuarios
      queryClient.invalidateQueries({ queryKey: ['users'] });
      
      // Opción 3: Actualizar cache manualmente (optimistic update)
      queryClient.setQueryData(['user', variables.id], data);
    },
  });
}`,
					},
					{
						name: "Dependent Queries",
						description: "Queries que dependen de otras queries.",
						example: `function UserProjects({ userId }: { userId: string }) {
  // Primera query: obtener usuario
  const { data: user } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
  
  // Segunda query: solo se ejecuta si user existe
  const { data: projects } = useQuery({
    queryKey: ['projects', user?.id],
    queryFn: () => fetchProjects(user!.id),
    enabled: !!user, // Solo ejecutar si user existe
  });
  
  return (
    <div>
      <h1>{user?.name}</h1>
      {projects?.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}`,
					},
					{
						name: "Parallel Queries",
						description: "Ejecutar múltiples queries en paralelo.",
						example: `function Dashboard() {
  // Opción 1: Múltiples useQuery (se ejecutan en paralelo)
  const usersQuery = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
  
  // Opción 2: useQueries para queries dinámicas
  const userIds = [1, 2, 3];
  const userQueries = useQueries({
    queries: userIds.map(id => ({
      queryKey: ['user', id],
      queryFn: () => fetchUser(id),
    })),
  });
  
  // Verificar si todas las queries terminaron
  const isLoading = userQueries.some(q => q.isPending);
  
  return (
    <div>
      {usersQuery.data?.map(user => <div key={user.id}>{user.name}</div>)}
      {postsQuery.data?.map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}`,
					},
				],
			},
			{
				name: "Nivel Avanzado",
				items: [
					{
						name: "Optimistic Updates",
						description:
							"Actualizar UI antes de que el servidor responda.",
						example: `function useTodoMutation() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: updateTodo,
    // Antes de la mutación
    onMutate: async (newTodo) => {
      // Cancelar queries en curso para evitar sobrescribir
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      
      // Snapshot del estado anterior
      const previousTodos = queryClient.getQueryData(['todos']);
      
      // Actualizar cache optimísticamente
      queryClient.setQueryData(['todos'], (old: Todo[] = []) => {
        return old.map(todo =>
          todo.id === newTodo.id ? newTodo : todo
        );
      });
      
      // Retornar contexto con snapshot
      return { previousTodos };
    },
    // Si la mutación falla, rollback
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todos'], context?.previousTodos);
    },
    // Siempre refetch después de error o éxito
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
}`,
					},
					{
						name: "Prefetching",
						description:
							"Pre-cargar datos antes de que el usuario los necesite.",
						example: `import { useQueryClient } from '@tanstack/react-query';

function UserList() {
  const queryClient = useQueryClient();
  
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
  
  // Prefetch al hacer hover
  const handleMouseEnter = (userId: string) => {
    queryClient.prefetchQuery({
      queryKey: ['user', userId],
      queryFn: () => fetchUser(userId),
      staleTime: 60 * 1000, // Cache por 1 minuto
    });
  };
  
  return (
    <ul>
      {users?.map(user => (
        <li 
          key={user.id}
          onMouseEnter={() => handleMouseEnter(user.id)}
        >
          <Link to={\`/users/\${user.id}\`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}`,
					},
					{
						name: "Infinite Queries",
						description: "Paginación infinita (scroll infinito).",
						example: `import { useInfiniteQuery } from '@tanstack/react-query';

interface PostsResponse {
  posts: Post[];
  nextCursor: number | null;
}

function InfinitePostList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await fetch(\`/api/posts?cursor=\${pageParam}\`);
      return res.json() as Promise<PostsResponse>;
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });
  
  return (
    <div>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts.map(post => (
            <div key={post.id}>{post.title}</div>
          ))}
        </React.Fragment>
      ))}
      
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? 'Loading more...'
          : hasNextPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>
    </div>
  );
}`,
					},
					{
						name: "SSR with Next.js",
						description:
							"Server-Side Rendering con TanStack Query.",
						example: `// app/page.tsx (Next.js 13+ App Router)
import { 
  dehydrate, 
  HydrationBoundary, 
  QueryClient 
} from '@tanstack/react-query';

async function getUsers() {
  const res = await fetch('https://api.example.com/users');
  return res.json();
}

export default async function HomePage() {
  const queryClient = new QueryClient();
  
  // Prefetch en el servidor
  await queryClient.prefetchQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserList />
    </HydrationBoundary>
  );
}

// Componente cliente
'use client';
function UserList() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  
  return (
    <ul>
      {data?.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`,
					},
					{
						name: "Query Cancellation",
						description:
							"Cancelar queries en curso con AbortController.",
						example: `function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const { data, isFetching } = useQuery({
    queryKey: ['search', searchTerm],
    queryFn: async ({ signal }) => {
      // signal es un AbortSignal
      const res = await fetch(
        \`/api/search?q=\${searchTerm}\`,
        { signal } // Pasar signal al fetch
      );
      return res.json();
    },
    enabled: searchTerm.length > 2, // Solo buscar si hay 3+ caracteres
  });
  
  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      {isFetching && <span>Searching...</span>}
      {data?.results.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`,
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
						example: `import axios from 'axios';

// Async/Await (recomendado)
const fetchUser = async (id: string) => {
  try {
    const response = await axios.get(\`/api/users/\${id}\`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Con parámetros de query
const searchUsers = async (query: string) => {
  const response = await axios.get('/api/users', {
    params: { q: query, limit: 10 }
  });
  return response.data;
};`,
					},
					{
						name: "POST Request",
						description: "Enviar datos al servidor.",
						example: `import axios from 'axios';

interface CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
}

const createUser = async (userData: CreateUserDto) => {
  try {
    const response = await axios.post('/api/users', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Response error:', error.response?.data);
      console.error('Status:', error.response?.status);
    }
    throw error;
  }
};`,
					},
					{
						name: "PUT/PATCH/DELETE",
						description: "Actualizar y eliminar recursos.",
						example: `// PUT: Reemplazar recurso completo
const updateUser = async (id: string, userData: User) => {
  const response = await axios.put(\`/api/users/\${id}\`, userData);
  return response.data;
};

// PATCH: Actualización parcial
const updateUserEmail = async (id: string, email: string) => {
  const response = await axios.patch(\`/api/users/\${id}\`, { email });
  return response.data;
};

// DELETE: Eliminar recurso
const deleteUser = async (id: string) => {
  await axios.delete(\`/api/users/\${id}\`);
};`,
					},
				],
			},
			{
				name: "Nivel Intermedio",
				items: [
					{
						name: "Axios Instance",
						description: "Crear una instancia pre-configurada.",
						example: `import axios from 'axios';

// Crear instancia con configuración base
const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Usar la instancia
const getUsers = async () => {
  const response = await apiClient.get('/users');
  return response.data;
};

// Múltiples instancias para diferentes APIs
const authApi = axios.create({
  baseURL: 'https://auth.example.com',
  withCredentials: true, // Enviar cookies
});`,
					},
					{
						name: "Interceptors",
						description:
							"Interceptar peticiones o respuestas globalmente.",
						example: `import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
});

// Request Interceptor: Agregar token a todas las peticiones
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    console.log('Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Manejo global de errores
apiClient.interceptors.response.use(
  (response) => {
    // Transformar respuesta si es necesario
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token expirado, redirigir a login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);`,
					},
					{
						name: "Error Handling",
						description: "Manejo robusto de errores con tipado.",
						example: `import axios, { AxiosError } from 'axios';

interface ApiError {
  message: string;
  code: string;
  details?: Record<string, string[]>;
}

const fetchData = async () => {
  try {
    const response = await axios.get('/api/data');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>;
      
      if (axiosError.response) {
        // Error de respuesta del servidor (4xx, 5xx)
        console.error('Status:', axiosError.response.status);
        console.error('Data:', axiosError.response.data);
        throw new Error(axiosError.response.data.message);
      } else if (axiosError.request) {
        // Request enviado pero sin respuesta
        console.error('No response received');
        throw new Error('Network error');
      } else {
        // Error al configurar la request
        console.error('Error:', axiosError.message);
        throw axiosError;
      }
    }
    // Error no relacionado con Axios
    throw error;
  }
};`,
					},
					{
						name: "Request Cancellation",
						description:
							"Cancelar peticiones en curso con AbortController.",
						example: `import axios from 'axios';

// Opción 1: AbortController (recomendado)
const fetchUserWithCancel = () => {
  const controller = new AbortController();
  
  const request = axios.get('/api/users', {
    signal: controller.signal,
  });
  
  // Cancelar después de 5 segundos
  setTimeout(() => controller.abort(), 5000);
  
  return { request, cancel: () => controller.abort() };
};

// Uso en React
function UserList() {
  useEffect(() => {
    const controller = new AbortController();
    
    axios.get('/api/users', { signal: controller.signal })
      .then(res => setUsers(res.data))
      .catch(err => {
        if (axios.isCancel(err)) {
          console.log('Request canceled');
        }
      });
    
    // Cleanup: cancelar al desmontar
    return () => controller.abort();
  }, []);
}`,
					},
				],
			},
			{
				name: "Nivel Avanzado",
				items: [
					{
						name: "Retry Logic",
						description:
							"Reintentar peticiones fallidas automáticamente.",
						example: `import axios, { AxiosRequestConfig } from 'axios';

const axiosRetry = async <T>(
  config: AxiosRequestConfig,
  maxRetries = 3,
  delay = 1000
): Promise<T> => {
  let lastError: any;
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      lastError = error;
      
      // No reintentar en errores 4xx (client errors)
      if (axios.isAxiosError(error) && error.response?.status < 500) {
        throw error;
      }
      
      // Esperar antes de reintentar (exponential backoff)
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
      }
    }
  }
  
  throw lastError;
};

// Uso
const data = await axiosRetry<User[]>({
  method: 'GET',
  url: '/api/users',
});`,
					},
					{
						name: "Upload Progress",
						description:
							"Monitorear progreso de subida de archivos.",
						example: `import axios from 'axios';

const uploadFile = async (
  file: File,
  onProgress?: (progress: number) => void
) => {
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress?.(percentCompleted);
        }
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};

// Uso en componente
function FileUploader() {
  const [progress, setProgress] = useState(0);
  
  const handleUpload = async (file: File) => {
    await uploadFile(file, setProgress);
  };
  
  return <ProgressBar value={progress} />;
}`,
					},
					{
						name: "Concurrent Requests",
						description:
							"Ejecutar múltiples peticiones en paralelo.",
						example: `import axios from 'axios';

// Opción 1: Promise.all (falla si una falla)
const fetchAllData = async () => {
  try {
    const [users, posts, comments] = await Promise.all([
      axios.get('/api/users'),
      axios.get('/api/posts'),
      axios.get('/api/comments'),
    ]);
    
    return {
      users: users.data,
      posts: posts.data,
      comments: comments.data,
    };
  } catch (error) {
    console.error('One or more requests failed:', error);
    throw error;
  }
};

// Opción 2: Promise.allSettled (continúa aunque fallen)
const fetchAllDataSafe = async () => {
  const results = await Promise.allSettled([
    axios.get('/api/users'),
    axios.get('/api/posts'),
    axios.get('/api/comments'),
  ]);
  
  return results.map((result, index) => {
    if (result.status === 'fulfilled') {
      return result.value.data;
    } else {
      console.error(\`Request \${index} failed:\`, result.reason);
      return null;
    }
  });
};`,
					},
					{
						name: "Custom Axios Wrapper",
						description:
							"Wrapper tipado y reutilizable para toda la app.",
						example: `import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Configuración base
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Interceptors
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
    }
    return Promise.reject(error);
  }
);

// Wrapper tipado
class ApiService {
  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await apiClient.get<T>(url, config);
    return response.data;
  }
  
  static async post<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await apiClient.post<T>(url, data, config);
    return response.data;
  }
  
  static async put<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await apiClient.put<T>(url, data, config);
    return response.data;
  }
  
  static async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await apiClient.delete<T>(url, config);
    return response.data;
  }
}

// Uso
const users = await ApiService.get<User[]>('/users');
const newUser = await ApiService.post<User, CreateUserDto>('/users', userData);`,
					},
				],
			},
		],
	},
	{
		id: "zustand",
		name: "Zustand",
		description:
			"State management minimalista y escalable sin boilerplate.",
		color: "#F66E2D",
		docLink: "https://github.com/pmndrs/zustand",
		categories: [
			{
				name: "Conceptos Básicos",
				items: [
					{
						name: "Create Store",
						description:
							"Crear un store simple con estado y acciones.",
						example: `import { create } from 'zustand';

// Definir el store (sin providers, sin context)
interface BearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// Uso en componentes
function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>Add Bear</button>;
}`,
					},
					{
						name: "Selecting State",
						description:
							"Seleccionar slices específicos del estado para evitar re-renders.",
						example: `import { create } from 'zustand';

interface Store {
  firstName: string;
  lastName: string;
  age: number;
}

const usePersonStore = create<Store>((set) => ({
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
}));

// ❌ MAL: Re-renderiza en CUALQUIER cambio del store
function BadComponent() {
  const state = usePersonStore(); // Selecciona TODO
  return <div>{state.firstName}</div>;
}

// ✅ BIEN: Solo re-renderiza si firstName cambia
function GoodComponent() {
  const firstName = usePersonStore((state) => state.firstName);
  return <div>{firstName}</div>;
}

// ✅ Seleccionar múltiples valores
function MultiSelect() {
  const { firstName, age } = usePersonStore((state) => ({
    firstName: state.firstName,
    age: state.age,
  }));
  return <div>{firstName} - {age}</div>;
}`,
					},
					{
						name: "Updating State",
						description: "Actualizar estado de forma inmutable.",
						example: `import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  
  // Actualización funcional (acceso al estado previo)
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  
  // Actualización directa (merge automático)
  reset: () => set({ count: 0 }),
  
  // Con parámetros
  setCount: (value) => set({ count: value }),
}));

// Uso
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
					},
				],
			},
			{
				name: "Nivel Intermedio",
				items: [
					{
						name: "Async Actions",
						description:
							"Manejar operaciones asíncronas (API calls).",
						example: `import { create } from 'zustand';

interface User {
  id: string;
  name: string;
}

interface UserStore {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  addUser: (user: Omit<User, 'id'>) => Promise<void>;
}

const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  loading: false,
  error: null,
  
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      set({ users: data, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  
  addUser: async (userData) => {
    set({ loading: true });
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      const newUser = await response.json();
      
      // Actualizar estado con el nuevo usuario
      set((state) => ({
        users: [...state.users, newUser],
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));

// Uso
function UserList() {
  const { users, loading, error, fetchUsers } = useUserStore();
  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`,
					},
					{
						name: "Computed Values (Derived State)",
						description:
							"Valores derivados del estado (como getters).",
						example: `import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  // Computed values
  totalItems: () => number;
  totalPrice: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (item) => set((state) => ({
    items: [...state.items, item],
  })),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id),
  })),
  
  // Computed: Se calculan cuando se llaman
  totalItems: () => {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },
  
  totalPrice: () => {
    return get().items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  },
}));

// Uso
function Cart() {
  const items = useCartStore((state) => state.items);
  const totalItems = useCartStore((state) => state.totalItems());
  const totalPrice = useCartStore((state) => state.totalPrice());
  
  return (
    <div>
      <p>Items: {totalItems}</p>
      <p>Total: \${totalPrice.toFixed(2)}</p>
    </div>
  );
}`,
					},
					{
						name: "Shallow Equality",
						description:
							"Evitar re-renders con useShallow para objetos/arrays.",
						example: `import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

interface Store {
  nuts: number;
  honey: number;
  treats: Record<string, number>;
}

const useBearStore = create<Store>((set) => ({
  nuts: 0,
  honey: 0,
  treats: {},
}));

// ❌ Sin useShallow: Re-renderiza aunque los valores no cambien
function BadComponent() {
  const { nuts, honey } = useBearStore((state) => ({
    nuts: state.nuts,
    honey: state.honey,
  }));
  // Nuevo objeto en cada render = re-render innecesario
  return <div>{nuts} - {honey}</div>;
}

// ✅ Con useShallow: Solo re-renderiza si nuts o honey cambian
function GoodComponent() {
  const { nuts, honey } = useBearStore(
    useShallow((state) => ({ nuts: state.nuts, honey: state.honey }))
  );
  return <div>{nuts} - {honey}</div>;
}

// ✅ También funciona con arrays
function ArrayComponent() {
  const [nuts, honey] = useBearStore(
    useShallow((state) => [state.nuts, state.honey])
  );
  return <div>{nuts} - {honey}</div>;
}`,
					},
					{
						name: "Slices Pattern",
						description:
							"Dividir el store en slices para mejor organización.",
						example: `import { create } from 'zustand';

// Slice 1: User
interface UserSlice {
  user: { id: string; name: string } | null;
  setUser: (user: UserSlice['user']) => void;
  logout: () => void;
}

const createUserSlice = (set: any): UserSlice => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
});

// Slice 2: Theme
interface ThemeSlice {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const createThemeSlice = (set: any, get: any): ThemeSlice => ({
  theme: 'light',
  toggleTheme: () => set({
    theme: get().theme === 'light' ? 'dark' : 'light'
  }),
});

// Combinar slices
type Store = UserSlice & ThemeSlice;

const useAppStore = create<Store>()((...a) => ({
  ...createUserSlice(...a),
  ...createThemeSlice(...a),
}));

// Uso
function App() {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  
  return (
    <div className={theme}>
      <p>User: {user?.name ?? 'Guest'}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}`,
					},
				],
			},
			{
				name: "Nivel Avanzado",
				items: [
					{
						name: "Persist Middleware",
						description:
							"Persistir estado en localStorage/sessionStorage.",
						example: `import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStore {
  token: string | null;
  user: { id: string; name: string } | null;
  login: (token: string, user: AuthStore['user']) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      
      login: (token, user) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: 'auth-storage', // Clave en localStorage
      storage: createJSONStorage(() => localStorage), // Por defecto
      
      // Opciones avanzadas
      partialize: (state) => ({ token: state.token }), // Solo persistir token
      
      // Migración de versiones
      version: 1,
      migrate: (persistedState: any, version) => {
        if (version === 0) {
          // Migrar de v0 a v1
          persistedState.token = null;
        }
        return persistedState;
      },
    }
  )
);

// Uso
function App() {
  const { token, login, logout } = useAuthStore();
  
  return (
    <div>
      {token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login('abc123', { id: '1', name: 'John' })}>
          Login
        </button>
      )}
    </div>
  );
}`,
					},
					{
						name: "Immer Middleware",
						description:
							"Mutaciones inmutables con Immer (sintaxis más simple).",
						example: `import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

// Sin Immer (inmutabilidad manual)
const useStoreWithoutImmer = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now().toString(), text, completed: false }]
  })),
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  })),
}));

// Con Immer (mutaciones directas)
const useStoreWithImmer = create<TodoStore>()(
  immer((set) => ({
    todos: [],
    
    addTodo: (text) => set((state) => {
      state.todos.push({ id: Date.now().toString(), text, completed: false });
    }),
    
    toggleTodo: (id) => set((state) => {
      const todo = state.todos.find(t => t.id === id);
      if (todo) todo.completed = !todo.completed;
    }),
    
    removeTodo: (id) => set((state) => {
      const index = state.todos.findIndex(t => t.id === id);
      if (index !== -1) state.todos.splice(index, 1);
    }),
  }))
);`,
					},
					{
						name: "DevTools Middleware",
						description:
							"Integración con Redux DevTools para debugging.",
						example: `import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounterStore = create<CounterStore>()(
  devtools(
    (set) => ({
      count: 0,
      
      // Logs automáticos en DevTools
      increment: () => set(
        (state) => ({ count: state.count + 1 }),
        false, // No reemplazar estado
        'counter/increment' // Nombre de la acción
      ),
      
      decrement: () => set(
        (state) => ({ count: state.count - 1 }),
        false,
        { type: 'counter/decrement', payload: { amount: 1 } } // Con payload
      ),
    }),
    {
      name: 'CounterStore', // Nombre en DevTools
      enabled: process.env.NODE_ENV === 'development', // Solo en dev
    }
  )
);

// Combinar múltiples middlewares
const useAdvancedStore = create<CounterStore>()(
  devtools(
    persist(
      immer((set) => ({
        count: 0,
        increment: () => set((state) => { state.count += 1; }),
        decrement: () => set((state) => { state.count -= 1; }),
      })),
      { name: 'counter-storage' }
    ),
    { name: 'AdvancedStore' }
  )
);`,
					},
					{
						name: "Subscribe (Outside React)",
						description:
							"Escuchar cambios fuera de componentes React.",
						example: `import { create } from 'zustand';

interface NotificationStore {
  message: string | null;
  type: 'success' | 'error' | null;
  show: (message: string, type: 'success' | 'error') => void;
  hide: () => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  message: null,
  type: null,
  show: (message, type) => set({ message, type }),
  hide: () => set({ message: null, type: null }),
}));

// Suscribirse a cambios (fuera de React)
const unsubscribe = useNotificationStore.subscribe(
  (state) => {
    if (state.message) {
      console.log(\`[\${state.type?.toUpperCase()}] \${state.message}\`);
    }
  }
);

// Acceder al estado sin suscripción
const currentState = useNotificationStore.getState();
console.log(currentState.message);

// Actualizar estado desde fuera de React
useNotificationStore.getState().show('Hello!', 'success');

// Cleanup
unsubscribe();

// Subscribe con selector (requiere subscribeWithSelector middleware)
import { subscribeWithSelector } from 'zustand/middleware';

const useStore = create(
  subscribeWithSelector((set) => ({ count: 0 }))
);

// Solo escuchar cambios en 'count'
const unsub = useStore.subscribe(
  (state) => state.count,
  (count, prevCount) => {
    console.log(\`Count changed from \${prevCount} to \${count}\`);
  }
);`,
					},
					{
						name: "Vanilla Store (Sin React)",
						description:
							"Usar Zustand sin React (Node.js, otros frameworks).",
						example: `import { createStore } from 'zustand/vanilla';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Crear store vanilla (sin hooks)
const counterStore = createStore<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// API disponible
const { getState, setState, subscribe, getInitialState } = counterStore;

// Leer estado
console.log(getState().count); // 0

// Actualizar estado
setState({ count: 10 });

// Ejecutar acciones
getState().increment();
console.log(getState().count); // 11

// Suscribirse a cambios
const unsubscribe = subscribe((state) => {
  console.log('State changed:', state);
});

// Usar vanilla store en React
import { useStore } from 'zustand';

function Counter() {
  const count = useStore(counterStore, (state) => state.count);
  const increment = useStore(counterStore, (state) => state.increment);
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}`,
					},
					{
						name: "Context Pattern (Múltiples Instancias)",
						description:
							"Crear múltiples instancias del mismo store con Context.",
						example: `import { createContext, useContext, useRef } from 'react';
import { createStore, useStore } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
}

// Crear contexto para el store
const CounterStoreContext = createContext<ReturnType<typeof createStore<CounterStore>> | null>(null);

// Provider que crea una nueva instancia
export function CounterStoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef(
    createStore<CounterStore>((set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
    }))
  );
  
  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
}

// Hook personalizado para consumir el store
export function useCounterStore<T>(selector: (state: CounterStore) => T): T {
  const store = useContext(CounterStoreContext);
  if (!store) throw new Error('useCounterStore must be used within CounterStoreProvider');
  return useStore(store, selector);
}

// Uso: Múltiples instancias independientes
function App() {
  return (
    <>
      <CounterStoreProvider>
        <Counter title="Counter 1" />
      </CounterStoreProvider>
      
      <CounterStoreProvider>
        <Counter title="Counter 2" />
      </CounterStoreProvider>
    </>
  );
}

function Counter({ title }: { title: string }) {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  
  return (
    <div>
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}`,
					},
					{
						name: "Testing",
						description:
							"Testear stores de Zustand con Jest/Vitest.",
						example: `import { create } from 'zustand';
import { act, renderHook } from '@testing-library/react';

interface CounterStore {
  count: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

describe('CounterStore', () => {
  beforeEach(() => {
    // Reset store antes de cada test
    useCounterStore.setState({ count: 0 });
  });
  
  it('should increment count', () => {
    const { result } = renderHook(() => useCounterStore());
    
    expect(result.current.count).toBe(0);
    
    act(() => {
      result.current.increment();
    });
    
    expect(result.current.count).toBe(1);
  });
  
  it('should reset count', () => {
    const { result } = renderHook(() => useCounterStore());
    
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    
    expect(result.current.count).toBe(2);
    
    act(() => {
      result.current.reset();
    });
    
    expect(result.current.count).toBe(0);
  });
  
  // Test sin React (vanilla store)
  it('should work without React', () => {
    const { getState, setState } = useCounterStore;
    
    setState({ count: 5 });
    expect(getState().count).toBe(5);
    
    getState().increment();
    expect(getState().count).toBe(6);
  });
});`,
					},
				],
			},
		],
	},
];

export default frontend;
