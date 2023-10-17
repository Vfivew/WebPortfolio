const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Chernivtsi, Ukraine</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:vvorldvlad@yahoo.com">
								vvorldvlad@yahoo.com
							</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram/ Viber</h2>
						<p>
							<a href="tel:++38066545654*">+380 (066) 54-56-543</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;