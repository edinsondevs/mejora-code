import ButtonHamburger from '../shared/ButtonHamburger'

function TitleNavBar({setIsSidebarOpen}: {setIsSidebarOpen: (open: boolean) => void}) {
  return (
    <div className='aside-title'>
		<h2 className='title-gradient'>Mejora Code</h2>
		<ButtonHamburger
			setIsSidebarOpen={setIsSidebarOpen}
			mode='close'
		/>
	</div>
  )
}

export default TitleNavBar