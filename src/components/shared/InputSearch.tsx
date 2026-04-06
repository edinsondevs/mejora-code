
function InputSearch({activeLang, searchQuery, setSearchQuery}: {activeLang: any, searchQuery: string, setSearchQuery: (query: string) => void}) {
  return (
		<input
			type='text'
			placeholder={`Buscar en ${activeLang.name}...`}
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			style={{
				padding: "0.6rem 1rem",
				borderRadius: "20px",
				border: "1px solid var(--text-muted)",
				background: "rgba(255,255,255,0.05)",
				color: "#fff",
				width: "250px",
				outline: "none",
			}}
			onFocus={(e) => (e.target.style.borderColor = activeLang.color)}
			onBlur={(e) => (e.target.style.borderColor = "var(--text-muted)")}
		/>
  );
}

export default InputSearch