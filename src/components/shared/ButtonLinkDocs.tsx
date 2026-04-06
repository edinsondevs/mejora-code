function ButtonLinkDocs({activeLang}: {activeLang: any}) {
  return (
		<a
			href={activeLang.docLink}
			target='_blank'
			rel='noopener noreferrer'
			style={{
				padding: "0.5rem 1rem",
				border: `1px solid ${activeLang.color}`,
				borderRadius: "4px",
				fontSize: "0.9rem",
				color: activeLang.color,
				whiteSpace: "nowrap",
				textDecoration: "none",
			}}>
			Docs Oficiales ↗
		</a>
  );
}

export default ButtonLinkDocs