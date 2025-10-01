import React from "react";
import "../App.css";
import "./About.css";

const About = () => {
  return (
    <main className="page about">
      <div className="about-container">
        <header className="about-header">
          <div className="profile-section">
            <h1 className="title">Web Developer  •  Designer</h1>
            <p className="location">St. Louis, MO</p>
            <div className="contact-links">
              <a href="mailto:hcover3333@gmail.com">hcover3333@gmail.com</a>
              <span className="separator">  •  </span>
              <a href="https://www.linkedin.com/in/hollyhenske" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        <section className="about-section">
          <h2>Professional Summary</h2>
          <p>
            Detail-oriented Web Developer with a strong front-end focus and hands-on experience in JavaScript, React, and
            Bubble.io. Adept at building responsive, user-friendly interfaces and integrating APIs, dedicated to elegantly solving 
            real user problems. I love to collaborate with cross-functional teams and stakeholders!
          </p>
        </section>

        <section className="about-section">
          <h2>Ideal Roles</h2>
          <p>
            Junior frontend-end or full-stack developer on collaborative teams that value mentorship, Remote or hybrid.
            Junior digital designer roles also welcome.
          </p>
        </section>

        <section className="about-section">
          <h2>Accomplishments</h2>
          <ul className="accomplishments-list">
            <li>
              Refactored API calls to new APIs in Bubble.io customer portal, making integration with the
              portal and third-party accounting apps like QuickBooks, Freshbooks and Xero possible
            </li>
            <li>
              Independently built a React workout app from ideation to MVP, featuring dynamic user interaction, API-driven
              content, and state management using hooks.
            </li>
            <li>
              Redesigned customer-facing portal pages for mobile responsiveness and consistent UX across browsers,
              contributing to improved user satisfaction and engagement.
            </li>
            <li>
              Collaborated cross-functionally with developers, designers, and customer support to resolve bugs,
            document scalable processes, like onboarding, account-creating and customer interactions, publishing 
            documents in team knowledge base, improving team efficiency.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Skills</h2>
          
          <div className="skills-group">
            <h3>Technical Skills</h3>
            <p className="skills-list">
              JavaScript, React (with hooks), HTML5, CSS3, Bootstrap, Material UI, Bubble.io (responsive design,
              workflows, data handling), API integration & testing, Python, SQL (MySQL), version control (Git, Bubble), DevTools
              debugging, component-based design, cross-browser compatibility, mobile responsiveness.
            </p>
          </div>

          <div className="skills-group">
            <h3>Tools & Platforms</h3>
            <p className="skills-list">
              GitHub, Bubble.io, YouTube, Clickup, Google Suite, Excel, Figma, Adobe XD, Copilot, WordPress, CRM platforms.
              AI-assisted development (ChatGPT, Copilot), prompt engineering and iterative AI tools for rapid prototyping and
              debugging.
            </p>
          </div>

          <div className="skills-group">
            <h3>Soft Skills</h3>
            <p className="skills-list">
              Clear communicator, self-motivated learner, adaptable team player, experienced in collaboration, documentation, and
              continuous improvement.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;