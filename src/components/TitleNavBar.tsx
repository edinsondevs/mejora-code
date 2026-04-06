import ButtonHamburger from './shared/ButtonHamburger'

function TitleNavBar({setIsSidebarOpen}: {setIsSidebarOpen: (open: boolean) => void}) {
  return (
    <div
				style={{
					padding: "1.5rem",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					position: "sticky",
					top: 0,
					background: "var(--bg-card)",
					zIndex: 10,
				}}>
				<h2
					className='title-gradient'
					style={{ fontSize: "1.5rem", margin: 0 }}>
					Mejora Code
				</h2>
				<ButtonHamburger
					setIsSidebarOpen={setIsSidebarOpen}
					mode='close'
				/>
			</div>
  )
}

export default TitleNavBar