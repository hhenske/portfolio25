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
          <h1>Designing & Building Digital Experiences</h1>
          <p>
            I’m Holly, a Web Developer, UX Designer, and Bubble.io Developer. I
            craft accessible and creative digital solutions.
          </p>
        </section>

        <section className="categories">
          <div className="category">Web Developer</div>
          <div className="category">UX Designer</div>
          <div className="category">Bubble.io Developer</div>
        </section>
      </main>
    </div>
  );
}

export default App;
