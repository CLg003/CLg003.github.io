import React from 'react';
import instagramLogo from '../images/logos/instagram/Instagram_Glyph_Gradient_RGB.png';
import linkedInLogo from '../images/logos/linked_in/LI-In-Bug.png';
import gitHubLogo from '../images/logos/github/GitHub-Mark-120px-plus.png';

const About = () => {

    return (
        <div id="about">
            <h2>About</h2>
            <p>I’m a junior software developer, having graduated from CodeClan, Edinburgh in mid-June. I have a tech career background in broadcasting, working for seven years in sound post-production at STV, Glasgow, before taking a career break to be a full-time parent. Seeking a good work-life balance with a young family I then spent several years as a library adviser with Edinburgh City Libraries, but I missed the creative challenges of working in the tech industry so began to explore other avenues. I have always loved working with technology and software so I signed up for an online programming course.</p>
            <p>As a natural problem solver, I quickly discovered that programming is not only something that I enjoy but that I am good at. On the recommendation of a friend (a respected industry CTO, you know who you are!), I applied to CodeClan's immersive Professional Software Development course. As a student at CodeClan, I have been gaining valuable programming knowledge every single day and am excited about being back in the tech industry, developing my skills while pursuing my career as a software developer.</p>
            <p>When I’m not coding you might find me reading, knitting, hiking, playing the piano or playing basketball...</p>
            <div id="social-media">
                <a href="https://github.com/CLg003" target="_blank"><img src={gitHubLogo} alt="GitHub logo"></img></a>
                <a href="https://www.linkedin.com/in/clairemjlaing" target="_blank"><img src={linkedInLogo} alt="LinkedIn logo"></img></a>
            </div>
        </div>
    );

}

export default About;