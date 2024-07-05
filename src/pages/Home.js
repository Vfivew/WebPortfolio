import Header from './../components/header/Header'

const Home = () => {
    return (
      <>
        <Header />
        <main className="section">
          <section className="container">
            <ul className="content-list">
              <li className="content-list__item">
                <h2 className="title-4">Hard Skills</h2>
                <h3 className="title-3">Frontend</h3>
                <ul className="content-skill__list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SASS </li>
                  <li>JavaScript</li>
                  <li>TypeScript </li>
                  <li>React</li>
                  <li>Redux</li>
                </ul>
                <h3 className="title-3">Backend</h3>
                <ul className="content-skill__list">
                  <li>Node JS</li>
                  <li>Nest JS</li>
                  <li>Express</li>
                  <li>SQL </li>
                  <li>PostgresSQL</li>
                </ul>
                <h3 className="title-3">Other</h3>
                <ul className="content-skill__list">
                  <li>NPM</li>
                  <li>Git</li>
                  <li>AWS</li>
                  <li>WebSocket</li>
                </ul>
                <h3 className="title-3">Familiar with</h3>
                <ul className="content-skill__list">
                  <li>Webpack </li>
                  <li>Axios </li>
                  <li>Stripe</li>
                  <li>NoSQL</li>
                  <li>MongoDB</li>
                  <li>FireBase</li>
                  <li>MUI</li>
                  <li>Fastify</li>
                </ul>
              </li>
            </ul>
            <ul className="content-list">
              <h2 className="title-4">Soft Skills</h2>
              <ul className="content-soft__skill__list">
                <li>Easily find common ground with people </li>
                <li>
                  Ability to work effectively in a team
                </li>
                <li>Desire for self-improvement and continuous learning</li>
                <li>Listening and understanding others' perspectives</li>
              </ul>
            </ul>
          </section>
        </main>
      </>
    );
}

export default Home;