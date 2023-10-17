import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hello, my name is <em>Vlad</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p> I'm passionate about learning and creating. If you have any questions or opportunities related to frontend development or anything else, please feel free to reach out. I'm ready to collaborate!</p>
				</div>
				<a href="/Resume.pdf" download className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;
