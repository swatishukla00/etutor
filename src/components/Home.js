import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style.css'; // Ensure this path is correct

const Home = () => {
    return (
        <div>
            <header className="header" data-header>
                <div className="container">
                    <button className="logo" aria-label="Go to home">
                        <img src="D:\adhyayan\adhyayan\src\assets\images\logo.png" width="162" height="50" alt="Adhyayan logo" />
                    </button>
                    <nav className="navbar" data-navbar>
                        <div className="wrapper">
                            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                            </button>
                        </div>
                        <ul className="navbar-list">
                            <li className="navbar-item"><button className="navbar-link" aria-label="About">About</button></li>
                            <li className="navbar-item"><button className="navbar-link" aria-label="Learner">Learner</button></li>
                            <li className="navbar-item"><button className="navbar-link" aria-label="Tutor">Tutor</button></li>
                            <li className="navbar-item"><button className="navbar-link" aria-label="Blogs">Blogs</button></li>
                            <li className="navbar-item"><button className="navbar-link" aria-label="Contact">Contact</button></li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <button className="header-action-btn" aria-label="toggle search" title="Search">
                            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                        </button>
                        <Link to="/login" className="btn has-before">
                            <span className="span">Join Now</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </Link>
                        <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
                            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
                        </button>
                    </div>
                    <div className="overlay" data-nav-toggler data-overlay></div>
                </div>
            </header>

            <main>
                <section className="section hero has-bg-image" id="home" aria-label="home" style={{ backgroundImage: "url('./assets/images/hero-bg.svg')" }}>
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="h1 section-title">Gateway to <span className="span">EXPERT</span> Tutoring</h1>
                            <p className="hero-text">We connect you with expert educators, offering personalized and interactive lessons tailored to your needs.</p>
                            <a href="#" className="btn has-before">
                                <span className="span">Find a Tutor</span>
                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Add other sections like category, about, courses, etc. here */}
            </main>

            <footer className="footer" style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}>
                <div className="footer-top section">
                    <div className="container grid-list">
                        <div className="footer-brand">
                            <a href="#" className="logo">
                                <img src="../assets/images/logo.png" width="162" height="50" alt="EduWeb logo" />
                            </a>
                            <p className="footer-brand-text">We understand that every student has different needs...</p>
                        </div>
                        {/* Add footer links and other content here */}
                    </div>
                </div>
            </footer>

            <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
                <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
            </a>

            <script src="./assets/js/script.js" defer></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default Home;
