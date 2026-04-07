import { areas } from "../../data/data";
import { FooterAside, NavBarAside, TitleNavBar } from "../../components";

function Aside({
	isSidebarOpen,
	setIsSidebarOpen,
	setActiveTab,
	setActiveLevel,
	setSearchQuery,
	activeTab,
}: any) {
	return (
		<aside
			style={{
				width: isSidebarOpen ? "280px" : "0",
				opacity: isSidebarOpen ? 1 : 0,
				transition: "width 0.5s ease, opacity 0.5s ease",
			}}
			className='aside'>
			<TitleNavBar setIsSidebarOpen={setIsSidebarOpen} />
			<NavBarAside
				areas={areas}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
				setActiveLevel={setActiveLevel}
				setSearchQuery={setSearchQuery}
			/>
			<FooterAside />
		</aside>
	);
}

export default Aside;
