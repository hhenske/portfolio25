 
import React from "react";
import "../App.css";
import { Link } from 'react-router-dom';
 
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
                <h4 className="click-below">Click below to see samples of my work</h4>
                <section className="categories">
                    
                    <Link className="category" to="/category/web-developer" id="web-dev-category">
                        <span className="category-label">Web Developer</span>
                    </Link>
                    <Link className="category" to="/category/ux-designer" id="ux-design-category">
                        <span className="category-label">UX Designer</span>
                    </Link>
                    <Link className="category" to="/category/bubble-io-developer" id="bubble-dev-category">
                        <span className="category-label">Bubble.io Developer</span>
                    </Link>
                </section>
            </main>
         );
        }


        export default Home;