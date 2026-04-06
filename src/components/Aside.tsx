import { areas } from "../data/data";
import { NavBarAside, TitleNavBar } from "../components";

function Aside({ isSidebarOpen, setIsSidebarOpen, setActiveTab, setActiveLevel, setSearchQuery, activeTab }: any) {
	return (
		<aside
			style={{
				width: isSidebarOpen ? "280px" : "0",
				opacity: isSidebarOpen ? 1 : 0,
				overflowY: "auto", // Permitir desplazamiento en la barra lateral
				overflowX: "hidden",
				background: "var(--bg-card)",
				borderRight: "1px solid #333",
				transition: "all 0.3s ease",
				display: "flex",
				flexDirection: "column",
				position: "sticky",
				top: 0,
				height: "100vh",
				flexShrink: 0,
			}}>
			<TitleNavBar setIsSidebarOpen={setIsSidebarOpen} />
			<NavBarAside areas={areas} activeTab={activeTab} setActiveTab={setActiveTab} setActiveLevel={setActiveLevel} setSearchQuery={setSearchQuery} />

			<div
				style={{
					padding: "1.5rem",
					borderTop: "1px solid #333",
					fontSize: "0.8rem",
					color: "var(--text-muted)",
				}}>
				<p>© 2025 Mejora Code</p>
			</div>
		</aside>
	);
}

export default Aside;
