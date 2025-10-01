import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Holly Henske</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="hamburger">☰</button>
      </header>

      <main className="landing">
        <section className="intro">
          <h1>Digital Creator and Collaborator</h1>
          <p>
            I’m Holly, a Web Developer, UX Designer, and Bubble.io Developer. I
            craft accessible and user-centered digital solutions. Excellent collaborator and great listener. Let's create bring your vision to the screen!
          </p>
        </section>

        <section className="categories">
          <div className="category" id="web-dev-category">
            <span className="category-label">Web Developer</span>
            </div>
          <div className="category" id="ux-design-category">
            <span className="category-label">UX Designer</span>
            </div>
          <div className="category" id="bubble-dev-category">
            <span className="category-label">Bubble.io Developer</span>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
