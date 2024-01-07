import React from 'react';

import '../styles/about.css';
import Portrait from '../janaes_portrait.jpg';

const About = () => {
    return (
        <div>
            <div className='about-container'>
                <div className='container-item'>
                    <img id='portrait' src={Portrait} alt={"Janae"}></img>
                </div>
                <div className='container-item'>
                    <h2>Iyani Walcott</h2>
                    <h3>Software Engineer</h3>
                </div>
                <div className='container-item'>
                    <a href='https://www.linkedin.com/in/iyani-walcott-311b06227/'>LinkedIn</a>
                    <a href='https://github.com/jjm8759'>Github</a>
                </div>

                <div className='container-item' id='description'>
                    <p>Hello, my name is Iyani Walcott. Right now, I am majoring in Software Engineering and will graduate in 2026.</p>
                </div>
            </div>

        </div>
    )
};

export default About;