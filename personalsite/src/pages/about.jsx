import React from 'react';

import '../styles/about.css';

import Portrait from '../images/janaes_portrait.png';
import GitIcon from '../images/github-mark.svg';
import LinkedInIcon from '../images/linkedin-50.png'
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
                    <a  href='https://www.linkedin.com/in/iyani-walcott-311b06227/'><img id='socials' src={LinkedInIcon} alt={"LinkedIn"}></img></a>
                    <a  href='https://github.com/jjm8759'> <img id='socials' src={GitIcon} alt={"Github"}></img></a>
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