import "./style.css";

import instagram from './../../img/icons/instagram.svg';
import gitHub from './../../img/icons/gitHub.svg';
import facebook from './../../img/icons/facebook.svg';
import Wave from "../wave/Wave";

const Footer = () => {
    return (
		<footer className="footer">
			<Wave/>
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://www.instagram.com/vladmanukian/?igshid=NTc4MTIwNjQ2YQ%3D%3D">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.facebook.com/profile.php?id=100003612204292">
								<img src={facebook} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/Vfivew">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;