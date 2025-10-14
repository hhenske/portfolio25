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
            
          </div>
        </header>

        <section className="about-section">
          <h2>Professional Summary</h2>
          <p>
            Detail-oriented Web Developer with a strong front-end focus and hands-on experience in JavaScript, React, and
            Bubble.io. Adept at building responsive, user-friendly interfaces and integrating APIs, dedicated to elegantly solving 
            real user problems. I love to collaborate with cross-functional teams and stakeholders!
          </p>
          <p>I had a full career as an educator, teaching French and Spanish at the secondary level, which included arranging and
            supervising student travel abroad. So, I bring strong communication, collaboration, and problem-solving skills to my tech work.
            My web development journey includes completing a comprehensive coding bootcamp (LaunchCode), contract work, 2 years as a Web Developer in
            a B2B startup, and numerous personal projects.
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
          <h2>Ideal Roles</h2>
          <p>
            Junior frontend-end or full-stack developer on collaborative teams that value mentorship. 
            Remote or hybrid (On site with some flexibility). 
            Junior digital designer roles also welcome.
          </p>
        </section>

        <section className="about-section">
          <h2>Skills</h2>
          
          <div className="skills-group" id="certificates-list">
            <h3>Certificates</h3>
            <ul className="accomplishments-list">
            <li>
                IBM Full Stack Software Developer Professional Certificate, Coursera, 2025
            </li>
            <li>
                Google UX Design Specialization, Coursera, 2023
            </li>
            <li>Bubble Intensive Certificate of Completion, Momentum Academy, 2023
            </li>
            <li>
              LaunchCode Women's+ Lift-Off Program, 2022
            </li>
            <li>
              LaunchCode Women's+ frontend Web Development Bootcamp, 2022
            </li>
          </ul>
        </div>
          <div className="skills-group">
            <h3>Technical Skills</h3>
            <p className="skills-list">
             JavaScript, React (with hooks), HTML5, CSS3, Bootstrap, Material UI, Bubble.io (responsive design, workflows, data handling), API integration & testing, Python, SQL (MySQL), version control (Git, Bubble), DevTools debugging, component-based design, cross-browser compatibility, mobile responsiveness, cloud computing, Docker, Kubernetes, Service-based architecture, manual and automated testing, wireframing, prototyping, Ai prompting
            </p>
          </div>

          <div className="skills-group">
            <h3>Tools & Platforms</h3>
            <p className="skills-list">
              GitHub, Bubble.io, YouTrack, Clickup, Google Suite, Excel, Figma, Adobe XD, CRM platforms. AI-assisted development (ChatGPT, Claude, Copilot), prompt engineering and iterative AI tools for rapid prototyping and debugging, SalesForce, Postman, Google Dev Tools, Command line and CLI
            </p>
          </div>

          <div className="skills-group">
            <h3>Soft Skills</h3>
            <p className="skills-list">
              Clear, concise communication, Avid continuous learning, Persistence, Resilience, Problem solving, Adaptability, Collaboration, Documentation, Integrity, Prioritization, Intrinsically motivated
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;