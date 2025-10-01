 
 import React from "react";
 import "../App.css";
 
 const Home = () => {
     // If you need route params later, add useParams back and ensure Navbar is inside a Router
     return (
        <main className="landing">
            <section className="intro">
                <h1>Digital Creator and Collaborator</h1>
                <p>
                    I’m Holly, a Web Developer, UX Designer, and Bubble.io Developer. I
                    craft accessible and user-centered digital solutions. I'm an excellent collaborator and great listener. Let's bring your vision to life!
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
         );
        }

        
        export default Home;