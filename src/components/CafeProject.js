import React from 'react';
import '../styles/cafeProjectStyles/style.css';
import teaCozyLogo from '../images/teaCozyLogo.jpg';

const CafeProject = () => {
    return (
        <React.Fragment>
            <header id="cafe-header" className="header">
                <img className="logo" src={teaCozyLogo} alt=" Tea Cozy Logo" />
                <nav>
                    <ul className="navigation">
                        <li><a href="#mission-target">Mission</a></li>
                        <li><a href="#featured-tea-target">Featured Tea</a></li>
                        <li><a href="#locations-target">Locations</a></li>
                    </ul>
                </nav>
            </header>

            <a href="#mission-target" id="mission-target"></a>
            <section className="mission-container" id="mission-section">
                <div className="mission-statement-container">
                    <h2>Our Mission</h2>
                    <h4>Handpicked, artisanally curated, free range, sustainable, small batch, fair trade, organic tea</h4>
                </div>
            </section>

            <a href="" id="featured-tea-target"></a>
            <section id="featured-container" >
                <div className="featured-statement">
                    <h2>Tea of the Month</h2>
                    <h4>What's Steeping at The Tea Cozy?</h4>
                </div>
                <div className="flexbox-center">
                    <div className="img-container">
                        <figure>
                            <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg" alt="Fall Berry Blitz Tea" />
                            <figcaption>Fall Berry Blitz Tea</figcaption>
                        </figure>
                    </div>
                    <div className="img-container">
                        <figure>
                            <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg" alt="Spiced Rum Tea" />
                            <figcaption>Spiced Rum Tea</figcaption>
                        </figure>
                    </div>
                    <div className="img-container">
                        <figure>
                            <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg" alt="Seasonal Donuts" />
                            <figcaption>Seasonal Donuts</figcaption>
                        </figure>
                    </div>
                    <div className="img-container">
                        <figure>
                            <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-myrtle-ave.jpg" alt="Myrtle Ave Tea" />
                            <figcaption>Myrtle Ave Tea</figcaption>
                        </figure>
                    </div>
                    <div className="img-container">
                        <figure>
                            <img src="https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg" alt="Bedford Bizarre Tea" />
                            <figcaption>Bedford Bizarre Tea</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <a href="" id="locations-target"></a>
            <section className="locations-container">
                <div className="locations-statement">
                    <h2>Locations</h2>
                </div>
                <div className="address-container">
                    <h3>Downtown</h3>
                    <h4>384 West 4th St</h4>
                    <h4>Portland, Maine</h4>
                </div>
                <div className="address-container">
                    <h3>East Bayside</h3>
                    <h4>3433 Phish Ave</h4>
                    <h4>Portland, Maine</h4>
                </div>
                <div className="address-container">
                    <h3>Oakdale</h3>
                    <h4>515 Crescent Ave</h4>
                    <h4>Portland, Maine</h4>
                </div>
            </section>

            <section className="contact-container">
                <h2>The Tea Cozy</h2>
                <h5>contact@theteacozy.com</h5>
                <h4>123-555-5555</h4>
            </section>

            <footer>
                <h5>copyright The Tea Cozy 2017</h5>
            </footer>
        </ React.Fragment>

    )
};

export default CafeProject;