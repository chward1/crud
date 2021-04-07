import React from 'react';
import '../styles/cafeProjectStyles/style.css';
import teaCozyLogo from '../images/teaCozyLogo.jpg';

const CafeProject = () => {
    return (
        <React.Fragment>
            <div id='cafe-project'>
                <header className="flex-container" id='cafe-header'>
                    <img src={teaCozyLogo} />
                    <nav id='cafe-nav'>
                        <span><a className="cafe-nav-link" href="#mission">Mission</a></span>
                        <span><a className="cafe-nav-link" href="#store">Featured Tea</a></span>
                        <span><a className="cafe-nav-link" href="#locations">Locations</a></span>
                    </nav>
                </header>

                <div id="main">
                    <div id="mission" className="flex-container">
                        <div className="content">
                            <h2>Our Mission</h2>
                            <h4>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
                        </div>
                    </div>

                    <div id="store">
                        <h2>Tea of the Month</h2>
                        <h4>What's Steeping at The Tea Cozy?</h4>
                        <div className="flex-container">
                            <div className="cafe-item">
                                <img className="cafe-image" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg" />
                                <span>Fall Berry Blitz Tea</span>
                            </div>
                            <div className="cafe-item">
                                <img className="cafe-image" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg" />
                                <span>Spiced Rum Tea</span>
                            </div>
                            <div className="cafe-item">
                                <img className="cafe-image" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg" />
                                <span>Seasonal Donuts</span>
                            </div>
                            <div className="cafe-item">
                                <img className="cafe-image" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-myrtle-ave.jpg" />
                                <span>Myrtle Ave Tea</span>
                            </div>
                            <div className="cafe-item">
                                <img className="cafe-image" src="https://content.codecademy.com/courses/freelance-1/unit-4/img-bedford-bizarre.jpg" />
                                <span>Bedford Bizarre Tea</span>
                            </div>
                        </div>
                    </div>

                    <div id="locations">
                        <h2>Locations</h2>
                        <div className="flex-container locations">
                            <div className="location">
                                <h3>Downtown</h3>
                                <p>384 West 4th St</p>
                                <p>Portland, Maine</p>
                            </div>
                            <div className="location">
                                <h3>East Bayside</h3>
                                <p>3433 Phish Ave</p>
                                <p>Portland, Maine</p>
                            </div>
                            <div className="location">
                                <h3>Oakdale</h3>
                                <p>515 Crescent Ave</p>
                                <p>Portland, Maine</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="contact">
                    <h2>The Tea Cozy</h2>
                    <h5>contact@theteacozy.com</h5>
                    <h5>917-555-8904</h5>
                </div>
                <footer>
                    <h5>copyright The Tea Cozy 2017</h5>
                </footer>
            </div>
        </ React.Fragment >

    )
};

export default CafeProject;