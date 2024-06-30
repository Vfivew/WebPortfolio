import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const AboutMe = () => {
  return (
    <section className="about-me">
      <section className="sectionAbout">
        <h3 className="title"> May 20, 2024 - to present</h3>
        <p className="sectioon-text">
        I joined an internship at Zenbit as a Full Stack Developer.
        In a team of 4 developers and a PM, we are developing a website for clothing rental.
        Our Tech Stack: React, RTK Query, TypeScript, MUI, Nest JS, TypeORM, AWS, MySQL, Stripe.
        </p>
      </section>
      <section className="sectionAbout">
        <h3 className="title"> January 10, 2024 - March 22, 2024</h3>
        <p className="sectioon-text">
          Second stage of the Binary Studio Academy. Over the course of 6 weeks,
          we've developed an MVP that's fully functional for user use. We
          employed a Modern Tech Stack, incorporating technologies such as
          TypeScript, React, Redux Toolkit, Knex, Objection, Fastify,
          PostgreSQL, Stripe, Socket.IO, AWS, and others. Additionally, we've
          honed our skills in crafting clean, elegant, and easily understandable
          code&nbsp;
          <a
            href="https://study.binary-studio.com/certificate/351a809a-8f03-4ec1-aa78-a4c8b8d23898"
            target="_blank"
            rel="noreferrer"
          >
            <span className="reference">(Certificate</span>
          </a>
          <span> / </span>
          <a
            href="https://study.binary-studio.com/public/351a809a-8f03-4ec1-aa78-a4c8b8d23898"
            target="_blank"
            rel="noreferrer"
          >
            <span className="reference">Public Page).</span>
          </a>
        </p>
      </section>
      <section className="sectionAbout">
        <h3 className="title"> December 8, 2023 - January 10, 2024</h3>
        <p className="sectioon-text">
          Training at Binary Studio Academy. Attending lectures and working on a
          Mini project and homework.
        </p>
        <p className="sectioon-text"></p>
      </section>
      <section className="sectionAbout">
        <h3 className="title"> June 3, 2023 - November 27, 2023</h3>
        <p className="sectioon-text">
          At the end of the Udemy course, I started learning frameworks Redux,
          React Router, TypeScript, styling languages and SASS extensions,
          Tailwind CSS. With each new project, I learn something new and
          strengthen myself as a specialist. At the moment, I have completed 6
          pet projects. You can learn more about them at the following link:{" "}
          <Link to="/projects">
            <span className="reference">Projects</span>
          </Link>
          .
        </p>
      </section>
      <section className="sectionAbout">
        <ul className="list">
          <h3 className="title"> March 1, 2023 - June 1 2023</h3>
          <ul className="list">
            <li>
              Started my learning with books "Head First HTML and CSS" and "Head
              First JavaScript Programming".
            </li>
            <li>
              Gained access to courses on the ITVDN website "Basic JavaScript"
              and "Start JavaScript"
            </li>
            <li>Solved tasks on CodeWars </li>
            <li>
              Finished Full course on JavaScript on Udemy&nbsp;
              <a
                href="https://www.udemy.com/certificate/UC-96b96126-8bfc-4a27-bceb-25ce8d09dfac/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="reference">(Certificate).</span>
              </a>
            </li>
          </ul>
        </ul>
      </section>
    </section>
  );
};

export default AboutMe;
