import React from 'react';

import '../styles/about.css';
import Portrait from '../janaes_portrait.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='about-grid-container'>
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
                    <p>Hello, my name is Iyani Walcott I am a student at Rochester Institute of Technology majoring in Software Engineering. 
                        My interest in computer science started in Middle School while learning Scratch. In High School I was able to get hands on 
                        experience on a development team and build a solid foundation in teamwork and software fundementals. Now I am a full stack 
                        developer looking to expand my knowledge into the Cloud and DevOps methodologies.
                    </p>
                </div>
            </div>

        </div>
    )
};

export default About;