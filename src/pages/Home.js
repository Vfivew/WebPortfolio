import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<section className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<h3 className='title-3'>Markup and Styling</h3>
							<ul className='content-skill__list'>
								<li>HTML</li>
								<li>CSS</li>
								<li>SASS </li>
								<li>TailwindCSS </li>
							</ul>
							<h3 className='title-3'>Languages and Frameworks</h3>
							<ul className='content-skill__list'>
								<li>JavaScript</li>
								<li>TypeScript </li>
								<li>ReactJS </li>
								<li>Redux </li>
								<li>React Router</li>
							</ul>
							<h3 className='title-3'>Tools and Package Managers</h3>
							<ul className='content-skill__list'>
								<li>NPM</li>
								<li>Webpack </li>
								<li>Axios </li>
								<li>RTK Query</li>
							</ul>
						</li>
					</ul>
				</section>
			</main>
		</>
	);
}

export default Home;